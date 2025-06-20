"use client"
import { Box, Typography } from "@mui/material"
import JobCard from "../molecules/JobCard"

const jobsData = [
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
  return (
    <Box sx={{ flex: 1, p: 3 }}>
      {/* Page Title */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "1.625rem", // 26px
          lineHeight: 1.3, // 130%
          letterSpacing: 0,
          color: "#4B5563", // Gray/600
          verticalAlign: "middle",
          mb: 1,
        }}
      >
        Trending Job Postings
      </Typography>

      {/* Page Subtitle */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 400,
          fontSize: "1rem", // 16px
          lineHeight: 1.3, // 130%
          letterSpacing: 0,
          color: "#4B5563", // Gray/600
          verticalAlign: "middle",
          mb: 3,
        }}
      >
        Check out recent and trending jobs
      </Typography>

      {/* Job Cards */}
      {jobsData.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </Box>
  )
}
