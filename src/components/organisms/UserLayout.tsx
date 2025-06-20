"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"

import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "@/lib/theme"

export default function UserLayout({
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
