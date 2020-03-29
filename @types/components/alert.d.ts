import { IBase, IBaseProps } from "../base";

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
export interface IAlert extends IBase<IAlertProps> {
    /** Closes an alert by removing it from the DOM. */
    close: () => void;

    /** Destroys an element’s alert. */
    dispose: () => void;

    /** Updates the alert text. */
    setText: (alertText?: string) => void;

    /** Updates the alert type. */
    setType: (alertType: number) => void;
}

/**
 * Alert Properties
 */
export interface IAlertProps extends IBaseProps {
    content?: string | Element;
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