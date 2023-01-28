import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Saved from "../components/Saved";
import Bookmark from "../components/Bookmark";
import { Outfit } from "@next/font/google";
import "./globals.css";

const outfitFont = Outfit({ display: "swap", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfitFont.className}`}>
        <Nav />
        {children}
        <Bookmark />
        <Footer />
      </body>
    </html>
  );
}
