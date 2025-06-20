"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import SkillBadge from "../atoms/SkillBadge"
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
    <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
      {/* User Avatar and Info */}
      <Box sx={{ display: "flex", alignItems: "start", mb: 2, flexDirection: { xs: "column", sm: "column" } }}>
      <ProfileImage src="/profile1.jpg" profileVariant="job_profile_image" />
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.25rem", md: "1.625rem" },
              lineHeight: 1.3,
              letterSpacing: 0,
              color: "#111928",
              verticalAlign: "middle",
            }}
          >
            Steve Smith
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: 1.3,
              letterSpacing: 0,
              color: "#111928",
              verticalAlign: "middle",
            }}
          >
            Graphic Designer
          </Typography>
        </Box>
      </Box>

      {/* Skills Badges */}
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2, justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </Box>

      {/* Edit Profile Button */}
      <Button
        startIcon={<EditIcon sx={{ color: "#3F83F8" }} />}
        sx={{
          width: { xs: "100%", sm: "157px" },
          height: "37px",
          padding: "8px 12px",
          gap: "8px",
          borderRadius: "8px",
          backgroundColor: "#F3F4F6",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          color: "#3F83F8",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#E5E7EB",
          },
        }}
      >
        Edit Profile
      </Button>
    </Box>
  )
}
