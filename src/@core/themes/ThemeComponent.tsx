'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import themeOptions from './themeOptions';

interface IProps {
  children: ReactNode;
}

const ThemeComponent = (props: IProps) => {
  const { children } = props;
  const theme = themeOptions('light');
  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
