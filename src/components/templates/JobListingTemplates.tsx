"use client"
import { Box, Container } from "@mui/material"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import MainContent from "../organisms/MainContent"
import RightSidebar from "../organisms/RightSidebar"

export default function JobListingTemplate() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
      <Header />
      <Container maxWidth="xl" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 0, lg: 2 },
            py: { xs: 1, md: 2 },
          }}
        >
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </Box>
      </Container>
    </Box>
  )
}
