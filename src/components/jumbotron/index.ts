import { IJumbotron, IJumbotronProps } from "./types";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { appendContent } from "../common";
import { HTML } from "./templates";

/**
 * Jumbotron Size
 */
export enum JumbotronSize {
    XSmall = 1,
    Small = 2,
    Medium = 3,
    Large = 4,
    XLarge = 5
}

/**
 * Jumbotron Types
 */
export enum JumbotronTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8,
}

/**
 * Jumbotron Classes
 */
export const JumbotronSizeClassNames = new ClassNames([
    "py-1",
    "py-2",
    "py-3",
    "py-4",
    "py-5"
]);

/**
 * Jumbotron Classes
 */
export const JumbotronTypeClassNames = new ClassNames([
    "jumbotron-danger",
    "jumbotron-dark",
    "jumbotron-info",
    "jumbotron-light",
    "jumbotron-link",
    "jumbotron-primary",
    "jumbotron-secondary",
    "jumbotron-success",
    "jumbotron-warning"
]);

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

        // Set the size
        let className = JumbotronSizeClassNames.getByType(this.props.size) || JumbotronSizeClassNames.getByType(JumbotronSize.XLarge);
        this.el.classList.add(className);

        // Set the type
        className = JumbotronTypeClassNames.getByType(this.props.type);
        if (className) { this.el.classList.add(className); }

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