"use client"
import { Box, Typography, Avatar } from "@mui/material"
import SkillBadge from "../atoms/SkillBadge"
import EditProfileButton from "../atoms/EditProfileButton"
import ProfileImage from "../atoms/ProfileImage"

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
  return (
    <Box sx={{ p: 3, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
      {/* User Avatar and Info */}
      <Box sx={{ display: "flex", alignItems: "start", flexDirection:"column", mb: 2 }}>
      <ProfileImage src="/profile1.jpg" profileVariant="job_profile_image" />
        <Box>
          <Typography
            sx={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 600,
              fontSize: "1.625rem", // 26px
              lineHeight: 1.3, // 130%
              letterSpacing: 0,
              color: "#111928", // Gray/900
              verticalAlign: "middle",
            }}
          >
            Steve Smith
          </Typography>
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
            Graphic Designer
          </Typography>
        </Box>
      </Box>

      {/* Skills Badges */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2}}>
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </Box>

      {/* Edit Profile Button */}
      <EditProfileButton />
    </Box>
  )
}
