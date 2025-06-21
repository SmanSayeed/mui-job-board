import CustomChip from './CustomChip';

interface JobTypeChipProps {
  label: string
  variant?: 'jobType' | 'tag'
  uppercase?: boolean
}

export default function JobTypeChip({ label, variant = 'jobType', uppercase = false }: JobTypeChipProps) {
  const displayLabel = (variant === 'jobType' || uppercase) ? label.toUpperCase() : label;
  return (
    <CustomChip
      label={displayLabel}
      variant={variant}
    />
  );
} 