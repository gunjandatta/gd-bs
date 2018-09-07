import { ICheckboxGroupItem } from "./checkboxGroup";
import { IDropdownItem } from "./dropdown";

/**
 * Form Control
 */
export const FormControl: (control: IFormControl) => void;

/**
 * Form Control
 */
export interface IFormControl {
    className?: string;
    description?: string;
    el?: HTMLElement;
    html?: string;
    isReadonly?: boolean;
    label?: string;
    name?: string;
    onRenderControl?: (control: IFormControl) => void;
    required?: boolean;
    type?: number;
    value?: any;
}

/**
 * Form Control - Checkbox
 */
export interface IFormControlCheckbox extends IFormControl {
    items?: Array<ICheckboxGroupItem>;
    onChange?: (checked?: boolean) => void;
}

/**
 * Form Control - Dropdown
 */
export interface IFormControlDropdown extends IFormControl {
    items?: Array<IDropdownItem>;
    onChange?: (item: IDropdownItem | Array<IDropdownItem>) => void;
    placeholder?: string;
    type?: number;
}

/**
 * Form Control - TextField
 */
export interface IFormControlTextField extends IFormControl {
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