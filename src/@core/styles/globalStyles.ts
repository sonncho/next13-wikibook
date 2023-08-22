import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    color-scheme: ${({ theme }) => theme.palette.mode};
  }
`;

export default GlobalStyles;
