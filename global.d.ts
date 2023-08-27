import { SystemTheme, Theme } from '~/types/theme';

export {};
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare global {
  interface Window {
    theme: Theme;
  }
}
