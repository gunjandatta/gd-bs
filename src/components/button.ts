import * as jQuery from "jquery";
import { Badge, BadgeTypes } from "./badge";
import { IButton, IButtonProps } from "./types/button";

/**
 * Button Types
 */
export enum ButtonTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Link = 5,
    Primary = 6,
    Secondary = 7,
    Success = 8,
    Warning = 9
}

/**
 * Button
 * @param props The button properties.
 */
export const Button = (props: IButtonProps): IButton => {
    // Create the button
    let button: HTMLAnchorElement | HTMLButtonElement = null;

    // See if this is a link
    if (props.href || props.isLink) {
        // Create the button
        button = document.createElement("a") as HTMLAnchorElement;

        // Set the attributes
        button.href = props.href || "#";
        button.setAttribute("role", "button");
    } else {
        // Create the button
        button = document.createElement("button") as HTMLButtonElement;

        // Set the attributes
        button.setAttribute("type", "button");
    }

    // Set the attributes
    props.id ? button.id = props.id : null;
    props.isDisabled ? button.setAttribute("disabled", "disabled") : null;
    props.target ? button.setAttribute("data-target", props.target) : null;
    props.toggle ? button.setAttribute("data-toggle", props.toggle) : null;
    props.trigger ? button.setAttribute("data-trigger", props.trigger) : null;
    typeof (props.isExpanded) === "boolean" ? button.setAttribute("aria-expanded", props.isExpanded ? "true" : "false") : null;
    props.controls ? button.setAttribute("aria-controls", props.controls.join(' ')) : null;

    // Set the class names
    button.className = props.className || "";
    button.classList.add("btn");
    props.isBlock ? button.classList.add("btn-block") : null;
    props.isLarge ? button.classList.add("btn-lg") : null;
    props.isSmall ? button.classList.add("btn-sm") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case ButtonTypes.Danger:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-danger");
            break;
        // Dark
        case ButtonTypes.Dark:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-dark");
            break;
        // Info
        case ButtonTypes.Info:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-info");
            break;
        // Light
        case ButtonTypes.Light:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-light");
            break;
        // Link
        case ButtonTypes.Link:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-link");
            break;
        // Secondary
        case ButtonTypes.Secondary:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-secondary");
            break;
        // Success
        case ButtonTypes.Success:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-success");
            break;
        // Warning
        case ButtonTypes.Warning:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-warning");
            break;
        // Default - Primary
        default:
            button.classList.add("btn" + (props.isOutline ? "-outline" : "") + "-primary");
            break;
    }

    // Set the text
    button.innerHTML = [
        props.text || "",
        props.badgeValue ? Badge({ content: props.badgeValue, type: props.badgeType || BadgeTypes.Light }).el.outerHTML : ''
    ].join('\n');

    // See if there is a click event
    if (props.onClick) {
        // Add a click event
        button.addEventListener("click", ev => {
            // Call the click event
            props.onClick(props, ev);
        });
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(button);

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

    // Return the button
    return {
        dispose: () => { jQuery(button).button("dispose"); },
        el: button,
        toggle: () => { jQuery(button).button("toggle"); }
    };
}