"use client"
import { Button } from "@mui/material"

export default function LoginButton() {
  return (
    <Button
      sx={{
        minWidth: { xs: "70px", md: "90.5px" },
        height: "40px",
        padding: "8px 16px",
        borderRadius: "4px",
        backgroundColor: "transparent",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
        fontSize: { xs: "0.75rem", md: "0.875rem" },
        lineHeight: 1,
        letterSpacing: 0,
        color: "#303030",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "rgba(26, 86, 219, 0.04)",
          color: "#303030",
        },
      }}
    >
      Login
    </Button>
  )
}
