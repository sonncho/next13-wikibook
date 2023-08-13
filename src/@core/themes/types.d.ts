// styled.d.ts
import 'styled-components';
import { ThemeOptions } from '~/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeOptions {}
}
