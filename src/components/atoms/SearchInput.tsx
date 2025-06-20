import React from "react";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

interface SearchInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Title or Keywords", value, onChange, ...rest }) => {
  const theme = useTheme();
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: theme.palette.primary[400], mr: 1 }} />
          </InputAdornment>
        ),
      }}
      sx={{
        mb: 3,
        background: "none",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "transparent",
          borderRadius: theme.shape.borderRadius,
          border: `1.5px solid ${theme.palette.primary.main}`,
          "&:hover fieldset": {
            borderColor: theme.palette.primary[400],
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        },
        "& .MuiOutlinedInput-input": {
          fontFamily: theme.typography.body1.fontFamily,
          fontWeight: theme.typography.body1.fontWeight,
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight,
          letterSpacing: theme.typography.body1.letterSpacing,
          "&::placeholder": {
            color: theme.palette.primary[400],
            opacity: 1,
          },
        },
      }}
      {...rest}
    />
  );
};

export default SearchInput;
