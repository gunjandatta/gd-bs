import { IPagination, IPaginationProps } from "./types/pagination";

/**
 * Pagination Alignment
 */
export enum PaginationAlignment {
    Center = 1,
    Left = 2,
    Right = 3
}

/**
 * Pagination
 */
export const Pagination = (props: IPaginationProps): IPagination => {
    // Create the pagination
    let pagination = document.createElement("nav");
    props.label ? pagination.setAttribute("aria-label", props.label) : null;

    // Create the list
    let list = document.createElement("ul");
    pagination.appendChild(list);

    // Set the class names
    list.className = props.className || "";
    list.classList.add("pagination");
    props.isLarge ? list.classList.add("pagination-lg") : null;
    props.isSmall ? list.classList.add("pagination-sm") : null;

    // Read the alignment
    switch (props.alignment) {
        // Danger
        case PaginationAlignment.Center:
            list.classList.add("justify-content-center");
            break;
        // Dark
        case PaginationAlignment.Right:
            list.classList.add("justify-content-end");
            break;
    }

    // Render the previous button
    list.innerHTML += [
        '<li class="page-item" data-idx="0">',
        '<a class="page-link" href="#"' + (props.icon ? ' aria-label="Previous"' : '') + '>',
        props.icon ? '<span aria-hidden="true">' + props.icon + '</span>' : "Previous",
        props.icon ? '<span class="sr-only">Previous</span>' : '',
        '</a>',
        '</li>'
    ].join('\n');

    // Parse the number of pages
    let pages = props.numberOfPages || 1;
    for (let i = 1; i <= pages; i++) {
        // Add the item
        list.innerHTML += [
            '<li class="page-item' + (i == 1 ? ' active' : '') + '" data-idx="' + i + '">',
            '<a class="page-link" href="#">' + i + '</a>',
            '</li>'
        ].join('\n');
    }

    // Render the next button
    list.innerHTML += [
        '<li class="page-item" data-idx="' + (pages + 1) + '">',
        '<a class="page-link" href="#"' + (props.icon ? ' aria-label="Next"' : '') + '>',
        props.icon ? '<span aria-hidden="true">' + props.icon + '</span>' : "Next",
        props.icon ? '<span class="sr-only">Next</span>' : '',
        '</a>',
        '</li>'
    ].join('\n');

    // Create the element
    let el = document.createElement("div");
    el.appendChild(pagination);

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

    // Parse the items
    let items = el.querySelectorAll(".page-item");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", ev => {
            ev.preventDefault();

            // Get the index
            let index = parseInt((ev.currentTarget as HTMLElement).getAttribute("data-idx"));

            // Get the current active item
            let activeItem = el.querySelector(".page-item.active");
            let activeIdx = activeItem ? parseInt(activeItem.getAttribute("data-idx")) : 1;
            let oldIdx = activeIdx;

            // Clear the active item
            activeItem ? activeItem.classList.remove("active") : null;

            // See if this is the previous button
            if (index == 0) {
                // Decrement the active index
                activeIdx > 1 ? activeIdx-- : null;
            }
            // Else, see if this is the next button
            else if (index == pages + 1) {
                // Increment the active index
                activeIdx < pages ? activeIdx++ : null;
            } else {
                // Set the active index
                activeIdx = index;
            }

            // Set the active item
            activeItem = items[activeIdx];
            if (activeItem) {
                // Make this item active
                activeItem.classList.add("active");
            }

            // Ensure the index has changed
            if (oldIdx != activeIdx) {
                // Class the click event
                props.onClick ? props.onClick(activeIdx, ev) : null;
            }
        });
    }

    // Return the pagination
    return { el: pagination };
}