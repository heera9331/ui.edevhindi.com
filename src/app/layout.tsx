import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MobileHeader from "./_components/mobile-header";
import Header from "./_components/header";
import { Toaster } from "@/components/ui";
import { Suspense } from "react";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({
  children,
  metadata,
}: Readonly<{
  children: React.ReactNode;
  metadata: Metadata;
}>) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Code Fragments</title>
        <meta
          name="description"
          content={
            "Code Fragments is a website designed for learners and developers, offering resources and tools to enhance your productivity."
          }
        />
        <meta
          name="keywords"
          content={
            "Code Fragments, react components, html and css components, html and css with tailwind, code examples"
          }
        />
        <meta name="author" content={"Heera Singh Lodhi"} />

        {/* TODO: Open Graph Tags */}

        {/* TODO: Twitter Tags */}
      </head>
      <body className={`${inter.className}`}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Header />
          <div className="flex flex-col">
            <MobileHeader />
            <Suspense fallback={<Loading />}>
              <main className="p-4 lg:gap-2 lg:p-2 min-h-screen ">
                {children}
                <Analytics />
              </main>
            </Suspense>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
