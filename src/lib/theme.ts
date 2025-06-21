import { createTheme } from "@mui/material/styles"
import {
  FONT_FAMILY_INTER,
  FONT_FAMILY_ROBOTO,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_SEMIBOLD,
  FONT_WEIGHT_BOLD,
  COLOR_PRIMARY,
  COLOR_SECONDARY_MAIN,
  COLOR_BACKGROUND_DEFAULT,
  COLOR_BACKGROUND_PAPER,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
  COLOR_GREY,
  COLOR_ACTION,
  COLOR_NEUTRAL,
  COLOR_BRAND_ONBRAND,
  JOB_LISTING_TABLE_COLORS,
  TABLE_COLORS,
} from "./theme-constants"

const theme = createTheme({
  palette: {
    primary: { ...COLOR_PRIMARY },
    secondary: {
      main: COLOR_SECONDARY_MAIN,
    },
    background: {
      default: COLOR_BACKGROUND_DEFAULT,
      paper: COLOR_BACKGROUND_PAPER,
    },
    text: {
      primary: COLOR_TEXT_PRIMARY,
      secondary: COLOR_TEXT_SECONDARY,
    },
    grey: { ...COLOR_GREY },
    action: { ...COLOR_ACTION },
    neutral: { ...COLOR_NEUTRAL },
    brand: {
      onBrand: COLOR_BRAND_ONBRAND,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY_INTER,
    h1: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "2rem",
      lineHeight: 1.1,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "1.625rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "1.125rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "1.5rem",
      lineHeight: 1.1,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: "1.125rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "1.625rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    subtitle1: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      textAlign: "center",
    },
    subtitle2: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_SEMIBOLD,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: "1rem",
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    caption: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: "0.75rem",
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    overline: {
      fontFamily: FONT_FAMILY_ROBOTO,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: "0.75rem",
      lineHeight: 1.4,
      letterSpacing: 0,
      textTransform: "none",
    },
    button: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: 0,
      textTransform: "none",
    },
    jobMetaPosted: {
      fontFamily: FONT_FAMILY_ROBOTO,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: '12px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: COLOR_NEUTRAL.coolGray600,
    },
    jobMetaApply: {
      fontFamily: FONT_FAMILY_ROBOTO,
      fontWeight: FONT_WEIGHT_REGULAR,
      fontSize: '12px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: COLOR_NEUTRAL.coolGray600,
    },
    jobMetaCompany: {
      fontFamily: FONT_FAMILY_ROBOTO,
      fontWeight: FONT_WEIGHT_BOLD,
      fontSize: '14px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#4D5358',
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
      textDecorationSkip: 'auto',
    },
    jobMetaSalary: {
      fontFamily: FONT_FAMILY_ROBOTO,
      fontWeight: FONT_WEIGHT_BOLD,
      fontSize: '14px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#4D5358',
    },
    designationTitle: {
      fontFamily: FONT_FAMILY_INTER,
      fontWeight: FONT_WEIGHT_MEDIUM,
      fontSize: "1rem",
      lineHeight: 1.3,
      color: COLOR_NEUTRAL.coolGray600,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          box-sizing: border-box;
        }
        body {
          background-color: ${COLOR_BACKGROUND_DEFAULT};
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        html {
          -webkit-text-size-adjust: 100%;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_BACKGROUND_PAPER,
          color: COLOR_TEXT_PRIMARY,
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          borderBottom: `1px solid ${COLOR_GREY[200]}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "64px !important",
          paddingLeft: "24px !important",
          paddingRight: "24px !important",
          "@media (max-width: 900px)": {
            paddingLeft: "16px !important",
            paddingRight: "16px !important",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontFamily: FONT_FAMILY_INTER,
          fontWeight: FONT_WEIGHT_MEDIUM,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          minWidth: "auto",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: COLOR_PRIMARY.main,
          color: COLOR_PRIMARY.contrastText,
          fontFamily: FONT_FAMILY_INTER,
          fontWeight: FONT_WEIGHT_MEDIUM,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: COLOR_PRIMARY.dark,
            boxShadow: "none",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          border: `1px solid ${COLOR_GREY[400]}`,
          color: COLOR_TEXT_PRIMARY,
          fontFamily: FONT_FAMILY_INTER,
          fontWeight: FONT_WEIGHT_MEDIUM,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          "&:hover": {
            backgroundColor: COLOR_GREY[50],
            border: `1px solid ${COLOR_GREY[500]}`,
          },
        },
        text: {
          backgroundColor: "transparent",
          color: COLOR_NEUTRAL.default,
          fontFamily: FONT_FAMILY_ROBOTO,
          fontWeight: FONT_WEIGHT_SEMIBOLD,
          fontSize: "0.875rem",
          lineHeight: 1,
          letterSpacing: 0,
          "&:hover": {
            backgroundColor: "transparent",
            color: COLOR_NEUTRAL.default,
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined", color: "primary", size: "medium" },
          style: {
            width: "84px",
            height: "40px",
            padding: "8px 12px",
            backgroundColor: COLOR_BACKGROUND_DEFAULT,
            color: COLOR_PRIMARY[500],
            border: "none",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            '&:hover': {
              backgroundColor: COLOR_GREY[200],
              border: "none",
            },
          },
        },
        {
          props: { variant: "text", color: "primary", size: "medium" },
          style: {
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            color: COLOR_PRIMARY.main,
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            textTransform: "none",
            minWidth: "auto",
            padding: 0,
            '&:hover': {
              backgroundColor: "transparent",
              color: COLOR_PRIMARY.dark,
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained", color: "primary", size: "large" },
          style: {
            width: "90.5px",
            height: "40px",
            padding: "8px 16px",
            backgroundColor: COLOR_PRIMARY.main,
            color: COLOR_BRAND_ONBRAND,
            borderRadius: "8px",
            fontFamily: FONT_FAMILY_ROBOTO,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            fontSize: "0.875rem",
            lineHeight: 1,
            letterSpacing: 0,
            boxShadow: "none",
            '&:hover': {
              backgroundColor: COLOR_PRIMARY[500],
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "contained", color: "primary", size: "small" },
          style: {
            width: "157px",
            height: "37px",
            padding: "8px 12px",
            backgroundColor: COLOR_BACKGROUND_DEFAULT,
            color: COLOR_PRIMARY[500],
            borderRadius: "8px",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            '&:hover': {
              backgroundColor: COLOR_GREY[200],
            },
          },
        },
        {
          props: { variant: "text", color: "inherit", size: "medium" },
          style: {
            width: "90.5px",
            height: "40px",
            borderRadius: "8px",
            padding: "8px",
            borderWidth: "1px",
            backgroundColor: "transparent",
            fontFamily: FONT_FAMILY_ROBOTO,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            fontSize: "14px",
            lineHeight: 1,
            color: COLOR_NEUTRAL.default,
            textTransform: "none",
            boxShadow: "none",
            '&:hover': {
              color: COLOR_PRIMARY[500],
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "25px",
          padding: "4px 12px",
          fontFamily: FONT_FAMILY_INTER,
          fontWeight: FONT_WEIGHT_MEDIUM,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          borderRadius: "6px",
          '& .MuiChip-label': {
            padding: 0,
          },
        },
        filled: {
          backgroundColor: COLOR_PRIMARY[100],
          color: COLOR_GREY[900],
        },
        outlined: {
          backgroundColor: "transparent",
          color: COLOR_GREY[900],
          border: `1px solid ${COLOR_PRIMARY[100]}`,
        },
      },
      variants: [
        {
          props: { variant: "filled", color: "primary" },
          style: {
            backgroundColor: COLOR_PRIMARY[100],
            color: COLOR_GREY[900],
            borderRadius: "6px",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            backgroundColor: "transparent",
            color: COLOR_GREY[900],
            border: `1px solid ${COLOR_PRIMARY[100]}`,
            borderRadius: "6px",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        {
          props: { variant: "outlined", color: "default" },
          style: {
            backgroundColor: "transparent",
            color: COLOR_TEXT_PRIMARY,
            border: `1px solid ${COLOR_GREY[200]}`,
            borderRadius: "6px",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        {
          props: { variant: "filled", color: "secondary" },
          style: {
            backgroundColor: COLOR_PRIMARY[100],
            color: COLOR_GREY[900],
            borderRadius: "6px",
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "transparent",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: COLOR_GREY[300],
            },
            "&:hover fieldset": {
              borderColor: COLOR_PRIMARY[500],
            },
            "&.Mui-focused fieldset": {
              borderColor: COLOR_PRIMARY[500],
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_REGULAR,
            fontSize: "1.125rem",
            lineHeight: 1.3,
            color: COLOR_TEXT_PRIMARY,
          },
          "& .MuiOutlinedInput-input": {
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_REGULAR,
            fontSize: "1.125rem",
            lineHeight: 1.3,
            color: COLOR_TEXT_SECONDARY,
            "&::placeholder": {
              color: COLOR_PRIMARY.light,
              opacity: 1,
            },
          },
          "& .MuiOutlinedInput-input[data-search='true']": {
            width: 302,
            height: 52,
            paddingTop: 14,
            paddingRight: 24,
            paddingBottom: 14,
            paddingLeft: 24,
            fontFamily: "Inter, sans-serif",
            fontWeight: FONT_WEIGHT_REGULAR,
            fontSize: 18,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: COLOR_TEXT_SECONDARY,
            borderRadius: 8,
            backgroundColor: "transparent",
            border: "none",
            boxSizing: "border-box",
            "&::placeholder": {
              color: COLOR_PRIMARY.light,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontWeight: FONT_WEIGHT_REGULAR,
              fontSize: 18,
              lineHeight: 1.3,
              letterSpacing: 0,
            },
          },
          "& .MuiOutlinedInput-root[data-search='true']": {
            backgroundColor: "transparent",
            borderRadius: 8,
            border: `1px solid ${COLOR_PRIMARY[200]}`,
            minHeight: 52,
            boxSizing: "border-box",
            "& fieldset": {
              borderColor: COLOR_PRIMARY[200],
              borderWidth: 1,
            },
            "&:hover fieldset": {
              borderColor: COLOR_PRIMARY.light,
            },
            "&.Mui-focused fieldset": {
              borderColor: COLOR_PRIMARY.main,
              borderWidth: 2,
            },
            "& .MuiInputAdornment-root": {
              backgroundColor: "transparent",
              border: "none",
              marginRight: 0,
              paddingLeft: 0,
            },
          },
          "& .MuiInputAdornment-root": {
            marginRight: 0,
          },
          "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: COLOR_PRIMARY.light,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_BACKGROUND_PAPER,
          borderRadius: "8px",
          fontFamily: FONT_FAMILY_INTER,
          fontWeight: FONT_WEIGHT_REGULAR,
          fontSize: "1.125rem",
          lineHeight: 1.3,
          color: COLOR_TEXT_PRIMARY,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLOR_BACKGROUND_PAPER,
          borderLeft: `1px solid ${COLOR_GREY[200]}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "12px 16px",
          "&:hover": {
            backgroundColor: COLOR_BACKGROUND_DEFAULT,
          },
          "&.Mui-selected": {
            backgroundColor: COLOR_PRIMARY[100],
            borderRight: `3px solid ${COLOR_PRIMARY[500]}`,
            "&:hover": {
              backgroundColor: COLOR_PRIMARY[100],
            },
          },
        },
      },
    },
  },
  jobListingTable: { ...JOB_LISTING_TABLE_COLORS },
  table: { ...TABLE_COLORS },
})

