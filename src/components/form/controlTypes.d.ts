/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the form
 *         var control = $REST.Components.FormControl({
 *             label: "First Name:",
 *             name: "FName",
 *             type: $REST.Components.FormControlTypes.TextField
 *         });
 *         document.querySelector("#demo").appendChild(control.el);
 *     });
 * </script>
 */

/**
 * ### Form Control
 */
export const FormControl: (props: IFormControlProps) => IFormControl;

import { IBaseProps } from "../types";
import { ICheckboxGroup, ICheckboxGroupItem } from "../checkboxGroup/types";
import { IDropdown, IDropdownItem, IDropdownProps } from "../dropdown/types";
import { IInputGroup } from "../inputGroup/types";
import { IListBox } from "../listBox/types";
import { IFloatingUIProps } from "../floating-ui/types";

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
    checkbox: ICheckboxGroup;
    control: ICheckboxGroup | IDropdown | IInputGroup | IListBox;
    dropdown: IDropdown;
    el: HTMLElement;
    getValue: () => any;
    hide: () => void;
    isLoaded: () => PromiseLike<void>;
    isRendered: boolean;
    isValid: boolean;
    label?: HTMLElement;
    props: IFormControlProps;
    textbox: IInputGroup;
    setLabel: (value: string) => void;
    setControl: (control: any) => void;
    setValue: (value: any) => void;
    show: () => void;
    updateValidation: (elControl: HTMLElement, validation: IFormControlValidationResult) => void;
}

/**
 * Form Control Properties
 */
export interface IFormControlProps extends IBaseProps<IFormControl> {
    controlClassName?: string;
    data?: any;
    description?: string;
    errorMessage?: string;
    id?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isPlainText?: boolean;
    label?: string;
    loadingMessage?: string;
    name?: string;
    onControlRendering?: (control: IFormControlProps) => void | PromiseLike<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | PromiseLike<IFormControl>;
    onGetValue?: (control: IFormControlProps) => any;
    onValidate?: (control: IFormControlProps, results: IFormControlValidationResult) => boolean | IFormControlValidationResult;
    required?: boolean;
    title?: string;
    type?: number;
    validationType?: number;
    value?: any;
}

/**
 * Form Control Properties - Checkbox
 */
export interface IFormControlPropsCheckbox extends IFormControlProps {
    colSize?: number;
    el?: HTMLInputElement | HTMLElement;
    hideLabel?: boolean;
    isInline?: boolean;
    items?: Array<ICheckboxGroupItem>;
    onChange?: (selectedItem: ICheckboxGroupItem, allItems?: Array<ICheckboxGroupItem>, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsCheckbox) => void | PromiseLike<IFormControlPropsCheckbox>;
    onGetValue?: (control: IFormControlPropsCheckbox) => any;
    onValidate?: (control: IFormControlPropsCheckbox, results: IFormControlValidationResult<ICheckboxGroupItem>, allItems?: Array<ICheckboxGroupItem>) => boolean | IFormControlValidationResult<ICheckboxGroupItem>;
}

/**
 * Form Control Properties - Dropdown
 */
export interface IFormControlPropsDropdown extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (item: IDropdownItem, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsDropdown) => void | PromiseLike<IFormControlPropsDropdown>;
    onGetValue?: (control: IFormControlPropsDropdown) => any;
    onMenuRendering?: (props: IFloatingUIProps) => IFloatingUIProps;
    onValidate?: (control: IFormControlPropsDropdown, results: IFormControlValidationResult<IDropdownItem>) => boolean | IFormControlValidationResult<IDropdownItem>;
}

/**
 * Form Control Properties - Dropdown Button
 */
export interface IFormControlPropsDropdownButton extends IFormControlPropsDropdown {
    placeholder?: string;
    placement?: number;
}

/**
 * Form Control Properties - Dropdown Checkbox
 */
export interface IFormControlPropsDropdownCheckbox extends IFormControlPropsDropdownButton { }

/**
 * Form Control Properties - List Box
 */
export interface IFormControlPropsListBox extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (items: IDropdownItem, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsListBox) => void | PromiseLike<IFormControlPropsListBox>;
    onGetValue?: (control: IFormControlPropsListBox) => any;
    onValidate?: (control: IFormControlPropsListBox, results: IFormControlValidationResult<IDropdownItem>) => boolean | IFormControlValidationResult<IDropdownItem>;
    placeholder?: string;
}

/**
 * Form Control Properties - Multiple Checkbox
 */
