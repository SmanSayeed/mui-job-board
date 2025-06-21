import { Chip } from "@mui/material"

interface SkillChipProps {
  label: string
}

export default function SkillChip({ label }: SkillChipProps) {
  return <Chip label={label} variant="filled" color="primary" />;
} 