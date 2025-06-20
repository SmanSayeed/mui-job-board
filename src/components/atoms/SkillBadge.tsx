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
        height: "25px",
        padding: "4px 12px",
        borderRadius: "6px",
        backgroundColor: "#E1EFFE",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.5,
        letterSpacing: 0,
        textAlign: "center",
        color: "#111928",
        "& .MuiChip-label": {
          padding: 0,
        },
      }}
    />
  )
}
