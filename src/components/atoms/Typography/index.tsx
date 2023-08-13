'use client';

import React, { ReactNode } from 'react';
import { css, styled } from 'styled-components';
import { TypographyVariant } from '~/types/styles';

interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
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
};

const TypographyRoot = css``;

const GNTypography = styled.span<TypographyProps>``;

const Typography = (props: TypographyProps) => {
  const { children, variant, ...rest } = props;
  const variantMapping = defaultVariantMapping[variant as TypographyVariant];

  console.log(variantMapping);

  return (
    <GNTypography as={variantMapping} {...rest}>
      {children}
    </GNTypography>
  );
};

export default Typography;
