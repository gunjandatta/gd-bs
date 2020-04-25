/**
 * ### Spinner
 */
export const Spinner: (props: ISpinnerProps) => ISpinner;

/**
 * Spinner Types
 */
export const SpinnerTypes: ISpinnerTypes;

/**
 * Spinner
 */
export interface ISpinner {
    /** The element. */
    el: Element;

    /** Hides the spinner. */
    hide: () => void;

    /** Shows the spinner. */
    show: () => void;
}

/**
 * Spinner Properties
 */
export interface ISpinnerProps {
    className?: string;
    el?: Element | HTMLElement;
    isGrowing?: boolean;
    isSmall?: boolean;
    text?: string;
    type?: number;
}

/**
 * Spinner Types
 */
export type ISpinnerTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}