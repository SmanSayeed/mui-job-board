"use client"
import { Button } from "@mui/material"

export default function QuickApplyButton() {
  return (
    <Button
      variant="contained"
      sx={{
        width: "132px",
        height: "40px",
        padding: "8px 12px",
        gap: "8px",
        borderRadius: "8px",
        backgroundColor: "#1A56DB", // Primary/700
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem", // 14px
        lineHeight: 1.5, // 150%
        letterSpacing: 0,
        color: "#FFFFFF",
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#1E40AF",
          boxShadow: "none",
        },
      }}
    >
      Quick Apply
    </Button>
  )
}
