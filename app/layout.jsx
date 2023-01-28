import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Outfit } from "@next/font/google";
import "./globals.css";

const outfitFont = Outfit({ display: "swap", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitFont.className} overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
