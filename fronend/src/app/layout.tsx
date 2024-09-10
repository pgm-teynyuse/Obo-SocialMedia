"use client";

import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthWrapper from "../components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <AuthWrapper>{children}</AuthWrapper>{" "}
        </SessionProvider>
      </body>
    </html>
  );
}
