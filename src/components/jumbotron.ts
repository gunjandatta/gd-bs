import { IJumbotron, IJumbotronProps } from "./types/jumbotron";

/**
 * Jumbotron
 */
export const Jumbotron = (props: IJumbotronProps): IJumbotron => {
    // Create the jumbotron
    let jumbotron = document.createElement("div");

    // Set the class names
    jumbotron.className = props.className || "";
    jumbotron.classList.add("jumbotron");
    props.isFluid ? jumbotron.classList.add("jumbotron-fluid") : null;

    // Set the content
    jumbotron.innerHTML = [
        props.title ? '<h1 class="display-4">' + props.title + '</h1>' : '',
        props.lead ? '<p class="lead">' + props.lead + '</p>' : '',
        props.content || ''
    ].join('\n');

    // Create the element
    let el = document.createElement("div");
    el.appendChild(jumbotron);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList && props.el.parentElement.tagName != "BODY") {
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

    // Call the render event
    props.onRenderContent ? props.onRenderContent(jumbotron) : null;

    // Return the jumbotron
    return { el: jumbotron };
}