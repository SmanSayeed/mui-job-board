"use client"
import { Box } from "@mui/material"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import MainContent from "../organisms/MainContent"
import RightSidebar from "../organisms/RightSidebar"

export default function JobListingTemplate() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
      <Header />
      <Box sx={{ display: "flex", maxWidth: "1400px", mx: "auto" }}>
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </Box>
    </Box>
  )
}
