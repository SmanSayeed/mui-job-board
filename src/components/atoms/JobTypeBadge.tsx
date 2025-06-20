"use client"
import { Chip } from "@mui/material"

interface JobTypeBadgeProps {
  label: string
}

export default function JobTypeBadge({ label }: JobTypeBadgeProps) {
  return (
    <Chip
      label={label}
      sx={{
        height: "25px",
        padding: "4px 12px",
        borderRadius: "6px",
        backgroundColor: "#F3F4F6", // Gray/100
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem", // 14px
        lineHeight: 1.5, // 150%
        letterSpacing: 0,
        textAlign: "center",
        color: "#111928", // Gray/900
        "& .MuiChip-label": {
          padding: 0,
        },
      }}
    />
  )
}
