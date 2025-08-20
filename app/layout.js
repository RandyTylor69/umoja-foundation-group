import Navbar from "@/components/Navbar";
import "./globals.css";

import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} bg-orange-50`}
      >
        <Navbar />
        <div className="px-6 sm:px-12">{children}</div>
      </body>
    </html>
  );
}
