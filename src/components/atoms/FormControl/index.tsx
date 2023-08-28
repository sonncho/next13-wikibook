import React, { ChangeEvent, EventHandler, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Variant } from '~/types';
import { capitalize, generateClassNames } from '~/utils/filters';
import FormControlContext from './FormControlContext';

interface FormControlProps {
  children?: ReactNode;
  variant?: Variant;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
  filled?: boolean;
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
