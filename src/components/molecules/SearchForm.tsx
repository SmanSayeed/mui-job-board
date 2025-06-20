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

export default function SearchForm() {
  return (
    <Box sx={{ p: 3, backgroundColor: "#FFFFFF", borderRadius: "8px" }}>
      <Typography
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 600,
          fontSize: "1.5rem", // 24px
          lineHeight: 1.1, // 110%
          letterSpacing: 0,
          color: "#4B5563", // Gray/600
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
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3, // 130%
            letterSpacing: 0,
            "&::placeholder": {
              color: "#76A9FA", // Blue/400
              opacity: 1,
            },
          },
        }}
      />

      {/* Company Select */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel
          sx={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3, // 130%
            color: "#4B5563", // Gray/600
          }}
        >
          Company
        </InputLabel>
        <Select
          label="Company"
          sx={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3, // 130%
            color: "#4B5563", // Gray/600
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
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3, // 130%
            color: "#4B5563", // Gray/600
          }}
        >
          Sort by
        </InputLabel>
        <Select
          label="Sort by"
          sx={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3, // 130%
            color: "#4B5563", // Gray/600
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
        <FormControlLabel
          control={<Checkbox />}
          label="Highest Match"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem", // 18px
              lineHeight: 1.3, // 130%
              color: "#000000",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Remote"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem", // 18px
              lineHeight: 1.3, // 130%
              color: "#000000",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Full Time"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem", // 18px
              lineHeight: 1.3, // 130%
              color: "#000000",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Internship"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem", // 18px
              lineHeight: 1.3, // 130%
              color: "#000000",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Recently Posted"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem", // 18px
              lineHeight: 1.3, // 130%
              color: "#000000",
            },
          }}
        />
      </Box>

      {/* Show More Options */}
      <Typography
        sx={{
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 400,
          fontSize: "1.125rem", // 18px
          lineHeight: 1.3, // 130%
          letterSpacing: 0,
          color: "#76A9FA", // Blue/400
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
  )
}
