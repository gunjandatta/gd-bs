/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the buttonGroup
 *         $REST.Components.ButtonGroup({
 *             el: document.querySelector("#demo"),
 *             buttonType: $REST.Components.ButtonTypes.Primary,
 *             buttons: [
 *                 { text: "Left" },
 *                 { text: "Middle" },
 *                 { text: "Right" }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Button Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the buttonGroup
 * let el = document.querySelector("#buttonGroup");
 * let buttonGroup = Components.ButtonGroup({
 *     el: el,
 *     buttonType: $REST.Components.ButtonTypes.Primary,
 *     buttons: [
 *         { text: "Left" },
 *         { text: "Middle" },
 *         { text: "Right" }
 *     ]
 * });
 * ```
 */
export const ButtonGroup: (props: IButtonGroupProps) => IButtonGroup;

import { IButtonProps } from "./button";

/**
 * Button Group
 */
export interface IButtonGroup {
    /** The element. */
    el: Element;

    /** Hides the button group. */
    hide: () => void;

    /** Shows the button group. */
    show: () => void;
}

/**
 * Button Group Properties
 */
export interface IButtonGroupProps {
    buttons?: Array<IButtonProps>;
    buttonType?: number;
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    isLarge?: boolean;
    isSmall?: boolean;
    isVertical?: boolean;
    label?: string;
}