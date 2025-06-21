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
          boxShadow: "none",
          '&:hover': {
            boxShadow: "none",
          },
        },
      },
      variants: [
        // Login Button
        {
          props: { variant: "login" },
          style: {
            width: "90.5px",
            height: "40px",
            borderRadius: "8px",
            padding: "8px",
            borderWidth: "1px",
            background: "transparent",
            fontFamily: FONT_FAMILY_ROBOTO,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            fontSize: "14px",
            lineHeight: 1,
            color: COLOR_NEUTRAL.default,
            border: `1px solid ${COLOR_GREY[400]}`,
            '&:hover': {
              color: COLOR_PRIMARY[500],
              background: "transparent",
            },
          },
        },
        // Signup Button
        {
          props: { variant: "signup" },
          style: {
            width: "90.5px",
            height: "40px",
            borderRadius: "8px",
            backgroundColor: COLOR_PRIMARY.main,
            color: COLOR_BRAND_ONBRAND,
            fontFamily: FONT_FAMILY_ROBOTO,
            fontWeight: FONT_WEIGHT_SEMIBOLD,
            fontSize: "14px",
            lineHeight: 1,
            '&:hover': {
              backgroundColor: COLOR_PRIMARY[500],
            },
          },
        },
        // Apply Now Button
        {
          props: { variant: "applyNow" },
          style: {
            width: "139px",
            height: "51px",
            padding: "14px 24px",
            borderRadius: "8px",
            backgroundColor: COLOR_PRIMARY.main,
            color: COLOR_PRIMARY.contrastText,
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: "none",
            boxShadow: "none",
            gap: 2,
            '&:hover': {
              backgroundColor: COLOR_PRIMARY.dark,
              boxShadow: "none",
            },
          },
        },
        // New Job Button
        {
          props: { variant: "newJob" },
          style: {
            height: "52px",
            borderRadius: "8px",
            backgroundColor: COLOR_PRIMARY.main,
            color: COLOR_PRIMARY.contrastText,
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: "none",
            boxShadow: "none",
            '&:hover': {
              backgroundColor: COLOR_PRIMARY[500],
              boxShadow: "none",
            },
          },
        },
        // Quick Apply Button
        {
          props: { variant: "quickApply" },
          style: {
            width: "132px",
            height: "40px",
            borderRadius: "8px",
            backgroundColor: COLOR_PRIMARY.main,
            color: COLOR_PRIMARY.contrastText,
            fontFamily: FONT_FAMILY_INTER,
            fontWeight: FONT_WEIGHT_MEDIUM,
            fontSize: "14px",
            lineHeight: 1.5,
            letterSpacing: 0,
            textTransform: "none",
            boxShadow: "none",
            '&:hover': {
              backgroundColor: COLOR_PRIMARY[500],
              boxShadow: "none",
            },
          },
        },
        // Save Button
        {
          props: { variant: "save" },
          style: {
            width: "84px",
            height: "40px",
            padding: "8px 12px",
            backgroundColor: COLOR_BACKGROUND_DEFAULT,
            color: COLOR_PRIMARY[500],
            border: "none",
            borderRadius: "8px",
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
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: "0.875rem",
          borderRadius: "6px",
          letterSpacing: 0,
          textTransform: "none",
        },
      },
      variants: [
        // Status Chips
        {
          props: { variant: "status", color: "freelance" },
          style: { backgroundColor: "#FEF3C7", color: "#92400E", fontSize: "0.75rem", height: 24 },
        },
        {
          props: { variant: "status", color: "extra-job" },
          style: { backgroundColor: "#D1FAE5", color: "#065F46", fontSize: "0.75rem", height: 24 },
        },
        {
          props: { variant: "status", color: "part-time" },
          style: { backgroundColor: "#DBEAFE", color: "#1E40AF", fontSize: "0.75rem", height: 24 },
        },
        {
          props: { variant: "status", color: "full-time" },
          style: { backgroundColor: "#F3E8FF", color: "#7C3AED", fontSize: "0.75rem", height: 24 },
        },
        {
          props: { variant: "status", color: "default" },
          style: { backgroundColor: "#F3F4F6", color: "#374151", fontSize: "0.75rem", height: 24 },
        },
        // Skill Chip
        {
          props: { variant: "skill" },
          style: { backgroundColor: "#E1EFFE", color: "#111928" },
        },
        // Match Chip
        {
          props: { variant: "match" },
          style: {
            backgroundColor: "#F3F4F6",
            color: "#3F83F8",
            borderRadius: "16px",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            height: 32,
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
        // Job Type Chip
        {
          props: { variant: "jobType" },
          style: { backgroundColor: "#F3F4F6", color: "#111928", fontWeight: 500, fontSize: "0.875rem", borderRadius: "6px", height: 25, paddingLeft: 12, paddingRight: 12 },
        },
        // Tag Chip
        {
          props: { variant: "tag" },
          style: { backgroundColor: "#F3F4F6", color: "#111928", fontWeight: 500, fontSize: "0.875rem", borderRadius: "6px", height: 25, paddingLeft: 12, paddingRight: 12 },
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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    login: true;
    signup: true;
    applyNow: true;
    newJob: true;
    quickApply: true;
    save: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    status: true;
    skill: true;
    match: true;
    jobType: true;
    tag: true;
  }
  interface ChipPropsColorOverrides {
    freelance: true;
    'extra-job': true;
    'part-time': true;
    'full-time': true;
    default: true;
  }
}

export default theme
