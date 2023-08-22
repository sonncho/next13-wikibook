'use client';

import Image, { ImageProps } from 'next/image';
import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import { hexToRGBA } from '~/utils/filters';

export type AvartarVariant = 'circle' | 'rounded' | 'square';
export type ColorValueHex = `#${string}`;

interface AvatarProps {
  children?: ReactNode;
  /**
   * 배경색상 HexCode
   */
  $bgColor?: ColorValueHex;
  /**
   * 아바타 모양
   */
  $variant?: AvartarVariant;
  /**
   * 넓이
   */
  $width?: number;
  /**
   * 높이
   */
  $height?: number;
  /**
   * 이미지 설명
   * <br/>
   * (src를 지정하는 경우 반드시 작성)
   */
  alt?: string;
  /**
   * 이미지 경로
   * <br/>
   * (외부이미지 | public폴더내 이미지)
   */
  src?: string;
  /**
   * Inine CSS Style
   */
  style?: CSSProperties;
}

const StyledAvatar = styled('div')<AvatarProps>`
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
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? `${hexToRGBA($bgColor, 1)}` : theme.palette.grey[300]};
  border-radius: ${({ $variant }) =>
    $variant === 'circle' ? '50%' : $variant === 'rounded' ? '4px' : '0px'};
`;

const AvatarImage = styled(Image)<ImageProps>`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
  text-indent: 10000px;
`;

const Avatar = (props: AvatarProps) => {
  const {
    $variant = 'circle',
    $width = 40,
    $height = 40,
    $bgColor,
    src,
    alt,
    children,
    ...rest
  } = props;
  return (
    <StyledAvatar
      className={`GnAvatar-root GnAvatar-${$variant}`}
      $variant={$variant}
      $bgColor={$bgColor}
      $width={$width}
      $height={$height}
      {...rest}
    >
      {children}
      {src && alt && (
        <AvatarImage
          className="GnAvatar-img"
          width="0"
          height="0"
          sizes="100vw"
          alt={alt}
          src={src}
        />
      )}
    </StyledAvatar>
  );
};

export default Avatar;
