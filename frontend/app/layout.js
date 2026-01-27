import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";

export const metadata = {
  metadataBase: new URL("https://umojafoundationgroup.org"),
  title: "Volunteer & Impact in Kenya 2026-2027 | Umoja Foundation Group",
  keywords: [
    "Umoja Foundation Group",
    "volunteer in Kenya",
    "Africa volunteer programs",
    "nonprofit organization Kenya",
    "community development Africa",
    "volunteer opportunities Africa",
    "charity work in Kenya",
  ],
  openGraph: {
    description:
      "Join Umoja Foundation Group to make a difference. Explore volunteer programs in Kenya focusing on education, healthcare, and community development.",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} bg-primary`}>
        <AuthProvider>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
