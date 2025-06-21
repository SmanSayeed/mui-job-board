import React, { ReactElement } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const colorMap = {
  blue: {
    bg: '#F3F4F6',
    color: '#3F83F8',
    hoverBg: '#e0e7ef',
  },
  yellow: {
    bg: '#FDF6B2',
    color: '#E3A008',
    hoverBg: '#f7e6a2',
  },
  green: {
    bg: '#DEF7EC',
    color: '#31C48D',
    hoverBg: '#c6f0dd',
  },
  purple: {
    bg: '#EDEBFE',
    color: '#AC94FA',
    hoverBg: '#d6d1fa',
  },
  pink: {
    bg: '#FCE8F3',
    color: '#F17EB8',
    hoverBg: '#f9d0e7',
  },
};

const sizeStyles = {
  mid: {
    width: 50,
    height: 50,
    gap: '10px',
    borderRadius: '30px',
    iconSize: 28,
    paddingLeft: 0,
    paddingRight: 0,
  },
  small: {
    width: 32,
    height: 32,
    gap: undefined,
    borderRadius: '50%',
    iconSize: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  large: {
    width: 70,
    height: 70,
    gap: '10px',
    borderRadius: '40px',
    iconSize: 36,
    paddingLeft: 0,
    paddingRight: 0,
  },
};

type RoundedIconButtonColor = keyof typeof colorMap;
type RoundedIconButtonSizeVariant = keyof typeof sizeStyles;

type RoundedIconButtonProps = {
  icon: ReactElement;
  color: RoundedIconButtonColor;
  sizeVariant?: RoundedIconButtonSizeVariant;
  sx?: any;
  buttonProps?: ButtonProps;
};

export default function RoundedIconButton({ icon, color, sizeVariant = 'mid', sx, buttonProps }: RoundedIconButtonProps) {
  const safeColor: RoundedIconButtonColor = (color in colorMap ? color : 'blue');
  const variant = colorMap[safeColor];
  const size = sizeStyles[sizeVariant];
  return (
    <Button
      sx={{
        minWidth: 0,
        width: size.width,
        height: size.height,
        borderRadius: size.borderRadius,
        backgroundColor: variant.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: 'none',
        p: 0,
        ...(size.gap ? { gap: size.gap } : {}),
        paddingLeft: size.paddingLeft,
        paddingRight: size.paddingRight,
        transition: 'background 0.2s',
        '&:hover': {
          backgroundColor: variant.hoverBg,
          boxShadow: 'none',
        },
        ...sx,
      }}
      {...buttonProps}
    >
      <Avatar
        sx={{
          bgcolor: 'transparent',
          color: variant.color,
          width: size.iconSize,
          height: size.iconSize,
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