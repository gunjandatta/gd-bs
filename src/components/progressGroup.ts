import * as jQuery from "jquery";
import { IProgressGroup, IProgressGroupProps } from "./types/progressGroup";
import { Progress } from "./progress";

/**
 * Progress Group
 * @param props The progress group properties.
 */
export const ProgressGroup = (props: IProgressGroupProps): IProgressGroup => {
    // Set the class names
    let classNames = [];
    props.className ? classNames.push(props.className) : null;

    // Set the starting tag
    let html = ['<div class="' + classNames.join(' ') + '">'];

    // Parse the progress bars
    let progressbars = props.progressbars || [];
    for (let i = 0; i < progressbars.length; i++) {
        // Add the progress bar
        html.push(Progress(progressbars[i]).el.innerHTML);
    }

    // Add the closing tag
    html.push('</div>');

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

    // Return the progress group
    let progressGroup = jQuery(el.children[0]);
    return { el };
}