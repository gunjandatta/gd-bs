/**
 * ### Toast
 */
export const Toast: (props: IToastProps) => IToast;

/**
 * Toast
 */
export interface IToast {
    /** The component element. */
    el: HTMLElement;

    /** Hides the toast. */
    hide: () => void;

    /** Shows the toast. */
    show: () => void;
}

/**
 * Toast Properties
 */
export interface IToastProps {
    body?: string | Element;
    className?: string;
    data?: any;
    el?: Element | HTMLElement;
    headerImgClass?: string;
    headerImgSrc?: string;
    headerText?: string;
    hideCloseButton?: boolean;
    mutedText?: string;
    options?: IToastOptions;
    onClick?: (el?: HTMLElement, data?: any) => void;
    onRenderBody?: (el?: HTMLElement, data?: any) => void;
    onRenderHeader?: (el?: HTMLElement, data?: any) => void;
}

/**
 * Toast Options
 */
export interface IToastOptions {
    animation?: boolean;
    autohide?: boolean;
    delay?: number;
}