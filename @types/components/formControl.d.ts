/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the form
 *         $REST.Components.FormControl({
 *             el: document.querySelector("#demo"),
 *             label: "First Name:",
 *             name: "FName",
 *             type: $REST.Components.FormControlTypes.TextField
 *         });
 *     });
 * </script>
 */

/**
 * ### Form Control
 */
export const FormControl: (props: IFormControlProps) => IFormControl;

import { ICheckboxGroup, ICheckboxGroupItem } from "./checkboxGroup";
import { IDropdown, IDropdownItem } from "./dropdown";
import { IInputGroup } from "./inputGroup";

/**
 * Custom Controls
 */
export const CustomControls: {
    // Gets the event by type
    getByType(key: number): (props?: IFormControlProps) => void;

    /** Registers a custom form control type. */
    registerType: (key: number, onRender: (props?: IFormControlProps) => void) => void;
}

/**
 * Form Control Types
 */
export const FormControlTypes: IFormControlTypes;

/**
 * Form Control
 */
export interface IFormControl {
    el: HTMLElement;

    checkbox: ICheckboxGroup;

    control: ICheckboxGroup | IDropdown | IInputGroup;

    dropdown: IDropdown;

    getValue: () => any;

    isValid: boolean;

    props: IFormControlProps;

    textbox: IInputGroup;
}

/**
 * Form Control Properties
 */
export interface IFormControlProps {
    className?: string;
    controlClassName?: string;
    data?: any;
    description?: string;
    el?: HTMLElement;
    errorMessage?: string;
    isReadonly?: boolean;
    isPlainText?: boolean;
    label?: string;
    loadingMessage?: string;
    name?: string;
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
    onGetValue?: (control: IFormControlProps) => any;
    onValidate?: (control: IFormControlProps, value: any) => boolean | IFormControlValidationResult;
    required?: boolean;
    title?: string;
    type?: number;
    value?: any;
}

/**
 * Form Control Properties - Checkbox
 */
export interface IFormControlPropsCheckbox extends IFormControlProps {
    el?: HTMLInputElement;
    hideLabel?: boolean;
    isInline?: boolean;
    items?: Array<ICheckboxGroupItem>;
    multi?: boolean;
    onChange?: (item: Array<ICheckboxGroupItem>) => void;
}

/**
 * Form Control Properties - Dropdown
 */
export interface IFormControlPropsDropdown extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (item: IDropdownItem | Array<IDropdownItem>) => void;
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
 * Form Control Properties - Range
 */
export interface IFormControlPropsRange extends IFormControlPropsNumberField { }

/**
 * Form Control Properties - Switch
 */
export interface IFormControlPropsSwitch extends IFormControlPropsCheckbox { }

/**
 * Form Control Properties - TextField
 */
export interface IFormControlPropsTextField extends IFormControlProps {
    el?: HTMLInputElement;
    onChange?: (value: string) => void;
    placeholder?: string;
    rows?: number;
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
    Radio: number;
    Range: number;
    Readonly: number;
    Switch: number;
    TextArea: number;
    TextField: number;
}

/**
 * Form Control Validation Result
 */
export interface IFormControlValidationResult {
    invalidMessage?: string;
    isValid?: boolean;
    validMessage?: string;
}