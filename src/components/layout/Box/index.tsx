'use client';

import React from 'react';
import { css, styled } from 'styled-components';

const StyledBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  ${({ theme }) => css`
    ${theme.breakpoints.up('md')} {
      width: 900px;
    }
  `};
`;

const Box = () => {
  return <StyledBox>Box</StyledBox>;
};

export default Box;
