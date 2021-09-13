import { IJumbotron, IJumbotronProps } from "./types";
import { Base } from "../base";
import { appendContent } from "../common";
import { HTML } from "./templates";

/**
 * Jumbotron
 */
class _Jumbotron extends Base<IJumbotronProps> implements IJumbotron {
    // Constructor
    constructor(props: IJumbotronProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the class names
        this.props.isFluid ? this.el.classList.add("jumbotron-fluid") : null;

        // Set the title
        let title = this.el.querySelector("h1");
        if (title) {
            if (this.props.title) {
                // Set the title
                title.innerHTML = this.props.title;
            } else {
                // Remove the title
                this.el.removeChild(title);
            }
        }

        // Set the lead
        let lead = this.el.querySelector("p");
        if (lead) {
            if (this.props.lead) {
                // Set the lead
                lead.innerHTML = this.props.lead;
            } else {
                // Remove the lead
                this.el.removeChild(lead);
            }
        }

        // Append the content
        appendContent(this.el, this.props.content);
    }

    // Configures the events
    private configureEvents() {
        // Call the render event
        this.props.onRenderContent ? this.props.onRenderContent(this.el) : null;
    }
}
export const Jumbotron = (props: IJumbotronProps, template?: string): IJumbotron => { return new _Jumbotron(props, template); }