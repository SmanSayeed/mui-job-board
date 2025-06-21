// src/app/layout.tsx
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import theme from "@/lib/theme";
import { Inter } from "next/font/google";
import RecruiterDashboardContentLayout from "@/components/LayoutComponents/RecruiterDashboardContentLayout";
import ErrorBoundary from "@/components/atoms/ErrorBoundary";

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
      <ErrorBoundary>
        <RecruiterDashboardContentLayout>
          {children}
        </RecruiterDashboardContentLayout>
      </ErrorBoundary>
    </>
  );
}
