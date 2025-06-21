import React from 'react';
import Button from '@mui/material/Button';

export default function ApplyNowButton({ children = 'Apply Now', sx, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{
        width: 139,
        height: 51,
        paddingTop: '14px',
        paddingRight: '24px',
        paddingBottom: '14px',
        paddingLeft: '24px',
        borderRadius: '8px',
        backgroundColor: '#1A56DB', // primary/700
        color: '#FFFFFF',
        fontFamily: 'var(--font-inter), Inter, sans-serif',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        textTransform: 'none',
        boxShadow: 'none',
        gap: 2,
        '&:hover': {
          backgroundColor: '#1E40AF', // primary/800
          boxShadow: 'none',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
} 