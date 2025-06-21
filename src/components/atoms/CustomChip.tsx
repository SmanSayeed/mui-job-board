import React from 'react';
import { Chip, ChipProps } from '@mui/material';

export type CustomChipVariant =
  | 'status'
  | 'skill'
  | 'match'
  | 'jobType'
  | 'tag';

export interface CustomChipProps extends Omit<ChipProps, 'variant' | 'color'> {
  variant: CustomChipVariant;
  color?: ChipProps['color'] | 'freelance' | 'extra-job' | 'part-time' | 'full-time' | 'default';
}

const CustomChip: React.FC<CustomChipProps> = ({ variant, color, ...props }) => {
  return (
    <Chip
      variant={variant as any}
      color={color as any}
      {...props}
    />
  );
};

export default CustomChip; 