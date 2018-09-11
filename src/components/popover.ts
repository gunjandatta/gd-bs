import * as jQuery from "jquery";
import { Button } from "./button";
import { IPopover, IPopoverProps } from "./types/popover";

/**
 * Popover Types
 */
export enum PopoverTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Popover
 */
export const Popover = (props: IPopoverProps): IPopover => {
    // Create the popover
    let btnProps = props.btnProps || {};
    btnProps.isLink = props.isDismissible ? true : false;
    btnProps.toggle = "popover";
    btnProps.trigger = "focus";
    let popover = Button(btnProps).el;

    // Set the popover options
    let options = props.options || {};

    // Set the type
    switch (props.type) {
        // Auto
        case PopoverTypes.Auto:
            options.placement = "auto";
            break;
        // Bottom
        case PopoverTypes.Bottom:
            options.placement = "bottom";
            break;
        // Left
        case PopoverTypes.Left:
            options.placement = "left";
            break;
        // Right
        case PopoverTypes.Right:
            options.placement = "right";
            break;
        // Top
        case PopoverTypes.Top:
            options.placement = "top";
            break;
    }

    // Set the attributes
    popover.setAttribute("tabindex", "0");
    popover.setAttribute("title", options.title || "");
    popover.setAttribute("data-content", options.content || "");

    // Set the options to target the main popover element
    options.container = "#bs-popovers";

    // Ensure the main popover element exists
    // This will ensure the popovers are wrapped with a parent element with the "bs" class applied to it.
    let elParent = document.querySelector("#bs-popovers");
    if (elParent == null) {
        // Create the main element
        elParent = document.createElement("div");
        elParent.classList.add("bs");
        elParent.id = "bs-popovers";

        // Add it to the page
        document.body.appendChild(elParent)
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(popover);

    // See if we are rendering it to an element
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

    // Create the popover
    let $popover = jQuery(popover).popover(options);

    // Return the popover
    return {
        dispose: () => { $popover.popover("dispose"); },
        el: popover,
        hide: () => { $popover.popover("hide"); },
        show: () => { $popover.popover("show"); },
        toggle: () => { $popover.popover("toggle"); },
        toggleEnabled: () => { $popover.popover("toggleEnabled"); },
        update: () => { $popover.popover("update"); }
    };
}