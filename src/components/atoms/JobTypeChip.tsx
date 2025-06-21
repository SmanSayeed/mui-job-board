import { Chip } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface JobTypeChipProps {
  label: string
  variant?: 'jobType' | 'tag'
  uppercase?: boolean
}

export default function JobTypeChip({ label, variant = 'jobType', uppercase = false }: JobTypeChipProps) {
  const theme = useTheme();
  const displayLabel = (variant === 'jobType' || uppercase) ? label.toUpperCase() : label;
  return (
    <Chip
      label={displayLabel}
      sx={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[900],
        fontWeight: 500,
        fontSize: '0.875rem',
        borderRadius: '6px',
        height: 25,
        px: 1.5,
        letterSpacing: 0,
        textTransform: 'none',
      }}
    />
  );
} 