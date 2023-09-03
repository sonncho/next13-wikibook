import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ListProps {
  children: ReactNode;
}

const StyledMenuList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 8px 0;
  position: relative;
  outline: 0;
`;

const MenuList = ({ children }: ListProps) => {
  return <StyledMenuList>{children}</StyledMenuList>;
};

export default MenuList;
