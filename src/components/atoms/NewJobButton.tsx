import React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function NewJobButton({ children = 'New Job', ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="contained"
      newjob={true}
      startIcon={<AddCircleOutlineIcon />}
      {...props}
      sx={{
        height:"52px"
      }}
    >
      {children}
    </Button>
  );
} 