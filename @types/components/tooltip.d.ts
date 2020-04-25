/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the tooltip
 *         $REST.Components.Tooltip({
 *             el: document.querySelector("#demo"),
 *             btnProps: {
 *                 text: "Tooltip Demo"
 *             },
 *             options: {
 *                 title: "My Tooltip",
 *             }
 *         });
 *     });
 * </script>
 */

/**
 * ### Tooltip
 * 
 * ```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    btnProps: {
        text: "Tooltip Demo"
    },
    options: {
        title: "My Tooltip",
    }
});
```
 */
export const Tooltip: (props: ITooltipProps) => ITooltip;

/**
 * Tooltip Types
 */
export const TooltipTypes: ITooltipTypes;

import { IButtonProps } from "./button";

/**
 * Tooltip
 */
export interface ITooltip {
    /** Destroys an element’s tooltip. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Toggles the ability for an element’s tooltip to be shown or hidden. */
    toggleEnabled: () => void;

    /** Reveals an element’s tooltip. */
    show: () => void;

    /** Updates the position of an element’s tooltip. */
    update: () => void;
}

/**
 * Tooltip Options
 */
export interface ITooltipOptions {
    animation?: boolean;
    boundary?: string;
    container?: string;
    delay?: number | object;
    fallbackPlacement?: string | Array<string>;
    html?: boolean;
    offset?: number | string;
    placement?: string | Function;
    selector?: string;
    template?: string;
    title?: string;
    trigger?: string;
}

/**
 * Tooltip Properties
 */
export interface ITooltipProps {
    btnType?: number;
    className?: string;
    el?: Element | HTMLElement;
    options?: ITooltipOptions;
    text?: string;
    type?: number;
}

/**
 * Tooltip Types
 */
export type ITooltipTypes = {
    Auto: number;
    Bottom: number;
    Left: number;
    Right: number;
    Top: number;
}