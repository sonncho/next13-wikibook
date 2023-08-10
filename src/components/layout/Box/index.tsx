'use client';

import React from 'react';
import { css, styled } from 'styled-components';

const StyledBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Box = () => {
  return <StyledBox>Box</StyledBox>;
};

export default Box;
