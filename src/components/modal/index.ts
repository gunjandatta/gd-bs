import * as jQuery from "jquery";
import { IModal, IModalProps } from "../../../@types/components/modal";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Modal
 * @param props The modal properties.
 */
class _Modal extends Base<IModalProps> {//implements IModal {
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

        // Update the dialog
        let dialog = this.el.querySelector(".modal-dialog");
        this.props.isCentered ? dialog.classList.add("modal-dialog-centered") : null;
        this.props.isLarge ? dialog.classList.add("modal-lg") : null;
        this.props.isSmall ? dialog.classList.add("modal-sm") : null;

        // Update the title
        let title = this.el.querySelector(".modal-title");
        title.innerHTML = this.props.title || "";

        // See if we are hiding the close button
        if (this.props.hideCloseButton) {
            // Remove the close button
            title.removeChild(title.querySelector("button.close"));
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
    }

    // Configure the events
    private configureEvents() {
        // Execute the events
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".modal-body")) : null;
        this.props.onRenderFooter ? this.props.onRenderFooter(this.el.querySelector(".modal-footer")) : null;

        // See if there is a close event
        if (this.props.onClose) {
            // Add a hidden event
            jQuery(this.el).on("hidden.bs.modal", () => {
                // Call the event
                this.props.onClose(this.el);
            });
        }
    }

    /**
     * Public Interface
     */

    // Disposes the modal
    dispose() { jQuery(this.el).modal("dispose"); }

    // Updates the modal
    handleUpdate() { jQuery(this.el).modal("handleUpdate"); }

    // Hides the modal
    hide() { if (this.el.classList.contains("show")) { this.toggle(); } }

    // Shows the modal
    show() { jQuery(this.el).modal("show"); }

    // Toggles the modal
    toggle() { jQuery(this.el).modal("toggle"); }
}
export const Modal = (props: IModalProps): IModal => { return new _Modal(props); }