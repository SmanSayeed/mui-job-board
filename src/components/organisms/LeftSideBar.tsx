"use client"
import { Box, Button } from "@mui/material"
import UserProfile from "../molecules/UserProfile"
import GeneralInfoCard from "../molecules/GeneralInfoCard"
import JobCoach from "../molecules/JobCoach"

export default function LeftSidebar() {
  return (
    <Box
      sx={{
        width: { xs: 260, sm: 280, lg: 320 },
        p: { xs: 2, md: 3, lg: 0 },
        backgroundColor: "none",
        borderRadius: { xs: 2, lg: (theme) => theme.shape.borderRadius },
        minHeight: { xs: '100vh', lg: 'auto' },
        boxShadow: { xs: 1, lg: 'none' },
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <UserProfile />
      <GeneralInfoCard />
      <JobCoach />
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
          width: "100%",
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
