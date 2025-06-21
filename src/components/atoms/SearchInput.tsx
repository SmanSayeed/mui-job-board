import React from "react";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from '@mui/material/styles';

interface SearchInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
  colorVariant?: "blue" | "gray";
  height?: number | string;
  width?: number | string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search for...",
  value,
  onChange,
  colorVariant = "blue",
  sx = {},
  height = 52,
  width = 260,
  ...rest
}) => {
  const theme = useTheme();
  const textColor = colorVariant === "blue" ? (theme.palette?.primary?.light || "#76A9FA") : "#D1D5DB";
  // Convert number to px, allow string as is
  const resolvedHeight = typeof height === 'number' ? `${height}px` : height;
  const resolvedWidth = typeof width === 'number' ? `${width}px` : width;
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      variant="outlined"
      size="medium"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
            <SearchIcon sx={{ color: textColor, fontSize: 20, mr: 1 }} />
          </InputAdornment>
        ),
        inputProps: {
          'data-search': true,
          style: {
            color: textColor,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.3,
            padding: 0,
            background: 'transparent',
          },
          ...(rest.InputProps?.inputProps || {}),
        },
        ...rest.InputProps,
      }}
      sx={{
        width: resolvedWidth,
        height: resolvedHeight,
        minHeight: resolvedHeight,
        background: 'transparent',
        border: 'none',
        '& .MuiOutlinedInput-root': {
          background: 'transparent',
          border: '1px solid #E5E7EB',
          borderRadius: '8px',
          boxShadow: 'none',
          paddingTop: '14px',
          paddingRight: '24px',
          paddingBottom: '14px',
          paddingLeft: '24px',
          alignItems: 'center',
          height: resolvedHeight,
          minHeight: resolvedHeight,
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiInputBase-input': {
          color: textColor,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: 18,
          lineHeight: 1.3,
          padding: 0,
        },
        '& .MuiInputBase-input::placeholder': {
          color: textColor,
          opacity: 1,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: 18,
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

export default SearchInput;
