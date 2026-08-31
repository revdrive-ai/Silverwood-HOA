import "./globals.css";
import { Lora, Public_Sans } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../content/site";

const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-lora" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });

export const metadata = {
  title: "Silverwood HOA — Bixby, OK",
  description: site.tagline,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${publicSans.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
