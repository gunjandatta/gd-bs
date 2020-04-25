/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the button to toggle the collapse
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             target: "#demoCollapse",
 *             toggle: "collapse",
 *             text: "Collapse Demo"
 *         });
 * 
 *         // Render the collapse
 *         $REST.Components.Collapse({
 *             el: document.querySelector("#demo"),
 *             id: "demoCollapse",
 *             content: "This is the content to be collapsed."
 *         });
 *     });
 * </script>
 */

/**
 * ### Collapse
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the button to toggle the collapse
 * let btn = Components.Button({
 *     el: document.querySelector("#btnCollapse"),
 *     target: "#demoCollapse",
 *     toggle: "collapse",
 *     text: "Collapse Demo"
 * });
 * 
 * // Create the collapse
 * let el = document.querySelector("#collapse");
 * let collapse = Components.Collapse({
 *     el: el,
 *      id: "demoCollapse",
 *     content: "This is the content to be collapsed."
 * });
 * ```
 */
export const Collapse: (props: ICollapseProps) => ICollapse;

import { IButtonProps } from "./button";

/**
 * Collapse
 */
export interface ICollapse {
    /** Destroys an element’s collapse. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides a collapsible element. */
    hide: () => void;

    /** Shows a collapsible element. */
    show: () => void;

    /** Toggles the collapsible element on invocation. */
    toggle: () => void;
}

/**
 * Collapse Options
 */
export interface ICollapseOptions {
    parent?: string | Element;
    toggle?: boolean;
}

/**
 * Collapse Properties
 */
export interface ICollapseProps {
    className?: string;
    content?: string | Element;
    data?: any;
    el?: Element | HTMLElement;
    id?: string;
    isMulti?: boolean;
    onRender?: (props?: ICollapseProps, el?: HTMLElement) => void;
    options?: ICollapseOptions;
}