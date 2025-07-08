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
export const TooltipPlacements: IFloatingUIPlacements;

/**
 * Tooltip Types
 */
export const TooltipTypes: IFloatingUITypes;

import { IBaseProps } from "../types";
import { IButtonProps, IButton } from "../button/types";
import { IDropdownProps, IDropdown } from "../dropdown/types";
import { IFloatingUI, IFloatingUIOptions, IFloatingUIPlacements, IFloatingUITypes } from "../floating-ui/types";

/**
 * Tooltip
 */
export interface ITooltip {
    /** Reference to the button. */
    button?: IButton;

    /** The element. */
    el: HTMLButtonElement;

    /** Gives an element’s tooltip the ability to be shown. */
    enable: () => void;

    /** Hides an element’s tooltip. */
    hide: () => void;

    /** Reference to the dropdown. */
    ddl?: IDropdown;

    /** The floating ui instance. */
    floatingUI: IFloatingUI;

    /** Toggles an element's tooltip. */
    toggle: () => void;

    /** Sets the floating ui content. */
    setContent: (content: string | Element) => void;

    /** Reveals an element’s tooltip. */
    show: () => void;
}

/**
 * Tooltip Properties
 */
export interface ITooltipProps extends IBaseProps<ITooltip> {
    btnProps?: IButtonProps;
    ddlProps?: IDropdownProps;
    content?: string | Element;
    options?: IFloatingUIOptions;
    placement?: number;
    show?: boolean;
    target?: HTMLElement;
    type?: number;
}