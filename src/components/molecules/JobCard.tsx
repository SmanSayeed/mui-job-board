"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import JobTypeBadge from "../atoms/JobTypeBadge"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import ProfileImage from "../atoms/ProfileImage"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import { useTheme } from "@mui/material/styles"

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
  const theme = useTheme();
  return (
    <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: theme.palette.background.paper, borderRadius: theme.shape.borderRadius, mb: 3 }}>
      {/* Match Percentage */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Avatar src="/icons/star.svg" sx={{ height: 16, width: 16, mr: 0.5 }} />
          <Typography component="span" sx={{ ...theme.typography.body2, color: theme.palette.primary[500], display: "inline-flex", alignItems: "center" }}>
            {matchPercentage}% match
          </Typography>
        </Box>
      </Box>

      {/* Job Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center",gap:{xs:2} }}>
         
        <ProfileImage src="/profile2.jpg" profileVariant="user_profile_image" />
        
          <Box>
            <Typography
              sx={{
                ...theme.typography.h5,
                color: theme.palette.text.primary,
                verticalAlign: "middle",
              }}
            >
              {position}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, flexWrap: "wrap" }}>
              <Typography
                sx={{
                  ...theme.typography.body2,
                  color: theme.palette.text.secondary,
                  verticalAlign: "middle",
                }}
              >
                {company},
              </Typography>
              <Typography
                sx={{
                  ...theme.typography.caption,
                  color: theme.palette.text.primary,
                  verticalAlign: "middle",
                }}
              >
                {location}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {jobTypes.map((type) => (
            <JobTypeBadge key={type} label={type} />
          ))}
        </Box>
      </Box>

      {/* Job Details */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          gap: 2,
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <CalendarMonthOutlinedIcon sx={{ fontSize: 14, color: theme.palette.text.primary }} />
          <Typography
            sx={{
              ...theme.typography.body2,
              color: theme.palette.text.primary,
            }}
          >
            {date}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, background: theme.palette.action.selected, padding: "4px", borderRadius: "10px" }}>
          <WalletIcon sx={{ fontSize: 14, color: theme.palette.text.primary }} />
          <Typography
            sx={{
              ...theme.typography.body2,
              color: theme.palette.text.primary,
            }}
          >
            {salary}
          </Typography>
        </Box>
      </Box>

      {/* Tags */}
      <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <JobTypeBadge key={tag} label={tag} />
        ))}
      </Box>

      {/* Job Overview */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            ...theme.typography.subtitle2,
            color: theme.palette.text.primary,
            mb: 1,
          }}
        >
          Job Overview
        </Typography>
        <Typography
          sx={{
            ...theme.typography.overline,
            color: theme.palette.text.primary,
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "84px" },
            height: "40px",
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
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: { xs: "100%", sm: "132px" },
            height: "40px",
            padding: "8px 12px",
            gap: "8px",
            borderRadius: "8px",
            backgroundColor: "#1A56DB",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            color: "#FFFFFF",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#1E40AF",
              boxShadow: "none",
            },
          }}
        >
          Quick Apply
        </Button>
      </Box>
    </Box>
  )
}
