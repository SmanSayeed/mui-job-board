import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A56DB', // Matches Figma primary color
      dark: '#000',
    },
    secondary: {
      main: '#ff4081', // Matches Figma secondary color
    },
    background: {
      default: '#fff', // Matches Figma background
    },
    text: {
      primary: "#4B5563", // Matches Figma text color gray-600
      secondary: "#111928", // Add for secondary text gray-900
    },
    action:{
      active:"#3F83F8", //Hover and selected color blue/500
      hover:"#3F83F8"
    }
  },
  typography: {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    h1: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '2rem' },
    h2: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '1.5rem' },
    h3: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '1.25rem' },
    h4: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '1.125rem' },
    h5: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '1rem' },
    h6: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, fontSize: '0.875rem' },
    body1: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, fontSize: '1rem' },
    body2: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem' },
    button: { fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase' },
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