import { css, styled } from 'styled-components';
import { ColorTypes } from '~/@core/themes/types';
import { hexToRGBA, pxToRem } from '~/utils/filters';

interface StyledButtonProps {
  $color: ColorTypes;
  $size?: 'large' | 'medium' | 'small';
  $variant?: 'contained' | 'outlined' | 'text';
  disabled?: boolean;
}

const getFontSize = ({ $size = 'medium' }) => {
  switch ($size) {
    case 'small': {
      return css`
        font-size: ${pxToRem(13)};
      `;
    }
    case 'large': {
      return css`
        font-size: ${pxToRem(15)};
      `;
    }
    default: {
      return css`
        font-size: ${pxToRem(14)};
      `;
    }
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  outline: 0;
  border: 0;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;
  background-color: transparent;
  font-weight: 500;
  letter-spacing: 0.3px;
  /* min-width: 64px; */
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  ${(props) => getFontSize(props)};

  ${(props) => {
    const { $variant, $color, theme } = props;
    switch ($variant) {
      case 'contained': {
        return css`
          background-color: ${theme.palette[$color].main};
          color: ${theme.palette[$color].contrastText};
          &:hover {
            background-color: ${theme.palette[$color].dark};
          }
        `;
      }
      case 'outlined': {
        return css`
          background-color: transparent;
          border: 1px solid ${hexToRGBA(theme.palette[$color].main, 0.5)};
          color: ${theme.palette[$color].main};
          &:hover {
            background-color: ${hexToRGBA(theme.palette[$color].main, 0.04)};
            border-color: ${theme.palette[$color].main};
          }
        `;
      }
      default: {
        return css`
          &:hover {
            background-color: ${hexToRGBA(theme.palette[$color].main, 0.04)};
          }
        `;
      }
    }
  }};

  ${({ $variant, $color, theme }) =>
    $variant === 'text' && `color: ${theme.palette[$color].main}`};

  ${({ theme }) => css`
    padding: ${theme.spacing(1.875, 3)};
    &.GnButton-contained {
      padding: ${theme.spacing(1.875, 5.5)};
    }
    &.GnButton-outlined {
      padding: ${theme.spacing(1.625, 5.25)};
    }
    &.GnButton-small {
      padding: ${theme.spacing(1, 2.25)};
      &.GnButton-contained {
        padding: ${theme.spacing(1, 3.5)};
      }
      &.GnButton-outlined {
        padding: ${theme.spacing(0.75, 3.25)};
      }
    }
    &.GnButton-large {
      padding: ${theme.spacing(2.125, 5.5)};
      &.GnButton-contained {
        padding: ${theme.spacing(2.125, 6.5)};
      }
      &.GnButton-outlined {
        padding: ${theme.spacing(1.875, 6.25)};
      }
    }
  `}
`;

export default StyledButton;
