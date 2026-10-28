import "./globals.css";
import { Lora, Public_Sans, Playfair_Display, Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../content/site";

const lora = Lora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-lora" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });

// Icon CSS is imported above; stop Font Awesome injecting it again at runtime.
config.autoAddCss = false;

export const metadata = {
  title: "Silverwood HOA — Bixby, OK",
  description: site.tagline,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${publicSans.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
