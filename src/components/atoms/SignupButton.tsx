"use client"
import { Button } from "@mui/material"

export default function SignupButton() {
  return (
    <Button
      variant="contained"
      sx={{
        width: "90.5px",
        height: "40px",
        padding: "8px 16px",
        borderRadius: "4px",
        backgroundColor: "#1A56DB", // Primary/700
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
        fontSize: "0.875rem", // Body/Size Medium
        lineHeight: 1, // 100%
        letterSpacing: 0,
        color: "#F5F5F5", // Text/Brand/On Brand
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#76A9FA", // Blue/400
          boxShadow: "none",
        },
      }}
    >
      Signup
    </Button>
  )
}
