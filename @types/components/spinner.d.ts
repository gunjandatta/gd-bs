/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the spinner
 *         $REST.Components.Spinner({
 *             el: document.querySelector("#demo"),
 *             text: "Loading...",
 *             type: $REST.Components.SpinnerTypes.Danger
 *         });
 *     });
 * </script>
 */

/**
 * ### Spinner
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a spinner
 * let el = document.querySelector("#spinner");
 * Components.Spinner({
 *     el,
 *     text: "Loading...",
 *     type: Components.SpinnerTypes.Danger
 * });
 * ```
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