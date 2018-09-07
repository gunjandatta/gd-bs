/**
 * Checkbox Group
 */
export const CheckboxGroup: (props: ICheckboxGroupProps) => ICheckboxGroup;

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
    label?: string;
    name?: string;
    onChange?: (value: ICheckboxGroupItem) => void;
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps {
    className?: string;
    el?: Element | HTMLElement;
    formFl?: boolean;
    items?: Array<ICheckboxGroupItem>;
    multi?: boolean;
    //onChange?: (value: Array<ICheckboxGroupItem>) => void;
}