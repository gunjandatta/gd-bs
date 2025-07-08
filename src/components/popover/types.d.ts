/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the popover element
 *         var elContent = document.createElement("div");
 *         elContent.classList.add("m-2");
 *         elContent.innerHTML = "This is the popover content.";
 * 
 *         // Render the popover
 *         $REST.Components.Popover({
 *             el: document.querySelector("#demo"),
 *             className: "m-2",
 *             title: "My Popover",
 *             btnProps: {
 *                 text: "Popover Demo",
 *                 type: $REST.Components.ButtonTypes.OutlineDark
 *             },
 *             options: {
 *                 content: elContent,
 *                 trigger: "focus"
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Popover
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the popover
 * let el = document.querySelector("#popover");
 * let popover = Components.Popover({
 *     el: el,
 *     className: "m-2",
 *     text: "My Popover",
 *     btnProps: {
 *         text: "Popover Demo",
 *         type: Components.ButtonTypes.OutlineDark
 *     },
 *     options: {
 *         content: elContent,
 *         trigger: "focus"
 *     }
 * });
 * ```
 */
export const Popover: (props: IPopoverProps, template?: string) => IPopover;

/**
 * Popover Placements
 */
export const PopoverPlacements: IFloatingUIPlacements;

/**
 * Popover Types
 */
export const PopoverTypes: IFloatingUITypes;

import { IBaseProps } from "../types";
import { IButtonProps } from "../button/types";
import { IFloatingUI, IFloatingUIOptions, IFloatingUIPlacements, IFloatingUITypes } from "../floating-ui/types";

/**
 * Popover
 */
export interface IPopover {
    /** The element. */
    el: HTMLElement;

    /** The floating ui instance. */
    floatingUI: IFloatingUI;

    /** Enables the popover. */
    enable: () => void;

    /** Hides an element’s popover. */
    hide: () => void;

    /** True if the popover is visible, false otherwise. */
    isVisible: boolean;

    /** Toggles an element's popover. */
    toggle: () => void;

    /** Sets the body element of the popover. */
    setBody: (content: string | Element) => void;

    /** Sets the floating ui content. */
    setContent: (content: string | Element) => void;

    /** Sets the header element of the popover. */
    setHeader: (content: string | Element) => void;

    /** Reveals an element’s popover. */
    show: () => void;
}

/**
 * Popover Properties
 */
export interface IPopoverProps extends IBaseProps<IPopover> {
    btnProps?: IButtonProps;
    classNameBody?: string;
    classNameHeader?: string;
    isDismissible?: boolean;
    options?: IFloatingUIOptions;
    placement?: number;
    show?: boolean;
    target?: HTMLElement,
    title?: string;
    type?: number;
}