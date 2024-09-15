import "./globals.css";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-start">
      <div className="flex gap-2">
        <Button variant={"default"} size={"default"}>
          <Link href={"/"}>Frontend</Link>
        </Button>
        <Button variant={"outline"} size={"default"}>
          <Link href={"/admin"}>Backend</Link>
        </Button>
        <Button variant={"outline"} size={"default"}>
          <Link href={"/login"}>Login</Link>
        </Button>
        <Button variant={"outline"} size={"default"}>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
    </div>
  );
}
