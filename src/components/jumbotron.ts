import * as jQuery from "jquery";
import { IJumbotron, IJumbotronProps } from "./types/jumbotron";

/**
 * Jumbotron
 */
export const Jumbotron = (props: IJumbotronProps): IJumbotron => {
    // Set the class names
    let classNames = ["jumbotron"];
    props.className ? classNames.push(props.className) : null;
    props.isFluid ? classNames.push("jumbotron-fluid") : null;

    // Generate the html
    let html = [
        '<div class="' + classNames.join(' ') + '">',
        props.title ? '<h1 class="display-4">' + props.title + '</h1>' : '',
        props.lead ? '<p class="lead">' + props.lead + '</p>' : '',
        props.content || '',
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

    // Call the render event
    props.onRenderContent ? props.onRenderContent(el.children[0] as any) : null;

    // Return the jumbotron
    let jumbotron = jQuery(el.children[0]);
    return { el };
}