/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the tooltip group
 *         $REST.Components.TooltipGroup({
 *             el: document.querySelector("#demo"),
 *             buttonType: $REST.Components.ButtonTypes.Primary,
 *             tooltipType: $REST.Components.TooltipTypes.LeftStart,
 *             tooltips: [
 *                 { text: "Left", onClick: function() { alert("Left button was clicked."); } },
 *                 { text: "Middle", onClick: function() { alert("Middle button was clicked."); } },
 *                 { text: "Right", onClick: function() { alert("Right button was clicked."); } }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Tooltip Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the group
 * let el = document.querySelector("#buttonGroup");
 * let tooltipGroup = Components.TooltipGroup({
 *     el: el,
 *     buttonType: $REST.Components.ButtonTypes.Primary,
 *     buttons: [
 *          { text: "Left", onClick: function() { alert("Left button was clicked."); } },
 *          { text: "Middle", onClick: function() { alert("Middle button was clicked."); } },
 *          { text: "Right", onClick: function() { alert("Right button was clicked."); } }
 *     ]
 * });
 * ```
 */
export const TooltipGroup: (props: ITooltipGroupProps, template?: string, btnTemplate?: string) => ITooltipGroup;

import { ITippyProps } from "../../types";
import { IBaseProps } from "../types";
import { ITooltip, ITooltipProps } from "../tooltip/types";

/**
 * Tooltip Group
 */
export interface ITooltipGroup {
    /** Adds a button to the group. */
    add: (props: ITooltipProps, btnTemplate?: string) => void;

    /** The element. */
    el: Element;

    /** The tooltips. */
    tooltips: Array<ITooltip>;

    /** Hides the button group. */
    hide: () => void;

    /** Shows the button group. */
    show: () => void;
}

/**
 * Tooltip Group Properties
 */
export interface ITooltipGroupProps extends IBaseProps<ITooltipGroup> {
    tooltips?: Array<ITooltipProps>;
    buttonType?: number;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    isVertical?: boolean;
    label?: string;
    tooltipOptions?: ITippyProps;
    tooltipPlacement?: number;
    tooltipType?: number;
}