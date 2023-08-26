'use client';

import { ElementType, HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import {
  CSSPropertyGridArea,
  CSSPropertyGridAutoFlow,
  CSSPropertyGridColumn,
  CSSPropertyGridRow,
  Responsive,
} from '~/types/cssProps';
import { ColorKeys } from '~/types/theme';
import { toPropValue } from '~/utils/cssProps';

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  $component?: ElementType;
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
  $textColor?: Responsive<ColorKeys>;
  $display?: Responsive<string>;
  $overflow?: Responsive<string>;

  // about grid props
  $grid?: boolean;
  $gap?: Responsive<number>;
  $columnGap?: Responsive<string>;
  $rowGap?: Responsive<string>;
  $column?: Responsive<CSSPropertyGridColumn>;
  $row?: Responsive<CSSPropertyGridRow>;
  $autoFlow?: Responsive<CSSPropertyGridAutoFlow>;
  $autoColumns?: Responsive<string>;
  $autoRows?: Responsive<string>;
  $templateColumns?: Responsive<string>;
  $templateRows?: Responsive<string>;
  $templateAreas?: Responsive<CSSPropertyGridArea>;
  $area?: Responsive<string>;
}

//* Root Box Style

const StyledBox = styled.div<BoxProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
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
  ${(prop) => toPropValue('color', prop.$textColor, prop.theme)};
  ${(prop) => toPropValue('width', prop.$width, prop.theme)};
  ${(prop) => toPropValue('height', prop.$height, prop.theme)};
  ${(prop) => toPropValue('min-width', prop.$minWidth, prop.theme)};
  ${(prop) => toPropValue('min-height', prop.$minHeight, prop.theme)};
  ${(prop) => toPropValue('overflow', prop.$overflow, prop.theme)};
  ${(prop) => toPropValue('display', prop.$display, prop.theme)}

  /* columnGap
  rowGap
  column
  row
  autoFlow
  autoColumns
  autoRows
  templateColumns
  templateRows
  templateAreas
  area */

  // grid가 true인경우에만 적용
  display: ${({ $grid }) => $grid && 'grid'};
  ${(props) => props.$grid && toPropValue('grid-gap', props.$gap, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-column-gap', props.$columnGap, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-row-gap', props.$rowGap, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-row', props.$row, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-column', props.$column, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-auto-flow', props.$autoFlow, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-auto-columns', props.$autoColumns, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-auto-rows', props.$autoRows, props.theme)}
  ${(props) =>
    props.$grid && toPropValue('grid-template-columns', props.$templateColumns, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-template-rows', props.$templateRows, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-template-areas', props.$templateAreas, props.theme)}
  ${(props) => props.$grid && toPropValue('grid-area', props.$area, props.theme)}
`;

const Box = (props: BoxProps) => {
  const { $component, ...rest } = props;
  return (
    <StyledBox
      as={$component}
      className={`GnBox-root ${props.$grid ? 'GnBox-grid' : ''}`}
      {...rest}
    >
      {props.children}
    </StyledBox>
  );
};

export default Box;
