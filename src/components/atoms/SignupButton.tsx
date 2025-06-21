"use client"
import { Button } from "@mui/material"
import Link from "next/link"
import { useTheme } from "@mui/material/styles"

export default function SignupButton() {
  const theme = useTheme();
  return (
    <Button
      component={Link}
      href="/signup"
      variant="contained"
      color="primary"
      size="large"
    >
      Signup
    </Button>
  )
}
