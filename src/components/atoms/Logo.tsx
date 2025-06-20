"use client"
import { Typography } from "@mui/material"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
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
    </Link>
  )
}
