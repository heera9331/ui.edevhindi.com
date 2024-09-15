import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MobileHeader from "./_components/mobile-header";
import Header from "./_components/header";
import { Toaster } from "@/components/ui";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edevhindi",
  description: "A website for learner's",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Header />
          <div className="flex flex-col">
            <MobileHeader />
            <Suspense fallback={<Loading />}>
              <main className="p-4 lg:gap-2 lg:p-2 min-h-screen ">
                {children}
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
