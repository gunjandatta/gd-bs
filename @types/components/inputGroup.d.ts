import { IButtonProps } from "./button";

/**
 * Input Group
 */
export const InputGroup: (props: IInputGroupProps) => IInputGroup;

/**
 * Input Group Types
 */
export const InputGroupTypes: IInputGroupTypes;

/**
 * Button Group
 */
export interface IInputGroup {
    /** The element. */
    el: HTMLElement;

    /** Method to get the value. */
    getValue: () => string;

    /** Hides the input group. */
    hide: () => void;
    
    /** Method to set the value. */
    setValue: (value: string) => void;

    /** Shows the input group. */
    show: () => void;
}

/**
 * Input Group Properties
 */
export interface IInputGroupProps {
    appendedButtons?: Array<IButtonProps>;
    appendedLabel?: string;
    className?: string;
    description?: string;
    el?: Element | HTMLElement;
    formFl?: boolean;
    id?: string;
    isLarge?: boolean;
    isPlainText?: boolean;
    isReadonly?: boolean;
    isSmall?: boolean;
    label?: string;
    max?: number;
    min?: number;
    onClear?: () => void;
    onChange?: (value?: string, ev?: Event) => void;
    placeholder?: string;
    prependedButtons?: Array<IButtonProps>;
    prependedLabel?: string;
    rows?: number;
    step?: number;
    title?: string;
    type?: number;
    value?: string;
}

/**
 * Input Group Types
 */
export type IInputGroupTypes = {
    Email: number;
    File: number;
    Password: number;
    Range: number;
    Search: number;
    TextArea: number;
    TextField: number;
}