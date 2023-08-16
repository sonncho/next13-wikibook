'use client';

import { HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fixed?: boolean;
}
interface StyledContainerProps {
  $fixed?: boolean;
}

const StyledRootContainer = css`
  width: 100%;
  box-sizing: border-box;
  display: block;
  margin-inline: auto;
`;

const StyledContainer = styled.div<StyledContainerProps>`
  ${StyledRootContainer};
  position: ${({ $fixed }) => $fixed && 'fixed'};
`;

const Container = (props: ContainerProps) => {
  const { fixed, children, ...rest } = props;
  return (
    <StyledContainer $fixed={fixed} {...rest}>
      {children}
    </StyledContainer>
  );
};

export default Container;
