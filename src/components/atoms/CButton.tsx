import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

export type CButtonVariant =
  | 'login'
  | 'signup'
  | 'applyNow'
  | 'newJob'
  | 'quickApply'
  | 'save';

interface CButtonProps extends Omit<ButtonProps, 'variant'> {
  variant: CButtonVariant;
}

const CButton: React.FC<CButtonProps> = ({ variant, children, ...props }) => {
  return (
    <Button variant={variant as any} {...props}>
      {children}
    </Button>
  );
};

export default CButton;
