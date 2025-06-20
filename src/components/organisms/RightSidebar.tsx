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

export default function RightSidebar() {
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: 320 },
        p: { xs: 1, md: 2 },
        display: { xs: "none", lg: "block" },
      }}
    >
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FFFFFF", borderRadius: "8px" }}>
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
        <TextField
          fullWidth
          placeholder="Title or Keywords"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "#76A9FA", mr: 1 }} />,
          }}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-input": {
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.3,
              letterSpacing: 0,
              "&::placeholder": {
                color: "#76A9FA",
                opacity: 1,
              },
            },
          }}
        />

        {/* Company Select */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.3,
              color: "#4B5563",
            }}
          >
            Company
          </InputLabel>
          <Select
            label="Company"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.3,
              color: "#4B5563",
            }}
          >
            <MenuItem value="">All Companies</MenuItem>
            <MenuItem value="kneg-ab">KNEG AB</MenuItem>
          </Select>
        </FormControl>

        {/* Sort By Select */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.3,
              color: "#4B5563",
            }}
          >
            Sort by
          </InputLabel>
          <Select
            label="Sort by"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.3,
              color: "#4B5563",
            }}
          >
            <MenuItem value="highest-match">Highest Match</MenuItem>
            <MenuItem value="remote">Remote</MenuItem>
            <MenuItem value="full-time">Full Time</MenuItem>
            <MenuItem value="internship">Internship</MenuItem>
            <MenuItem value="recently-posted">Recently Posted</MenuItem>
          </Select>
        </FormControl>

        {/* Filter Options */}
        <Box sx={{ mb: 2 }}>
          {["Highest Match", "Remote", "Full Time", "Internship", "Recently Posted"].map((option) => (
            <FormControlLabel
              key={option}
              control={<Checkbox />}
              label={option}
              sx={{
                display: "block",
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.3,
                  color: "#000000",
                },
              }}
            />
          ))}
        </Box>

        {/* Show More Options */}
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.3,
            letterSpacing: 0,
            color: "#76A9FA",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <ExpandMoreIcon sx={{ fontSize: 16 }} />
          Show more options
        </Typography>
      </Box>
    </Box>
  )
}
