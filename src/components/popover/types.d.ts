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
export const PopoverPlacements: IPopoverPlacements;

/**
 * Popover Types
 */
export const PopoverTypes: IPopoverTypes;

import { IBaseProps, ITippyProps } from "../types";
import { IButtonProps } from "../button/types";

/**
 * Popover
 */
export interface IPopover {
    /** The element. */
    el: HTMLElement;

    /** The tippy instance. */
    tippy: any;

    /** Enables the popover. */
    enable: () => void;

    /** Hides an element’s popover. */
    hide: () => void;

    /** Toggles an element's popover. */
    toggle: () => void;

    /** Sets the body element of the popover. */
    setBody: (content: string | Element) => void;

    /** Sets the tippy content. */
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
    options?: ITippyProps;
    placement?: number;
    target?: HTMLElement,
    title?: string;
    type?: number;
}

/**
 * Popover Types
 */
export type IPopoverTypes = {
    Danger: number;
    Dark: number;
    Info: number;
    Light: number;
    LightBorder: number;
    Material: number;
    Primary: number;
    Secondary: number;
    Success: number;
    Translucent: number;
    Warning: number;
}

/**
 * Popover Placements
 */
export type IPopoverPlacements = {
    Auto: number;
    AutoStart: number;
    AutoEnd: number;
    Bottom: number;
    BottomStart: number;
    BottomEnd: number;
    Left: number;
    LeftStart: number;
    LeftEnd: number;
    Right: number;
    RightStart: number;
    RightEnd: number;
    Top: number;
    TopStart: number;
    TopEnd: number;
}