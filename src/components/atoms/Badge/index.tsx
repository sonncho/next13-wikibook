'use client';

import { ReactNode, useCallback } from 'react';
import { capitalize, generateClassNames } from '~/utils/filters';
import { ColorKeys } from '~/types/theme';
import styled from 'styled-components';
import { AnchorOrigin } from '~/types';

type BadgeVariant = 'dot' | 'standard';
interface BadgeProps {
  /**
   * 이 노드를 기준으로 배지가 추가
   */
  children?: ReactNode;
  /**
   * 뱃지안에 렌더될 콘텐츠
   */
  badgeContent?: ReactNode;
  /**
   * 뱃지 생상
   */
  color?: ColorKeys;
  /**
   * badgeContent가 0일때 뱃지 노출 여부
   */
  showZero?: boolean;
  /**
   * 뱃지 위치
   */
  anchorOrigin?: AnchorOrigin;
  /**
   * 뱃지 노출 여부
   */
  invisible?: boolean;
  /**
   * 최대 노출할 수
   */
  max?: number;
  /**
   * 뱃지 스타일
   */
  variant?: BadgeVariant;
}

const StyledBadgeRoot = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
  svg {
    /* 예시샘플스타일 */
    font-size: 1.5rem;
    user-select: none;
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const StyledBadge = styled.span<{
  $color: ColorKeys;
  $anchorOrigin: AnchorOrigin;
  $variant: BadgeVariant;
}>`
  display: flex;
  flex-flow: wrap;
  place-content: center;
  align-items: center;
  position: absolute;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  line-height: 1.5;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 1;
  background-color: ${({ theme, $color }) => theme.palette[$color].main};
  color: ${({ theme, $color }) => theme.palette[$color].contrastText};
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  // variant
  min-width: ${({ $variant }) => ($variant === 'standard' ? '20px' : '8px')};
  height: ${({ $variant }) => $variant === 'dot' && '8px'};
  padding: ${({ theme, $variant }) => ($variant === 'standard' ? theme.spacing(0, 1.5) : '0px')};

  // position
  top: ${({ $anchorOrigin }) => $anchorOrigin.vertical === 'top' && 0};
  right: ${({ $anchorOrigin }) => $anchorOrigin.horizontal === 'right' && 0};
  bottom: ${({ $anchorOrigin }) => $anchorOrigin.vertical === 'bottom' && 0};
  left: ${({ $anchorOrigin }) => $anchorOrigin.horizontal === 'left' && 0};
  transform: scale(1)
    translate(
      ${({ $anchorOrigin: { vertical, horizontal } }) =>
        `${horizontal === 'left' ? '-50%' : '50%'}, ${vertical === 'bottom' ? '50%' : '-50%'}`}
    );
  transform-origin: ${({ $anchorOrigin: { vertical, horizontal } }) =>
    `${horizontal === 'left' ? '0%' : '100%'} ${vertical === 'bottom' ? '100%' : '0%'}`};

  // invisible
  &.GnBadge-invisible {
    transform: scale(0)
      translate(
        ${({ $anchorOrigin: { vertical, horizontal } }) =>
          `${horizontal === 'left' ? '-50%' : '50%'}, ${vertical === 'bottom' ? '50%' : '-50%'}`}
      );
  }
`;

const Badge = ({
  children,
  badgeContent,
  color = 'primary',
  showZero = false,
  invisible = false,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  max = 99,
  variant = 'standard',
}: BadgeProps) => {
  const rootClasses = generateClassNames('GnBadge', ['root']);
  const badgeClasses = generateClassNames('GnBadge', [
    'badge',
    `${variant === 'dot' && 'dot'}`,
    `color${capitalize(color)}`,
    `${invisible && 'invisible'}`,
  ]);
  const svgIconClasses = generateClassNames('GnSvgIcon', ['root']);

  const getContent = useCallback(
    (badgeContent?: ReactNode, max?: number) => {
      if (typeof badgeContent === 'number' && max) {
        if (badgeContent > max) return `${max}+`;
        else return badgeContent;
      } else {
        return badgeContent;
      }
    },
    [badgeContent, max]
  );

  return (
    <StyledBadgeRoot className={rootClasses}>
      {children}
      <StyledBadge
        className={badgeClasses}
        $color={color}
        $anchorOrigin={anchorOrigin}
        $variant={variant}
      >
        {!invisible && variant === 'standard' && badgeContent !== 0
          ? getContent(badgeContent, max)
          : showZero
          ? getContent(badgeContent, max)
          : ''}
      </StyledBadge>
    </StyledBadgeRoot>
  );
};

export default Badge;
