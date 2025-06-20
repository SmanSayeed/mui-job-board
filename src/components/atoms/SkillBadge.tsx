"use client"
import { Chip } from "@mui/material"

interface SkillBadgeProps {
  label: string
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <Chip
      label={label}
      sx={{
        width: "auto",
        height: "25px",
        padding: "4px 12px",
        borderRadius: "6px",
        backgroundColor: "#E1EFFE", // Blue/100
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
