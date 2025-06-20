"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"

import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material"
import theme from "@/lib/theme"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
