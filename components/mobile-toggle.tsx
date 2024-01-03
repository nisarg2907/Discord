import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

const SideBarRenderer = ({children}:{children:React.ReactNode})=>{
 return <div>{children}</div>
}

export const MobileToggle = ({
  serverId
}: {
  serverId: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-[72px]">
             {/* @ts-expect-error Async Server Component*/}
          <NavigationSidebar />
        </div>
       
        {/* <ServerSidebar serverId={serverId} /> */}
      </SheetContent>
    </Sheet>
  )
}