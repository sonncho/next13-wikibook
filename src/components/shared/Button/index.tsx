'use client';

import { ButtonHTMLAttributes } from 'react';
import StyledButton from './buttonStyle';
import { ColorTypes } from '~/@core/themes/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorTypes;
  size?: 'large' | 'medium' | 'small';
  variant?: 'contained' | 'outlined' | 'text';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  color = 'primary',
  size = 'medium',
  variant = 'text',
  startIcon,
  endIcon,
  disabled = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $color={color}
      $size={size}
      $variant={variant}
      disabled={disabled}
      className={`GnButton GnButton-${variant} GnButton-${size}`}
      {...rest}
    >
      {startIcon ?? ''}
      {children}
      {endIcon ?? ''}
    </StyledButton>
  );
};

export default Button;
