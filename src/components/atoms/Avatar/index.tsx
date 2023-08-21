'use client';

import Image, { ImageProps } from 'next/image';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Responsive } from '~/types/cssProps';

type AvartarVariant = 'circle' | 'rounded' | 'square';

interface AvatarProps {
  children?: ReactNode;
  $variant?: AvartarVariant;
  $width?: Responsive<number>;
  $height?: Responsive<number>;
  alt?: string;
  src?: string;
}

const getShape = ({ $variant }: { $variant: AvartarVariant }) => {
  switch ($variant) {
    case 'rounded': {
      return '4px';
    }
    case 'square': {
      return '0';
    }
    default: {
      return '50%';
    }
  }
};

const StyledAvatar = styled('div')<AvatarProps>`
  border: 1px solid #222;
  width: 40px;
  height: 40px;
  display: flex;
  font-size: 1.25rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  line-height: 1;
  color: rgb(18, 18, 18);

  border-radius: ${(props) => getShape(props)};
`;

const Avatar = (props: AvatarProps) => {
  const { $variant = 'circle', $width = 40, $height = 40, alt, children, ...imageProps } = props;
  return (
    <StyledAvatar $variant={$variant}>
      {children}
      {/* <Image $width={$width} $height={$height} {...imageProps} /> */}
    </StyledAvatar>
  );
};

export default Avatar;
