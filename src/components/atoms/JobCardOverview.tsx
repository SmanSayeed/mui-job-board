import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'

interface JobCardOverviewProps {
  description: string
}

const JobCardOverview: React.FC<JobCardOverviewProps> = ({ description }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 3, width: "100%" }}>
      <Typography
        sx={{
          ...theme.typography.subtitle2,
          color: theme.palette.text.primary,
          mb: 1,
        }}
      >
        Job Overview
      </Typography>
      <Typography
        component="div"
        sx={{
          ...theme.typography.overline,
          color: theme.palette.text.primary,
          '& ul': {
            pl: 3,
            mb: 1.5,
            mt: 0,
          },
          '& li': {
            ...theme.typography.overline,
            color: theme.palette.text.primary,
            listStyleType: 'disc',
            mb: 0.5,
          },
        }}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Box>
  )
}

export default JobCardOverview
