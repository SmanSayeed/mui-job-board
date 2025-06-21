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
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        inputProps: { 'data-search': true, ...(rest.InputProps?.inputProps || {}) },
        ...rest.InputProps,
      }}
      {...rest}
    />
  );
};

export default SearchInput;
