import * as jQuery from "jquery";
import { IAlert, IAlertProps } from "./types/alert";

/**
 * Alert Types
 */
export enum AlertTypes {
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
 * Alert
 */
export const Alert = (props: IAlertProps): IAlert => {
    // Create the alert
    let alert = document.createElement("div");
    alert.setAttribute("role", "alert");

    // Set the class name
    alert.className = props.className || "";
    alert.classList.add("alert");
    props.isDismissible ? alert.classList.add("alert-dismissible") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case AlertTypes.Danger:
            alert.classList.add("btn-danger");
            break;
        // Dark
        case AlertTypes.Dark:
            alert.classList.add("btn-dark");
            break;
        // Info
        case AlertTypes.Info:
            alert.classList.add("btn-info");
            break;
        // Light
        case AlertTypes.Light:
            alert.classList.add("btn-light");
            break;
        // Secondary
        case AlertTypes.Secondary:
            alert.classList.add("btn-secondary");
            break;
        // Success
        case AlertTypes.Success:
            alert.classList.add("btn-success");
            break;
        // Warning
        case AlertTypes.Warning:
            alert.classList.add("btn-warning");
            break;
        // Default - Primary
        default:
            alert.classList.add("btn-primary");
            break;
    }

    // Add the header
    props.header ? alert.innerHTML = '<h4 class="alert-heading">' + props.header + '</h4>' : '';

    // Add the content
    alert.innerHTML += props.content || "";

    // Create the element
    let el = document.createElement("div");
    el.appendChild(alert);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList && props.el.parentElement.tagName != "BODY") {
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

    // Return the alert
    return {
        close: () => { jQuery(alert).alert("toggle"); },
        dispose: () => { jQuery(alert).alert("dispose"); },
        el: alert
    };
}