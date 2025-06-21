import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function DesignationTitle({ children = 'Senior UX Designer', ...props }: TypographyProps) {
  return (
    <Typography variant="designationTitle" {...props}>
      {children}
    </Typography>
  )
}
