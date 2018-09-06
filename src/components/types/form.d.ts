import { IDropdownItem } from "./dropdown";

/**
 * Form
 */
export const Form: (props: IFormProps) => IForm;

/**
 * Form Control Types
 */
export const FormControlTypes: IFormControlTypes;

/**
 * Form
 */
export interface IForm {
    el: HTMLFormElement,
    getValues: () => { [key: string]: any };
}

/**
 * Form Control
 */
export interface IFormControl {
    className?: string;
    description?: string;
    html?: string;
    isReadonly?: boolean;
    label?: string;
    name?: string;
    required?: boolean;
    type?: number;
}

/**
 * Form Control - Checkbox
 */
export interface IFormControlCheckbox extends IFormControl {
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
 * Form Properties
 */
export interface IFormProps {
    el?: Element | HTMLElement,
    rows?: Array<IFormRow>;
    value?: any;
}

/**
 * Form Control Types
 */
export type IFormControlTypes = {
    CheckBox: number;
    Email: number;
    Dropdown: number;
    File: number;
    MultiDropdown: number;
    Password: number;
    Range: number;
    TextArea: number;
    TextField: number;
}

/**
 * Form Row
 */
export interface IFormRow {
    isAutoSized?: boolean;
    isCentered?: boolean;
    control?: IFormControl;
    colSize?: number;
    columns?: Array<{
        control: IFormControl;
        size?: number;
    }>;
}