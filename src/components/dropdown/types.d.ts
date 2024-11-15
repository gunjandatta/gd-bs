/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the dropdown
 *         $REST.Components.Dropdown({
 *             el: document.querySelector("#demo"),
 *             label: "Select a Choice",
 *             items: [
 *                 { text: "Choice 1", value: "1" },
 *                 { text: "Choice 2", value: "2" },
 *                 { text: "Choice 3", value: "3" },
 *                 { text: "Choice 4", value: "4" },
 *                 { text: "Choice 5", value: "5" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Dropdown
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the dropdown
 * let el = document.querySelector("#dropdown");
 * let dropdown = Components.Dropdown({
 *     el: el,
 *     label: "Select a Choice",
 *     items: [
 *         { text: "Choice 1", value: "1" },
 *         { text: "Choice 2", value: "2" },
 *         { text: "Choice 3", value: "3" },
 *         { text: "Choice 4", value: "4" },
 *         { text: "Choice 5", value: "5" }
 *     ],
 *     onChange: (item, ev) => {
 *         console.log("The selected value is: " + item.text);
 *     }
 * });
 * ```
 */
export const Dropdown: (props: IDropdownProps, template?: string) => IDropdown;

import { IBaseProps } from "../types";
import { IButtonTypes } from "../button/types";
import { IPopover, IPopoverProps, IPopoverPlacements } from "../popover/types";

/**
 * Dropdown Placements
 */
export const DropdownPlacements: IPopoverPlacements;

/**
 * Dropdown Types
 */
export const DropdownTypes: IButtonTypes;

/**
 * Dropdown
 */
export interface IDropdown {
    /** Disables the dropdown. */
    disable: () => void;

    /** Enables the dropdown. */
    enable: () => void;

    /** The element. */
    el: HTMLElement;

    /** Gets the selected dropdown item(s). */
    getValue: () => IDropdownItem | Array<IDropdownItem>;

    /** Hides the dropdown. */
    hide: () => void;

    /** True if the dropdown is a multi-select. */
    isMulti: boolean;

    /** The popover menu. */
    popover: IPopover;

    /** Updates the dropdown items. */
    setItems: (items: Array<IDropdownItem>) => void;

    /** Updates the label of the dropdown. */
    setLabel: (value: string) => void;

    /** Enables/Disables the dark theme. */
    setTheme: (isDark: boolean) => void;

    /** Updates the dropdown type. */
    setType: (ddlType: number) => void;

    /** Sets the dropdown value. */
    setValue: (value?: any | Array<any>) => void;

    /** Shows the dropdown. */
    show: () => void;

    /** Toggles the dropdown menu of a given navbar or tabbed navigation. */
    toggle: () => void;
}

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    className?: string;
    data?: any;
    href?: string;
    iconClassName?: string;
    iconSize?: number;
    iconType?: SVGImageElement | Function;
    isDisabled?: boolean;
    isDivider?: boolean;
    isHeader?: boolean;
    isSelected?: boolean;
    onClick?: (item?: IDropdownItem, ev?: Event) => void;
    onRender?: (el: HTMLElement, item?: IDropdownItem) => void;
    target?: string;
    text?: string;
    title?: string;
    toggle?: string;
    value?: string | number | boolean;
}

/**
 * Dropdown Properties
 */
export interface IDropdownProps extends IBaseProps<IDropdown> {
    autoSelect?: boolean;
    btnClassName?: string;
    dropLeft?: boolean;
    dropRight?: boolean;
    dropUp?: boolean;
    formFl?: boolean;
    id?: string;
    isCheckbox?: boolean;
    isDark?: boolean;
    isDatalist?: boolean;
    isReadonly?: boolean;
    isSplit?: boolean;
    items?: Array<IDropdownItem>;
    label?: string;
    menuOnly?: boolean;
    multi?: boolean;
    navFl?: boolean;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    onMenuRendering?: (props: IPopoverProps) => IPopoverProps;
    placement?: number;
    required?: boolean;
    title?: string;
    type?: number;
    updateLabel?: boolean;
    value?: any;
}