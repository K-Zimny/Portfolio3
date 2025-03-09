import { Karla } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata = {
  title: "KZ",
  description: "Kenneth Zimny | Frontend Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>
        <header>KZ</header>
        <div className="site-container">
          <Nav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
