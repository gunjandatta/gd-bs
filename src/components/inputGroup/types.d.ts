/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the inputGroup
 *         $REST.Components.InputGroup({
 *             el: document.querySelector("#demo"),
 *             label: "My Name:",
 *             value: "First Last"
 *         });
 *     });
 * </script>
 */

/**
 * ### Input Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the inputGroup
 * let el = document.querySelector("#inputGroup");
 * let inputGroup = Components.InputGroup({
 *     el: el,
 *     label: "My Name:",
 *     value: "First Last"
 * });
 * ```
 */
export const InputGroup: (props: IInputGroupProps, template?: string) => IInputGroup;

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

import { IBaseProps } from "../types";
import { IButtonProps } from "../button/types";
import { IDropdown, IDropdownProps } from "../dropdown/types";

/** Input Group File Value */
export interface IInputGroupFileValue {
    data: ArrayBuffer;
    name: string;
}

/**
 * Input Group
 */
export interface IInputGroup {
    /** Reference to the appended dropdown. */
    appendedDropdown: IDropdown;

    /** The input group element. */
    el: HTMLElement;

    /** Reference to the textbox input/textarea element. */
    elTextbox: HTMLInputElement | HTMLTextAreaElement;

    /** Disables the textbox */
    disable: () => void;

    /** Enables the textbox */
    enable: () => void;

    /** Method to get the file information. */
    getFileInfo: () => IInputGroupFileValue;

    /** Method to get the value. */
    getValue: () => string;

    /** Hides the input group. */
    hide: () => void;

    /** Reference to the prepended dropdown. */
    prependedDropdown: IDropdown;

    /** Method to set the value. */
    setValue: (value: string) => void;

    /** Shows the input group. */
    show: () => void;
}

/**
 * Input Group Properties
 */
export interface IInputGroupProps extends IBaseProps<IInputGroup> {
    appendedButtons?: Array<IButtonProps>;
    appendedDropdown?: IDropdownProps;
    appendedLabel?: string;
    formFl?: boolean;
    id?: string;
    isDisabled?: boolean;
    isLarge?: boolean;
    isReadonly?: boolean;
    isSmall?: boolean;
    label?: string;
    max?: number;
    min?: number;
    onClear?: () => void;
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedButtons?: Array<IButtonProps>;
    prependedDropdown?: IDropdownProps;
    prependedLabel?: string;
    required?: boolean;
    rows?: number;
    step?: number;
    title?: string;
    type?: number;
    value?: string;
}

/**
 * Input Group Types
 */
export type IInputGroupTypes = {
    ColorPicker: number;
    Email: number;
    File: number;
    Password: number;
    Range: number;
    Search: number;
    TextArea: number;
    TextField: number;
}