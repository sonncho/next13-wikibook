'use client';

import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { ColorTypes } from '~/@core/themes/types';

const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid violet;
  font-size: 14px;
  box-shadow: none;
  outline: 0;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorTypes;
  children: React.ReactNode;
}

const Button = ({ color = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyle color={color} {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
