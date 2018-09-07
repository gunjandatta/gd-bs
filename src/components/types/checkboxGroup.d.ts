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
}

/**
 * Checkbox Group Item
 */
export interface ICheckboxGroupItem {
    checked?: boolean;
    label?: string;
    onChange?: (checked?: boolean) => void;
}

/**
 * Checkbox Group Properties
 */
export interface ICheckboxGroupProps {
    className?: string;
    el?: Element | HTMLElement;
    formFl?: boolean;
    items?: Array<ICheckboxGroupItem>;
    value?: boolean | Array<boolean>;
}