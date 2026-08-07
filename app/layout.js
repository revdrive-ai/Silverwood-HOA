import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../content/site";

export const metadata = {
  title: "Silverwood HOA — Bixby, OK",
  description: site.tagline,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif bg-white text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
