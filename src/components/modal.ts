import * as jQuery from "jquery";
import { IModal, IModalProps } from "./types/modal";
import { Button } from "./button";

/**
 * Modal
 * @param props The modal properties.
 */
export const Modal = (props: IModalProps): IModal => {
    let html = [];

    // See if we are rendering a button
    if (props.button) {
        let btnProps = props.button;

        // Set the properties
        props.id ? btnProps.target = "#" + props.id : null
        btnProps.toggle = "modal";

        // Render a button
        html.push(Button(btnProps).el.innerHTML);
    }

    // Set the class names
    let classNames = ["modal"];
    props.className ? classNames.push(props.className) : null;
    props.disableFade ? null : classNames.push("fade");

    // Set the attributes
    let attributes = [
        'role="dialog"',
        'class="' + classNames.join(' ') + '"',
        props.id ? 'id="' + props.id + '"' : null
    ].join(' ').replace(/  /g, " ");

    // Set the dialog class names
    let dialogClassNames = ["modal-dialog"];
    props.isCentered ? dialogClassNames.push("modal-dialog-centered") : null;
    props.isLarge ? dialogClassNames.push("modal-lg") : null;
    props.isSmall ? dialogClassNames.push("modal-sm") : null;

    // Generate the html
    html.push([
        '<div ' + attributes + '>',
        '<div class="' + dialogClassNames.join(' ') + '" role="document">',
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
        '</div>',
        '</div>'
    ].join('\n'));

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

    // Execute the events
    props.onRenderBody ? props.onRenderBody(el.querySelector(".modal-body")) : null;
    props.onRenderFooter ? props.onRenderFooter(el.querySelector(".modal-footer")) : null;

    // Create the modal
    let $modal = jQuery(el.children[0]);
    let modal = {
        dispose: () => { $modal.modal("dispose"); },
        el,
        handleUpdate: () => { $modal.modal("handleUpdate"); },
        hide: () => { $modal.modal("hide"); },
        show: () => { $modal.modal("show"); },
        toggle: () => { $modal.modal("toggle"); }
    };

    // See if there is a close event
    if (props.onClose) {
        // Add a hidden event
        $modal.on("hidden.bs.modal", () => {
            // Call the event
            props.onClose(modal);
        });
    }

    // Return the element
    return modal;
}