'use client';

import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { CSSPropertyTextAlign, Responsive, SystemProps } from '~/types/cssProps';

import { Variant } from '~/types/theme/typography';
import { toPropValue } from '~/utils/cssProps';

interface TypographyProps extends SystemProps {
  children: ReactNode;
  $variant: Variant;
  $display?: 'block' | 'inline-block' | 'inline';
  $component?: React.ElementType;
  $align?: Responsive<CSSPropertyTextAlign>;
  style?: React.CSSProperties;
}

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p',
  caption: 'span',
  button: 'span',
  overline: 'span',
};

// const

const GNTypography = styled('p')<TypographyProps>`
  ${({ $variant, theme }) => {
    if ($variant && theme.typography[$variant as Variant] && ($variant as Variant)) {
      return css`
        color: ${theme.typography[$variant].color};
        font-size: ${theme.typography[$variant].fontSize};
        font-weight: ${theme.typography[$variant].fontWeight};
        letter-spacing: ${theme.typography[$variant].letterSpacing};
        line-height: ${theme.typography[$variant].lineHeight};
      `;
    }
  }}
  display: ${({ $display }) => $display};
  ${(props) => toPropValue('text-align', props.$align, props.theme)}
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
`;

const Typography = (props: TypographyProps) => {
  const { children, $component, $variant, $align = 'inherit', ...rest } = props;
  const variantMapping = defaultVariantMapping[props.$variant];

  return (
    <GNTypography
      as={$component || variantMapping}
      $variant={$variant}
      $align={$align}
      className={`GnTypography-root GnTypography-${$variant}`}
      {...rest}
    >
      {children}
    </GNTypography>
  );
};

export default Typography;
