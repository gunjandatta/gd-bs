import { IOffcanvas, IOffcanvasOptions, IOffcanvasProps } from "./types";
import { ClassNames } from "../classNames";
import { Base } from "../base";
import { appendContent } from "../common";
import { HTML } from "./templates";


/**
 * Offcanvas Size
 */
export enum OffcanvasSize {
    Small = 1,
    Small1 = 2,
    Small2 = 3,
    Small3 = 4,
    Medium = 5,
    Medium1 = 6,
    Medium2 = 7,
    Medium3 = 8,
    Large = 9,
    Large1 = 10,
    Large2 = 11,
    Large3 = 12,
    XLarge = 13,
    XXLarge = 14,
    Full = 15
}

/**
 * Offcanvas Size Classes
 */
export const OffcanvasSizeClassNames = new ClassNames([
    "offcanvas-sm",
    "offcanvas-size-sm1",
    "offcanvas-size-sm2",
    "offcanvas-size-sm3",
    "offcanvas-md",
    "offcanvas-size-md1",
    "offcanvas-size-md2",
    "offcanvas-size-md3",
    "offcanvas-lg",
    "offcanvas-size-lg1",
    "offcanvas-size-lg2",
    "offcanvas-size-lg3",
    "offcanvas-xl",
    "offcanvas-xxl",
    "offcanvas-size-full"
]);

/**
 * Offcanvas Types
 */
export enum OffcanvasTypes {
    Bottom = 1,
    End = 2,
    Start = 3,
    Top = 4
}

/**
 * Offcanvas Types Classes
 */
export const OffcanvasTypesClassNames = new ClassNames([
    "offcanvas-bottom",
    "offcanvas-end",
    "offcanvas-start",
    "offcanvas-top"
]);

/**
 * Offcanvas
 */
class _Offcanvas extends Base<IOffcanvasProps> implements IOffcanvas {
    private _autoClose: boolean = null;
    private _eventCreated: boolean = false;
    private _tranisitioningFl: boolean = false;

