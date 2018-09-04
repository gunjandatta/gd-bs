import * as jQuery from "jquery";
import { IProgress, IProgressProps } from "./types/progress";

/**
 * Progress
 */
export const Progress = (props: IProgressProps): IProgress => {
    let maxValue = typeof (props.max) === "number" ? props.max : 100;
    let minValue = typeof (props.min) === "number" ? props.min : 0;
    let size = typeof (props.size) === "number" ? props.size : 0;

    // Set the class names
    let classNames = ["progress"];
    props.className ? classNames.push(props.className) : null;

    // Set the bar class names
    let barClassNames = ["progress-bar"];
    props.isAnimated ? barClassNames.push("progress-bar-animated") : null;
    props.isStriped ? barClassNames.push("progress-bar-striped") : null;

    // Set the attributes
    let attributes = [
        'class="' + barClassNames.join(' ') + '"',
        'role="progressbar"',
        'style="width: ' + size + '%"',
        'aria-valuenow="' + size + '"',
        'aria-valuemin="' + minValue + '"',
        'aria-valuemax="' + maxValue + '"'
    ].join(' ');

    // Set the starting tag
    let html = [
        '<div class="' + classNames.join(' ') + '">',
        '<div ' + attributes + '>' + (props.label || '') + '</div>',
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

    // Return the progress
    let progress = jQuery(el.children[0]);
    return { el };
}