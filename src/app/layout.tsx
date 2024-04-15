import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "./components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nahir | Baúl de recuerdos ❤️",
  description:
    "Esta es una app web creada para mi cuña, que prontito va a cumplir 30.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{ zIndex: -1 }} className="h-full bg-base-200" lang="en">
      <body className={`${inter.className} h-full`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
