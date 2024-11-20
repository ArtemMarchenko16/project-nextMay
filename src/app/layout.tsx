import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/components/Header";



export const metadata: Metadata = {
  title: "Movies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
      {children}
      </body>
    </html>
  );
}
