import CustomChip from "./CustomChip";


interface SkillChipProps {
  label: string
}

export default function SkillChip({ label }: SkillChipProps) {
  return <CustomChip label={label} variant="skill" />;
} 