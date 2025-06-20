"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"

import { ThemeProvider, CssBaseline, Box, Container } from "@mui/material"
import theme from "@/lib/theme"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import DashboardSidebar from "../organisms/Recruiter/DashboardSidebar"
import { useState } from "react"
import RecruiterHeader from "../organisms/Recruiter/RecruiterHeader"

export default function RecruiterLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6", display: 'flex' }}>
      {/* Sidebar: fixed on desktop, drawer on mobile */}
      <Box
        component="nav"
        sx={{
          width: { md: 240 },
          flexShrink: { md: 0 },
        }}
        aria-label="sidebar navigation"
      >
        {/* Mobile Drawer */}
        <DashboardSidebar open={mobileOpen} onClose={handleDrawerToggle} variant="temporary" />
        {/* Desktop Permanent Drawer */}
        <DashboardSidebar open={true} onClose={() => {}} variant="permanent" />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <RecruiterHeader />
        <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 }, my: 3, mx: 2, flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 0, lg: 2 },
              py: { xs: 1, md: 2 },
            }}
          >
            {children}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
