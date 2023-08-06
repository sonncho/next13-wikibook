'use client';

import { ButtonHTMLAttributes } from 'react';
import { css, styled } from 'styled-components';
import { ColorTypes } from '~/@core/themes/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorTypes;
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
}

const getSizeStyles = ({ size = 'medium' }) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case 'large': {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

const StyledButton = styled.button<ButtonProps>`
  /* border: 1px solid violet; */
  font-size: 14px;
  box-shadow: none;
  outline: 0;
  ${(props) => getSizeStyles(props)}
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({
  color = 'primary',
  size = 'medium',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
