"use client"
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SortBy from "../molecules/SortBy"
import SearchInput from "../atoms/SearchInput"
import CompanySelect from "../molecules/CompanySelect"
import React from "react"

export default function RightSidebar() {
  const [company, setCompany] = React.useState("")
  const companyOptions = [
    { label: "All Companies", value: "" },
    { label: "KNEG AB", value: "kneg-ab" },
  ]

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: 320 },
        p: { xs: 1, md: 2 },
        display: { xs: "none", lg: "block" },
      }}
    >
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FFFFFF", borderRadius: "8px", }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            lineHeight: 1.1,
            letterSpacing: 0,
            color: "#4B5563",
            verticalAlign: "middle",
            mb: 3,
          }}
        >
          Search jobs
        </Typography>

        {/* Search Input */}
        <SearchInput />

        {/* Company Select */}
        <CompanySelect
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          options={companyOptions}
        />

        {/* Sort By Select */}
        <SortBy />

       
      </Box>
    </Box>
  )
}
