"use client"
import { Box } from "@mui/material"
import SearchForm from "../molecules/SearchForm"

export default function RightSidebar() {
  return (
    <Box sx={{ width: 320, p: 2 }}>
      <SearchForm />
    </Box>
  )
}
