"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import UserProfile from "../molecules/UserProfile"
import SkillBadge from "../atoms/SkillBadge"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import BusinessIcon from "@mui/icons-material/Business"
import { useTheme } from "@mui/material/styles"
import JobCoach from "../molecules/JobCoach"

export default function LeftSidebar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        
        width: { xs: "100%", lg: 320 },
        p: { xs: 0, md: 0 },
        display: { xs: "none", lg: "block" },
      }}
    >
      <UserProfile />

      {/* Contact Info */}
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: theme.palette.background.paper, borderRadius: theme.shape.borderRadius, mb: 3 }}>
        <Typography sx={{ ...theme.typography.h3, color: theme.palette.text.secondary, mb: 2 }}>
          General Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
            <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
              stevesmith@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
            <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
              +46780000000
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
            <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
              Stockholm, Sweden
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BusinessIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
            <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
              190003050050
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Job Coach */}
      <JobCoach />

      {/* View Saved Jobs Button */}
      <Button
        variant="outlined"
        size="large"
        fullWidth
        sx={(theme) => ({
          ...theme.typography.h5,
          fontWeight: 500,
          fontSize: "1.125rem",
          lineHeight: 1.3,
          color: theme.palette.primary[500],
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.grey[400]}`,
          borderRadius: "8px",
          height: "51px",
          padding: "14px 24px",
          width:"100%",
          '&:hover': {
            backgroundColor: theme.palette.grey[50],
            border: `1px solid ${theme.palette.grey[500]}`,
          },
        })}
      >
        View Saved Jobs
      </Button>
    </Box>
  )
}
