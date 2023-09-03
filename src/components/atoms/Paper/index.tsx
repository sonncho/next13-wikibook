import { CSSProperties, ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';

export type PaperVariant = 'elevation' | 'outlined';

interface PaperProps {
  children?: ReactNode;
  classes?: string;
  component?: ElementType;
  /** shadow depth, It accepts values between 0 and 19 inclusive */
  elevation?: number;
  variant?: PaperVariant;
  square?: boolean;
  style?: CSSProperties;
}

const StyledPaper = styled.div<{ $variant: PaperVariant; $square: boolean; $elevation: number }>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: ${({ theme, $elevation, $variant }) =>
    $variant === 'elevation' && theme.shadows[$elevation]};
  border-radius: ${({ theme, $square }) => !$square && theme.shape.borderRadius}px;
  border: ${({ theme, $variant }) =>
    $variant === 'outlined' && `1px solid ${theme.palette.divider}`};
`;

const Paper = ({
  children,
  component,
  elevation = 1,
  variant = 'elevation',
  square = false,
  ...rest
}: PaperProps) => {
  const classes = generateClassNames('GnPaper', ['root', 'elevation']);
  return (
    <StyledPaper
      as={component}
      className={classes}
      $variant={variant}
      $elevation={elevation}
      $square={square}
      {...rest}
    >
      {children}
    </StyledPaper>
  );
};

export default Paper;
