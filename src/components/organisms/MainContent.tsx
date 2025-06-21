"use client"
import { Box, Typography } from "@mui/material"
import JobCard from "../molecules/JobCard"
import { useTheme } from "@mui/material/styles"

const jobsData = [
  {
    position: "Graphic Designer",
    company: "KNEG AB",
    location: "Sweden",
    date: "March 22, 2025",
    salary: "100,000 EUR/yr",
    jobTypes: ["FULL TIME", "HYBRID"],
    tags: ["IT", "Social", "Recruiting", "HR"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    position: "Graphic Designer",
    company: "KNEG AB",
    location: "Sweden",
    date: "March 22, 2025",
    salary: "100,000 EUR/yr",
    jobTypes: ["FULL TIME", "HYBRID"],
    tags: ["IT", "Social", "Recruiting", "HR"],
    matchPercentage: 95,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    position: "Graphic Designer",
    company: "KNEG AB",
    location: "Sweden",
    date: "March 22, 2025",
    salary: "100,000 EUR/yr",
    jobTypes: ["FULL TIME", "HYBRID"],
    tags: ["IT", "Social", "Recruiting", "HR"],
    matchPercentage: 95,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

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
