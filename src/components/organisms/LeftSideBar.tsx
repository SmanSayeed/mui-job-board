"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import UserProfile from "../molecules/UserProfile"
import SkillBadge from "../atoms/SkillBadge"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import BusinessIcon from "@mui/icons-material/Business"

export default function LeftSidebar() {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: 320 },
        p: { xs: 1, md: 2 },
        display: { xs: "none", lg: "block" },
      }}
    >
      <UserProfile />

      {/* Contact Info */}
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.3,
            letterSpacing: 0,
            color: "#111928",
            verticalAlign: "middle",
            mb: 2,
          }}
        >
          General Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ fontSize: 16, color: "#4B5563" }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.3,
                letterSpacing: 0,
                color: "#111928",
                verticalAlign: "middle",
              }}
            >
              stevesmith@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 16, color: "#4B5563" }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.3,
                letterSpacing: 0,
                color: "#111928",
                verticalAlign: "middle",
              }}
            >
              +46780000000
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon sx={{ fontSize: 16, color: "#4B5563" }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.3,
                letterSpacing: 0,
                color: "#111928",
                verticalAlign: "middle",
              }}
            >
              Stockholm, Sweden
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BusinessIcon sx={{ fontSize: 16, color: "#4B5563" }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.3,
                letterSpacing: 0,
                color: "#111928",
                verticalAlign: "middle",
              }}
            >
              190003050050
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Job Coach */}
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: 1.3,
            letterSpacing: 0,
            color: "#111928",
            verticalAlign: "middle",
            mb: 2,
          }}
        >
          My Job Coach
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src="/placeholder.svg?height=40&width=40" sx={{ width: 40, height: 40, mr: 2 }} />
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                lineHeight: 1.5,
                letterSpacing: 0,
                color: "#21272A",
              }}
            >
              Anna Brown
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: 1.5,
                letterSpacing: 0,
                color: "#697077",
              }}
            >
              Job Coach
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <SkillBadge label="HR" />
          <SkillBadge label="IT Recruiter" />
        </Box>
      </Box>

      {/* View Saved Jobs Button */}
      <Button
        fullWidth
        sx={{
          width: "100%",
          height: "51px",
          padding: "14px 24px",
          gap: "8px",
          borderRadius: "8px",
          border: "1px solid #9CA3AF",
          backgroundColor: "transparent",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1.125rem",
          lineHeight: 1.3,
          letterSpacing: 0,
          color: "#3F83F8",
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
