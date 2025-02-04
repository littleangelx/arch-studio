import { League_Spartan } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import SideLineAndText from "@/components/SideLineAndText";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arch Studio",
  description: "Architecture and Design Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased relative`}>
        <SideLineAndText />
        <Nav />
        {children}
      </body>
    </html>
  );
}
