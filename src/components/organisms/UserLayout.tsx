"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import theme from "@/lib/theme";
import Header from "../molecules/Header";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Header/>
        {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
  );
}
