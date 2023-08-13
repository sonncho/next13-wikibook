// styled.d.ts
import 'styled-components';
import { BaseTheme } from '~/types/theme';

declare module 'styled-components' {
  export interface Theme extends BaseTheme {}
}
