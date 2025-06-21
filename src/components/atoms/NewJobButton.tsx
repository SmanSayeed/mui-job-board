import React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function NewJobButton({ children = 'New Job', ...props }: React.ComponentProps<typeof Button>) {
  // Remove 'newjob' from props before passing to Button to avoid React warning
  const { newjob, ...rest } = props as any;
  return (
    <Button
      variant="contained" 
      startIcon={<AddCircleOutlineIcon />}
      {...rest}
      sx={{
        height: "52px"
      }}
    >
      {children}
    </Button>
  );
} 