export interface IFormControlPropsMultiCheckbox extends IFormControlProps {
    colSize?: number;
    el?: HTMLInputElement | HTMLElement;
    hideLabel?: boolean;
    isInline?: boolean;
    items?: Array<ICheckboxGroupItem>;
    onChange?: (selectedItems: Array<ICheckboxGroupItem>, allItems?: Array<ICheckboxGroupItem>, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsCheckbox) => void | PromiseLike<IFormControlPropsCheckbox>;
    onGetValue?: (control: IFormControlPropsCheckbox) => any;
    onValidate?: (control: IFormControlPropsCheckbox, results: IFormControlValidationResult<Array<ICheckboxGroupItem>>, allItems?: Array<ICheckboxGroupItem>) => boolean | IFormControlValidationResult<Array<ICheckboxGroupItem>>;
    renderRow?: boolean;
}

/**
 * Form Control Properties - Multiple Dropdown
 */
export interface IFormControlPropsMultiDropdown extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (item: Array<IDropdownItem>, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsDropdown) => void | PromiseLike<IFormControlPropsDropdown>;
    onGetValue?: (control: IFormControlPropsDropdown) => any;
    onMenuRendering?: (props: IFloatingUIProps) => IFloatingUIProps;
    onValidate?: (control: IFormControlPropsDropdown, results: IFormControlValidationResult<Array<IDropdownItem>>) => boolean | IFormControlValidationResult<Array<IDropdownItem>>;
}

/**
 * Form Control Properties - Multiple Dropdown Button
 */
export interface IFormControlPropsMultiDropdownButton extends IFormControlPropsMultiDropdown {
    placeholder?: string;
    placement?: number;
}

/**
 * Form Control Properties - Multiple Dropdown Checkbox
 */
export interface IFormControlPropsMultiDropdownCheckbox extends IFormControlPropsMultiDropdownButton { }

/**
 * Form Control Properties - Multiple List Box
 */
export interface IFormControlPropsMultiListBox extends IFormControlProps {
    items?: Array<IDropdownItem>;
    onChange?: (items: Array<IDropdownItem>, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsListBox) => void | PromiseLike<IFormControlPropsListBox>;
    onGetValue?: (control: IFormControlPropsListBox) => any;
    onValidate?: (control: IFormControlPropsListBox, results: IFormControlValidationResult<Array<IDropdownItem>>) => boolean | IFormControlValidationResult<Array<IDropdownItem>>;
    placeholder?: string;
}

/**
 * Form Control Properties - Multiple Switch
 */
export interface IFormControlPropsMultiSwitch extends IFormControlPropsMultiCheckbox { }

/**
 * Form Control Properties - Number Field
 */
export interface IFormControlPropsNumberField extends IFormControlPropsTextField {
    max?: number;
    min?: number;
    onControlRendering?: (control: IFormControlPropsNumberField) => void | PromiseLike<IFormControlPropsNumberField>;
    onGetValue?: (control: IFormControlPropsNumberField) => any;
    onValidate?: (control: IFormControlPropsNumberField, results: IFormControlValidationResult<string>) => boolean | IFormControlValidationResult<string>;
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
    appendedDropdown?: IDropdownProps;
    appendedLabel?: string;
    el?: HTMLInputElement | HTMLElement;
    onChange?: (value: string, ev?: Event) => void;
    onControlRendering?: (control: IFormControlPropsTextField) => void | PromiseLike<IFormControlPropsTextField>;
    onGetValue?: (control: IFormControlPropsTextField) => any;
    onValidate?: (control: IFormControlPropsTextField, results: IFormControlValidationResult<string>) => boolean | IFormControlValidationResult<string>;
    placeholder?: string;
    prependedDropdown?: IDropdownProps;
    prependedLabel?: string;
    rows?: number;
}

/**
 * Form Control Types
 */
export type IFormControlTypes = {
    Checkbox: number;
    ColorPicker: number;
    Email: number;
    Datalist: number;
    Dropdown: number;
    DropdownButton: number;
    DropdownCheckbox: number;
    File: number;
    ListBox: number;
    MultiCheckbox: number;
    MultiDropdown: number;
    MultiDropdownButton: number;
    MultiDropdownCheckbox: number;
    MultiListBox: number;
    MultiRadio: number;
    MultiSwitch: number;
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
export interface IFormControlValidationResult<T = any> {
    invalidMessage?: string;
    isValid?: boolean;
    validMessage?: string;
    value?: T;
}