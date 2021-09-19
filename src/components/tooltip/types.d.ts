/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the tooltip
 *         $REST.Components.Tooltip({
 *             el: document.querySelector("#demo"),
 *             content: "This is the tooltip content.",
 *             placement: $REST.Components.TooltipPlacements.Top,
 *             theme: $REST.Components.TooltipTypes.LightBorder,
 *             btnProps: {
 *                  text: "Tooltip",
 *                  type: $REST.Components.ButtonTypes.OutlineDark
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
    content: "This is the tooltip content.",
    placement: Components.TooltipPlacements.Top,
    theme: Components.TooltipTypes.LightBorder,
    btnProps: {
        text: "Tooltip",
        type: Components.ButtonTypes.OutlineDark
    }
});
```
 */
export const Tooltip: (props: ITooltipProps, template?: string) => ITooltip;

/**
 * Tooltip Placements
 */
 export const TooltipPlacements: ITooltipPlacements;

/**
 * Tooltip Types
 */
export const TooltipTypes: ITooltipTypes;

import { IBaseProps } from "../types";
import { ITippyProps } from "../../types";
import { IButtonProps, IButton } from "../button/types";

/**
 * Tooltip
 */
export interface ITooltip {
    /** Reference to the button. */
    button: IButton;

    /** The element. */
    el: HTMLButtonElement;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** The tippy instance. */
    tippy: any;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Reveals an element’s tooltip. */
    show: () => void;
}

/**
 * Tooltip Properties
 */
export interface ITooltipProps extends IBaseProps<ITooltip> {
    btnProps?: IButtonProps;
    content?: string | Element;
    options?: ITippyProps;
    placement?: number;
    target?: Element,
    type?: number;
}

/**
 * Tooltip Types
 */
export type ITooltipTypes = {
    Light: number;
    LightBorder: number;
    Material: number;
    Primary: number;
    Secondary: number;
    Translucent: number;
}

/**
 * Tooltip Placements
 */
 export type ITooltipPlacements = {
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