
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useState } from "react";

const SIDEBAR_MENU = [
    {
        title: "Pokemons",
        description: "Listagem de todos os pokemons"
    },
    {
        title: "Itens",
        description: "Listagem de todos os itens"
    }
]

export function Sidebar() {
    // States
    const [showSidebar, setShowSidebar] = useState(false);

    return <div
        onClick={() => setShowSidebar(curr => !curr)}
        className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 cursor-pointer"
    >
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Sheet open={showSidebar}>
            {/* <SheetTrigger>Open</SheetTrigger */}
            <SheetContent side={"left"} className="lg:w-[400px] w-screen">
                <SheetHeader>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                        {
                            SIDEBAR_MENU.map((item, index) => {

                                // TODO: Change de key for a uuic or cuid
                                return <div className="cursor-pointer group hover:bg-slate-50 transition-all" key={index}>
                                    <p className="text-lg text-slate-600">{item.title}</p>
                                    <p className="text-md text-slate-500">{item.description}</p>
                                </div>
                            })
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </div>
}