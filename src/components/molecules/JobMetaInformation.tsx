import React from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps, useTheme } from '@mui/material/styles';

export type JobMetaVariant = 'posted' | 'apply' | 'company' | 'salary';

interface JobMetaInformationProps {
  icon: React.ReactElement;
  label: string;
  variant: JobMetaVariant;
  sx?: SxProps;
}

export default function JobMetaInformation({ icon, label, variant, sx }: JobMetaInformationProps) {
  const theme = useTheme();
  let typographyVariant = 'body2';
  let iconColor = undefined;
  let extraSx = {};
  switch (variant) {
    case 'posted':
      typographyVariant = 'jobMetaPosted';
      iconColor = theme.palette.neutral.coolGray600 || '#697077';
      break;
    case 'apply':
      typographyVariant = 'jobMetaApply';
      iconColor = theme.palette.neutral.coolGray600 || '#697077';
      break;
    case 'company':
      typographyVariant = 'jobMetaCompany';
      iconColor = '#4D5358';
      extraSx = { textDecoration: 'underline', textDecorationStyle: 'solid', textDecorationSkip: 'auto' };
      break;
    case 'salary':
      typographyVariant = 'jobMetaSalary';
      iconColor = '#4D5358';
      break;
    default:
      break;
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx }}>
      <Box component="span" sx={{ fontSize: 16, color: iconColor, display: 'flex', alignItems: 'center' }}>{icon}</Box>
      <Typography variant={typographyVariant as any} sx={extraSx}>{label}</Typography>
    </Box>
  );
}
