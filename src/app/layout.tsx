import type { Metadata } from "next";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import { Inter } from 'next/font/google';
import 'app/sass/globals.scss';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Future Tech",
  description: "Store of Tec",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  ...rest
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(rest)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <Link href="/" >
            Home
          </Link>
          <Link href="/store">
            Store
          </Link>
        </Header>
        {children}
        <Footer>Footer</Footer>
      </body>
    </html>
  );
}
