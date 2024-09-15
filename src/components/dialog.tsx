"use client";
import { XIcon } from "lucide-react";
import { useState } from "react";
import React from "react";

function Dialog({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="border px-2 py-1" onClick={() => setIsOpen(!isOpen)}>
        Open
      </button>
      <dialog
        className="z-100 shadow-lg rounded-md transition-all delay-100 pt-2 w-[95vw] h-[95vh] m-6 fixed top-0 left-0 right-10"
        open={isOpen}
      >
        <div className="relative flex border-b shadow-sm px-4 pb-2">
          <h2 className="text-xl">{title}</h2>
          <XIcon
            className="absolute right-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="p-4">this is content of dialog</div>
      </dialog>
    </>
  );
}

export default Dialog;
