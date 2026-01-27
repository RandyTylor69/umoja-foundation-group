"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/OrganizationSchema";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import { useState, useContext, createContext, useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300"],
});

export const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [user, setUser] = useState(false);

  // check if user is logged in
  const isLoggedIn = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        console.log("Not logged in");
      }

      
      setUser(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <html lang="en">
        <head>
          <OrganizationSchema />
        </head>
        <body className={`${montserrat.variable} ${inter.variable} bg-primary`}>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </body>
      </html>
    </AuthContext.Provider>
  );
}
