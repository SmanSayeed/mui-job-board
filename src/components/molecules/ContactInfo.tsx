"use client"
import { Box, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import BusinessIcon from "@mui/icons-material/Business"

export default function ContactInfo() {
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
        General Information
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <EmailIcon sx={{ fontSize: 16, color: "#4B5563" }} />
          <Typography
            sx={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem", // 16px
              lineHeight: 1.3, // 130%
              letterSpacing: 0,
              color: "#111928", // Gray/900
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
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem", // 16px
              lineHeight: 1.3, // 130%
              letterSpacing: 0,
              color: "#111928", // Gray/900
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
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem", // 16px
              lineHeight: 1.3, // 130%
              letterSpacing: 0,
              color: "#111928", // Gray/900
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
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1rem", // 16px
              lineHeight: 1.3, // 130%
              letterSpacing: 0,
              color: "#111928", // Gray/900
              verticalAlign: "middle",
            }}
          >
            190003050050
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
