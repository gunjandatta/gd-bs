/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the checkbox group
 *         $REST.Components.CheckboxGroup({
 *             el: document.querySelector("#demo"),
 *             multi: false,
 *             type: Components.CheckboxGroupTypes.Switch,
 *             items: [
 *                 { label: "Option 1" },
 *                 { label: "Option 2", isSelected: true },
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
 *     multi: false,
 *     type: Components.CheckboxGroupTypes.Switch,
 *     items: [
 *         { label: "Option 1" },
 *         { label: "Option 2", isSelected: true },
 *         { label: "Option 3" }
 *     ]
 * });
 * ```
 */
export const CheckboxGroup: (props: ICheckboxGroupProps, template?: string, cbTemplate?: string) => ICheckboxGroup;

import { IBaseProps } from "../types";

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
    getValue: () => { selectedItems: ICheckboxGroupItem | Array<ICheckboxGroupItem>, allItems: Array<ICheckboxGroupItem> };

    /** Hides the checkbox group. */
    hide: () => void;

    /** Sets the checkbox items. */
    setItems: (value: Array<ICheckboxGroupItem>) => void;

    /** Sets the checkbox value. */
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
    onChange?: (selectedItem: ICheckboxGroupItem, ev?: Event) => void;
    title?: string;
    type?: number;
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps extends IBaseProps<ICheckboxGroup> {
    colSize?: number;
    hideLabel?: boolean;
    isDisabled?: boolean;
    isInline?: boolean;
    isReadonly?: boolean;
    label?: string;
    items?: Array<ICheckboxGroupItem>;
    multi?: boolean;
    onRender?: (el?: HTMLElement, item?: ICheckboxGroupItem) => void;
    onChange?: (selectedItems: ICheckboxGroupItem | Array<ICheckboxGroupItem>, allItems?: Array<ICheckboxGroupItem>, ev?: Event) => void;
    required?: boolean;
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