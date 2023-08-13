'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import themeOptions from './themeOptions';

import typography from './typography';
import createTheme from '~/utils/theme/createTheme';

interface IProps {
  children: ReactNode;
}

const ThemeComponent = (props: IProps) => {
  const { children } = props;
  const coreTheme = themeOptions('light');

  let theme = createTheme(coreTheme);

  theme = createTheme(theme, { typography: { ...typography(theme) } });
  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeComponent;
