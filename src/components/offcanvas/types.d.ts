/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Offcanvas elements should be added to the body
 *         var elOffcanvas = document.querySelector("#offcanvas-demo");
 *         if(elOffcanvas === null) {
 *              elOffcanvas = document.createElement("div");
 *              elOffcanvas.id = "offcanvas-demo";
 *              document.body.appendChild(elOffcanvas);
 *         }
 * 
 *         // Create the offcanvas
 *         var offcanvas = $REST.Components.Offcanvas({
 *             el: elOffcanvas,
 *             id: "offcanvasDemo",
 *             title: "Offcanvas Demo",
 *             body: "This is the body of the offcanvas.",
 *             type: $REST.Components.OffcanvasTypes.End
 *         });
 * 
 *         // Create the button
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             text: "Show Offcanvas",
 *             toggleObj: offcanvas
 *         });
 *     });
 * </script>
 */

/**
 * Offcanvas
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Offcanvas elements should be added to the body
 * var elOffcanvas = document.querySelector("#offcanvas-demo");
 * if(elOffcanvas === null) {
 *      elOffcanvas = document.createElement("div");
 *      elOffcanvas.id = "offcanvas-demo";
 *      document.body.appendChild(elOffcanvas);
 * }
 * 
 * // Create the offcanvas
 * let el = document.querySelector("#offcanvasDemo");
 * let offcanvas = Components.Offcanvas({
 *     el: el,
 *     id: "offcanvasDemo",
 *     title: "Offcanvas Demo",
 *     body: "This is the body of the offcanvas.",
 *     type: Components.OffcanvasTypes.End
 * });
 * 
 * // Create the button
 * Components.Button({
 *     el: document.querySelector("#offcanvasDemo"),
 *     text: "Show Offcanvas",
 *     toggleObj: offcanvas
 * });
 * ```
 */
export const Offcanvas: (props: IOffcanvasProps, template?: string) => IOffcanvas;

/**
 * Offcanvas Types
 */
export const OffcanvasTypes: IOffcanvasTypes;

import { IBaseProps } from "../types";

/**
 * Offcanvas
 */
export interface IOffcanvas {
    /** The element. */
    el: Element;

    /** Hides a collapsible element. */
    hide: () => void;

    /** Returns true if the modal is visible. */
    isVisible: boolean;

    /** Updates the auto close flag. */
    setAutoClose: (value: boolean) => void;

    /** Updates the type. */
    setType: (canvasType: number) => void;

    /** Shows a collapsible element. */
    show: () => void;

    /** Toggles the collapsible element on invocation. */
    toggle: () => void;
}

/**
 * Offcanvas Properties
 */
export interface IOffcanvasProps<T = Element> extends IBaseProps<IOffcanvas> {
    body?: string | T;
    data?: any;
    id?: string;
    onRenderBody?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    onRenderHeader?: (el?: HTMLDivElement, props?: IOffcanvasProps) => void;
    options?: IOffcanvasOptions;
    title?: string | T;
    type?: number;
}

/**
 * Offcanvas Options
 */
export interface IOffcanvasOptions {
    /** True to automatically close the offcanvas when clicking outside of it. */
    autoClose?: boolean;

    /** True to enable the backdrop when the offcanvas is visible. */
    backdrop?: boolean;

    /** Puts the focus on the offcanvas when initialized. */
    focus?: boolean;

    /** Closes the offcanvas when escape key is pressed. */
    keyboard?: boolean;

    /** True to enable scrolling of the background. */
    scroll?: boolean;

    /** True to toggle the offcanvas on creation. */
    visible?: boolean;
}

/**
 * Offcanvas Types
 */
export type IOffcanvasTypes = {
    Bottom: number;
    End: number;
    Start: number;
}