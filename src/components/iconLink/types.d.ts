/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the icon link
 *         $REST.Components.IconLink({
 *             el: document.querySelector("#demo"),
 *             content: "Icon Link",
 *             type: $REST.Components.IconLinkTypes.BeforeIcon,
 *             icon: $REST.Icons($REST.IconTypes.Badge3d)
 *         });
 *     });
 * </script>
 */

/**
 * Icon Link
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * import { Badge3d } from "gd-sprest-bs/build/icons/svgs/badge3d";
 * 
 * // Create the icon link
 * let el = document.querySelector("#icon-link");
 * Components.IconLink({
 *     el: el,
 *     content: "Icon Link",
 *     iconType: Badge3d,
 *     type: Components.IconLinkTypes.AfterIcon,
 * });
 * ```
 */
export const IconLink: (props: IIconLinkProps, template?: string) => IIconLink;

/**
 * Icon Link Types
 */
export const IconLinkTypes: IIconLinkTypes;

import { IBase, IBaseProps } from "../types";

/**
 * Icon Link
 */
export interface IIconLink extends IBase<IIconLinkProps> { }

/**
 * Icon Link Properties
 */
export interface IIconLinkProps<T = HTMLElement> extends IBaseProps<IIconLink> {
    content?: string | T;
    data?: any;
    href?: string;
    iconClassName?: string;
    iconSize?: number;
    iconType?: SVGImageElement | Function;
    type?: number;
}

/**
 * Icon Link Types
 */
export type IIconLinkTypes = {
    AfterText: number;
    BeforeText: number;
}