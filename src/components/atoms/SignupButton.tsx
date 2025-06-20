"use client"
import { Button } from "@mui/material"
import Link from "next/link"

export default function SignupButton() {
  return (
    <Button
      component={Link}
      href="/signup"
      variant="contained"
      sx={{
        minWidth: { xs: "70px", md: "90.5px" },
        height: "40px",
        padding: "8px 16px",
        borderRadius: "4px",
        backgroundColor: "#1A56DB",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 600,
        fontSize: { xs: "0.75rem", md: "0.875rem" },
        lineHeight: 1,
        letterSpacing: 0,
        color: "#F5F5F5",
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#76A9FA",
          boxShadow: "none",
        },
      }}
    >
      Signup
    </Button>
  )
}
