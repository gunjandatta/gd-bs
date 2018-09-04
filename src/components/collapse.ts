import * as jQuery from "jquery";
import { ICollapse, ICollapseProps } from "./types/collapse";

/**
 * Collapse
 */
export const Collapse = (props: ICollapseProps): ICollapse => {
    // Set the class names
    let classNames = ["collapse"];
    props.className ? classNames.push(props.className) : null;
    props.isMulti ? classNames.push("multi-collapse") : null;

    // Set the attributes
    let attributes = [
        'class="' + classNames.join(' ') + '"',
        props.id ? 'id="' + props.id + '"' : ''
    ].join(' ');

    // Generate the html
    let html = [
        '<div ' + attributes + '>',
        '<div class="card card-body">',
        props.content || "",
        '</div>',
        '</div>'
    ];

    // Create the element
    let el = document.createElement("div");
    el.innerHTML = html.join('\n');

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
    let collapse = jQuery(el.children[0]);
    return {
        dispose: () => { collapse.collapse("dispose"); },
        el,
        hide: () => { collapse.collapse("hide"); },
        show: () => { collapse.collapse("show"); },
        toggle: () => { collapse.collapse("toggle"); }
    };
}