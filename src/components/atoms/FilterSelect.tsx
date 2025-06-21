"use client"
import { FormControl, InputLabel, Select, MenuItem, type SelectChangeEvent } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface FilterSelectProps {
  label: string
  value: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  minWidth?: number
}

export default function FilterSelect({ label, value, options, onChange, minWidth = 120 }: FilterSelectProps) {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value)
  }

  return (
    <FormControl size="small" sx={{ minWidth }}>
      <InputLabel sx={{
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: 1.3,
        color: theme.palette.text.primary,
      }}>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange} sx={{
        fontWeight: 400,
        fontSize: "1.125rem",
        lineHeight: 1.3,
        color: theme.palette.text.primary,
      }}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} sx={{
            fontWeight: 400,
            fontSize: "1.125rem",
            lineHeight: 1.3,
            color: theme.palette.text.primary,
          }}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