// Extend the theme interface to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    neutral: {
      default: string
      coolGray900: string
      coolGray600: string
    }
    brand: {
      onBrand: string
    }
  }

  interface PaletteOptions {
    neutral?: {
      default?: string
      coolGray900?: string
      coolGray600?: string
    }
    brand?: {
      onBrand?: string
    }
  }

  interface PaletteColor {
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }

  interface SimplePaletteColorOptions {
    50?: string
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    jobMetaPosted: React.CSSProperties;
    jobMetaApply: React.CSSProperties;
    jobMetaCompany: React.CSSProperties;
    jobMetaSalary: React.CSSProperties;
    designationTitle: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    jobMetaPosted?: React.CSSProperties;
    jobMetaApply?: React.CSSProperties;
    jobMetaCompany?: React.CSSProperties;
    jobMetaSalary?: React.CSSProperties;
    designationTitle?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    designationTitle: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    jobListingTable: {
      rowHover: string;
      rowText: string;
      actionButtonBg: string;
      actionButtonHover: string;
      actionButtonIcon: string;
      tableHeadBg: string;
      tableHeadText: string;
      border: string;
    }
    table: {
      headerBg: string;
      headerText: string;
      rowText: string;
      border: string;
      rowHover: string;
      actionButtonBg: string;
      actionButtonHover: string;
      actionButtonIcon: string;
    }
  }
  interface ThemeOptions {
    jobListingTable?: {
      rowHover?: string;
      rowText?: string;
      actionButtonBg?: string;
      actionButtonHover?: string;
      actionButtonIcon?: string;
      tableHeadBg?: string;
      tableHeadText?: string;
      border?: string;
    }
    table?: {
      headerBg?: string;
      headerText?: string;
      rowText?: string;
      border?: string;
      rowHover?: string;
      actionButtonBg?: string;
      actionButtonHover?: string;
      actionButtonIcon?: string;
    }
  }
}

export default theme
