"use client"
import { Chip } from "@mui/material"

interface StatusChipProps {
  label: string
  variant?: "freelance" | "extra-job" | "part-time" | "full-time" | "default"
  size?: "small" | "medium"
}

export default function StatusChip({ label, variant = "default", size = "small" }: StatusChipProps) {
  const getChipStyles = (variant: string) => {
    switch (variant.toLowerCase()) {
      case "freelance":
        return { backgroundColor: "#FEF3C7", color: "#92400E" }
      case "extra-job":
      case "extra job":
        return { backgroundColor: "#D1FAE5", color: "#065F46" }
      case "part-time":
      case "part time":
        return { backgroundColor: "#DBEAFE", color: "#1E40AF" }
      case "full-time":
      case "full time":
        return { backgroundColor: "#F3E8FF", color: "#7C3AED" }
      default:
        return { backgroundColor: "#F3F4F6", color: "#374151" }
    }
  }

  return (
    <Chip
      label={label}
      size={size}
      sx={{
        ...getChipStyles(variant),
        fontWeight: 500,
        fontSize: "0.75rem",
        height: "24px",
      }}
    />
  )
}
