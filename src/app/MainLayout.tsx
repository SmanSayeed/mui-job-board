"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
  );
}
