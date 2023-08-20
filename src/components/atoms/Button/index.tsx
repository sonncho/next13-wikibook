'use client';

import { ButtonHTMLAttributes } from 'react';
import StyledButton from './buttonStyle';
import { ColorKeys } from '~/types/theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $color?: ColorKeys;
  $size?: 'large' | 'medium' | 'small';
  $variant?: 'contained' | 'outlined' | 'text';
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  $disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  $color = 'primary',
  $size = 'medium',
  $variant = 'text',
  $disabled = false,
  startIcon,
  endIcon,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $color={$color}
      $size={$size}
      $variant={$variant}
      disabled={$disabled}
      className={`GnButton GnButton-${$variant} GnButton-${$size}`}
      {...rest}
    >
      {startIcon && (
        <span className={`GnButton-startIcon GnSvgIcon GnSvgIcon-${$size}`}>{startIcon}</span>
      )}
      {children}
      {endIcon && (
        <span className={`GnButton-endIcon GnSvgIcon GnSvgIcon-${$size}`}>{endIcon}</span>
      )}
    </StyledButton>
  );
};

export default Button;
