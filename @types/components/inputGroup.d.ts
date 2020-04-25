/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
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
 * let inputGroup = Components.inputGroup({
 *     el: el,
 *     label: "My Name:",
 *     value: "First Last"
 * });
 * ```
 */
export const InputGroup: (props: IInputGroupProps) => IInputGroup;

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

import { IButtonProps } from "./button";

/**
 * Button Group
 */
export interface IInputGroup {
    /** The element. */
    el: HTMLElement;

    /** Method to get the value. */
    getValue: () => string;

    /** Hides the input group. */
    hide: () => void;
    
    /** Method to set the value. */
    setValue: (value: string) => void;

    /** Shows the input group. */
    show: () => void;
}

/**
 * Input Group Properties
 */
export interface IInputGroupProps {
    appendedButtons?: Array<IButtonProps>;
    appendedLabel?: string;
    className?: string;
    description?: string;
    el?: Element | HTMLElement;
    formFl?: boolean;
    id?: string;
    isLarge?: boolean;
    isPlainText?: boolean;
    isReadonly?: boolean;
    isSmall?: boolean;
    label?: string;
    max?: number;
    min?: number;
    onClear?: () => void;
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedButtons?: Array<IButtonProps>;
    prependedLabel?: string;
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
    Email: number;
    File: number;
    Password: number;
    Range: number;
    Search: number;
    TextArea: number;
    TextField: number;
}