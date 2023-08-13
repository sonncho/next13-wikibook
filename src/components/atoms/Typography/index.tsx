'use client';

import React, { ReactNode } from 'react';
import { css, styled } from 'styled-components';
import { Variant } from '~/types/theme/typography';

interface TypographyProps {
  children: ReactNode;
  variant: Variant;
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
  caption: 'p',
  button: 'p',
  overline: 'p',
};

const TypographyRoot = css``;

const GNTypography = styled.p<TypographyProps>`
  ${TypographyRoot};
`;

const Typography = (props: TypographyProps) => {
  const { children, variant, ...rest } = props;
  const variantMapping = defaultVariantMapping[variant];

  return (
    <GNTypography as={variantMapping} variant={variant} {...rest}>
      {children}
    </GNTypography>
  );
};

export default Typography;
