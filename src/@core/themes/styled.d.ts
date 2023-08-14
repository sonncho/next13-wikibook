/* eslint-disable import/no-duplicates */
// styled.d.ts
import {} from 'styled-components';
import { CSSProp } from 'styled-components';
import { BaseTheme } from '~/types/theme';

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends BaseTheme {}
}
