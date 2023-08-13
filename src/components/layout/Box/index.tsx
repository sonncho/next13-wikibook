'use client';

import { css, styled } from 'styled-components';

interface BoxProps {
  component?: HTMLElementTagNameMap;
  children?: React.ReactNode;
}

const StyledBox = styled.div<BoxProps>`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      width: 900px;
    }
  `};
`;

const Box = (props: BoxProps) => {
  const { children, ...rest } = props;
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
