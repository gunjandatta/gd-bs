import * as jQuery from "jquery";
import { IAccordion, IAccordionProps } from "../../@types/accordion";
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
        btnProps.target = '#collapse_' + itemId;
        btnProps.toggle = "collapse";

        // Create the card element
        let elCard = document.createElement("div");
        elCard.className = "card";
        accordion.appendChild(elCard);

        // Append the header element
        let elHeader = document.createElement("div");
        elHeader.className = "card-header";
        elHeader.id = itemId;
        elCard.appendChild(elHeader);

        // Render the button to the header
        btnProps.el = elHeader;
        Button(btnProps);

        // Append the collapse element
        let elCollapse = document.createElement("div");
        elCollapse.className = "collapse";
        item.showFl ? elCollapse.classList.add("show") : null;
        elCollapse.setAttribute("aria-labelledby", itemId);
        elCollapse.setAttribute("data-parent", "#" + accordion.id);
        elCollapse.id = "collapse_" + itemId;
        elCard.appendChild(elCollapse);

        // Append the card body
        let elCardBody = document.createElement("div");
        elCardBody.className = "card-body";
        elCardBody.innerHTML = item.content || "";
        elCollapse.appendChild(elCardBody);

        // Execute the render event
        item.onRender ? item.onRender(elCardBody, item) : null;

        // See if there is a click event
        if (item.onClick) {
            // Set the data attribute
            elCardBody.setAttribute("data-idx", i.toString());

            // Add a click event
            elCardBody.addEventListener("click", ev => {
                let el = ev.currentTarget as HTMLElement;

                // Get the item
                let item = items[parseInt(el.getAttribute("data-idx"))];
                if (item && item.onClick) {
                    // Call the click event
                    item.onClick(el, item);
                }
            });
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(accordion);

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

    // See if options exist
    if (props.options) {
        // Set the options
        jQuery(accordion).collapse(props.options);
    }

    // Return the accordion
    return { el: accordion };
}