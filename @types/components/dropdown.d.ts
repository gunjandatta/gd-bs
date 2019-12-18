/**
 * Dropdown
 */
export const Dropdown: (props: IDropdownProps) => IDropdown;

/**
 * Dropdown Types
 */
export const DropdownTypes: IDropdownTypes;

/**
 * Dropdown
 */
export interface IDropdown {
    /** Destroys an element’s dropdown. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Gets the selected dropdown item(s). */
    getValue: () => IDropdownItem | Array<IDropdownItem>;

    /** Hides the dropdown. */
    hide: () => void;
    
    /** True if the dropdown is a multi-select. */
    isMulti: boolean;
    
    /** Updates the dropdown items. */
    setItems: (items: Array<IDropdownItem>) => void;

    /** Shows the dropdown. */
    show: () => void;
    
    /** Toggles the dropdown menu of a given navbar or tabbed navigation. */
    toggle: () => void;

    /** Updates the position of an element’s dropdown. */
    update: () => void;
}

/**
 * Dropdown Item
 */
export interface IDropdownItem {
    className?: string;
    data?: any;
    href?: string;
    isDisabled?: boolean;
    isDivider?: boolean;
    isHeader?: boolean;
    isSelected?: boolean;
    onClick?: (item?: IDropdownItem, ev?: Event) => void;
    onRender?: (el: HTMLElement, item?: IDropdownItem) => void;
    text?: string;
    value?: string;
}

/**
 * Dropdown Properties
 */
export interface IDropdownProps {
    className?: string;
    dropLeft?: boolean;
    dropRight?: boolean;
    dropUp?: boolean;
    el?: Element | HTMLElement;
    formFl?: boolean;
    id?: string;
    isReadonly?: boolean;
    isSplit?: boolean;
    items?: Array<IDropdownItem>;
    label?: string;
    menuOnly?: boolean;
    multi?: boolean;
    navFl?: boolean;
    onChange?: (item?: IDropdownItem | Array<IDropdownItem>, ev?: Event) => void;
    setLabelToValue?: boolean;
    title?: string;
    type?: number;
    value?: any;
}

/**
 * Dropdown Types
 */
export type IDropdownTypes = {
    Danger: number;
    Info: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}