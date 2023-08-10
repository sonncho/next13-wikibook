import { Breakpoint, Breakpoints, BreakpointsOptions } from '~/types/theme';

const sortBreakpointsValues = (values: { [key in Breakpoint]: number }) => {
  const breakpointsAsArray =
    Object.keys(values).map((key) => ({
      key,
      val: values[key as Breakpoint],
    })) || [];
  // Sort in ascending order
  console.log(breakpointsAsArray);

  breakpointsAsArray.sort(
    (breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val
  );

  console.log(breakpointsAsArray);

  const reduceResult = breakpointsAsArray.reduce((acc, obj) => {
    console.log(acc);
    return (
      {},
      acc,
      {
        [obj.key]: obj.val,
      }
    );
  }, {});

  return reduceResult;
};

function createBreakpoints(breakpoints: BreakpointsOptions): Breakpoints {
  const {
    values = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    unit = 'px',
    step = 5,
  } = breakpoints;

  const sortedValues = sortBreakpointsValues(values);
  console.log('sortedValues', sortedValues);

  const keys = Object.keys(sortedValues);

  function up(key: Breakpoint | number): string {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key: Breakpoint | number): string {
    const value = values[key];
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start: Breakpoint, end: Breakpoint): string {
    return (
      `@media (min-width:${
        typeof values[start] === 'number' ? values[start] : start
      }${unit}) and ` + `(max-width:${values[end] - step / 100}${unit})`
    );
  }
  function only(key: Breakpoint): string {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key: Breakpoint) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace(
      '@media',
      '@media not all and'
    );
  }

  return {
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit,
  };
}

export default createBreakpoints;
