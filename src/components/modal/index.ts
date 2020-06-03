import "bootstrap/js/dist/modal";
import { jQuery } from "../../core";
import { IModal, IModalProps } from "../../../@types/components/modal";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Modal
 * @param props The modal properties.
 */
class _Modal extends Base<IModalProps> implements IModal {
    // Constructor
    constructor(props: IModalProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the modal attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.disableFade ? null : this.el.classList.add("fade");
        this.props.isStatic ? this.el.setAttribute("data-backdrop", "static") : null;

        // Update the dialog
        let dialog = this.el.querySelector(".modal-dialog");
        this.props.isCentered ? dialog.classList.add("modal-dialog-centered") : null;
        this.props.isLarge ? dialog.classList.add("modal-lg") : null;
        this.props.isSmall ? dialog.classList.add("modal-sm") : null;

        // Update the title
        this.setTitle(this.props.title);

        // See if we are hiding the close button
        if (this.props.hideCloseButton) {
            // Remove the close button
            dialog.querySelector("button.close").remove();
        }

        // Update the body
        let body = this.el.querySelector(".modal-body");
        let content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the HTML
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Update the footer
        let footer = this.el.querySelector(".modal-footer");
        content = this.props.footer || "";
        if (typeof (content) === "string") {
            // Set the HTML
            footer.innerHTML = content;
        } else {
            // Append the element
            footer.appendChild(content);
        }

        // Get the modal options and default the show flag
        let options = this.props.options || {};
        if (typeof (options.show) !== "boolean") {
            // Default the property
            options.show = false;
        }

        // Create the modal
        this._bootstrapObj = jQuery ? jQuery(this.el).modal(options) : null;
    }

    // Configure the events
    private configureEvents() {
        // Execute the events
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".modal-body")) : null;
        this.props.onRenderFooter ? this.props.onRenderFooter(this.el.querySelector(".modal-footer")) : null;

        // Get the close button
        let elClose = this.el.querySelector("button.close");
        if (elClose) {
            // Add a click event
            elClose.addEventListener("click", () => {
                // Hide the modal
                this.hide();
            });
        }

        // See if there is a close event
        if (this.props.onClose) {
            // Add a hidden event
            this._bootstrapObj ? this._bootstrapObj.on("hidden.bs.modal", () => {
                // Call the event
                this.props.onClose(this.el);
            }) : null;
        }
    }

    /**
     * Bootstrap
     */

    // Disposes the modal
    dispose() { this._bootstrapObj ? this._bootstrapObj.modal("dispose") : null; }

    // Updates the modal
    handleUpdate() { this._bootstrapObj ? this._bootstrapObj.modal("handleUpdate") : null; }

    // Hides the modal
    hide() {
        // hide the modal
        this._bootstrapObj ? this._bootstrapObj.modal("hide") : null;
    }

    // Shows the modal
    show() {
        // Show the modal
        this._bootstrapObj ? this._bootstrapObj.modal("show") : null;
    }

    // Toggles the modal
    toggle() {
        // Toggle the modal
        this._bootstrapObj ? this._bootstrapObj.modal("toggle") : null;
    }

    /**
     * Public Interface
     */

    // Returns true if the modal is visible
    get isVisible() { return this.el.classList.contains("show"); }

    // Updates the title
    setTitle(title: string) {
        // Get the title
        let elTitle = this.el.querySelector(".modal-title");

        // Set the text
        elTitle.innerHTML = title == null ? "" : title;
    }
}
export const Modal = (props: IModalProps): IModal => { return new _Modal(props); }