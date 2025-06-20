"use client"
import { Button } from "@mui/material"

export default function SaveButton() {
  return (
    <Button
      sx={{
        width: "84px",
        height: "40px",
        padding: "8px 12px",
        gap: "8px",
        borderRadius: "8px",
        backgroundColor: "#F3F4F6", // Gray/100
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem", // 14px
        lineHeight: 1.5, // 150%
        letterSpacing: 0,
        color: "#3F83F8", // Primary/500
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#E5E7EB",
        },
      }}
    >
      Save
    </Button>
  )
}
