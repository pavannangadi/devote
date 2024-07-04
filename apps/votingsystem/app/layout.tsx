import type { Metadata } from "next";
import localFont from "next/font/local";
import WalletContext from "./context/Walletcontext";
import { Button, NavBar } from "@repo/ui";
import Link from "next/link";
import WalletButton from "./components/Walletbutton";
import "./globals.css";
import "@repo/ui/indexcss";
import "@solana/wallet-adapter-react-ui/styles.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WalletContext>
          <NavBar>
            <div className="flex gap-2 justify-center items-center">
              <Link href={"/voting"}>
                <Button>Vote A Candidate</Button>
              </Link>
              <Link href={"/getverificationemail"}>
                <Button>Get Verification Email</Button>
              </Link>
              <Link href={"/registrar"}>
                <Button>Registrar</Button>
              </Link>
              <WalletButton />
            </div>
          </NavBar>
          {children}
        </WalletContext>
      </body>
    </html>
  );
}
