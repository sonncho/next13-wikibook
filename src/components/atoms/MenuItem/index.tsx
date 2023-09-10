import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';

interface MenuItemProps {
  children?: ReactNode;
  value?: string | number;
  disabledGutters?: boolean;
  divider?: boolean;
  selected?: boolean;
}

const StyledMenuItem = styled.li``;

const MenuItem = ({ children, value }: MenuItemProps) => {
  const classes = generateClassNames('GnMenuItem', ['root']);
  return <StyledMenuItem>{children}</StyledMenuItem>;
};

export default MenuItem;
