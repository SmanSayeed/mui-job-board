"use client"
import { Button } from "@mui/material"
import Link from "next/link"
import { useTheme } from "@mui/material/styles"

export default function LoginButton() {
  const theme = useTheme();
  return (
    <>
      <Link href="/login">
        <Button
          variant="text"
        >
          Login
        </Button>
      </Link>
    </>
  )
}
