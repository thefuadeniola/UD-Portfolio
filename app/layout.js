import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const josefin_sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "UD The Creator",
  description: "Moving Pixels, Changinge Lives",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        {children}
      </body>
    </html>
  );
}
