"use client"
import { Button, ButtonProps } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import React from "react"

const SaveButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      color="primary"
      {...props}
    >
      Save
    </Button>
  )
}

export default SaveButton
