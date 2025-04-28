import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./global.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s - Blog",
  },
  description: "Come and read my awesome articles!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-dvh relative`}>
        <Header />
        <main className="p-5 flex flex-auto overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
