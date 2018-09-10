import { IBreadcrumb, IBreadcrumbProps } from "./types/breadcrumb";

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

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let isActive = i == items.length - 1;

        // Set the class names
        let itemClassNames = ["breadcrumb-item"];
        isActive ? itemClassNames.push("active") : null;

        // Set the attributes
        let attributes = [
            'class="' + itemClassNames.join(' ') + '"',
            isActive ? 'aria-current="page"' : null
        ].join(' ');

        // Add the item
        list.innerHTML += [
            '<li ' + attributes + '>',
            item.href ? '<a href="' + item.href + '">' : '',
            item.text || "",
            item.href ? '</a>' : '',
            '</li>'
        ].join('\n');
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(breadcrumb);

    // See if are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
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
    return { el: breadcrumb };
}