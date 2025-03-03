import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });

export const metadata = {
  title: "KZ",
  description: "Kenneth Zimny | Frontend Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.variable} antialiased`}>{children}</body>
    </html>
  );
}
