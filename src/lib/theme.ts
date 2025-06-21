import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A56DB", // Primary/700 from Figma
      light: "#76A9FA", // Blue/400 from Figma
      dark: "#1E40AF", // Blue/800
      contrastText: "#FFFFFF",
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#76A9FA", // Blue/400
      500: "#3F83F8", // Blue/500 - hover and active states
      600: "#2563EB",
      700: "#1A56DB", // Primary color
      800: "#1E40AF",
      900: "#1E3A8A",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#F3F4F6", // Main body background from Figma
      paper: "#FFFFFF", // Header background from Figma
    },
    text: {
      primary: "#4B5563", // Gray/600 - main text color from Figma
      secondary: "#111928", // Gray/900 - secondary text from Figma
    },
    grey: {
      50: "#F9FAFB",
      100: "#F3F4F6", // Gray/100 - used for buttons and backgrounds
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF", // Gray/400 - used for disabled states
      500: "#6B7280",
      600: "#4B5563", // Gray/600 - primary text
      700: "#374151",
      800: "#1F2937",
      900: "#111928", // Gray/900 - secondary text
    },
    action: {
      active: "#3F83F8", // Blue/500 - hover and selected color
      hover: "#3F83F8", // Blue/500 - hover color
      selected: "#E1EFFE", // Blue/100 - badge background
      disabled: "#9CA3AF",
      disabledBackground: "#F3F4F6",
    },
    // Custom colors for specific use cases
    neutral: {
      default: "#303030", // Text/Neutral/Default for login button
      coolGray900: "#21272A", // CoolGray/900 for coach names
      coolGray600: "#697077", // CoolGray/600 for coach designations and meta info
    },
    brand: {
      onBrand: "#F5F5F5", // Text/Brand/On Brand for signup button text
    },
  },
  typography: {
    fontFamily: "var(--font-inter), Inter, sans-serif",
    // Logo typography
    h1: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "2rem", // 32px from Figma
      lineHeight: 1.1, // 110% from Figma
      letterSpacing: 0,
    },
    // Page titles (Trending Job Postings)
    h2: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.625rem", // 26px from Figma
      lineHeight: 1.3, // 130% from Figma
      letterSpacing: 0,
    },
    // Section titles (General Information, My Job Coach)
    h3: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.125rem", // 18px from Figma
      lineHeight: 1.3, // 130% from Figma
      letterSpacing: 0,
    },
    // Search Jobs title
    h4: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem", // 24px from Figma
      lineHeight: 1.1, // 110% from Figma
      letterSpacing: 0,
    },
    // Job position names
    h5: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 500,
      fontSize: "1.125rem", // 18px from Figma
      lineHeight: 1.3, // 130% from Figma
      letterSpacing: 0,
    },
    // User name (Steve Smith)
    h6: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "1.625rem", // 26px from Figma
      lineHeight: 1.3, // 130% from Figma
      letterSpacing: 0,
    },
    // Navigation menu items
    subtitle1: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem", // 14px from Figma
      lineHeight: 1.5, // 150% from Figma
      letterSpacing: 0,
      textAlign: "center",
    },
    // Job Overview, Content titles
    subtitle2: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem", // 14px from Figma
      lineHeight: 1.5, // 150% from Figma
      letterSpacing: 0,
    },
    // General body text, contact info, search inputs
    body1: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 400,
      fontSize: "1rem", // 16px from Figma
      lineHeight: 1.3, // 130% from Figma
      letterSpacing: 0,
    },
    // Page subtitles, dates, salary
    body2: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 400,
      fontSize: "0.875rem", // 14px from Figma
      lineHeight: 1.5, // 150% from Figma
      letterSpacing: 0,
    },
    // Country names
    caption: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 500,
      fontSize: "0.75rem", // 12px from Figma
      lineHeight: 1.5, // 150% from Figma
      letterSpacing: 0,
    },
    // Job content description
    overline: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem", // 12px from Figma
      lineHeight: 1.4, // 140% from Figma
      letterSpacing: 0,
      textTransform: "none",
    },
    // Button text
    button: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 500,
      fontSize: "0.875rem", // 14px from Figma
      lineHeight: 1.5, // 150% from Figma
      letterSpacing: 0,
      textTransform: "none",
    },
    jobMetaPosted: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#697077', // CoolGray/600
    },
    jobMetaApply: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#697077', // CoolGray/600
    },
    jobMetaCompany: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#4D5358', // Custom bold color
      textDecoration: 'underline',
      textDecorationStyle: 'solid',
      textDecorationSkip: 'auto',
    },
    jobMetaSalary: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: 1.4,
      letterSpacing: 0,
      color: '#4D5358', // Custom bold color
    },
    // Add custom designationTitle variant for DesignationTitle atom
    designationTitle: {
      fontFamily: "var(--font-inter), Inter, sans-serif",
      fontWeight: 500,
      fontSize: "1rem", // 16px, adjust as needed for Figma spec
      lineHeight: 1.3,
      color: "#697077", // CoolGray/600, adjust as needed
    },
  },
  spacing: 8, // Base spacing unit
  shape: {
    borderRadius: 4, // Default border radius
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
          background-color: #F3F4F6;
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
          backgroundColor: "#FFFFFF",
          color: "#4B5563",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          borderBottom: "1px solid #E5E7EB",
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
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          minWidth: "auto",
          "&:hover": {
            boxShadow: "none",
          },
        },
        contained: {
          backgroundColor: "#1A56DB",
          color: "#fff",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#1E40AF",
            boxShadow: "none",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          border: "1px solid #9CA3AF",
          color: "#4B5563",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          "&:hover": {
            backgroundColor: "#F9FAFB",
            border: "1px solid #6B7280",
          },
        },
        text: {
          backgroundColor: "transparent",
          color: "#303030",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          lineHeight: 1,
          letterSpacing: 0,
          "&:hover": {
            backgroundColor: "transparent",
            color: "#303030",
          },
        },
      },
      variants: [
        // Save button variant
        {
          props: { variant: "outlined", color: "primary", size: "medium" },
          style: {
            width: "84px",
            height: "40px",
            padding: "8px 12px",
            backgroundColor: "#F3F4F6",
            color: "#3F83F8",
            border: "none",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            '&:hover': {
              backgroundColor: "#E5E7EB",
              border: "none",
            },
          },
        },
        // Back button variant
        {
          props: { variant: "text", color: "primary", size: "medium" },
          style: {
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem", // 14px
            lineHeight: 1.5, // 150%
            letterSpacing: 0,
            color: "#1A56DB", // primary/700
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "none",
            textTransform: "none",
            minWidth: "auto",
            padding: 0,
            '&:hover': {
              backgroundColor: "transparent",
              color: "#1E40AF", // primary/800 on hover
              boxShadow: "none",
            },
          },
        },
        // Signup button variant
        {
          props: { variant: "contained", color: "primary", size: "large" },
          style: {
            width: "90.5px",
            height: "40px",
            padding: "8px 16px",
            backgroundColor: "#1A56DB",
            color: "#F5F5F5",
            borderRadius: "8px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1,
            letterSpacing: 0,
            boxShadow: "none",
            '&:hover': {
              backgroundColor: "#3F83F8",
              boxShadow: "none",
            },
          },
        },
        // Edit Profile button variant
        {
          props: { variant: "contained", color: "primary", size: "small" },
          style: {
            width: "157px",
            height: "37px",
            padding: "8px 12px",
            backgroundColor: "#F3F4F6",
            color: "#3F83F8",
            borderRadius: "8px",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            '&:hover': {
              backgroundColor: "#E5E7EB",
            },
          },
        },
        // Login button variant
        {
          props: { variant: "text", color: "inherit", size: "medium" },
          style: {
            width: "90.5px",
            height: "40px",
            borderRadius: "8px",
            padding: "8px",
            borderWidth: "1px",
            backgroundColor: "transparent",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 1,
            color: "#303030",
            textTransform: "none",
            boxShadow: "none",
            '&:hover': {
              color: "#3F83F8",
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
    // Badge/Chip styles for skills, job types, etc.
    MuiChip: {
      styleOverrides: {
        root: {
          height: "25px",
          padding: "4px 12px",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.5,
          letterSpacing: 0,
          borderRadius: "6px",
          '& .MuiChip-label': {
            padding: 0,
          },
        },
        filled: {
          backgroundColor: "#E1EFFE",
          color: "#111928",
        },
        outlined: {
          backgroundColor: "transparent",
          color: "#111928",
          border: "1px solid #E1EFFE",
        },
      },
      variants: [
        // SkillChip (filled)
        {
          props: { variant: "filled", color: "primary" },
          style: {
            backgroundColor: "#E1EFFE",
            color: "#111928",
            borderRadius: "6px",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        // Outlined chip
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            backgroundColor: "transparent",
            color: "#111928",
            border: "1px solid #E1EFFE",
            borderRadius: "6px",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        // Date chip (no background, only border)
        {
          props: { variant: "outlined", color: "default" },
          style: {
            backgroundColor: "transparent",
            color: "#4B5563",
            border: "1px solid #E5E7EB",
            borderRadius: "6px",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
        // Salary chip (filled with icon)
        {
          props: { variant: "filled", color: "secondary" },
          style: {
            backgroundColor: "#E1EFFE",
            color: "#111928",
            borderRadius: "6px",
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
          },
        },
      ],
    },
    // Input field styles
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "transparent",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "#D1D5DB",
            },
            "&:hover fieldset": {
              borderColor: "#3F83F8",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3F83F8",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3,
            color: "#4B5563", // Gray/600
          },
          "& .MuiOutlinedInput-input": {
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem", // 18px
            lineHeight: 1.3,
            color: "#111928", // Gray/900
            "&::placeholder": {
              color: "#76A9FA", // Blue/400
              opacity: 1,
            },
          },
          // Search input specific styles
          "& .MuiOutlinedInput-input[data-search='true']": {
            width: 302,
            height: 52,
            paddingTop: 14,
            paddingRight: 24,
            paddingBottom: 14,
            paddingLeft: 24,
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.3,
            letterSpacing: 0,
            color: "#111928",
            borderRadius: 8,
            backgroundColor: "transparent", // Always transparent
            border: "none", // Remove any border from the input itself
            boxSizing: "border-box",
            "&::placeholder": {
              color: "#76A9FA",
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.3,
              letterSpacing: 0,
            },
          },
          "& .MuiOutlinedInput-root[data-search='true']": {
            backgroundColor: "transparent", // Always transparent
            borderRadius: 8,
            border: "1px solid #BFDBFE",
            minHeight: 52,
            boxSizing: "border-box",
            "& fieldset": {
              borderColor: "#BFDBFE",
              borderWidth: 1,
            },
            "&:hover fieldset": {
              borderColor: "#76A9FA",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1A56DB",
              borderWidth: 2,
            },
            // Remove border/background from icon area
            "& .MuiInputAdornment-root": {
              backgroundColor: "transparent",
              border: "none",
              marginRight: 0,
              paddingLeft: 0,
            },
          },
          // Remove border/gap between icon and input
          "& .MuiInputAdornment-root": {
            marginRight: 0,
          },
          "& .MuiInputAdornment-root .MuiSvgIcon-root": {
            color: "#76A9FA", // blue/400
          },
        },
      },
    },
    // Select dropdown styles
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontWeight: 400,
          fontSize: "1.125rem", // 18px
          lineHeight: 1.3,
          color: "#4B5563", // Gray/600
        },
      },
    },
    // Drawer styles for mobile menu
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFFFFF",
          borderLeft: "1px solid #E5E7EB",
        },
      },
    },
    // List styles for mobile menu
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "12px 16px",
          "&:hover": {
            backgroundColor: "#F3F4F6",
          },
          "&.Mui-selected": {
            backgroundColor: "#E1EFFE", // Blue/100
            borderRight: "3px solid #3F83F8", // Blue/500
            "&:hover": {
              backgroundColor: "#DBEAFE",
            },
          },
        },
      },
    },
  },
  jobListingTable: {
    rowHover: '#E5E7EB', // gray/200
    rowText: '#1F2937', // gray/800
    actionButtonBg: '#F3F4F6', // gray/100
    actionButtonHover: '#E5E7EB', // gray/200
    actionButtonIcon: '#1F2937', // gray/800
    tableHeadBg: '#F9FAFB', // gray/50
    tableHeadText: '#374151', // gray/700
    border: '#E5E7EB', // gray/200
  },
  table: {
    headerBg: '#E5E7EB', // gray/200
    headerText: '#4B5563', // gray/600
    rowText: '#1F2937', // gray/800
    border: '#E5E7EB', // gray/200
    rowHover: '#F3F4F6', // gray/100
    actionButtonBg: '#F3F4F6',
    actionButtonHover: '#E5E7EB',
    actionButtonIcon: '#1F2937',
  },
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
