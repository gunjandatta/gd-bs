/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the button
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             target: "#my-panel",
 *             text: "Show Panel",
 *             toggle: "modal"
 *         });
 *         // Render the panel
 *         var panel = $REST.Components.Panel({
 *             el: document.querySelector("#demo"),
 *             type: $REST.Components.PanelTypes.Large,
 *             modalProps: {
 *                 id: "my-panel",
 *                 title: "Panel Demo",
 *                 onRenderBody: function(el) {
 *                     // Render the body
 *                 }
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Panel
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the button
 * Components.Button({
 *     el: document.querySelector("#panel"),
 *     target: "#my-panel",
 *     text: "Show Panel",
 *     toggle: "modal"
 * });
 * 
 * // Create the panel
 * let el = document.querySelector("#panel");
 * let panel = Components.Panel({
 *     el: el,
 *     type: Components.PanelTypes.Large,
 *     modalProps: {
 *         id: "my-panel",
 *         title: "Panel Demo",
 *         onRenderBody: (el) => {
 *             // Render the body
 *         }
 *     }
 * });
 * ```
 */
export const Panel: (props: IPanelProps) => IPanel;

/**
 * Panel Types
 */
export const PanelTypes: IPanelTypes;

import { IBaseProps } from "../base";
import { IModal, IModalProps } from "./modal";

/**
 * Panel
 */
export interface IPanel {
    /** Disposes the panel. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** The modal. */
    modal: IModal;

    /** Hides the panel. */
    hide: () => void;

    /** Shows the panel. */
    show: () => void;
}

/**
 * Panel Properties
 */
export interface IPanelProps<T = Element> extends IBaseProps<IPanel> {
    modalProps?: IModalProps<T>;
    type?: number;
}

/**
 * Panel Types
 */
export type IPanelTypes = {
    Small: number;
    Medium: number;
    Large: number;
    XLarge: number;
    Full: number;
}