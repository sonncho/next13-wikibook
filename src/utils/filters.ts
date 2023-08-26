import { GlobalClassesMapping } from '~/types';

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

/**
 * 문자열의 첫글자만 대문자로 변환
 * @param word ex.'computer'
 * @returns ex.'Computer'
 */
export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * className 생성
 * @param componentName 앞에고정적으로 붙는 문자열(컴포넌트이름) ex.'GnDivider'
 * @param others 추가적으로 생성될 클래스명 ex.['focused','fullWidth', 'textAlignMiddle']
 * @param prefix class앞에 붙일 prefix ex.'Gn'
 * @returns 문자열 ex.'GnDivider-root, Gn-focused GnDivider-fullWidth GnDivider-textAlignMiddle'
 */
export const generateClassNames = (
  componentName: string,
  slots: (string | undefined | boolean)[],
  prefix: string = 'Gn'
) => {
  const globalClassesMapping: GlobalClassesMapping = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    readOnly: 'readOnly',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected',
  };

  const output = [];
  for (const slot of slots) {
    if (typeof slot === 'string') {
      const globalClass = globalClassesMapping[slot];
      output.push(globalClass ? `${prefix}-${globalClass}` : `${componentName}-${slot}`);
    }
  }

  return output.join(' ');
};
