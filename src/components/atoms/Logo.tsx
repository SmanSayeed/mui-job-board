"use client"
import { Avatar, Typography, Box } from "@mui/material"
import Link from "next/link"
import Image from "next/image"

export default function Logo({ type = 'user' }: { type?: 'user' | 'recruiter' }) {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      {
        type === "user" ? (
          <Typography
            component="div"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.5rem", md: "2rem" },
              lineHeight: 1.1,
              letterSpacing: 0,
              color: "#4B5563",
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
