export type Size = 'small' | 'medium' | 'large';
export type LabelSize = 'normal' | 'small' | string;
export type Variant = 'filled' | 'outlined' | 'standard';

export type GlobalStateSlot =
  | 'active'
  | 'checked'
  | 'completed'
  | 'disabled'
  | 'readOnly'
  | 'error'
  | 'expanded'
  | 'focused'
  | 'focusVisible'
  | 'required'
  | 'selected';
interface GlobalClassesMapping {
  [key: string | GlobalStateSlot]: GlobalStateSlot;
}
