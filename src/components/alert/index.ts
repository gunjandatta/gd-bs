import * as jQuery from "jquery";
import { IAlert, IAlertProps } from "../../../@types/components/alert";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Alert Types
 */
export enum AlertTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Alert Class Names
 */
const AlertClassNames = [
    "alert-danger",
    "alert-dark",
    "alert-info",
    "alert-light",
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-warning"
];

/**
 * Alert
 */
class _Alert extends Base<IAlertProps> implements IAlert {
    // Constructor
    constructor(props: IAlertProps) {
        super(HTML, props);

        // Set the default styling
        this.el.classList.add(AlertClassNames[(this.props.type || AlertTypes.Primary) - 1]);

        // Render the header
        this.renderHeader();

        // Render the content
        this.renderContent();

        // Configure the dissmissible property
        this.configureDismissible();

        // Configure the parent element
        this.configureParent();
    }

    // Configures the alert to be dismissible
    private configureDismissible() {
        // See if we need to add the dismiss icon
        if (this.props.isDismissible) {
            // Add the class
            this.el.classList.add("alert-dismissible");

            // Create the button
            let btn = document.createElement("button");
            btn.className = "close";
            btn.type = "button";
            btn.setAttribute("data-dismiss", "alert");
            btn.setAttribute("aria-label", "Close");
            btn.innerHTML = '<span aria-hidden="true">&times;</span>';

            // Append the button
            this.el.appendChild(btn);
        }
    }

    // Render the content
    private renderContent() {
        let content = this.props.content || "";

        // See if the content is a string
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML += content;
        } else {
            // Append the element
            this.el.appendChild(content);
        }
    }

    // Render the header
    private renderHeader() {
        let header = this.el.querySelector(".alert-heading");

        // See if a header was defined
        if (this.props.header) {
            // Set the heading
            header.innerHTML = this.props.header;
        } else {
            // Remove the element
            this.el.removeChild(header);
        }
    }

    /**
     * Public Properties
     */

    // Closes the alert
    close() { jQuery(this.el).alert("toggle"); }

    // Disposes the alert
    dispose() { jQuery(this.el).alert("dispose"); }

    // Clears the alert and updates the text
    setText(alertText?: string) {
        // Clear the element
        while (this.el.firstChild) { this.el.removeChild(this.el.firstChild); }

        // Set the text
        let elText = document.createTextNode(alertText || "");

        // Append the text
        this.el.appendChild(elText);
    }

    // Updates the alert template type
    setType(alertType: number) {
        // Parse the class names
        for (let i = 0; i < AlertClassNames.length; i++) {
            // Remove the class name
            this.el.classList.remove(AlertClassNames[i]);
        }

        // Set the alert type
        this.el.classList.add(AlertClassNames[(alertType || AlertTypes.Primary) - 1]);
    }
}
export const Alert = (props: IAlertProps) => { return new _Alert(props); }