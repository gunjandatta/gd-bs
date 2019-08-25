import { IBadgeProps } from "./badge";
import { ISpinnerProps } from "./spinner";

/**
 * Button
 */
export const Button: (props: IButtonProps) => IButton;

/**
 * Button Types
 */
export const ButtonTypes: IButtonTypes;

/**
 * Button
 */
export interface IButton {
    /** Destroys an element’s button. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the button. */
    hide: () => void;
    
    /** Updates the button text. */
    setText: (btnText?: string) => void;
    
    /** Shows the button. */
    show: () => void;

    /** Toggles push state. Gives the button the appearance that it has been activated. */
    toggle: () => void;
}

/**
 * Button Properties
 */
export interface IButtonProps {
    badge?: IBadgeProps;
    className?: string;
    controls?: Array<string>;
    data?: any;
    el?: Element | HTMLElement;
    href?: string;
    id?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isExpanded?: boolean;
    isLarge?: boolean;
    isLink?: boolean;
    isOutline?: boolean;
    isSmall?: boolean;
    onClick?: (button?: IButtonProps, ev?: Event) => void;
    spinnerProps?: ISpinnerProps;
    target?: string;
    text?: string;
    title?: string;
    toggle?: string;
    trigger?: string;
    type?: number;
}

/**
 * Button Types
 */
export type IButtonTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Link: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}