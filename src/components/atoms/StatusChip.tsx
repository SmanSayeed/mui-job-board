"use client"
import CustomChip from "./CustomChip"

interface StatusChipProps {
  label: string
  variant?: "freelance" | "extra-job" | "part-time" | "full-time" | "default"
  size?: "small" | "medium"
}

export default function StatusChip({ label, variant = "default", size = "small" }: StatusChipProps) {
  return (
    <CustomChip
      label={label}
      variant="status"
      color={variant}
      size={size}
    />
  )
}
