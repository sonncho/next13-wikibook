import { useContext } from 'react';
import FormControlContext from './FormControlContext';

export default function useFormControl() {
  const value = useContext(FormControlContext);
  if (value === undefined) {
    throw new Error('useFormControl should be used within FormControl.Provider');
  }
  return value;
}
