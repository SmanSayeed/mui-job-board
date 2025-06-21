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
      sx={{ color: "text.secondary", mb: 3, px: 3 }}
    >
      <DescriptionOutlinedIcon sx={{ fontSize: 18, color: theme.palette.grey[500], mt: 0.25 }} />
      <Typography variant="body2" sx={{ color: theme.palette.grey[500] }}>
        {description}
      </Typography>
    </Stack>
  )
} 