import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/site/header";
import { Poppins, Josefin_Sans, MuseoModerno } from "next/font/google";
import Footer from "@/components/site/footer";

// Değişken adları projedeki mevcut kullanıma UYUMLU:
// --font-sans (Poppins), --font-alt (Josefin), --font-display (Museo)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-alt",
  display: "swap",
});
const museo = MuseoModerno({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Threx",
  description: "Vulnerabilities Database",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${poppins.variable} ${josefin.variable} ${museo.variable}`} 
      suppressHydrationWarning
    >
        <body className="bg-primary-900 text-fg min-h-dvh flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
