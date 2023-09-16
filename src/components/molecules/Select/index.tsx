import React, { ChangeEvent, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Icon from '~/components/atoms/Icon';
import InputBase from '~/components/atoms/InputBase';
import MenuList from '~/components/atoms/MenuList';
import Paper from '~/components/atoms/Paper';
import { Variant } from '~/types';
import { generateClassNames } from '~/utils/filters';

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  value?: string | number;
  label?: string;
  id?: string;
  labelId?: string;
  iconName?: string;
  inputProps?: HTMLAttributes<HTMLSelectElement>;
  multiple?: boolean;
  open?: boolean;
  variant?: Variant;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onClose?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onOpen?: (e: ChangeEvent<HTMLScriptElement>) => void;
  // MenuProps?:
}

const StyledSelect = styled.div`
  appearance: none;
  user-select: none;
  /* border-radius: 4px; */
  cursor: pointer;
  font: inherit;
  letter-spacing: inherit;
  color: currentcolor;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0px;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0px;
  width: 100%;
  /* animation-name: mui-auto-fill-cancel;
  animation-duration: 10ms; */
  padding: 16.5px 14px;
`;

const StyledNativeInput = styled.input`
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
`;

const StyledIcon = styled(Icon)`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  position: absolute;
  right: 7px;
  top: calc(50% - 0.5em);
  pointer-events: none;
  color: rgba(0, 0, 0, 0.54);
`;

const StyledPaper = styled(Paper)`
  position: absolute;
  min-width: 120px;
  top: 40px;
  /* left: 330px; */
  transform-origin: 60px 0px;
`;

const Select = ({ children, value, labelId, iconName = 'BsChevronDown', ...rest }: SelectProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  console.log(labelId);

  const selectClasses = generateClassNames('GnSelect', ['select']);
  const iconClasses = generateClassNames('GnSelect', ['icon']);
  return (
    <InputBase {...rest}>
      <StyledSelect className={selectClasses}>{value}</StyledSelect>
      <StyledNativeInput
        aria-invalid="false"
        aria-hidden="true"
        className="GnSelect-nativeInput"
        value={value}
      />
      <StyledIcon classes={iconClasses} name={iconName} iconProps={{ size: 30 }} />
      <StyledPaper elevation={3}>
        <MenuList>{children}</MenuList>
      </StyledPaper>
    </InputBase>
  );
};

export default Select;
