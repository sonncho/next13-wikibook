import React, { ChangeEvent, EventHandler, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Variant } from '~/types';
import { capitalize, generateClassNames } from '~/utils/filters';
import FormControlContext from './FormControlContext';

interface FormControlProps {
  /**
   * 구성요소 컨텐츠
   */
  children?: ReactNode;
  /**
   * 변형된 스타일
   */
  variant?: Variant;
  /**
   * true이면 label,input,helper text가 disabled상태로 표시
   */
  disabled?: boolean;
  /**
   * true이면 에러 상태로 표시
   */
  error?: boolean;
  /**
   * true이면 컴포넌트가 focused상태로 표시
   */
  focused?: boolean;
  /**
   * true이면 input값이 필수인것을 나타내는 레이블에 aterisk 표시
   */
  required?: boolean;
  filled?: boolean;
  /**
   * input값 변경 이벤트
   * @param e
   * @returns
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledFormControl = styled.div<{ $variant: Variant }>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top;
`;

const FormControl = ({
  children,
  variant = 'standard',
  disabled = false,
  error = false,
  required = false,
  filled = false,
  onChange,
}: FormControlProps) => {
  const [focusedState, setFocusedState] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const focused = focusedState && !disabled;
  React.useEffect(() => setFocusedState((isFocused) => (disabled ? false : isFocused)), [disabled]);

  const classes = generateClassNames('GnFormControl', [
    'root',
    focused && 'focused',
    `variant${capitalize(variant)}`,
  ]);

  const childContext = React.useMemo(() => {
    return {
      disabled,
      error,
      focused,
      filled,
      onBlur: () => {
        setFocusedState(false);
      },
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange === null || onChange === undefined ? void 0 : onChange(e);
      },
      onFocus: () => {
        setFocusedState(true);
      },
      required,
      value: value !== null ? value : '',
    };
  }, [disabled, error, focused, filled, onChange, setValue, value, required]);

  return (
    <FormControlContext.Provider value={childContext}>
      <StyledFormControl className={classes} $variant={variant}>
        {children}
      </StyledFormControl>
    </FormControlContext.Provider>
  );
};

export default FormControl;
