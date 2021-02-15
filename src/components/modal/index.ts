import { bootstrap } from "../../core";
import { IModal, IModalProps, IModalOptions } from "../../../@types/components/modal";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { HTML } from "./templates";

/**
 * Modal Types
 */
export enum ModalTypes {
    Small = 1,
    Medium = 2,
    Large = 3,
    XLarge = 4,
    Full = 5,
    FullSmall = 6,
    FullMedium = 7,
    FullLarge = 8,
    FullXLarge = 9,
    PanelSmall = 10,
    PanelMedium = 11,
    PanelLarge = 12,
    PanelXLarge = 13
}

/**
 * Modal Classes
 */
export const ModalClassNames = new ClassNames([
    "modal-sm",
    "",
    "modal-lg",
    "modal-xl",
    "modal-fullscreen",
    "modal-fullscreen-sm-down",
    "modal-fullscreen-md-down",
    "modal-fullscreen-lg-down",
    "modal-fullscreen-xl-down",
    "panel-sm",
    "panel-md",
    "panel-lg",
    "panel-xl"
]);

/**
 * Modal
 * @param props The modal properties.
 */
class _Modal extends Base<IModalProps> implements IModal {

    // Constructor
    constructor(props: IModalProps, template: string = HTML) {
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
        // Set the modal attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.disableFade ? null : this.el.classList.add("fade");
        this.props.isStatic ? this.el.setAttribute("data-bs-backdrop", "static") : null;

        // Update the dialog
        let dialog = this.el.querySelector(".modal-dialog") as HTMLElement;
        if (dialog) {
            this.props.isCentered ? dialog.classList.add("modal-dialog-centered") : null;

            // See if this is a panel
            switch (this.props.type) {
                case ModalTypes.PanelSmall:
                case ModalTypes.PanelMedium:
                case ModalTypes.PanelLarge:
                case ModalTypes.PanelXLarge:
                    dialog.classList.add(ModalClassNames.getByType(ModalTypes.Full));
                    break;
            }

            // Add the class name, based on the type
            let className = ModalClassNames.getByType(this.props.type);
            className ? dialog.classList.add(className) : null;

            // Update the title
            this.setTitle(this.props.title);

            // See if we are hiding the close button
            if (this.props.hideCloseButton) {
                // Remove the close button
                let closeButton = dialog.querySelector(".btn-close") as HTMLElement;
                closeButton ? closeButton.parentNode.removeChild(closeButton) : null;
            }
        }

        // Update the body
        let body = this.el.querySelector(".modal-body");
        if (body) {
            let content = this.props.body || "";
            if (typeof (content) === "string" || typeof (content) === "number") {
                // Set the HTML
                body.innerHTML = content;
            } else {
                // Append the element
                body.appendChild(content);
            }

            // Update the footer
            let footer = this.el.querySelector(".modal-footer");
            if (footer) {
                content = this.props.footer || "";
                if (typeof (content) === "string" || typeof (content) === "number") {
                    // Set the HTML
                    footer.innerHTML = content;
                } else {
                    // Append the element
                    footer.appendChild(content);
                }
            }
        }

        // Get the modal options
        let options: IModalOptions = this.props.options;
        if (options) {
            // Set the backdrop
            if (typeof (options.backdrop) === "boolean") {
                this.el.setAttribute("data-bs-backdrop", options.backdrop ? "true" : "false");
            } else if (typeof (options.backdrop) === "string") {
                this.el.setAttribute("data-bs-backdrop", options.backdrop);
            }

            // Set the focus
            if (typeof (options.focus) === "boolean") {
                this.el.setAttribute("data-bs-focus", options.backdrop ? "true" : "false");
            }

            // Set the keyboard
            if (typeof (options.keyboard) === "boolean") {
                this.el.setAttribute("data-bs-keyboard", options.backdrop ? "true" : "false");
            }
        }
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
            this.el.addEventListener("hidden.bs.modal", () => {
                // Call the event
                this.props.onClose(this.el);
            });
        }
    }

    /**
     * Bootstrap
     */

    // The bootstrap modal
    private get modal() {
        // Create the bootstrap object if it doesn't exist
        this._bootstrapObj = this._bootstrapObj || new bootstrap.Modal(this.el);

        // Return the object
        return this._bootstrapObj;
    }

    // Disposes the modal
    dispose() { this.modal.dispose(); }

    // Updates the modal
    handleUpdate() { this.modal.handleUpdate(); }

    // Hides the modal
    hide() { this.modal.hide(); }

    // Shows the modal
    show() { this.modal.show(); }

    // Toggles the modal
    toggle() { this.modal.toggle(); }

    /**
     * Public Interface
     */

    // Returns true if the modal is visible
    get isVisible() { return this.el.classList.contains("show"); }

    // Updates the title
    setTitle(title: string) {
        // Get the title
        let elTitle = this.el.querySelector(".modal-title");
        if (elTitle) {
            // Set the text
            elTitle.innerHTML = title == null ? "" : title;
        }
    }

    // Updates the type
    setType(modalType: number) {
        let dialog = this.el.querySelector(".modal-dialog") as HTMLElement;

        // Parse the class names
        ModalClassNames.parse(className => {
            // Remove the class names
            className ? dialog.classList.remove(className) : null;
        });

        // Set the class name
        let className = ModalClassNames.getByType(modalType);
        className ? dialog.classList.add(className) : null;
    }
}
export const Modal = (props: IModalProps, template?: string): IModal => { return new _Modal(props, template); }