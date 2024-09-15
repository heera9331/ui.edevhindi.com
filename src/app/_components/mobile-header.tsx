import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  Menu,
  Package2,
  Home,
  ShoppingCart,
  Badge,
  Package,
  Users,
  LineChart,
  Search,
} from "lucide-react";

function MobileHeader() {
  return (
    <>
      <header
        className="flex h-14 items-center gap-4 border-b bg-muted/5 px-4 lg:h-[60px] lg:px-6"
        style={{
          position: "sticky",
          top: "0",
          backdropFilter: "blur(2px)",
        }}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Edevhindi</span>
              </Link>
              <Link
                href="/"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="/html-and-css"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                HTML & CSS
              </Link>
              <Link
                href="/reactjs-components"
                className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                ReactJS Components
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}

export default MobileHeader;
