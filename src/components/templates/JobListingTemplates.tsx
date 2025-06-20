"use client"
import { Box, Container } from "@mui/material"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import MainContent from "../organisms/MainContent"
import RightSidebar from "../organisms/RightSidebar"

export default function JobListingTemplate() {
  return (
  <>
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
          <MainContent />
          <RightSidebar />
        </Box>
      </Container>
  </>
    

  )
}
