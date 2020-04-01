import * as jQuery from "jquery";
import { Button } from "../button";
import { IPopover, IPopoverProps } from "../../../@types/components/popover";
import * as HTML from "./index.html";

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
    // Set the popover options
    let options = props.options || {};

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

    // Set the options to target the main popover element
    options.container = "#bs-popovers";

    // See if the placement needs to be set
    if (options.placement == null) {
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
    }

    // See if we are targeting an element
    let popover: HTMLElement = null;
    if (props.target) {
        // Set the popover to the target element
        popover = props.target as HTMLElement;
        popover.setAttribute("tabindex", "0");
        popover.setAttribute("toggle", "popover");
        popover.setAttribute("trigger", "focus");
    } else {
        // Create the popover
        let btnProps = props.btnProps || {};
        btnProps.isLink = props.isDismissible ? true : false;
        btnProps.toggle = "popover";
        btnProps.trigger = "focus";
        popover = Button(btnProps).el as HTMLElement;

        // Set the attributes
        popover.setAttribute("tabindex", "0");
        typeof (options.title) === "string" ? popover.setAttribute("title", options.title) : null;
        typeof (options.content) === "string" ? popover.setAttribute("data-content", options.content) : null;

        // Create the element
        let el = document.createElement("div");
        el.appendChild(popover);

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