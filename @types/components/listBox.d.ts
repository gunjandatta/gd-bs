/**
 * List Box
 */
export const ListBox: (props: IListBoxProps) => IListBox;

import { IBase } from "../base";
import { IDropdownItem } from "./dropdown";

/**
 * List Box
 */
export interface IListBox extends IBase<IListBoxProps> {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => Array<IDropdownItem>;

    /** Sets the listbox value. */
    setValue: (value?: string | Array<string> | Array<IDropdownItem>) => void;
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
    value?: string | Array<string>;
}