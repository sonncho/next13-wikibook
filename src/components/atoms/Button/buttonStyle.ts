import styled, { css } from 'styled-components';
import { ColorKeys } from '~/types/theme';
import { hexToRGBA, pxToRem } from '~/utils/filters';

interface StyledButtonProps {
  $color: ColorKeys;
  $size: 'large' | 'medium' | 'small';
  $variant: 'contained' | 'outlined' | 'text';
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
  // Root Button Style
  outline: 0;
  border: 0;
  border-radius: ${({ theme }) => `${theme.shape.borderRadius}px`};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  background-color: transparent;
  font-weight: 500;
  letter-spacing: 0.3px;
  line-height: 1.6;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  > .GnSvgIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  > .GnButton-startIcon {
    display: inherit;
    margin-right: 6px;
    margin-left: -3px;
  }
  > .GnButton-endIcon {
    display: inherit;
    margin-right: -3px;
    margin-left: 6px;
  }

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
          &:disabled {
            cursor: default;
            background-color: ${theme.palette.action.disabledBackground};
            color: ${theme.palette.action.disabled};
            pointer-events: none;
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
          &:disabled {
            color: ${theme.palette.action.disabled};
            border-color: ${theme.palette.action.disabledBackground};
            cursor: default;
            pointer-events: none;
          }
        `;
      }
      default: {
        return css`
          &:hover {
            background-color: ${hexToRGBA(theme.palette[$color].main, 0.04)};
          }
          &:disabled {
            color: ${theme.palette.action.disabled};
            cursor: default;
            pointer-events: none;
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
      padding: ${theme.spacing(1.875, 3.5)};
    }
    &.GnButton-outlined {
      padding: ${theme.spacing(1.625, 3.25)};
    }
    &.GnButton-small {
      padding: ${theme.spacing(1, 1.5)};
      &.GnButton-contained {
        padding: ${theme.spacing(1, 3.25)};
      }
      &.GnButton-outlined {
        padding: ${theme.spacing(0.75, 3)};
      }
    }
    &.GnButton-large {
      padding: ${theme.spacing(2.125, 4.25)};
      &.GnButton-contained {
        padding: ${theme.spacing(2.125, 5.25)};
      }
      &.GnButton-outlined {
        padding: ${theme.spacing(1.875, 5)};
      }
    }
  `}
`;

export default StyledButton;
