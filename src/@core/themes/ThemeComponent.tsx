'use client';

import React, { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
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

  console.log(
    `%c
     ██████╗  █████╗ ███╗   ██╗ ██████╗ 
    ██╔════╝ ██╔══██╗████╗  ██║██╔═══██╗
    ██║  ███╗███████║██╔██╗ ██║██║   ██║
    ██║   ██║██╔══██║██║╚██╗██║██║   ██║
    ╚██████╔╝██║  ██║██║ ╚████║╚██████╔╝
     ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
    
    Tip: you can access the documentation "theme" object directly in the console.
  `,
    'font-size:10px; color:magenta;'
  );

  useEffect(() => {
    window.theme = theme;
    // console.info({ theme });
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
