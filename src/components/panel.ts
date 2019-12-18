import { IPanel, IPanelProps, IPanelTypes } from "../../@types/components/panel";
import { Modal } from "./modal";

/**
 * Panel Types
 */
export enum PanelTypes {
    Full = 1,
    Large = 2,
    Medium = 3,
    Small = 4,
    XLarge = 5
}

/**
 * Panel
 */
export const Panel = (props: IPanelProps): IPanel => {
    // Create the panel
    let elPanel = document.createElement("div");
    elPanel.className = props.className || "";
    elPanel.classList.add("panel");

    // Set the modal properties
    let modalProps = (props ? props.modalProps : null) || {};
    modalProps.el = modalProps.el || elPanel;

    // Set the class name
    let classNames = [
        modalProps.className || "",
        "panel"
    ];

    // Set the type
    switch (props.type) {
        // Full
        case PanelTypes.Full:
            // Add the class name
            classNames.push("panel-full");
            break;

        // Large
        case PanelTypes.Large:
            // Add the class name
            classNames.push("panel-lg");
            break;

        // Small
        case PanelTypes.Small:
            // Add the class name
            classNames.push("panel-sm");
            break;

        // Extra Large
        case PanelTypes.XLarge:
            // Add the class name
            classNames.push("panel-xl");
            break;

        // Default - Medium
        default:
            // Add the class name
            classNames.push("panel-md");
            break;
    }

    // Set the class name
    modalProps.className = classNames.join(' ').trim();

    // Create the modal
    let modal = Modal(modalProps);

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elPanel);

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

    // Return the panel
    return {
        el: elPanel,
        modal,
        hide: () => {
            // Hide the modal
            modal.hide();
        },
        show: () => {
            // Show the modal
            modal.show();
        }
    };
}