import React from 'react'
import Button from '@mui/material/Button'
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/navigation';

export default function BackButton(props: React.ComponentProps<typeof Button>) {
  const router = useRouter();
  const { onClick, ...rest } = props;
  return (
    <Button
      startIcon={<WestIcon />}
      variant="text"
      color="primary"
      size="medium"
      onClick={onClick ? onClick : () => router.back()}
      {...rest}
    >
      Back
    </Button>
  )
}
