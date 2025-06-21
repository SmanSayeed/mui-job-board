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
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
      <SearchInput
        placeholder="Search for..."
        colorVariant="gray"
        height={52}
        width={260}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography sx={{ color: theme.palette.grey[500], fontWeight: 500, fontSize: 16, mr: 1 }}>
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
            fontSize: 16,
            borderRadius: 2,
            minWidth: 160,
            height: 40,
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