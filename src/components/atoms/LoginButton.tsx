import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

const LoginButton: React.FC<ButtonProps> = ({ variant = 'text', sx, children = 'Login', ...props }) => (
  <Button
    component={Link}
    href="/login"
    variant={variant}
    color="inherit"
    sx={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1,
      color: '#303030',
      textTransform: 'none',
      minWidth: 0,
      p: 0,
      '&:hover': { color: '#3F83F8', background: 'none' },
      ...sx,
    }}
    {...props}
  >
    {children}
  </Button>
);

export default LoginButton; 