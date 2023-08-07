// eslint-disable-next-line import/no-anonymous-default-export
export default {
  spacing: (...argsInput: number[]) => {
    const transform = (factor: number) => `${0.25 * factor}rem`;

    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(
          `Spacing: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`
        );
      }
    }

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args
      .map((argument) => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      })
      .join(' ');
  },
};
