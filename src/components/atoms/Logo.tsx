"use client"
import { Avatar, Typography, Box } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"

export default function Logo({ type = 'user' }: { type?: 'user' | 'recruiter' }) {
  const theme = useTheme();
  return (
    <Link href={type === "user" ? "/" : "/recruiter/job-listings"} style={{ textDecoration: "none" }}>
      {
        type === "user" ? (
          <Typography
            component="div"
            sx={{
              ...theme.typography.h1,
              color: theme.palette.text.primary,
              verticalAlign: "middle",
              cursor: "pointer",
            }}
          >
            Logo
          </Typography>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", height: 64, width: 120 }}>
            <Image src="/logo.png" alt="Recruiter Logo" width={120} height={64} style={{ objectFit: "contain", width: "100%", height: "auto" }} />
          </Box>
        )
      }
    </Link>
  )
}
