import * as jQuery from "jquery";
import * as Common from "../common";
import { ICollapse, ICollapseProps } from "../../@types/components/collapse";

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

    // Create the body element
    let elBody = document.createElement("div");
    elBody.classList.add("card");
    elBody.classList.add("card-body");
    collapse.appendChild(elBody);

    // Set the content
    let content = props.content || "";
    if (typeof (content) === "string") {
        // Set the html
        elBody.innerHTML = content;
    } else {
        // Append the element
        elBody.appendChild(content);
    }

    // Execute the render event
    props.onRender ? props.onRender(props, collapse.children[0] as any) : null;

    // Create the element
    let el = document.createElement("div");
    el.appendChild(collapse);

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

    // Create the collapse
    let $collapse = jQuery(collapse);

    // See if options exist
    if (props.options) {
        // Set the options
        $collapse.collapse(props.options);
    }

    // Return the collapse
    return {
        dispose: () => { $collapse.collapse("dispose"); },
        el: collapse,
        hide: () => { $collapse.collapse("hide"); },
        show: () => { $collapse.collapse("show"); },
        toggle: () => { $collapse.collapse("toggle"); }
    };
}