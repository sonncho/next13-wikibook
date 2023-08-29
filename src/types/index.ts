export type Size = 'small' | 'medium' | 'large';
export type LabelSize = 'normal' | 'small' | string;
export type Variant = 'filled' | 'outlined' | 'standard';

export type Vertical = 'bottom' | 'top';
export type Horizontal = 'left' | 'right';

export interface AnchorOrigin {
  vertical: Vertical;
  horizontal: Horizontal;
}

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
export interface GlobalClassesMapping {
  [key: string | GlobalStateSlot]: GlobalStateSlot;
}
