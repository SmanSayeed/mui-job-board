import Typography from '@mui/material/Typography';

export default function JobListingTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: 32,
        lineHeight: 1.1,
        letterSpacing: 0,
        color: '#374151',
        verticalAlign: 'middle',
      }}
    >
      {children}
    </Typography>
  );
} 