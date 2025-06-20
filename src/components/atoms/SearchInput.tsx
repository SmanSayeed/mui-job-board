import React from "react";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Title or Keywords", value, onChange, ...rest }) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: "#76A9FA", mr: 1 }} /></InputAdornment>,
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
      {...rest}
    />
  );
};

export default SearchInput;
