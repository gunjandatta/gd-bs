/**
 * <style>
 *     #my-panel {
 *         margin: 0px;
 *         margin-top: 100px;
 *     }
 * </style>
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the panel
 *         var panel = $REST.Components.Panel({
 *             el: document.querySelector("#demo"),
 *             type: $REST.Components.PanelTypes.Large,
 *             modalProps: {
 *                 button: { text: "Show Panel" },
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
 * // Create the panel
 * let el = document.querySelector("#panel");
 * let panel = Components.Panel({
 *     el: el,
 *     type: Components.PanelTypes.Large,
 *     modalProps: {
 *         button: { text: "Show Panel" },
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

import { IModal, IModalProps } from "./modal";

/**
 * Panel
 */
export interface IPanel {
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
export interface IPanelProps {
    className?: string;
    el?: Element | HTMLElement;
    modalProps?: IModalProps;
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