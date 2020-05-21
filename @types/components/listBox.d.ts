import { IDropdown, IDropdownItem } from "./dropdown";

/**
 * List Box
 */
export interface IListBox {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => Array<IDropdownItem>;

    /** Sets the listbox value. */
    setValue: (value?: any | Array<any>) => void;
}

import { IBaseProps } from "../base";

/**
 * List Box Properties
 */
export interface IListBoxProps extends IBaseProps<IListBox> {
    label?: string;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onChange?: (items: Array<IDropdownItem>) => void;
    value?: any;
}