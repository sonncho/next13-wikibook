'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import themeOptions from './themeOptions';

interface IProps {
  children: ReactNode;
}

const ThemeComponent = (props: IProps) => {
  const { children } = props;
  const coreThemeConfig = themeOptions('light');

  // const theme = createTheme(coreThemeConfig);

  return <ThemeProvider theme={coreThemeConfig}>{children}</ThemeProvider>;
};

export default ThemeComponent;
