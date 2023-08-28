import { createContext } from 'react';

interface FormControlContextValue {
  disabled: boolean;
  error: boolean;
  focused: boolean;
  filled: boolean;
  onBlur: () => void;
  onFocus: () => void;
}

const FormControlContext = createContext<FormControlContextValue | undefined>(undefined);

export default FormControlContext;
