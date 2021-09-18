/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the collapse
 *         var collapse = $REST.Components.Collapse({
 *             el: document.querySelector("#demo"),
 *             id: "demoCollapse",
 *             content: "This is the content to be collapsed.",
 *             options: { toggle: true }
 *         });
 *         // Create the button to toggle the collapse
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             toggleObj: collapse,
 *             text: "Collapse Demo"
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
 * // Create the collapse
 * let el = document.querySelector("#collapse");
 * let collapse = Components.Collapse({
 *     el: el,
 *     id: "demoCollapse",
 *     content: "This is the content to be collapsed.",
 *     options: { toggle: true }
 * });
 * 
 * // Create the button to toggle the collapse
 * let btn = Components.Button({
 *     el: document.querySelector("#btnCollapse"),
 *     toggleObj: collapse,
 *     text: "Collapse Demo"
 * });
 * ```
 */
export const Collapse: (props: ICollapseProps, template?: string) => ICollapse;

import { IBaseProps } from "../types";

/**
 * Collapse
 */
export interface ICollapse {
    /** The element. */
    el: Element;

    /** Hides a collapsible element. */
    hide: () => void;

    /** True if the collapse is visible. */
    isExpanded: boolean;

    /** Shows a collapsible element. */
    show: () => void;

    /** Toggles the collapsible element on invocation. */
    toggle: () => void;
}

/**
 * Collapse Options
 */
export interface ICollapseOptions {
    toggle?: boolean;
}

/**
 * Collapse Properties
 */
export interface ICollapseProps<T = Element> extends IBaseProps<ICollapse> {
    content?: string | T;
    data?: any;
    id?: string;
    isHorizontal?: boolean;
    isMulti?: boolean;
    onRender?: (el?: HTMLElement, props?: ICollapseProps) => void;
    options?: ICollapseOptions;
}