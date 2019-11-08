import * as jQuery from "jquery";
import * as Common from "../common";
import { IModal, IModalProps } from "../../@types/modal";
import { Button } from "./button";

/**
 * Modal
 * @param props The modal properties.
 */
export const Modal = (props: IModalProps): IModal => {
    // Create the modal
    let modal = document.createElement("div");
    props.id ? modal.id = props.id : null;
    modal.setAttribute("role", "dialog");

    // Set the class names
    props.className ? modal.className = props.className : null;
    modal.classList.add("modal");
    props.disableFade ? null : modal.classList.add("fade");

    // Set the dialog class names
    let classNames = ["modal-dialog"];
    props.isCentered ? classNames.push("modal-dialog-centered") : null;
    props.isLarge ? classNames.push("modal-lg") : null;
    props.isSmall ? classNames.push("modal-sm") : null;

    // Generate the html
    modal.innerHTML = [
        '<div class="' + classNames.join(' ') + '" role="document">',
        '<div class="modal-content">',
        '<div class="modal-header">',
        '<div class="modal-title">' + (props.title || "") + '</div>',
        props.hideCloseButton ? '' : [
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">',
            '<span aria-hidden="true">&times;</span>',
            '</button>'
        ].join('\n'),
        '</div>',
        '<div class="modal-body">' + (props.body || "") + '</div>',
        '<div class="modal-footer">' + (props.footer || "") + '</div>',
        '</div>',
        '</div>'
    ].join('\n');

    // Create the element
    let el = document.createElement("div");
    el.appendChild(modal);

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

        // See if we are rendering a button
        if (props.button) {
            let btnProps = props.button;

            // Set the properties
            props.id ? btnProps.target = "#" + props.id : null
            btnProps.toggle = "modal";

            // Render the button
            props.el.appendChild(Button(btnProps).el);
        }
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Execute the events
    props.onRenderBody ? props.onRenderBody(modal.querySelector(".modal-body")) : null;
    props.onRenderFooter ? props.onRenderFooter(modal.querySelector(".modal-footer")) : null;

    // Create the modal
    let $modal = jQuery(el.children[0]);

    // See if there is a close event
    if (props.onClose) {
        // Add a hidden event
        $modal.on("hidden.bs.modal", () => {
            // Call the event
            props.onClose(modal);
        });
    }

    // Toggle the modal by default if it's hidden, in order for it to work the first time
    if (!modal.classList.contains("show")) { $modal.modal("toggle"); }

    // Return the element
    return {
        dispose: () => { $modal.modal("dispose"); },
        el: modal,
        handleUpdate: () => { $modal.modal("handleUpdate"); },
        // Don't use the "hide" method, it will not remove the other customizations from the page.
        hide: () => { if (modal.classList.contains("show")) { $modal.modal("toggle"); } },
        show: () => { $modal.modal("show"); },
        toggle: () => { $modal.modal("toggle"); }
    };
}