/**
 * List Box
 */
export const ListBox: (props: IListBoxProps, template?: string) => IListBox;

import { IBase } from "../types";
import { IDropdownItem } from "../dropdown/types";

/**
 * List Box
 */
export interface IListBox extends IBase<IListBoxProps> {
    /** The element. */
    el: Element;

    /** The selected listbox items. */
    getValue: () => Array<IDropdownItem>;

    /** Sets the options */
    setOptions: (items: Array<IDropdownItem>) => void;

    /** Sets the listbox value. */
    setValue: (value?: string | Array<string> | Array<IDropdownItem>) => void;
}

/**
 * List Box Properties
 */
export interface IListBoxProps {
    label?: string;
    id?: string;
    isReadonly?: boolean;
    items: Array<IDropdownItem>;
    multi?: boolean;
    placeholder?: string;
    onLoadData?: () => Array<IDropdownItem> | PromiseLike<Array<IDropdownItem>>;
    onChange?: (items: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    value?: string | Array<string>;
}