    // Constructor
    constructor(props: IOffcanvasProps, template: string = HTML) {
        super(template, props);

        // Configure the offcanvas
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;

        // Set the size & type
        this.setSize(this.props.size);
        this.setType(this.props.type);

        // Get the options
        let options: IOffcanvasOptions = this.props.options || {
            backdrop: true,
            keyboard: true,
            scroll: false
        };

        // Set the properties
        options.backdrop ? this.el.setAttribute("data-bs-body", "backdrop") : null;
        options.scroll ? this.el.setAttribute("data-bs-body", "scroll") : null;

        // Set the header
        appendContent(this.el.querySelector(".offcanvas-header > div"), this.props.title);

        // Set the body
        appendContent(this.el.querySelector(".offcanvas-body"), this.props.body);

        // Set the focus
        if (options.focus) { (this.el as HTMLElement).focus(); }

        // Set the visibility
        if (options.visible) { this.toggle(); }
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
                    // Do nothing if we are tranisitionsing
                    if (this._tranisitioningFl) { return; }

                    // Do nothing if we clicked within the offcanvas
                    if (ev.composedPath().includes(this.el)) { return; }
                    else {
                        // Get the mouse coordinates
                        let x = ev.clientX;
                        let y = ev.clientY;
                        let elCoordinate = (this.el as HTMLElement).getBoundingClientRect();

                        // See if we clicked within the offcanvas
                        if (x <= elCoordinate.right && x >= elCoordinate.left && y <= elCoordinate.bottom && y >= elCoordinate.top) { return; }
                        // Else, see if something was selected
                        else if (x == 0 && y == 0) { return; }
                    }

                    // Close the offcanvas if it's visible
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
        this.props.onRenderHeader ? this.props.onRenderHeader(this.el.querySelector(".offcanvas-header > div"), this.props) : null;
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".offcanvas-body"), this.props) : null;

        // Get the close button
        let elClose = this.el.querySelector(".btn-close");
        if (elClose) {
            // Add a click event
            elClose.addEventListener("click", () => {
                // Hide the modal
                this.hide();
            });
        }

        // Set the flag to determine if the modal is sticky
        this.setAutoClose(this.props.options && typeof (this.props.options.autoClose) === "boolean" ? this.props.options.autoClose : true);

        // See if the keyboard option is set
        if (this.props.options && this.props.options.keyboard) {
            // Add a click event
            (this.el as HTMLElement).addEventListener("keydown", ev => {
                // See if the escape key was clicked and the modal is visible
                if ((ev.key === "Escape" || ev.keyCode == 27) && this.isVisible) {
                    // Toggle the modal
                    this.toggle();
                }
            });
        }
    }

    /**
     * Public Interface
     */

    // Hides the modal
    hide() {
        // See if a transition is currently happening
        if (this._tranisitioningFl) {
            // Wait for the transition to complete
            let id = setInterval(() => {
                // See if the transition is complete
                if (!this._tranisitioningFl) {
                    // Stop the loop
                    clearInterval(id);

                    // Toggle the modal
                    this.isVisible ? this.toggle() : null;
                }
            }, 250);
        } else {
            // Toggle the modal
            this.isVisible ? this.toggle() : null;
        }
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

    // Sets the offcanvas size
    setSize(offcanvasSize: number) {
        // Parse the class names
        OffcanvasSizeClassNames.parse(className => {
            // Remove the class names
            this.el.classList.remove(className);
        });

        // Set the class name
        let className = OffcanvasSizeClassNames.getByType(offcanvasSize);
        if (className) { this.el.classList.add(className); }
    }

    // Sets the offcanvas type
    setType(offcanvasType: number) {
        // Parse the class names
        OffcanvasTypesClassNames.parse(className => {
            // Remove the class names
            this.el.classList.remove(className);
        });

        // Set the class name
        let className = OffcanvasTypesClassNames.getByType(offcanvasType) || OffcanvasTypesClassNames.getByType(OffcanvasTypes.End);
        this.el.classList.add(className);
    }

    // Shows the modal
    show() {
        // See if a transition is currently happening
        if (this._tranisitioningFl) {
            // Wait for the transition to complete
            let id = setInterval(() => {
                // See if the transition is complete
                if (!this._tranisitioningFl) {
                    // Stop the loop
                    clearInterval(id);

                    // Toggle the modal
                    this.isVisible ? null : this.toggle();
                }
            }, 250);
        } else {
            // Toggle the modal
            this.isVisible ? null : this.toggle();
        }
    }

    // Toggles the modal
    toggle() {
        let backdrop = document.querySelector(".offcanvas-backdrop");

        // Set the flag
        this._tranisitioningFl = true;

        // See if this modal is visible
        if (this.isVisible) {
            // Hide the modal
            this.el.classList.add("offcanvas-toggling");
            this.el.classList.remove("show");

            // Wait for the animation to complete
            setTimeout(() => {
                this.el.style.visibility = "hidden";
                this.el.classList.remove("offcanvas-toggling");

                // Remove the backdrop
                backdrop ? document.body.removeChild(backdrop) : null;
                backdrop = null;

                // Set the flag
                this._tranisitioningFl = false;

                // Call the event
                this.props.onClose ? this.props.onClose(this.el) : null;
            }, 250);
        } else {
            // Create the backdrop if we are showing it
            let showBackdrop = this.props.options && typeof (this.props.options.backdrop) === "boolean" ? this.props.options.backdrop : true;
            if (showBackdrop && backdrop == null) {
                backdrop = document.createElement("div");
                backdrop.classList.add("offcanvas-backdrop");
                backdrop.classList.add("fade");
                backdrop.classList.add("show");
                document.body.appendChild(backdrop);
            }

            // Show the modal
            this.el.style.visibility = "visible";
            this.el.classList.add("offcanvas-toggling");
            this.el.classList.add("show");

            // Wait for the animation to complete
            setTimeout(() => {
                // Update the class
                this.el.classList.remove("offcanvas-toggling");

                // Set the flag
                this._tranisitioningFl = false;
            }, 250);
        }
    }
}
export const Offcanvas = (props: IOffcanvasProps, template?: string): IOffcanvas => { return new _Offcanvas(props, template); }