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
    // Set the class names
    let classNames = ["alert"];
    props.className ? classNames.push(props.className) : null;
    props.isDismissible ? classNames.push("alert-dismissible") : null;

    // Read the type
    switch (props.type) {
        // Danger
        case AlertTypes.Danger:
            classNames.push("btn-danger");
            break;
        // Dark
        case AlertTypes.Dark:
            classNames.push("btn-dark");
            break;
        // Info
        case AlertTypes.Info:
            classNames.push("btn-info");
            break;
        // Light
        case AlertTypes.Light:
            classNames.push("btn-light");
            break;
        // Secondary
        case AlertTypes.Secondary:
            classNames.push("btn-secondary");
            break;
        // Success
        case AlertTypes.Success:
            classNames.push("btn-success");
            break;
        // Warning
        case AlertTypes.Warning:
            classNames.push("btn-warning");
            break;
        // Default - Primary
        default:
            classNames.push("btn-primary");
            break;
    }

    // Generate the html
    let html = [
        '<div class="' + classNames.join(' ') + '" role="alert">',
        props.header ? '<h4 class="alert-heading">' + props.header + '</h4>' : '',
        props.content || '',
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

    // Return the alert
    let alert = jQuery(el.children[0]);
    return {
        close: () => { alert.alert("toggle"); },
        dispose: () => { alert.alert("dispose"); },
        el
    };
}