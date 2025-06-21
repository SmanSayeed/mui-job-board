"use client"
import React from "react"
import { Box, Typography, Select, MenuItem, useTheme } from "@mui/material"
import SearchInput from "@/components/atoms/SearchInput"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

interface CandidateFilterControlsProps {
  onSearchChange: (value: string) => void
  onSortChange: (value: string) => void
  searchQuery: string
  sortBy: string
}

export default function CandidateFilterControls({
  onSearchChange,
  onSortChange,
  searchQuery,
  sortBy,
}: CandidateFilterControlsProps) {
  const theme = useTheme()
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: { xs: "column", md: "row" },
      alignItems: { xs: "stretch", md: "center" }, 
      justifyContent: "space-between", 
      gap: { xs: 2, md: 0 },
      mb: 3 
    }}>
      <SearchInput
        placeholder="Search for..."
        colorVariant="gray"
        height={52}
        width="100%"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "stretch", sm: "center" }, 
        gap: { xs: 1, sm: 1 } 
      }}>
        <Typography sx={{ 
          color: theme.palette.grey[500], 
          fontWeight: 500, 
          fontSize: { xs: 14, md: 16 }, 
          mr: { xs: 0, sm: 1 },
          textAlign: { xs: "left", sm: "center" }
        }}>
          Sort by:
        </Typography>
        <Select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            color: theme.palette.grey[400],
            fontWeight: 500,
            fontSize: { xs: 14, md: 16 },
            borderRadius: 2,
            minWidth: { xs: "100%", sm: 160 },
            height: { xs: 48, md: 40 },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey[200],
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.grey[300],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.grey[400],
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="Matching Level">Matching Level</MenuItem>
          <MenuItem value="Name">Name</MenuItem>
          <MenuItem value="Status">Status</MenuItem>
        </Select>
      </Box>
    </Box>
  )
} 