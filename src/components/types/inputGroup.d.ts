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
    el: Element;
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
    step?: number;
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