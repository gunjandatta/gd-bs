import { IProgressGroup, IProgressGroupProps } from "../../@types/progressGroup";
import { Progress } from "./progress";

/**
 * Progress Group
 * @param props The progress group properties.
 */
export const ProgressGroup = (props: IProgressGroupProps): IProgressGroup => {
    // Create the progress group
    let progressGroup = document.createElement("div");
    progressGroup.className = props.className || "";

    // Parse the progress bars
    let progressbars = props.progressbars || [];
    for (let i = 0; i < progressbars.length; i++) {
        // Add the progress bar
        progressGroup.appendChild(Progress(progressbars[i]).el);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(progressGroup);

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

    // Return the progress group
    return { el: progressGroup };
}