import * as jQuery from "jquery";
import * as Common from "../common";
import { IAlert, IAlertProps } from "../../@types/components/alert";

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

    // Method to set the alert type
    let setType = (alertType: number) => {
        // Read the type
        switch (alertType) {
            // Danger
            case AlertTypes.Danger:
                alert.classList.add("alert-danger");
                break;
            // Dark
            case AlertTypes.Dark:
                alert.classList.add("alert-dark");
                break;
            // Info
            case AlertTypes.Info:
                alert.classList.add("alert-info");
                break;
            // Light
            case AlertTypes.Light:
                alert.classList.add("alert-light");
                break;
            // Secondary
            case AlertTypes.Secondary:
                alert.classList.add("alert-secondary");
                break;
            // Success
            case AlertTypes.Success:
                alert.classList.add("alert-success");
                break;
            // Warning
            case AlertTypes.Warning:
                alert.classList.add("alert-warning");
                break;
            // Default - Primary
            default:
                alert.classList.add("alert-primary");
                break;
        }
    };

    // Set the alert type
    setType(props.type);

    // Add the header
    props.header ? alert.innerHTML = '<h4 class="alert-heading">' + props.header + '</h4>' : '';

    // Set the content
    let content = props.content || "";
    if (typeof (content) === "string") {
        // Set the html
        alert.innerHTML += content;
    } else {
        // Append the element
        alert.appendChild(content);
    }

    // See if we need to add the dismiss icon
    if (props.isDismissible) {
        // Create the button
        let btn = document.createElement("button");
        btn.className = "close";
        btn.type = "button";
        btn.setAttribute("data-dismiss", "alert");
        btn.setAttribute("aria-label", "Close");
        btn.innerHTML = '<span aria-hidden="true">&times;</span>';

        // Append the button
        alert.appendChild(btn);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(alert);

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

    // Return the alert
    return {
        close: () => { jQuery(alert).alert("toggle"); },
        dispose: () => { jQuery(alert).alert("dispose"); },
        el: alert,
        hide: () => { Common.hide(alert); },
        setText: (alertText?: string) => {
            // Clear the element
            while (alert.firstChild) { alert.removeChild(alert.firstChild); }

            // Set the text
            let elText = document.createTextNode(alertText || "");

            // Append the text
            alert.appendChild(elText);
        },
        setType: (alertType: number) => {
            // Remove the current type
            alert.classList.remove("alert-danger");
            alert.classList.remove("alert-dark");
            alert.classList.remove("alert-info");
            alert.classList.remove("alert-light");
            alert.classList.remove("alert-secondary");
            alert.classList.remove("alert-success");
            alert.classList.remove("alert-warning");
            alert.classList.remove("alert-primary");

            // Add the button type
            setType(alertType);
        },
        show: () => { Common.show(alert); }
    };
}