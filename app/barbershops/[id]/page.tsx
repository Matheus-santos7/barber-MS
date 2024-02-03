import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { Key } from "react";

interface BarbershopDetailsPageProps {
    params: any;

}

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsPageProps) => {
    if (!params.id) {
        // TODO: redireciona para home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true
        }
    });

    if (!barbershop) {
        // TODO: redireciona para home page
        return null;
    }

    return (

        <div>
            <BarbershopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
            {barbershop.services.map((service: { id: Key | null | undefined; }) => (
                <ServiceItem key={service.id} service={service}/>
            ))}
            </div>
        </div>

    )
        ;
};
export default BarbershopDetailsPage;