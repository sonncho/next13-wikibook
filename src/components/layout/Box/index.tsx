'use client';

import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import { Responsive } from '~/types/cssProps';
import { toPropValue } from '~/utils/cssProps';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  component?: string;
  width?: number;
  height?: number;
  m?: number;
  mr?: number;
  mt?: number;
  mb?: Responsive<string>;
  p?: Responsive<string>;
  display?: Responsive<string>;
  overflow?: Responsive<string>;
  children?: React.ReactNode;
}
interface StyledBoxProps {
  $width?: number;
  $height?: number;
  $m?: number;
  $mr?: number;
  $ml?: number;
  $mt?: number;
  $mb?: Responsive<string>;
  $p?: Responsive<string>;
  $pr?: Responsive<string>;
  $pb?: Responsive<string>;
  $pt?: Responsive<string>;
  $pl?: Responsive<string>;
}

//* Root Box Style

const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  margin-top: ${({ theme }) => `${theme.spacing(4)}`};
  ${(prop) => toPropValue('margin', prop.$m, prop.theme)};
  ${(prop) => toPropValue('margin-top', prop.$mt, prop.theme)};

  border: 1px solid #222;
`;

const Box = (props: BoxProps) => {
  const { width, height, m, children, ...rest } = props;
  return (
    <StyledBox $width={width} $height={height} $m={m} {...rest}>
      {children}
    </StyledBox>
  );
};

export default Box;
