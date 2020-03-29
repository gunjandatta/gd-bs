/**
 * Alert
 */
export const Alert: (props: IAlertProps) => IAlert;

/**
 * Alert Types
 */
export const AlertTypes: IAlertTypes;

/**
 * Alert
 */
export interface IAlert {
    /** Closes an alert by removing it from the DOM. */
    close: () => void;

    /** Destroys an element’s alert. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the alert. */
    hide: () => void;

    /** Updates the alert text. */
    setText: (alertText?: string) => void;

    /** Updates the alert type. */
    setType: (alertType: number) => void;

    /** Shows the alert. */
    show: () => void;
}

/**
 * Alert Properties
 */
export interface IAlertProps {
    className?: string;
    content?: string | Element;
    el?: Element | HTMLElement;
    header?: string;
    isDismissible?: boolean;
    type?: number;
}

/**
 * Alert Types
 */
export type IAlertTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Warning: number;
}