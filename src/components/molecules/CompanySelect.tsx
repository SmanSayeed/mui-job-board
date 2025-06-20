import React from "react";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, SelectProps } from "@mui/material";

export interface CompanySelectProps extends Omit<SelectProps, "children"> {
  value: string;
  onChange: (event: SelectChangeEvent<any>, child?: React.ReactNode) => void;
  options: { label: string; value: string }[];
  label?: string;
}

const CompanySelect: React.FC<CompanySelectProps> = ({ value, onChange, options, label = "Company", ...rest }) => {
  return (
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
        {label}
      </InputLabel>
      <Select
        label={label}
        value={value}
        onChange={onChange}
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "1rem", md: "1.125rem" },
          lineHeight: 1.3,
          color: "#4B5563",
        }}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CompanySelect;
