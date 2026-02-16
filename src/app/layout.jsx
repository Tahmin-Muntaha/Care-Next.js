import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Popins=Poppins(
  {
    weight:["200","300"]
  }
)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body

        className={`${Popins.className} antialiased p-8`}
      >
        <Navbar></Navbar>
        <main>{children}</main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
