/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the checkbox group
 *         $REST.Components.CheckboxGroup({
 *             el: document.querySelector("#demo"),
 *             items: [
 *                 { label: "Option 1" },
 *                 { label: "Option 2" },
 *                 { label: "Option 3" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Checkbox Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the buttonGroup
 * let el = document.querySelector("#cbGroup");
 * let cbGroup = Components.CheckboxGroup({
 *     el: el,
 *     items: [
 *         { label: "Option 1" },
 *         { label: "Option 2" },
 *         { label: "Option 3" }
 *     ]
 * });
 * ```
 */
export const CheckboxGroup: (props: ICheckboxGroupProps) => ICheckboxGroup;

/**
 * Checkbox Group Types
 */
export const CheckboxGroupTypes: ICheckboxTypes;

/**
 * Checkbox Group
 */
export interface ICheckboxGroup {
    /** The checkbox element. */
    el: HTMLElement;

    /** Gets the values. */
    getValue: () => ICheckboxGroupItem | Array<ICheckboxGroupItem>;

    /** Hides the checkbox group. */
    hide: () => void;

    /** Sets the dropdown value. */
    setValue: (value: string | Array<string>) => void;

    /** Shows the checkbox group. */
    show: () => void;
}

/**
 * Checkbox Group Item
 */
export interface ICheckboxGroupItem {
    data?: any;
    isDisabled?: boolean;
    isSelected?: boolean;
    label?: string;
    name?: string;
    onChange?: (item: ICheckboxGroupItem) => void;
    type?: number;
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps {
    className?: string;
    colSize?: number;
    el?: Element | HTMLElement;
    hideLabel?: boolean;
    isInline?: boolean;
    isReadonly?: boolean;
    label?: string;
    items?: Array<ICheckboxGroupItem>;
    multi?: boolean;
    onChange?: (items: ICheckboxGroupItem | Array<ICheckboxGroupItem>) => void;
    title?: string;
    type?: number;
    value?: any;
}

/**
 * Checkbox Group Types
 */
export type ICheckboxTypes = {
    Checkbox: number;
    Radio: number;
    Switch: number;
}