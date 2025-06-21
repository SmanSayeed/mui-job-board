"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

import { ThemeProvider, CssBaseline, Box, Container, Typography, IconButton } from "@mui/material"
import theme from "@/lib/theme"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import DashboardSidebar from "../organisms/Recruiter/DashboardSidebar"
import { useState } from "react"
import RecruiterHeader from "../organisms/Recruiter/RecruiterHeader"
import OverviewCards from "../molecules/OverviewCards"
import { Menu as MenuIcon } from "@mui/icons-material"
export default function RecruiterDashboardContentLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }


    return (
        <>
            <Box sx={{ display: "flex", minHeight: "100vh", width: "100%" }}>
                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        flex: 1,
                        minHeight: "100vh",
                    }}
                >
                   

                    {/* Content */}
                    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 2, md: 4 } }}>
                        {/* Overview Section */}
                        <Box sx={{ mb: 4, width: '100%' }}>
                            <Typography
                                sx={{
                                    fontSize: "1.5rem",
                                    fontWeight: 600,
                                    color: "#111928",
                                    mb: 3,
                                }}
                            >
                                Overview
                            </Typography>
                            <OverviewCards />
                        </Box>
                        <Box sx={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
                          {children}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
