"use client"
import { Box, Typography, Avatar } from "@mui/material"
import JobTypeBadge from "../atoms/JobTypeBadge"
import SaveButton from "../atoms/SaveButton"
import QuickApplyButton from "../atoms/QuickApplyButton"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import ProfileImage from "../atoms/ProfileImage"

interface JobCardProps {
  position: string
  company: string
  location: string
  date: string
  salary: string
  jobTypes: string[]
  tags: string[]
  matchPercentage: number
  description: string
}

export default function JobCard({
  position,
  company,
  location,
  date,
  salary,
  jobTypes,
  tags,
  matchPercentage,
  description,
}: JobCardProps) {
  return (
    <Box sx={{ p: 3, backgroundColor: "#FFFFFF", borderRadius: "8px", mb: 3 }}>
      {/* Match Percentage */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "#3F83F8",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          🔥 {matchPercentage}% match
        </Typography>
      </Box>

      {/* Job Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <ProfileImage src="/profile2.jpg" profileVariant="user_profile_image" />
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 500,
                fontSize: "1.125rem", // 18px
                lineHeight: 1.3, // 130%
                letterSpacing: 0,
                color: "#000000",
                verticalAlign: "middle",
              }}
            >
              {position}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem", // 14px
                  lineHeight: 1.5, // 150%
                  letterSpacing: 0,
                  color: "#111928", // Gray/900
                  verticalAlign: "middle",
                }}
              >
                {company},
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.75rem", // 12px
                  lineHeight: 1.5, // 150%
                  letterSpacing: 0,
                  color: "#4B5563", // Gray/600
                  verticalAlign: "middle",
                }}
              >
                {location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          {jobTypes.map((type) => (
            <JobTypeBadge key={type} label={type} />
          ))}
        </Box>
      </Box>

      {/* Job Details */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CalendarTodayIcon sx={{ fontSize: 14, color: "#4B5563" }} />
          <Typography
            sx={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem", // 14px
              lineHeight: 1.5, // 150%
              letterSpacing: 0,
              color: "#4B5563", // Gray/600
            }}
          >
            {date}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <AttachMoneyIcon sx={{ fontSize: 14, color: "#4B5563" }} />
          <Typography
            sx={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "0.875rem", // 14px
              lineHeight: 1.5, // 150%
              letterSpacing: 0,
              color: "#4B5563", // Gray/600
            }}
          >
            {salary}
          </Typography>
        </Box>
      </Box>

      {/* Tags */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {tags.map((tag) => (
          <JobTypeBadge key={tag} label={tag} />
        ))}
      </Box>

      {/* Job Overview */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem", // 14px
            lineHeight: 1.5, // 150%
            letterSpacing: 0,
            color: "#4B5563", // Gray/600
            mb: 1,
          }}
        >
          Job Overview
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: "0.75rem", // 12px
            lineHeight: 1.4, // 140%
            letterSpacing: 0,
            color: "#4B5563", // Gray/600
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <SaveButton />
        <QuickApplyButton />
      </Box>
    </Box>
  )
}
