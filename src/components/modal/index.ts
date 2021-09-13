import { IModal, IModalProps, IModalOptions } from "./types";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { appendContent } from "../common";
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
    FullXLarge = 9
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
    "modal-fullscreen-xl-down"
]);

/**
 * Modal
 * @param props The modal properties.
 */
class _Modal extends Base<IModalProps> implements IModal {
    private _autoClose: boolean = null;
    private _eventCreated: boolean = false;
    private _options: IModalOptions = null;
    private _tranisitioningFl: boolean = false;

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

        // Update the dialog
        let dialog = this.el.querySelector(".modal-dialog") as HTMLElement;
        if (dialog) {
            this.props.isCentered ? dialog.classList.add("modal-dialog-centered") : null;

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

        // Set the body
        appendContent(this.el.querySelector(".modal-body"), this.props.body);

        // Set the footer
        appendContent(this.el.querySelector(".modal-footer"), this.props.footer);

        // Get the modal options
        this._options = this.props.options;
        if (this._options) {
            // Set the backdrop
            if (typeof (this._options.backdrop) === "boolean") {
                this.el.setAttribute("data-bs-backdrop", this._options.backdrop ? "true" : "false");
            }

            // Set the focus
            if (typeof (this._options.focus) === "boolean") {
                this.el.setAttribute("data-bs-focus", this._options.backdrop ? "true" : "false");
            }

            // Set the keyboard
            if (typeof (this._options.keyboard) === "boolean") {
                this.el.setAttribute("data-bs-keyboard", this._options.backdrop ? "true" : "false");
            }

            // See if we are showing the modal
            if (this._options.visible) {
                // Toggle the modal
                this.toggle();
            }
        }
    }

    // Configures the auto-close event
    private configureAutoCloseEvent() {
        // See if the event exists
        if (this._eventCreated) { return; }

        // Ensure the body exists
        if (document.body) {
            // Add a click event to the modal
            document.body.addEventListener("click", (ev: MouseEvent) => {
                // See if the auto close flag is set
                if (this._autoClose) {
                    let elContent = (this.el as HTMLElement).querySelector(".modal-content");

                    // Do nothing if we are tranisitionsing
                    if (this._tranisitioningFl) { return; }

                    // Do nothing if we clicked within the modal
                    if (ev.composedPath().includes(elContent)) { return; }
                    else {
                        // Get the mouse coordinates
                        let x = ev.clientX;
                        let y = ev.clientY;
                        let elCoordinate = elContent.getBoundingClientRect();

                        // See if we clicked within the modal
                        if (x <= elCoordinate.right && x >= elCoordinate.left && y <= elCoordinate.bottom && y >= elCoordinate.top) { return; }
                        // Else, see if something was selected
                        else if (x == 0 && y == 0) { return; }
                    }

                    // Close the modal if it's visible
                    if (this.isVisible) { this.toggle(); }
                }
            });

            // Set the flag
            this._eventCreated = true;
        } else {
            // Add the load event
            window.addEventListener("load", () => {
                // Configure the event
                this.configureAutoCloseEvent();
            });
        }
    }

    // Configure the events
    private configureEvents() {
        // Execute the events
        this.props.onRenderHeader ? this.props.onRenderHeader(this.el.querySelector(".modal-header")) : null;
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".modal-body")) : null;
        this.props.onRenderFooter ? this.props.onRenderFooter(this.el.querySelector(".modal-footer")) : null;

        // Get the close button
        let elClose = this.el.querySelector(".btn-close");
        if (elClose) {
            // Add a click event
            elClose.addEventListener("click", () => {
                // Hide the modal
                this.hide();

                // Call the event
                this.props.onClose ? this.props.onClose(this.el) : null;
            });
        }

        // See if the keyboard option is set
        if (this._options && this._options.keyboard) {
            // Add a click event
            (this.el as HTMLElement).addEventListener("keydown", ev => {
                // See if the escape key was clicked and the modal is visible
                if (ev.keyCode === 27 && this.isVisible) {
                    // Toggle the modal
                    this.toggle();
                }
            });
        }

        // Set the flag to determine if the modal is sticky
        this.setAutoClose(this.props.options && typeof (this.props.options.autoClose) === "boolean" ? this.props.options.autoClose : true);
    }

    /**
     * Public Interface
     */

    // Hides the modal
    hide() {
        // Toggle the modal
        this.isVisible ? this.toggle() : null;
    }

    // Returns true if the modal is visible
    get isVisible() { return this.el.classList.contains("show"); }

    // Updates the auto close flag
    setAutoClose(value: boolean) {
        // Set the flag
        this._autoClose = value;

        // Configure the event if we are setting the value
        this._autoClose ? this.configureAutoCloseEvent() : null;
    }

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

    // Shows the modal
    show() {
        // Toggle the modal
        this.isVisible ? null : this.toggle();
    }

    // Toggles the modal
    toggle() {
        let backdrop = document.querySelector(".modal-backdrop");

        // Set the flag
        this._tranisitioningFl = true;

        // See if this modal is visible
        if (this.isVisible) {
            // Hide the modal
            this.el.classList.remove("show");

            // Wait for the animation to complete
            setTimeout(() => {
                // Hide the modal
                this.el.style.display = "";

                // Remove the backdrop
                backdrop ? document.body.removeChild(backdrop) : null;
                backdrop = null;

                // Set the flag
                this._tranisitioningFl = false;
            }, 250);
        } else {
            // Start the animation
            this.el.classList.add("modal-open")
            this.el.style.display = "block";

            // Create the backdrop if we are showing it
            let showBackdrop = this._options && typeof (this._options.backdrop) === "boolean" ? this._options.backdrop : true;
            if (showBackdrop && backdrop == null) {
                backdrop = document.createElement("div");
                backdrop.classList.add("modal-backdrop");
                backdrop.classList.add("fade");
                backdrop.classList.add("show");
                document.body.appendChild(backdrop);
            }

            // Set the focus
            (this.el as HTMLElement).focus();

            // Wait for the animation to complete
            setTimeout(() => {
                // Show the modal
                this.el.classList.remove("modal-open");
                this.el.classList.add("show");

                // Set the flag
                this._tranisitioningFl = false;
            }, 250);
        }
    }
}
export const Modal = (props: IModalProps, template?: string): IModal => { return new _Modal(props, template); }