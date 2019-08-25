/**
 * Checkbox Group
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
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps {
    className?: string;
    colSize?: number;
    el?: Element | HTMLElement;
    hideLabel?: boolean;
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