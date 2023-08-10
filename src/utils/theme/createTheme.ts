import createBreakpoints from './createBreakpoints';

function createTheme(options) {
  const { breakpoints, spacing, palette, typography, shape } = options;
  const breakpointsMerge = createBreakpoints(breakpoints);
  return {
    breakpoints: breakpointsMerge,
    spacing,
    palette,
    typography,
    shape,
  };
}

export default createTheme;
