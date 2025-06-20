// src/app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import theme from "@/lib/theme";
import UserLayout from "../../components/LayoutComponents/UserLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "JOB Platform",
  description: "Demo project for job platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserLayout>
        {children}
      </UserLayout>
    </>


  );
}
