import * as jQuery from "jquery";
import * as Common from "../common";
import { Badge, BadgeTypes } from "./badge";
import { Spinner } from "./spinner";
import { IButton, IButtonProps } from "../../@types/button";

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
    props.title ? button.title = props.title : null;
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

    // Method to set the button type
    let setType = (btnType: number) => {
        // Read the button type
        switch (btnType) {
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
    };

    // Set the button type
    setType(props.type);

    // See if this is a spinner
    if (props.spinnerProps) {
        // Set the element to render to
        props.spinnerProps.el = button;

        // Render the spinner
        Spinner(props.spinnerProps);
    }

    // Set the text
    let btnText = document.createTextNode(props.text || "");
    button.appendChild(btnText);

    // See if there is a badge
    if (props.badge) {
        // Default the type
        props.badge.type = props.badge.type || BadgeTypes.Light;

        // Render the badge
        button.appendChild(Badge(props.badge).el);
    }

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
        hide: () => { Common.hide(button); },
        setText: (btnText?: string) => {
            // Clear the element
            while (button.firstChild) { button.removeChild(button.firstChild); }

            // Set the text
            let elText = document.createTextNode(btnText || "");

            // Append the text
            button.appendChild(elText);
        },
        setType: (btnType: number) => {
            // Remove the current type
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-danger");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-dark");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-info");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-light");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-link");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-secondary");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-success");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-warning");
            button.classList.remove("btn" + (props.isOutline ? "-outline" : "") + "-primary");

            // Add the button type
            setType(btnType);
        },
        show: () => { Common.show(button); },
        toggle: () => { jQuery(button).button("toggle"); }
    };
}