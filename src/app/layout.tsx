import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Azim's Homeo Clinic - Healing Naturally with Homeopathy",
  description: "Professional homeopathic treatment for chronic diseases, allergies, skin problems, and more. Dr. Sk Abdul Azim provides natural healing solutions.",
  keywords: "homeopathy, natural healing, chronic diseases, allergies, skin problems, migraine, Barasat, Dr Azim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
