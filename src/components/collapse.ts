import * as jQuery from "jquery";
import { ICollapse, ICollapseProps } from "./types/collapse";

/**
 * Collapse
 */
export const Collapse = (props: ICollapseProps): ICollapse => {
    // Create the collapse
    let collapse = document.createElement("div");
    props.id ? collapse.id = props.id : null;

    // Set the class names
    collapse.className = props.className || "";
    collapse.classList.add("collapse");
    props.isMulti ? collapse.classList.add("multi-collapse") : null;

    // Set the content
    collapse.innerHTML = [
        '<div class="card card-body">',
        props.content || "",
        '</div>'
    ].join('\n');

    // Create the element
    let el = document.createElement("div");
    el.appendChild(collapse);

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

    // Return the collapse
    let $collapse = jQuery(el.children[0]);
    return {
        dispose: () => { $collapse.collapse("dispose"); },
        el: collapse,
        hide: () => { $collapse.collapse("hide"); },
        show: () => { $collapse.collapse("show"); },
        toggle: () => { $collapse.collapse("toggle"); }
    };
}