/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // See if a navigation exists
 *         var navigation = document.querySelector("#demo");
 *         if(navigation) {
 *             // Render the navigation
 *             $REST.Components.Nav({
 *                 el: navigation,
 *                 isPills: true,
 *                 items: [
 *                     { title: "Nav 1", isActive: true },
 *                     { title: "Nav 2" },
 *                     { title: "Nav 3" },
 *                     { title: "Nav 4" },
 *                     { title: "Nav 5" }
 *                 ]
 *             });
 *         }
 *     });
 * </script>
 */

/**
 * ### Navigation
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";

 * // Create the navigation
 * let el = document.querySelector("#navigation");
 * let nav = Components.Nav({
 *     el: el,
 *     isPills: true,
 *     items: [
 *         { title: "Nav 1", isActive: true },
 *         { title: "Nav 2" },
 *         { title: "Nav 3" },
 *         { title: "Nav 4" },
 *         { title: "Nav 5" }
 *     ]
 * });
 * ```
 */
export const Nav: (props: INavProps) => INav;

/**
 * Navigation
 */
export interface INav {
    /** Destroys an element’s tab. */
    dispose: () => void;

    /** The element. */
    el: Element;

    /** Hides the navigation. */
    hide: () => void;

    /**
     * Shows the navigation or selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @prop selector - The query selector.
     */
    show: (selector?: string) => void;
}

/**
 * Navigation Properties
 */
export interface INavProps {
    className?: string;
    data?: any;
    el?: Element | HTMLElement;
    enableFill?: boolean;
    fadeTabs?: boolean;
    id?: string;
    items?: Array<INavLink>;
    isJustified?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    isVertical?: boolean;
}

/**
 * Navigation Links
 */
export interface INavLink {
    isActive?: boolean;
    isDisabled?: boolean;
    data?: any;
    href?: string;
    onClick?: (item?: INavLink, ev?: Event) => void;
    onRenderTab?: (item?: INavLink, el?: HTMLDivElement) => void;
    tabContent?: string | Element;
    title?: string;
}