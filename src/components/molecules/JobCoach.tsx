"use client"
import { Box, Typography, Avatar } from "@mui/material"
import SkillChip from "../atoms/SkillChip"
import ProfileImage from "../atoms/ProfileImage"
import { useTheme } from "@mui/material/styles"

export default function JobCoach() {
  const theme = useTheme();
  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.background.paper, borderRadius: "8px", mb: 3 }}>
      <Typography
        sx={{
          ...theme.typography.h3,
          color: theme.palette.text.secondary,
          verticalAlign: "middle",
          mb: 2,
        }}
      >
        My Job Coach
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap:2 }}>
        <ProfileImage src="/profile2.jpg" profileVariant="user_profile_image" />
        <Box sx={{ display: "flex",flexDirection:"column", justifyItems:"start", alignItems: "start" }}>
          <Typography
            sx={{
              ...theme.typography.subtitle1,
              color: theme.palette.neutral.coolGray900,
              fontWeight: 600,
            }}
          >
            Anna Brown
          </Typography>
          <Typography
            sx={{
              ...theme.typography.subtitle1,
              color: theme.palette.neutral.coolGray600,
              fontWeight: 400,
            }}
          >
            Job Coach
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <SkillChip label="HR" />
        <SkillChip label="IT Recruiter" />
      </Box>
    </Box>
  )
}
