import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Sidebar from "@/components/ui/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Razzaq",
  description: "Portfolio Website Of Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* <NavBar></NavBar>
        <div className="">


          <div className="px-2 mt-2 md:px-10 sm:mt-4 md:mt-2 lg:mt-1">
            {children}
          </div>
        </div> */}
        {/* <NavBar></NavBar> */}
        <Sidebar></Sidebar>
        <div id="main" className="w-full h-screen fixed hidden z-30 overflow-hidden"></div>
        <div className="w-full">
          <div className={`px-6 mt-10 ml-16`}>
            {children}
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
