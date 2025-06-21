"use client"
import { Button, ButtonProps } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React from "react"

const QuickApplyButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      {...props}
    >
      Quick Apply
    </Button>
  )
}

export default QuickApplyButton
