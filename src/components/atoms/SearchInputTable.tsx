"use client"
import { TextField, InputAdornment } from "@mui/material"
import { Search as SearchIcon } from "@mui/icons-material"

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  minWidth?: number
}

export default function SearchInputTable({
  placeholder = "Search...",
  value = "",
  onChange,
  minWidth = 200,
}: SearchInputProps) {
  return (
    <TextField
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "#9CA3AF", fontSize: "1.25rem" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        minWidth,
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#FFFFFF",
        },
      }}
    />
  )
}
