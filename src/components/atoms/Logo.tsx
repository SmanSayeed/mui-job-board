"use client"
import { Typography } from "@mui/material"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <Typography
        component="div"
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "2rem", // 32px from Figma
          lineHeight: 1.1, // 110% from Figma
          letterSpacing: 0,
          color: "#4B5563", // Gray/600 from Figma
          verticalAlign: "middle",
          cursor: "pointer",
        }}
      >
        Logo
      </Typography>
    </Link>
  )
}
