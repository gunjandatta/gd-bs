import { IDropdownItem } from "./dropdown";

/**
 * List Box
 */
export interface IListBox {
    getValue: () => Array<IDropdownItem>;
}

/**
 * List Box Properties
 */
export interface IListBoxProps {
    label?: string;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onChange?: (items: Array<IDropdownItem>) => void;
    value?: any;
}