"use client"
import { Box, Typography, Avatar } from "@mui/material"
import SkillBadge from "../atoms/SkillBadge"

export default function JobCoach() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
      <Typography
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "1.125rem", // 18px
          lineHeight: 1.3, // 130%
          letterSpacing: 0,
          color: "#111928", // Gray/900
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
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem", // 14px
              lineHeight: 1.5, // 150%
              letterSpacing: 0,
              color: "#21272A", // CoolGray/900
            }}
          >
            Anna Brown
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem", // 14px
              lineHeight: 1.5, // 150%
              letterSpacing: 0,
              color: "#697077", // CoolGray/600
            }}
          >
            Job Coach
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <SkillBadge label="HR" />
        <SkillBadge label="IT Recruiter" />
      </Box>
    </Box>
  )
}
