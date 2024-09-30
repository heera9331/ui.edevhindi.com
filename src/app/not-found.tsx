import "./globals.css";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen min-w-screen">
      <div className="flex flex-col gap-4 items-center mx-auto w-[50%] m-6 p-4">
        <Image
          src={"/assets/images/404.svg"}
          className=""
          width={250}
          height={250}
          alt="404 Error - not found"
        />
        <p className="pt-8 pb-2">Something is not found?</p>
        <Button variant={"outline"} size={"default"}>
          <Link href={"/"}>Go to home</Link>
        </Button>
      </div>
    </div>
  );
}
