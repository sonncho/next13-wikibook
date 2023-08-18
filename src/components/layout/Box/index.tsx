'use client';

import { styled } from 'styled-components';
import { Responsive } from '~/types/cssProps';
import { ColorKeys } from '~/types/theme';
import { toPropValue } from '~/utils/cssProps';

export interface BoxProps {
  component?: string;
  width?: Responsive<number>;
  height?: Responsive<number>;
  minWidth?: Responsive<number>;
  minHeight?: Responsive<number>;
  m?: Responsive<number>;
  mr?: Responsive<number>;
  mt?: Responsive<number>;
  ml?: Responsive<number>;
  mb?: Responsive<number>;
  p?: Responsive<number>;
  pr?: Responsive<number>;
  pb?: Responsive<number>;
  pl?: Responsive<number>;
  pt?: Responsive<number>;
  display?: Responsive<string>;
  overflow?: Responsive<string>;
  bgColor?: Responsive<ColorKeys>;
  color?: Responsive<ColorKeys>;
  children?: React.ReactNode;
}
export interface StyledBoxProps {
  $width?: Responsive<number>;
  $height?: Responsive<number>;
  $minWidth?: Responsive<number>;
  $minHeight?: Responsive<number>;
  $m?: Responsive<number>;
  $mr?: Responsive<number>;
  $ml?: Responsive<number>;
  $mt?: Responsive<number>;
  $mb?: Responsive<number>;
  $p?: Responsive<number>;
  $pr?: Responsive<number>;
  $pb?: Responsive<number>;
  $pt?: Responsive<number>;
  $pl?: Responsive<number>;
  $bgColor?: Responsive<ColorKeys>;
  $color?: Responsive<ColorKeys>;
  $display?: Responsive<string>;
  $overflow?: Responsive<string>;
  children?: React.ReactNode;
}

//* Root Box Style

const StyledBox = styled.div<StyledBoxProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  width: 100%;
  ${(prop) => toPropValue('margin', prop.$m, prop.theme)};
  ${(prop) => toPropValue('margin-top', prop.$mt, prop.theme)};
  ${(prop) => toPropValue('margin-right', prop.$mr, prop.theme)};
  ${(prop) => toPropValue('margin-bottom', prop.$mb, prop.theme)};
  ${(prop) => toPropValue('margin-left', prop.$ml, prop.theme)};
  ${(prop) => toPropValue('padding', prop.$p, prop.theme)};
  ${(prop) => toPropValue('padding-top', prop.$pt, prop.theme)};
  ${(prop) => toPropValue('padding-right', prop.$pr, prop.theme)};
  ${(prop) => toPropValue('padding-bottom', prop.$pb, prop.theme)};
  ${(prop) => toPropValue('padding-left', prop.$pl, prop.theme)};
  ${(prop) => toPropValue('background-color', prop.$bgColor, prop.theme)};
  ${(prop) => toPropValue('color', prop.$color, prop.theme)};
  ${(prop) => toPropValue('width', prop.$width, prop.theme)};
  ${(prop) => toPropValue('height', prop.$height, prop.theme)};
  ${(prop) => toPropValue('min-width', prop.$minWidth, prop.theme)};
  ${(prop) => toPropValue('min-height', prop.$minHeight, prop.theme)};
  ${(prop) => toPropValue('overflow', prop.$overflow, prop.theme)};
  ${(prop) => toPropValue('display', prop.$display, prop.theme)};
`;

const Box = (props: BoxProps) => {
  const {
    width,
    height,
    minWidth,
    minHeight,
    m,
    mr,
    mt,
    ml,
    mb,
    p,
    pr,
    pb,
    pl,
    pt,
    display,
    overflow,
    bgColor,
    color,
    ...rest
  } = props;
  return (
    <StyledBox
      $width={width}
      $height={height}
      $minHeight={minHeight}
      $minWidth={minWidth}
      $m={m}
      $mr={mr}
      $mt={mt}
      $ml={ml}
      $mb={mb}
      $p={p}
      $pr={pr}
      $pt={pt}
      $pb={pb}
      $pl={pl}
      $bgColor={bgColor}
      $color={color}
      $display={display}
      $overflow={overflow}
      {...rest}
    >
      {props.children}
    </StyledBox>
  );
};

export default Box;
