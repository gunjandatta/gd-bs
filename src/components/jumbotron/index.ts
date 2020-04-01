import { IJumbotron, IJumbotronProps } from "../../../@types/components/jumbotron";
import * as Common from "../common";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Jumbotron
 */
class _Jumbotron extends Base<IJumbotronProps> {//implements IJumbotron {
    // Constructor
    constructor(props: IJumbotronProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
    }
}
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
        props.lead ? '<p class="lead">' + props.lead + '</p>' : ''
    ].join('\n');

    // Set the content
    let content = props.content || "";
    if (typeof (content) === "string") {
        // Set the html
        jumbotron.innerHTML += content;
    } else {
        // Append the element
        jumbotron.appendChild(content);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(jumbotron);

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

    // Call the render event
    props.onRenderContent ? props.onRenderContent(jumbotron) : null;

    // Return the jumbotron
    return {
        el: jumbotron,
        hide: () => { Common.hide(jumbotron); },
        show: () => { Common.show(jumbotron); }
    };
}