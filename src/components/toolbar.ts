import { IToolbar, IToolbarProps } from "./types/toolbar";
import { ButtonGroup } from "./buttonGroup";
import { InputGroup } from "./inputGroup";

/**
 * Toolbar
 */
export const Toolbar = (props: IToolbarProps): IToolbar => {
    // Create the toolbar
    let toolbar = document.createElement("div") as HTMLDivElement;

    // Set the properties
    props.className ? toolbar.className = props.className : null;
    toolbar.classList.add("btn-toolbar");
    toolbar.setAttribute("role", "toolbar");

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // See if this is a button group
        if (item.buttons) {
            // Render an button group
            toolbar.appendChild(ButtonGroup({ buttons: item.buttons }).el);
        }

        // See if this is an input group
        if (item.inputGroup) {
            // Render an input group
            toolbar.appendChild(InputGroup(item.inputGroup).el);
        }

        // See if there is a spacing value defined, and this is not the last element
        if (props.spacing > 0 && i < items.length - 1) {
            // Add the spacing
            toolbar.children[i].classList.add("mr-" + props.spacing);
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(toolbar);

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

    // Return the toolbar
    return { el };
}