/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the toast
 *         $REST.Components.Toast({
 *             el: document.querySelector("#demo"),
 *             headerText: "Header",
 *             body: "This is the body of the toast.",
 *             mutedText: "2 seconds ago",
 *             options: { autohide: false }
 *         });
 *     });
 * </script>
 */

/**
 * ### Toast
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a toast
 * let el = document.querySelector("#toast");
 * Components.Toast({
 *     el,
 *     headerText: "Header",
 *     body: "This is the body of the toast.",
 *     mutedText: "2 seconds ago",
 *     options: { autohide: false }
 * });
 * ```
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