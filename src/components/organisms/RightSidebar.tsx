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
  useTheme,
  useMediaQuery,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import SortBy from "../molecules/SortBy"
import SearchInput from "../atoms/SearchInput"
import CompanySelect from "../molecules/CompanySelect"
import React from "react"

export default function RightSidebar() {
  const [company, setCompany] = React.useState("")
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const companyOptions = [
    { label: "All Companies", value: "" },
    { label: "KNEG AB", value: "kneg-ab" },
  ]

  // Mobile/Tablet: horizontal bar at top. Desktop: sidebar at right.
  return (
    <>
      {/* Mobile/Tablet: Top bar */}
      <Box
        sx={{
          display: { xs: 'block', lg: 'none' },
          width: '100%',
          p: { xs: 2, md: 3 },
          backgroundColor: theme.palette.background.paper,
          borderRadius: { xs: 2, md: 3 },
          mb: 3,
        }}
      >
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
        <SearchInput sx={{ mb: 2 }} colorVariant="blue" height={44} width={"100%"} />
        <CompanySelect
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          options={companyOptions}
        />
        <SortBy />
      </Box>
      {/* Desktop: Right sidebar */}
      <Box
        sx={{
          width: 320,
          p: { xs: 1, md: 2 },
          display: { xs: "none", lg: "block" },
        }}
      >
        <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "", borderRadius: "8px", }}>
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
          <SearchInput sx={{ mb: 4 }} colorVariant="blue" height={52} width={"100%"} />
          <CompanySelect
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            options={companyOptions}
          />
          <SortBy />
        </Box>
      </Box>
    </>
  )
}
