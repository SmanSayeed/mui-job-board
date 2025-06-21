"use client"
import React, { useState } from "react"
import { Button, Menu, MenuItem, useTheme } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

const statusToColorMap: { [key: string]: string } = {
  hired: "hired",
  "in review": "inReview",
  rejected: "rejected",
}

interface StatusSelectorProps {
  initialStatus: string
}

export default function StatusSelector({ initialStatus }: StatusSelectorProps) {
  const theme = useTheme()
  const [status, setStatus] = useState(initialStatus)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleSelect = (newStatus: string) => {
    setStatus(newStatus)
    handleClose()
  }

  const statusKey = (statusToColorMap[status.toLowerCase()] || "default") as keyof typeof theme.candidateStatus
  const colors = theme.candidateStatus[statusKey]

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: colors.bg,
          color: colors.text,
          borderRadius: "6px",
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.75rem",
          height: 24,
          lineHeight: "1",
          p: "4px 8px",
          "&:hover": {
            backgroundColor: colors.bg,
            opacity: 0.9,
          },
          ".MuiButton-endIcon": {
            ml: 0.5,
          },
        }}
      >
        {status}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect("Hired")}>Hired</MenuItem>
        <MenuItem onClick={() => handleSelect("In review")}>In review</MenuItem>
        <MenuItem onClick={() => handleSelect("Rejected")}>Rejected</MenuItem>
      </Menu>
    </>
  )
} 