import { Booking, Prisma } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns/format";
import { isPast } from "date-fns";
import { isFuture } from "date-fns/isFuture";

interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true,
            barbershop: true,
        };
    }>;
}

const BookingItem = ({booking}: BookingItemProps) => {
    const isBookingConfirmed = isFuture(booking?.date);
    return (
        <Card>
            <CardContent className="py-0 flex px-0"> 
                <div className="flex flex-col gap-2 py-5 flex-[3] pl-3">
                    <Badge variant={isBookingConfirmed ? "default" : "secondary"} className="w-fit" >{isPast(booking?.date) ? "finalizado" : "Confirmado"
                    }</Badge>
                    {booking?.service && <h2 className="font-bold">{booking.service.name}</h2>}

                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                        {booking?.service && <AvatarImage src={booking.barbershop.imageUrl}/>}
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        {booking?.service &&  <h3 className="text-sm">{booking.barbershop.name}</h3>}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center flex-5 border-l border-solid border-secondary p-4">
                {booking?.service && <p className="text-sm">{format(booking.date , "MMMM", {
                        locale: ptBR,
                    })}
                    </p>}
                    {booking?.service &&  <p className="text-2xl">{format(booking.date, "dd", )}</p>}
                    {booking?.service &&  <p className="text-sm">{format(booking.date, "hh:mm", )}</p>}
                </div>

            </CardContent>
        </Card>
      );
}
 
export default BookingItem;