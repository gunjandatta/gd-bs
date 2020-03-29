import * as jQuery from "jquery";
import * as Common from "../../common";
import { IAlert, IAlertProps } from "../../../@types/components/alert";
import * as HTML from "./index.html";

/**
 * HTML Template
 */
const Template: string = HTML as any;

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
 * Alert Class Names
 */
const AlertClassNames = [
    "alert-danger",
    "alert-dark",
    "alert-info",
    "alert-light",
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-warning"
];

/**
 * Alert
 */
export const Alert = (props: IAlertProps): IAlert => {
    // Create the alert
    let alert = document.createElement("div");
    alert.innerHTML = Template;
    alert = alert.firstChild as HTMLDivElement;

    // Set the default styling
    alert.classList.add(AlertClassNames[props.type || AlertTypes.Primary]);

    // Set the header
    let header = alert.querySelector(".alert-heading");
    if (props.header) {
        // Set the heading
        header.innerHTML = props.header;
    } else {
        // Remove the element
        alert.removeChild(header);
    }

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
        // Add the class
        alert.classList.add("alert-dismissible");

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
            // Parse the class names
            for (let i = 0; i < AlertClassNames.length; i++) {
                // Remove the class name
                alert.classList.remove(AlertClassNames[i]);
            }

            // Set the alert type
            alert.classList.add(AlertClassNames[alertType || AlertTypes.Primary]);
        },
        show: () => { Common.show(alert); }
    };
}