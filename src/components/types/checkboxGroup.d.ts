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
    getValues: () => Array<ICheckboxGroupItem>;
}

/**
 * Checkbox Group Item
 */
export interface ICheckboxGroupItem {
    checked?: boolean;
    isDisabled?: boolean;
    label?: string;
    name?: string;
    onChange?: (value: ICheckboxGroupItem) => void;
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps {
    className?: string;
    colSize?: number;
    el?: Element | HTMLElement;
    label?: string;
    items?: Array<ICheckboxGroupItem>;
    multi?: boolean;
    //onChange?: (value: Array<ICheckboxGroupItem>) => void;
    type?: number;
}

/**
 * Checkbox Group Types
 */
export type ICheckboxTypes = {
    Checkbox: number;
    Radio: number;
}