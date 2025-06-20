"use client"
import { Box, Button } from "@mui/material"
import UserProfile from "../molecules/UserProfile"
import ContactInfo from "../molecules/ContactInfo"
import JobCoach from "../molecules/JobCoach"

export default function LeftSidebar() {
  return (
    <Box sx={{ width: 320, p: 2 }}>
      <UserProfile />
      <ContactInfo />
      <JobCoach />

      {/* View Saved Jobs Button */}
      <Button
        fullWidth
        sx={{
          width: "302px",
          height: "51px",
          padding: "14px 24px",
          gap: "8px",
          borderRadius: "8px",
          border: "1px solid #9CA3AF", // Gray/400
          backgroundColor: "transparent",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.125rem", // 18px
          lineHeight: 1.3, // 130%
          letterSpacing: 0,
          color: "#3F83F8", // Should be blue, not gray as per Figma
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#F9FAFB",
            border: "1px solid #6B7280",
          },
        }}
      >
        View Saved Jobs
      </Button>
    </Box>
  )
}
