'use client'

import Image from 'next/image';
import { Card, CardContent } from "./ui/card";
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../_components/ui/sheet';
import SideMenu from './side-menu';
import { MenuIcon } from 'lucide-react';



const Header = () => {


    return (
        <Card>
            <CardContent className="px-5 py-8 justify-between items-center flex flex-row">
                <Image src="/logo.png" alt="Barber" height={18} width={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size={"icon"}>
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className='p-0'>
                        <SideMenu/>
                    </SheetContent>
                </Sheet>
            </CardContent>

        </Card>

    );
}

export default Header;