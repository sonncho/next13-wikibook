'use client';

import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

const ButtonStyle = styled.button<ButtonProps>`
  background-color: red;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
