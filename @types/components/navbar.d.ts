/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the navbar
 *         $REST.Components.Navbar({
 *             el: document.querySelector("#demo"),
 *             brand: "Navbar",
 *             items: [
 *                 {
 *                     text: "Home",
 *                     isActive: true
 *                 },
 *                 {
 *                     text: "Link"
 *                 },
 *                 {
 *                     text: "Disabled Link",
 *                     isDisabled: true
 *                 },
 *                 {
 *                     text: "Dropdown Link",
 *                     items: [
 *                         { text: "Link 1" },
 *                         { text: "Link 2" },
 *                         { text: "Link 3" },
 *                         { text: "Link 4" },
 *                         { text: "Link 5" }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Navbar
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the navbar
 * let el = document.querySelector("#navbar");
 * let navbar = Components.Navbar({
 *     el: el,
 *     brand: "Navbar",
 *     searchBox: {
 *         onChange: (value) => {
 *             // Log the value
 *             console.log("The search value is: " + value);
 *         },
 *         onSearch: (value) => {
 *             // Log the value
 *             console.log("The search value is: " + value);
 *         }
 *     },
 *     items: [
 *         {
 *             text: "Home",
 *             isActive: true
 *         },
 *         {
 *             text: "Link"
 *         },
 *         {
 *             text: "Disabled Link",
 *             isDisabled: true
 *         },
 *         {
 *             text: "Dropdown Link",
 *             items: [
 *                 { text: "Link 1" },
 *                 { text: "Link 2" },
 *                 { text: "Link 3" },
 *                 { text: "Link 4" },
 *                 { text: "Link 5" }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const Navbar: (props: INavbarProps) => INavbar;

/**
 * Navbar Types
 */
export const NavbarTypes: INavbarTypes;

import { IButtonProps } from "./button";
import { IDropdownItem } from "./dropdown";

/**
 * Navbar
 */
export interface INavbar {
    /** The element. */
    el: Element;

    /** Hides the nav bar. */
    hide: () => void;

    /** Shows the nav bar. */
    show: () => void;
}

/**
 * Navbar Item
 */
export interface INavbarItem {
    href?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    items?: Array<IDropdownItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    text?: string;
}

/**
 * Navbar Properties
 */
export interface INavbarProps {
    brand?: string;
    brandUrl?: string;
    className?: string;
    el?: Element | HTMLElement;
    enableSearch?: boolean;
    id?: string;
    items?: Array<INavbarItem>;
    onClick?: (item?: INavbarItem, ev?: Event) => void;
    searchBox?: INavbarSearchBox;
    type?: number;
}

/**
 * Navbar Types
 */
export type INavbarTypes = {
    Dark: number;
    Light: number;
    Primary: number;
}

/**
 * Navbar Search Box
 */
export interface INavbarSearchBox {
    btnType?: number;
    btnText?: string;
    hideButton?: boolean;
    onChange?: (value?: string) => void;
    onSearch?: (value?: string) => void;
    placeholder?: string;
}