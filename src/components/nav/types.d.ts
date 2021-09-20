/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // See if a navigation exists
 *         var navigation = document.querySelector("#demo");
 *         if(navigation) {
 *             // Render the navigation
 *             $REST.Components.Nav({
 *                 el: navigation,
 *                 isJustified: true,
 *                 isPills: true,
 *                 isTabs: true,
 *                 items: [
 *                     { title: "Nav 1", tabContent: "This is the content for tab 1.", isActive: true },
 *                     { title: "Nav 2", tabContent: "This is the content for tab 2." },
 *                     { title: "Nav 3", tabContent: "This is the content for tab 3." },
 *                     { title: "Nav 4", tabContent: "This is the content for tab 4." },
 *                     { title: "Nav 5", onRenderTab: function(el) { el.innerHTML = "This is the content for tab 5."; } }
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
 *     isJustified: true,
 *     isPills: true,
 *     isTabs: true,
 *     items: [
 *         { title: "Nav 1", tabContent: "This is the content for tab 1.", isActive: true },
 *         { title: "Nav 2", tabContent: "This is the content for tab 2." },
 *         { title: "Nav 3", tabContent: "This is the content for tab 3." },
 *         { title: "Nav 4", tabContent: "This is the content for tab 4." },
 *         { title: "Nav 5", onRenderTab: function(el) { el.innerHTML = "This is the content for tab 5."; } }
 *     ]
 * });
 * ```
 */
export const Nav: (props: INavProps, template?: string, itemTemplate?: string) => INav;

import { IBaseProps } from "../types";

/**
 * Navigation
 */
export interface INav {
    /** The active tab. */
    activeTab: INavLink;

    /** The element. */
    el: HTMLUListElement;

    /** Hides the navigation. */
    hide: () => void;

    /**
     * Shows the navigation or selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     * @prop selector - The query selector.
     */
    show: (selector?: string) => void;

    /**
     * Shows a tab by it's id or index.
     */
    showTab: (tabId?: string | number) => void;
}

/**
 * Navigation Properties
 */
export interface INavProps<T = Element> extends IBaseProps<INav> {
    data?: any;
    enableFill?: boolean;
    fadeTabs?: boolean;
    id?: string;
    items?: Array<INavLinkProps<T>>;
    isJustified?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    isVertical?: boolean;
    onClick?: (newTab?: INavLink, prevTab?: INavLink) => void;
    onLinkRendered?: (el?: HTMLElement, item?: INavLinkProps) => void;
    onTabRendered?: (el?: HTMLElement, item?: INavLinkProps) => void;
}

/**
 * Navigation Link
 */
export interface INavLink {
    elTab: HTMLAnchorElement;
    elTabContent: HTMLDivElement;
    isActive: boolean;
    tabName: string;
    toggle: (fadeTabs?: boolean) => void;
}

/**
 * Navigation Link Properties
 */
export interface INavLinkProps<T = Element> extends IBaseProps<INavLink> {
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    data?: any;
    href?: string;
    onClick?: (item?: INavLinkProps, ev?: Event) => void;
    onRender?: (el?: HTMLElement, item?: INavLinkProps) => void;
    onRenderTab?: (el?: HTMLDivElement, item?: INavLinkProps) => void;
    tabContent?: string | T;
    title?: string;
}