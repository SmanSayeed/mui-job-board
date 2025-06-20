"use client"
import { Box } from "@mui/material"
import LoginButton from "../atoms/LoginButton"
import SignupButton from "../atoms/SignupButton"

export default function AuthButtons() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
      <LoginButton />
      <SignupButton />
    </Box>
  )
}
