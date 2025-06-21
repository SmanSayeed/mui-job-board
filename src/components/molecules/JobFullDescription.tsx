"use client"
import { Stack, Typography, useTheme } from "@mui/material"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"

interface JobFullDescriptionProps {
  description: string
}

export default function JobFullDescription({ description }: JobFullDescriptionProps) {
  const theme = useTheme()
  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      spacing={1}
      sx={{ 
        color: "text.secondary", 
        mb: 3, 
        px: { xs: 2, md: 3 },
        gap: { xs: 0.5, md: 1 }
      }}
    >
      <DescriptionOutlinedIcon sx={{ 
        fontSize: { xs: 16, md: 18 }, 
        color: theme.palette.grey[500], 
        mt: { xs: 0, md: 0.25 },
        flexShrink: 0
      }} />
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.grey[500],
          fontSize: { xs: 13, md: 14 },
          lineHeight: { xs: 1.5, md: 1.6 }
        }}
      >
        {description}
      </Typography>
    </Stack>
  )
} 