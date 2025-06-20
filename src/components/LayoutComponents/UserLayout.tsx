"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"

import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material"
import theme from "@/lib/theme"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
        <Header type="user" />
        <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 },my:3,mx:2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 0, lg: 2 },
            py: { xs: 1, md: 2 },
          }}
        >
          <LeftSidebar />
        {children}
        </Box>
        </Container>
        </Box>
  )
}
