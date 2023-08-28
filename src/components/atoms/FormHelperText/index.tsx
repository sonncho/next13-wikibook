import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';

interface FormHelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  disabled?: boolean;
}

const StyledFormHelperText = styled.p`
  margin: 3px 0px 0px;
  text-align: left;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  color: ${({ theme }) => theme.typography.caption.color};
`;

const FormHelperText = ({ children, disabled = false }: FormHelperTextProps) => {
  const classes = generateClassNames('GnFormHelperText', ['root', disabled && 'disabled']);

  return <StyledFormHelperText className={classes}>{children}</StyledFormHelperText>;
};

export default FormHelperText;
