import { createContext } from 'react';

interface FormControlContextValue {
  disabled: boolean;
  error: boolean;
  focused: boolean;
  filled: boolean;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  required: boolean;
  value: string;
}

const FormControlContext = createContext<FormControlContextValue | undefined>(undefined);

export default FormControlContext;
