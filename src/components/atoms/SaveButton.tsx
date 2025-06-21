"use client"
import { Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"

export default function SaveButton() {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      color="primary"
    >
      Save
    </Button>
  )
}
