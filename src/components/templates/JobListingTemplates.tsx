"use client"
import { Box, Container, useTheme, useMediaQuery } from "@mui/material"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import MainContent from "../organisms/MainContent"
import RightSidebar from "../organisms/RightSidebar"

export default function JobListingTemplate() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, width: '100%' }}>
      {/* LeftSidebar can be added here if needed for desktop */}
      {/* RightSidebar: top on mobile/tablet, right on desktop */}
      <Box sx={{ order: { xs: 0, lg: 2 }, width: { xs: '100%', lg: 320 }, flexShrink: 0 }}>
        <RightSidebar />
      </Box>
      {/* MainContent: below RightSidebar on mobile, left of RightSidebar on desktop */}
      <Box sx={{ order: { xs: 1, lg: 1 }, flex: 1, minWidth: 0 }}>
        <MainContent />
      </Box>
    </Box>
  )
}
