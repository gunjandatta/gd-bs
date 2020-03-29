import { IBadge, IBadgeProps } from "../../@types/components/badge";
import * as Common from "../common";

/**
 * Badge Types
 */
export enum BadgeTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Badge
 */
export const Badge = (props: IBadgeProps): IBadge => {
    let badge: HTMLAnchorElement | HTMLSpanElement = null;

    // See if this is a link or has a click event
    if (props.href || props.onClick) {
        // Create the badge
        badge = document.createElement("a") as HTMLAnchorElement;

        // Set the properties
        badge.setAttribute("href", props.href || "#");
    } else {
        // Create the badge
        badge = document.createElement("span");
    }

    // Set the content
    let content = props.content || "";
    if (typeof (content) === "string") {
        // Set the html
        badge.innerHTML = content;
    } else {
        // Append the element
        badge.appendChild(content);
    }

    // Set the class names
    badge.className = props.className || "";
    badge.classList.add("badge");
    props.isPill ? badge.classList.add("badge-pill") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case BadgeTypes.Danger:
            badge.classList.add("badge-danger");
            break;
        // Dark
        case BadgeTypes.Dark:
            badge.classList.add("badge-dark");
            break;
        // Info
        case BadgeTypes.Info:
            badge.classList.add("badge-info");
            break;
        // Light
        case BadgeTypes.Light:
            badge.classList.add("badge-light");
            break;
        // Secondary
        case BadgeTypes.Secondary:
            badge.classList.add("badge-secondary");
            break;
        // Success
        case BadgeTypes.Success:
            badge.classList.add("badge-success");
            break;
        // Warning
        case BadgeTypes.Warning:
            badge.classList.add("badge-warning");
            break;
        // Default - Primary
        default:
            badge.classList.add("badge-primary");
            break;
    }

    // Set the click event
    props.onClick ? badge.addEventListener("click", ev => {
        // Call the event
        props.onClick(props, ev);
    }) : null;

    // Create the element
    let el = document.createElement("div");
    el.appendChild(badge);

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

    // Return the badge
    return {
        el: badge,
        hide: () => { Common.hide(badge); },
        show: () => { Common.show(badge); }
    };
}