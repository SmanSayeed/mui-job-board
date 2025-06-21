import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const styleMap = {
  blue: {
    medium: {
      size: 50,
      iconSize: 28,
      bg: '#F3F4F6',
      color: '#3F83F8',
      hoverBg: '#e0e7ef',
    },
    small: {
      size: 32,
      iconSize: 20,
      bg: '#F3F4F6',
      color: '#3F83F8',
      hoverBg: '#e0e7ef',
    },
  },
  yellow: {
    large: {
      size: 70,
      iconSize: 36,
      bg: '#FDF6B2',
      color: '#E3A008',
      hoverBg: '#f7e6a2',
    },
  },
  green: {
    large: {
      size: 70,
      iconSize: 36,
      bg: '#DEF7EC',
      color: '#31C48D',
      hoverBg: '#c6f0dd',
    },
  },
  purple: {
    large: {
      size: 70,
      iconSize: 36,
      bg: '#EDEBFE',
      color: '#AC94FA',
      hoverBg: '#d6d1fa',
    },
  },
  pink: {
    large: {
      size: 70,
      iconSize: 36,
      bg: '#FCE8F3',
      color: '#F17EB8',
      hoverBg: '#f9d0e7',
    },
  },
};

type Color = keyof typeof styleMap;
type Size = 'small' | 'medium' | 'large';

type RoundedIconButtonProps = {
  icon: ReactElement;
  color?: Color;
  size?: Size;
  sx?: any;
} & Omit<ButtonProps, 'children'>;

function getVariant(color: Color, size: Size) {
  const colorMap = styleMap[color];
  if (colorMap && (colorMap as any)[size]) {
    return (colorMap as any)[size];
  }
  // fallback: blue/medium
  return styleMap.blue.medium;
}

export default function RoundedIconButton({ icon, color = 'blue', size = 'medium', sx, ...props }: RoundedIconButtonProps) {
  const variant = getVariant(color, size);
  return (
    <Button
      sx={{
        minWidth: 0,
        width: variant.size,
        height: variant.size,
        borderRadius: '50%',
        backgroundColor: variant.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'none',
        p: 0,
        transition: 'background 0.2s',
        '&:hover': {
          backgroundColor: variant.hoverBg,
          boxShadow: 'none',
        },
        ...sx,
      }}
      {...props}
    >
      <Avatar
        sx={{
          bgcolor: 'transparent',
          color: variant.color,
          width: variant.iconSize,
          height: variant.iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Avatar>
    </Button>
  );
}
