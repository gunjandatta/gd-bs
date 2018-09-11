import { ICheckboxGroupItem } from "./checkboxGroup";
import { IDropdownItem } from "./dropdown";

/**
 * Form Control
 */
export const FormControl: (control: IFormControlProps) => IFormControl;

/**
 * Form Control
 */
export interface IFormControl {
    el: HTMLElement;
    getValue: () => any;
    props: IFormControlProps;
}

/**
 * Form Control Properties
 */
export interface IFormControlProps {
    className?: string;
    description?: string;
    el?: HTMLElement;
    html?: string;
    isReadonly?: boolean;
    label?: string;
    name?: string;
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
    onGetValue?: (control: IFormControlProps) => any;
    required?: boolean;
    type?: number;
    value?: any;
}

/**
 * Form Control Properties - Checkbox
 */
export interface IFormControlPropsCheckbox extends IFormControlProps {
    el?: HTMLInputElement;
    hideLabel?: boolean;
    items?: Array<ICheckboxGroupItem>;
    onChange?: (checked?: boolean) => void;
}

/**
 * Form Control Properties - Dropdown
 */
export interface IFormControlPropsDropdown extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (item: IDropdownItem | Array<IDropdownItem>) => void;
    placeholder?: string;
    type?: number;
}

/**
 * Form Control Properties - Number Field
 */
export interface IFormControlPropsNumberField extends IFormControlPropsTextField {
    max?: number;
    min?: number;
    step?: number;
}

/**
 * Form Control Properties - TextField
 */
export interface IFormControlPropsTextField extends IFormControlProps {
    el?: HTMLInputElement;
    onChange?: (value: string) => void;
    placeholder?: string;
}

/**
 * Form Control Types
 */
export type IFormControlTypes = {
    Checkbox: number;
    Email: number;
    Dropdown: number;
    File: number;
    MultiDropdown: number;
    Password: number;
    Range: number;
    TextArea: number;
    TextField: number;
}