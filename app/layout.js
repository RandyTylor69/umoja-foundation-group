import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight:['300']
});

export const metadata = {
  title:
    "Volunteer in Kenya with Umoja Foundation Group | Programs, Reviews & Fees",
  description:
    "Transform lives with Umoja! Choose your volunteer program in Kakamega County, Kenya: medical, teaching, or humanitarian assistance. Fees and reviews are included",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} bg-primary`}
      >
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
