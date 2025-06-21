"use client"
import React from "react"
import { Box, Stack, Button, useTheme } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"

interface TabData {
  label: string
  count?: number
}

interface CandidateNavigationProps {
  tabs: TabData[]
  activeTab: string
  onTabClick: (tab: string) => void
}

export default function CandidateNavigation({
  tabs,
  activeTab,
  onTabClick,
}: CandidateNavigationProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        mb: 3,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {tabs.map((tab) => (
          <Button
            key={tab.label}
            onClick={() => onTabClick(tab.label)}
            sx={{
              color:
                activeTab === tab.label
                  ? theme.palette.primary.main
                  : theme.palette.text.secondary,
              fontWeight: 600,
              p: "4px 8px",
              textTransform: "none",
              borderBottom:
                activeTab === tab.label
                  ? `2px solid ${theme.palette.primary.main}`
                  : "2px solid transparent",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: theme.palette.primary.main,
              },
            }}
          >
            {tab.label}
            {tab.count !== undefined && (
              <Box
                component="span"
                sx={{
                  ml: 1,
                  backgroundColor: activeTab === tab.label ? "#DBEAFE" : "#F3F4F6",
                  color: activeTab === tab.label ? "#1D4ED8" : "#374151",
                  borderRadius: "6px",
                  px: 1,
                  py: "2px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  lineHeight: "16px",
                }}
              >
                {tab.count}
              </Box>
            )}
          </Button>
        ))}
        <Button
          variant="text"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ color: theme.palette.text.secondary, textTransform: "none", fontWeight: 500 }}
        >
          Add Tab
        </Button>
      </Stack>
      <Button
        startIcon={<GridViewOutlinedIcon />}
        sx={{ color: theme.palette.text.secondary, textTransform: "none", fontWeight: 500 }}
      >
        Cards View
      </Button>
    </Box>
  )
} 