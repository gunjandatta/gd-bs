/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the breadcrumb
 *         $REST.Components.Breadcrumb({
 *             el: document.querySelector("#demo"),
 *             items: [
 *                 { text: "Root", href: "/" },
 *                 { text: "Web 1", href: "/web" },
 *                 { text: "Web 1-1", href: "/web/1", isActive: true }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Breadcrumb
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the breadcrumb
 * let el = document.querySelector("#breadcrumb");
 * let breadcrumb = Components.Breadcrumb({
 *     el: el,
 *     items: [
 *         { text: "Root", href: "/" },
 *         { text: "Web 1", href: "/web" },
 *         { text: "Web 1-1", href: "/web/1", isActive: true }
 *     ]
 * });
 * ```
 */
export const Breadcrumb: (props: IBreadcrumbProps, template?: string) => IBreadcrumb;

import { IBaseProps } from "../types";

/**
 * Breadcrumb
 */
export interface IBreadcrumb {
    /** Adds a breadcrumb item. */
    add: (item: IBreadcrumbItem) => void;

    /** The element. */
    el: Element;

    /** Hides the breadcrumb. */
    hide: () => void;

    /** Removes the last breadcrumb item. */
    remove: () => void;

    /** Removes a breadcrumb item by it's name property. */
    removeByName: (name: string) => void;

    /** Sets the breadcrumb items. */
    setItems: (items: IBreadcrumbItem[]) => void;

    /** Shows the breadcrumb. */
    show: () => void;
}

/**
 * Breadcrumb Item
 */
export interface IBreadcrumbItem {
    /** Custom class names. */
    className?: string;

    /** The breadcrumb link */
    href?: string;

    /** Internal flag set by the component */
    isActive?: boolean;

    /** A unique name of the  */
    name?: string;

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;

    /** The link text */
    text?: string;
}

/**
 * Breadcrumb Properties
 */
export interface IBreadcrumbProps extends IBaseProps {
    /** The breadcrumb items */
    items?: Array<IBreadcrumbItem>

    /** Click event for the link */
    onClick?: (item?: IBreadcrumbItem, ev?: Event) => void;
}