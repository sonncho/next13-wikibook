import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { LabelSize, Variant } from '~/types';
import { ColorKeys } from '~/types/theme';
import { generateClassNames } from '~/utils/filters';

interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
  color?: ColorKeys;
  error?: boolean;
  focused?: boolean;
  margin?: 'dense';
  required?: boolean;
  size?: LabelSize;
  variant?: Variant;
}

const StyledLabelRoot = styled.label<{ $color: ColorKeys }>`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  max-width: 133%;
  transform: translate(0px, -1.5px) scale(0.75);
  transition:
    color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &.Gn-focused {
    color: ${({ theme, $color }) => theme.palette[$color].main};
  }
`;

const InputLabel = ({ children, focused = false, color = 'primary', ...rest }: InputLabelProps) => {
  const classes = generateClassNames('GnInputLabel', [focused && 'focused', color && `${color}`]);
  return (
    <StyledLabelRoot className={classes} $color={color} {...rest}>
      {children}
    </StyledLabelRoot>
  );
};

export default InputLabel;
