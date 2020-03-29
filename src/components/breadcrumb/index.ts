import { IBreadcrumb, IBreadcrumbProps, IBreadcrumbItem } from "../../../@types/components/breadcrumb";
import * as Common from "../common";

/**
 * Breadcrumb
 */
export const Breadcrumb = (props: IBreadcrumbProps): IBreadcrumb => {
    // Create the breadcrumb
    let breadcrumb = document.createElement("nav");
    breadcrumb.setAttribute("aria-label", "breadcrumb");

    // Create the list
    let list = document.createElement("ol");
    breadcrumb.appendChild(list);

    // Set the class names
    list.className = props.className || "";
    list.classList.add("breadcrumb");

    // The click event for the item
    let onItemClick = ev => {
        let elItem = ev.currentTarget as HTMLElement;

        // Get the item
        let item: IBreadcrumbItem = props.items[elItem.getAttribute("data-idx")];
        if (item) {
            // Call the click event
            item.onClick ? item.onClick(item, ev) : null;
            props.onClick ? props.onClick(item, ev) : null;
        }
    }

    // Parse the item properties
    let itemProps = props.items || [];
    for (let i = 0; i < itemProps.length; i++) {
        let prop = itemProps[i];
        let isActive = i == itemProps.length - 1;

        // Set the class names
        let itemClassNames = ["breadcrumb-item"];
        isActive ? itemClassNames.push("active") : null;

        // Create the item
        let item = document.createElement("li");
        item.className = itemClassNames.join(' ');
        isActive ? item.setAttribute("aria-current", "page") : null;

        // See if this is a link
        let link: HTMLAnchorElement = null;
        if (prop.href) {
            // Add a link
            link = document.createElement("a");
            link.href = prop.href;
            link.innerHTML = prop.text || "";
            link.setAttribute("data-idx", i.toString());
            item.appendChild(link);
        } else {
            // Set the text and index
            item.innerHTML = prop.text || "";
            item.setAttribute("data-idx", i.toString());
        }

        // See if there is a click event
        if (prop.onClick || props.onClick) {
            // Add the click event
            link ? link.addEventListener("click", onItemClick) : item.addEventListener("click", onItemClick);
        }

        // Add the item
        list.appendChild(item);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(breadcrumb);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the breadcrumb
    return {
        el: breadcrumb,
        hide: () => { Common.hide(breadcrumb); },
        show: () => { Common.show(breadcrumb); }
    };
}