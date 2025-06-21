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
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        justifyContent: "space-between",
        alignItems: { xs: "stretch", md: "center" },
        px: { xs: 2, md: 3 },
        mb: 3,
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ 
        overflowX: "auto", 
        overflowY: "hidden",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      }}>
        <Stack 
          direction="row" 
          alignItems="center" 
          spacing={{ xs: 0.5, md: 1 }}
          sx={{ 
            minWidth: "max-content",
            pb: { xs: 1, md: 0 }
          }}
        >
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
                p: { xs: "6px 12px", md: "4px 8px" },
                textTransform: "none",
                fontSize: { xs: 13, md: 14 },
                borderBottom:
                  activeTab === tab.label
                    ? `2px solid ${theme.palette.primary.main}`
                    : "2px solid transparent",
                borderRadius: 0,
                whiteSpace: "nowrap",
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
                    ml: { xs: 0.5, md: 1 },
                    backgroundColor: activeTab === tab.label ? "#DBEAFE" : "#F3F4F6",
                    color: activeTab === tab.label ? "#1D4ED8" : "#374151",
                    borderRadius: "6px",
                    px: { xs: 0.5, md: 1 },
                    py: "2px",
                    fontSize: { xs: "0.7rem", md: "0.75rem" },
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
            sx={{ 
              color: theme.palette.text.secondary, 
              textTransform: "none", 
              fontWeight: 500,
              fontSize: { xs: 13, md: 14 },
              p: { xs: "6px 12px", md: "4px 8px" },
              whiteSpace: "nowrap"
            }}
          >
            Add Tab
          </Button>
        </Stack>
      </Box>
      <Button
        startIcon={<GridViewOutlinedIcon />}
        sx={{ 
          color: theme.palette.text.secondary, 
          textTransform: "none", 
          fontWeight: 500,
          fontSize: { xs: 13, md: 14 },
          alignSelf: { xs: "flex-start", md: "center" }
        }}
      >
        Cards View
      </Button>
    </Box>
  )
} 