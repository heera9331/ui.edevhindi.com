import {
  Bell,
  Blocks,
  Code,
  Home,
  HomeIcon,
  LayoutTemplate,
  Notebook,
  Package2,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { DashboardIcon, DashIcon } from "@radix-ui/react-icons";
import Image from "next/image";

// TODO text-muted-foreground transition-all hover:text-primary bg-muted => add classes on active link

function Header() {
  return (
    <>
      <div className="hidden border-r bg-muted/5 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 sticky top-0">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image
                src={"/assets/images/logo.png"}
                width={100}
                height={100}
                className="h-10 w-10"
                alt="code fragments"
              />
              <span className="">Code Fragments</span>
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/5"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/html-and-css"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/5"
              >
                <Code className="h-4 w-4" />
                HTML & CSS
              </Link>
              <Link
                href="/reactjs-components"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/5"
              >
                <Notebook className="h-4 w-4" />
                ReactJS Components
              </Link>

              <Link
                href="/templates"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/5"
              >
                <LayoutTemplate className="h-4 w-4" />
                Templates
              </Link>

              <Link
                href="/blocks"
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-muted/5"
              >
                <Blocks className="h-4 w-4" />
                Blocks
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
