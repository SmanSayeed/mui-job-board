"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

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
  const { getUser } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const user = getUser()
    if (!user || user.role !== 'recruiter') {
      router.replace('/login')
    }
  }, [getUser, router])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6", display: 'flex', flexDirection: 'column' }}>
      {/* Header always at the top, full width */}
      <RecruiterHeader onSidebarOpen={handleDrawerToggle} />
      {/* Main content row: sidebar + main */}
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0 }}>
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
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 0, sm: 2, md: 3, lg: 4 },
              mx: { xs: 0, sm: 'auto' },
              my: { xs: 2, md: 3 },
              flex: 1,
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                gap: { xs: 2, md: 3, lg: 4 },
                py: { xs: 1, md: 2 },
                width: '100%',
                minWidth: 0,
                '& > *': {
                  width: { xs: '100%', sm: '100%', md: '100%' },
                  maxWidth: { xs: '100%', sm: '100%', md: '100%' },
                  minWidth: 0,
                },
              }}
            >
              {children}
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}
