import {
  Bell,
  Notebook,
  Package2,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { DashboardIcon, DashIcon } from "@radix-ui/react-icons";

// TODO text-muted-foreground transition-all hover:text-primary bg-muted => add classes on active link

function Header() {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 sticky top-0">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ui.edevhindi.com</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2"
              >
                <DashboardIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/html-and-css"
                className="flex items-center gap-3 rounded-lg px-3 py-2"
              >
                <Video className="h-4 w-4" />
                HTML & CSS
              </Link>
              <Link
                href="/reactjs-components"
                className="flex items-center gap-3 rounded-lg px-3 py-2"
              >
                <Notebook className="h-4 w-4" />
                ReactJS Components
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
