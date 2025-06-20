"use client"
import { Box, Container, Typography, IconButton } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { useState } from "react"
import DashboardSidebar from "./DashboardSidebar"
import OverviewCards from "../../molecules/OverviewCards"
import JobListingsTable from "./JobListingTable"

export default function DashboardTemplate() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
     <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F9FAFB" }}>
   

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: "calc(100% - 240px)" },
          minHeight: "100vh",
        }}
      >
        {/* Mobile Header */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            p: 2,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Dashboard
          </Typography>
        </Box>

        {/* Content */}
        <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, md: 4 } }}>
          {/* Overview Section */}
          <Box sx={{ mb: 4 }}>
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

          {/* Job Listings Section */}
          <JobListingsTable />
        </Container>
      </Box>
    </Box>
    </>
   
  )
}
