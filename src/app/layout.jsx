import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const Popins=Poppins(
  {
    weight:["200","300"]
  }
)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Popins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
