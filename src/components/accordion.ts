import * as jQuery from "jquery";
import { IAccordion, IAccordionProps } from "./types/accordion";
import { Button, ButtonTypes } from "./button";

/**
 * Accordion
 */
export const Accordion = (props: IAccordionProps): IAccordion => {
    // Create the accordion
    let accordion = document.createElement("div");

    // Set the properties
    accordion.id = props.id || "accordion"
    accordion.className = props.className || "";
    accordion.classList.add("accordion");

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let itemId = accordion.id + "_" + i;

        // Set the button properties
        let btnProps = item.btnProps || {};
        typeof (btnProps.type) === "number" ? null : btnProps.type = ButtonTypes.Link;

        //btnProps.isLink = true;
        btnProps.target = '#collapse_' + itemId;
        btnProps.toggle = "collapse";

        // Add the collapse
        accordion.innerHTML += [
            '<div class="card">',
            '<div class="card-header" id="' + itemId + '">',
            Button(btnProps).el.outerHTML,
            '</div>',
            '<div id="' + ('collapse_' + itemId) + '" class="collapse" aria-labelledby="' + itemId + '" data-parent="#' + accordion.id + '">',
            '<div class="card-body">' + (item.content || "") + '</div>',
            '</div>',
            '</div>'
        ].join('\n');
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(accordion);

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

    // Initialize the collapse items
    jQuery(accordion.querySelectorAll(".collapse")).collapse();

    // Return the accordion
    return { el: accordion };
}