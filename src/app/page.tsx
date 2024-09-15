import React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui"; // Adjusted import if necessary
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import FormCode from "./_components/form-code";
import { Toaster } from "react-hot-toast";
import TableCode from "./_components/home-table-code";

function HomePage() {
  return (
    <div className="page grid grid-cols-12 px-2">
      <div className="md:col-span-12 lg:col-span-8 pr-2">
      <Toaster position="top-center" />
        <section className="min-h-[90vh] flex flex-col justify-center items-center border-b">
          <h1 className="mb-2">Most usable UI components for website/app</h1>
          <Button>
            <Link href={"#section-2"}>Explore</Link>
          </Button>
        </section>
        <section id="section-2" className="min-h-screen border-b">
          <h2 className="text-3xl pt-2">Forms</h2>

          <div className="py-2">
            <p className="text-gray-500 my-2">
              Forms are used in many places in our website/app, that are used
              for many purposes, for example, Registration Form, Survey Form,
              Login form, Register form, Job Application, Tickets, Reservation,
              etc.
            </p>
          </div>
          <FormCode />
        </section>
        <section id="tables" className="min-h-screen border-b">
          <h2 className="text-3xl pt-2">Tables</h2>
          <div className="py-2">
            <p className="text-gray-500 my-2">
              Tables are used to display list of group of information and when
              we need to display wide information on page.
            </p>
          </div>
          <TableCode />
        </section>
        <section className="min-h-screen flex justify-center items-center border-b">
          <h1>Home Page</h1>
        </section>
      </div>

      <div className="md:col-span-12 lg:col-span-4 border-l pl-2">
        <h2 className="font-semibold">New Updates</h2>
      </div>
    </div>
  );
}

export default HomePage;
