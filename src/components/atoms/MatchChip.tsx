import CustomChip from './CustomChip';
import { Box } from "@mui/material"

interface MatchChipProps {
  matchPercentage: number
}

export default function MatchChip({ matchPercentage }: MatchChipProps) {
  return (
    <CustomChip
      icon={
        <Box
          component="img"
          src="/icons/star.svg"
          alt="star"
          sx={{ width: 16, height: 16, ml: 0, mr: 0.5, display: 'flex', alignItems: 'center' }}
        />
      }
      label={`${matchPercentage}% match`}
      variant="match"
    />
  )
} 