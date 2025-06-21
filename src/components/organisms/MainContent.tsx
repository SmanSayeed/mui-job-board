"use client"
import { Box, Typography } from "@mui/material"
import JobCard from "../molecules/JobCard"
import { useTheme } from "@mui/material/styles"

import jobsData from "@/lib/jobsData"

export default function MainContent() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flex: 1,
        p: { xs: 1, md: 3 },
        maxWidth: { xs: "100%", lg: "calc(100% - 640px)" },
      }}
    >
      {/* Page Title */}
      <Typography sx={{ ...theme.typography.h2, color: theme.palette.text.primary, mb: 1 }}>
        Trending Job Postings
      </Typography>
      {/* Page Subtitle */}
      <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.primary, mb: 3 }}>
        Check out recent and trending jobs
      </Typography>
      {/* Job Cards */}
      {jobsData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </Box>
  )
}
