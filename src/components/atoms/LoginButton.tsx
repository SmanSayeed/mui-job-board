"use client"
import { Button } from "@mui/material"
import Link from "next/link"

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button
        variant="text"
        color="inherit"
        size="medium"
      >
        Login
      </Button>
    </Link>
  )
}
