/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the toolbar
 *         $REST.Components.Toolbar({
 *         el: document.querySelector("#demo"),
 *         spacing: 3,
 *         items: [
 *             { buttons: [{ text: "Button 1" }] },
 *             { buttons: [{ text: "Button 2" }] },
 *             { buttons: [{ text: "Button 3" }] },
 *             { buttons: [{ text: "Button 4" }] },
 *             { buttons: [{ text: "Button 5" }] }
 *         ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Toolbar
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create a toolbar
 * let el = document.querySelector("#toolbar");
 * Components.Toolbar({
 *     el,
 *     spacing: 3,
 *     items: [
 *         { buttons: [{ text: "Button 1" }] },
 *         { buttons: [{ text: "Button 2" }] },
 *         { buttons: [{ text: "Button 3" }] },
 *         { buttons: [{ text: "Button 4" }] },
 *         { buttons: [{ text: "Button 5" }] }
 *     ]
 * });
 * ```
 */
export const Toolbar: (props: IToolbarProps) => IToolbar;

/**
 * Toolbar
 */
export interface IToolbar {
    /** The element. */
    el: Element;

    /** Hides the toolbar. */
    hide: () => void;

    /** Shows the toolbar. */
    show: () => void;
}

import { IButtonProps } from "./button";
import { IInputGroupProps } from "./inputGroup";

/**
 * Toolbar Item
 */
export interface IToolbarItem {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    inputGroup?: IInputGroupProps;
}

/**
 * Toolbar Properties
 */
export interface IToolbarProps {
    className?: string;
    el?: Element | HTMLElement;
    items?: Array<IToolbarItem>;
    spacing?: number;
}