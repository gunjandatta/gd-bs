/**
 * List Box
 */
export const ListBox: (props: IListBoxProps) => IListBox;

import { IBase } from "../base";
import { IDropdown, IDropdownItem } from "./dropdown";

/**
 * List Box
 */
export interface IListBox extends IBase<IListBoxProps> {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => IDropdownItem;

    /** Sets the listbox value. */
    setValue: (value?: any) => void;
}

/**
 * List Box Properties
 */
export interface IListBoxProps {
    label?: string;
    id?: string;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onChange?: (items: Array<IDropdownItem>) => void;
    value?: any;
}