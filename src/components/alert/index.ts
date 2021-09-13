import { IAlert, IAlertProps } from "./types";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { appendContent } from "../common";
import { HTML } from "./templates";

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
export const AlertClassNames = new ClassNames([
    "alert-danger",
    "alert-dark",
    "alert-info",
    "alert-light",
    "alert-primary",
    "alert-secondary",
    "alert-success",
    "alert-warning"
]);

/**
 * Alert
 */
class _Alert extends Base<IAlertProps> implements IAlert {
    private _btnClose: HTMLButtonElement = null;

    // Constructor
    constructor(props: IAlertProps, template: string = HTML) {
        super(template, props);

        // Set the default styling
        this.el.classList.add(AlertClassNames.getByType(this.props.type) || AlertClassNames.getByType(AlertTypes.Primary));

        // Configure the alert
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent element
        this.configureParent();
    }

    // Configure the alert
    private configure() {
        // Append the content
        appendContent(this.el, this.props.content);

        // See if a header was defined
        if (this.props.header) {
            // Create the header
            let elHeader = document.createElement("h4");
            elHeader.classList.add("alert-heading");
            elHeader.innerHTML = this.props.header;
            this.el.prepend(elHeader);
        }

        // See if we need to add the dismiss icon
        if (this.props.isDismissible) {
            // Add the class
            this.el.classList.add("alert-dismissible");

            // Create the button
            let btn = document.createElement("button");
            btn.className = "btn-close";
            btn.type = "button";
            btn.setAttribute("data-bs-dismiss", "alert");
            btn.setAttribute("aria-label", "Close");

            // Append the button
            this.el.appendChild(btn);
        }
    }

    // Configure the events
    private configureEvents() {
        // See if we are dismissing the alert
        this._btnClose = this.el.querySelector(".btn-close") as HTMLButtonElement;
        if (this._btnClose) {
            // Add a click event
            this._btnClose.addEventListener("click", () => {
                // Add the fade class
                this.el.classList.add("fade");
                setTimeout(() => { this.hide(); }, 250);
            });

            // Execute the event
            this.props.onClose ? this.props.onClose(this.props) : null;
        }
    }

    /**
     * Public Properties
     */

    // Closes the alert
    close() {
        // Click the close button
        this._btnClose ? this._btnClose.click() : null;
    }

    // Clears the alert and updates the text
    setText(alertText?: string) {
        // Clear the element
        while (this.el.firstChild) { this.el.removeChild(this.el.firstChild); }

        // Set the text
        let elText = document.createTextNode(alertText == null ? "" : alertText);

        // Append the text
        this.el.appendChild(elText);
    }

    // Updates the alert template type
    setType(alertType: number) {
        // Parse the class names
        AlertClassNames.parse(className => {
            // Remove the class name
            this.el.classList.remove(className);
        });

        // Set the alert type
        this.el.classList.add(AlertClassNames.getByType(alertType) || AlertClassNames.getByType(AlertTypes.Primary));
    }
}
export const Alert = (props: IAlertProps, template?: string): IAlert => { return new _Alert(props, template); }