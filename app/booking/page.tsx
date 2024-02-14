import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { Card, CardContent } from "../_components/ui/card";
import { db } from "../_lib/prisma";
import BookingItem from "../_components/booking-item";
import { Key } from "react";
import { isFuture, isPast } from "date-fns";

const BookingPage = async () => {
    //Recuperar a session do usuario e verificar se esta logado ou nao.
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return redirect("/");
    }

    const [confirmedBookings, finishedBookings] = await Promise.all([
        db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              gte: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
        }),
        db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              lt: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
        }),
      ]);

    //filtra utiilizando javascript (Optinei em fazer via banco)

    //const confirmedBookings = bookings.filter((booking: { date: any; }) => isFuture(booking.date))
    //const finishedBookings = bookings.filter((booking: { date: any; }) => isPast(booking.date))
    
    return (
        <>
            <Header />

            <div className="px-5 py-6">
                <h1 className="text-xl font-bold">Agendamentos</h1>

                <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3" >Confirmados</h2>

                <div className="flex flex-col gap-3">
                    {confirmedBookings.map((booking: { id: Key | null | undefined; }) => (
                        <BookingItem key={booking.id} booking={booking} />
                    ))}
                </div>

                <h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3" >Finalizados</h2>

                <div className="flex flex-col gap-3">
                    {finishedBookings.map((booking: { id: Key | null | undefined; }) => (
                        <BookingItem key={booking.id} booking={booking} />
                    ))}
                </div>

            </div>
        </>
    );
}

export default BookingPage;