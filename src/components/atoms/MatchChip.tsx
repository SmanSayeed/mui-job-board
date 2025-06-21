import { Chip, Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface MatchChipProps {
  matchPercentage: number
}

export default function MatchChip({ matchPercentage }: MatchChipProps) {
  const theme = useTheme();
  return (
    <Chip
      icon={
        <Box
          component="img"
          src="/icons/star.svg"
          alt="star"
          sx={{ width: 16, height: 16, ml: 0, mr: 0.5, display: 'flex', alignItems: 'center' }}
        />
      }
      label={`${matchPercentage}% match`}
      variant="filled"
      color="primary"
      sx={{
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.primary[500],
        borderRadius: '16px',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.5,
        letterSpacing: 0,
        height: 32,
        pl: 1.5,
        pr: 1.5,
        '.MuiChip-icon': {
          marginLeft: 0,
          marginRight: 1,
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
        },
        '.MuiChip-label': {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}
    />
  )
} 