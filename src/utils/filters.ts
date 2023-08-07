/**
 * hexCode -> RGBA
 * @param hexCode
 * @param opacity
 * @returns
 */
export const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * px -> rem
 * @param size
 * @returns REM
 */
export const pxToRem = (size: number) => {
  const htmlFontSize = 16; // Default HTML Font Size
  const fontSize = 14; // Default Theme Font Size

  const coef = fontSize / 14;
  return `${(size / htmlFontSize) * coef}rem`;
};
