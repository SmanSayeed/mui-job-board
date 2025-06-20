"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"

import { ThemeProvider, CssBaseline, Box } from "@mui/material"
import theme from "@/lib/theme"
import Header from "./Header"

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
        <Header />
        {children}
        </Box>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
