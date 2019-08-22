import * as jQuery from "jquery";
import { IToast, IToastProps } from "./types/toast";

/**
 * Toast
 * @param props - The toast properties.
 */
export const Toast = (props: IToastProps): IToast => {
    // Create the toast
    let toast = document.createElement("div");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    toast.setAttribute("role", "alert");

    // Set the class names
    props.className ? toast.className = props.className : null;
    toast.classList.add("toast");

    // Create the header
    let header = document.createElement("div");
    header.classList.add("toast-header");
    toast.appendChild(header);

    // See if we are rendering an image
    if (props.headerImgSrc) {
        // Create the image
        let img = document.createElement("img");
        img.className = props.headerImgClass || "";
        img.src = props.headerImgSrc;
        header.appendChild(img);
    }

    // Set the header text
    let headerText = document.createElement("strong");
    headerText.classList.add("mr-auto");
    headerText.innerHTML = props.headerText || "";
    header.appendChild(headerText);

    // See if there is muted text
    if (props.mutedText) {
        // Create the text
        let mutedText = document.createElement("small");
        mutedText.classList.add("text-muted");
        header.appendChild(mutedText);
    }

    // See if we are creating the close button
    if (props.closeButtonHidden != true) {
        // Set the close button text
        let btnText = document.createElement("small");
        btnText.innerHTML = props.closeButtonText || "";
        header.appendChild(btnText);

        // Create the close button
        let btnClose = document.createElement("button");
        btnClose.className = "ml-2 mb-1 close";
        btnClose.type = "button";
        btnClose.setAttribute("data-dismiss", "toast");
        btnClose.setAttribute("aria-label", "Close");
        header.appendChild(btnClose);

        // Set the close button
        btnText = document.createElement("span");
        btnText.setAttribute("aria-hidden", "true");
        btnText.innerHTML = "&times;";
        btnClose.appendChild(btnText);
    }

    // Create the body
    let body = document.createElement("div");
    body.classList.add("toast-body");
    body.innerHTML = props.bodyText || "";
    toast.appendChild(body);

    // See if the render events exist
    props.onRenderHeader ? props.onRenderHeader(header, props.data) : null;
    props.onRenderBody ? props.onRenderBody(body, props.data) : null;

    // See if the click event exists
    if (props.onClick) {
        // Set the click event
        toast.addEventListener("click", () => {
            // Execute the click event
            props.onClick(toast, props.data);
        });
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(toast);

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

    // Method to hide the toast
    let hide = () => {
        // Remove the show class
        toast.classList.remove("show");

        // Add the hide class
        toast.classList.add("hide");
    };

    // Method to show the toast
    let show = () => {
        // Remove the hide class
        toast.classList.remove("hide");

        // Add the show class
        toast.classList.add("show");
    }

    // Initialize the toast component
    jQuery(toast).toast(props.options);

    // Return the toast component
    return {
        el: toast,
        hide,
        show
    };
}