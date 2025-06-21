"use client"
import { Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function QuickApplyButton() {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
    >
      Quick Apply
    </Button>
  )
}
