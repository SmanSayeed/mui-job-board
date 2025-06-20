import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Matches Figma primary color
    },
    secondary: {
      main: '#ff4081', // Matches Figma secondary color
    },
    background: {
      default: '#fff', // Matches Figma background
    },
    text: {
      primary: '#000', // Matches Figma text color
      secondary: '#757575', // Add for secondary text (e.g., dates)
    },
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
    h1: { fontWeight: 700, fontSize: '2rem' }, // 32px
    h2: { fontWeight: 500, fontSize: '1.5rem' }, // 24px
    body1: { fontWeight: 400, fontSize: '1rem' }, // 16px
    body2: { fontWeight: 400, fontSize: '0.875rem' }, // 14px, add for smaller text
    button: { fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase' }, // 14px, matches Figma button style
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: #fff;
        }
      `,
    },
    // Add AppBar styles for consistency
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow from Figma
        },
      },
    },
    // Add Button styles
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          padding: '8px 16px',
          borderRadius: '4px',
        },
      },
    },
  },
});

export default theme;