"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import SkillChip from "../atoms/SkillChip"
import ProfileImage from "../atoms/ProfileImage"
import { useTheme } from "@mui/material/styles"
import EditProfileButton from "../atoms/EditProfileButton"

const skills = [
  "Communication",
  "Teamwork",
  "Jira",
  "Collaboration",
  "Facilitation",
  "Figma",
  "Management",
  "Canva",
  "Adobe XD",
  "Public Speaking",
]

export default function UserProfile() {
  const theme = useTheme();
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: theme.palette.background.paper, borderRadius: theme.shape.borderRadius, mb: 3 }}>
      {/* User Avatar and Info */}
      <Box sx={{ display: "flex", alignItems: "start", mb: 2, flexDirection: { xs: "column", sm: "column" } }}>
        <ProfileImage src="/profile1.jpg" profileVariant="job_profile_image" />
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography sx={{ ...theme.typography.h6, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
            Steve Smith
          </Typography>
          <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
            Graphic Designer
          </Typography>
        </Box>
      </Box>

      {/* Skills Badges */}
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2, justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        {skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </Box>

      {/* Edit Profile Button */}
    <EditProfileButton/>
    </Box>
  )
}
