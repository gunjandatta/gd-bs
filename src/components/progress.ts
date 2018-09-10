import { IProgress, IProgressProps } from "./types/progress";

/**
 * Progress
 */
export const Progress = (props: IProgressProps): IProgress => {
    let maxValue = typeof (props.max) === "number" ? props.max : 100;
    let minValue = typeof (props.min) === "number" ? props.min : 0;
    let size = typeof (props.size) === "number" ? props.size : 0;

    // Create the progress
    let progress = document.createElement("div");

    // Set the class names
    progress.className = props.className || "";
    progress.classList.add("progress");

    // Create the progress bar
    let progressBar = document.createElement("div");
    progressBar.setAttribute("role", "progressbar")
    progressBar.style.width = size + "%";
    progressBar.setAttribute("aria-valuenow", size.toString());
    progressBar.setAttribute("aria-valuemin", minValue.toString());
    progressBar.setAttribute("aria-valuemax", maxValue.toString());
    progress.appendChild(progressBar);

    // Set the class names
    progressBar.className = "progress-bar";
    props.isAnimated ? progressBar.classList.add("progress-bar-animated") : null;
    props.isStriped ? progressBar.classList.add("progress-bar-striped") : null;

    // Create the element
    let el = document.createElement("div");
    el.appendChild(progress);

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
    return { el: progress };
}