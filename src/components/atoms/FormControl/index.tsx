import React, { ReactNode, useState } from 'react';
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
}: FormControlProps) => {
  const [focusedState, setFocusedState] = useState(false);
  const focused = focusedState && !disabled;

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
      onFocus: () => {
        setFocusedState(true);
      },
    };
  }, [disabled, error, focused, filled]);

  return (
    <FormControlContext.Provider value={childContext}>
      <StyledFormControl className={classes} $variant={variant}>
        {children}
      </StyledFormControl>
    </FormControlContext.Provider>
  );
};

export default FormControl;
