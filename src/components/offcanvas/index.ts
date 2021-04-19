import { ClassNames } from "../classNames";
import { IOffcanvas, IOffcanvasOptions, IOffcanvasProps } from "../../../@types/components/offcanvas";
import { Base } from "../base";
import { HTML } from "./templates";

// Styles
import "./styles";

/**
 * Offcanvas Types
 */
export enum OffcanvasTypes {
    Bottom = 1,
    End = 2,
    Start = 3
}

/**
 * Offcanvas Classes
 */
export const OffcanvasClassNames = new ClassNames([
    "offcanvas-bottom",
    "offcanvas-end",
    "offcanvas-start"
]);

/**
 * Offcanvas
 */
class _Offcanvas extends Base<IOffcanvasProps> implements IOffcanvas {

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

        // Set the type
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
        let title = this.props.title || "";
        let header = this.el.querySelector(".offcanvas-header > div") as HTMLDivElement;
        if (header) {
            if (typeof (title) === "string" || typeof (title) === "number") {
                // Set the html
                header.innerHTML = title;
            } else {
                // Append the element
                header.appendChild(title);
            }
        }

        // Set the body
        let content = this.props.body || "";
        let body = this.el.querySelector(".offcanvas-body") as HTMLDivElement;
        if (body) {
            if (typeof (content) === "string" || typeof (content) === "number") {
                // Set the html
                body.innerHTML = content;
            } else {
                // Append the element
                body.appendChild(content);
            }
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

        // See if we are not showing the backdrop
        if (this.props.options == null || this.props.options.backdrop != true) {
            let closeFl = true;

            // Add a click event to the offcanvas
            document.body.addEventListener("click", () => {
                // Set the flag
                closeFl = false;

                // Reset the flag
                setTimeout(() => { closeFl = true; }, 25);
            });

            // Add a click event to the body
            document.body.addEventListener("click", () => {
                // See if this is visible and we are closing the offcanva
                if (this.isVisible && closeFl) {
                    // Close the offcanvas
                    this.hide();
                }
            });
        }
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

    // Sets the offcanvas type
    setType(offcanvasType: number) {
        // Parse the class names
        OffcanvasClassNames.parse(className => {
            // Remove the class names
            this.el.classList.remove(className);
        });

        // Set the class name
        let className = OffcanvasClassNames.getByType(offcanvasType) || OffcanvasClassNames.getByType(OffcanvasTypes.End);
        this.el.classList.add(className);
    }

    // Shows the modal
    show() {
        // Toggle the modal
        this.isVisible ? null : this.toggle();
    }

    // Toggles the modal
    toggle() {
        // See if this modal is visible
        if (this.isVisible) {
            // Hide the modal
            this.el.classList.add("offcanvas-toggling");
            this.el.classList.remove("show");

            // Wait for the animation to complete
            setTimeout(() => {
                this.el.style.visibility = "hidden";
                this.el.classList.remove("offcanvas-toggling");
            }, 250);

            // Remove the backdrop
            document.body.classList.remove("offcanvas-backdrop");
        } else {
            // See if we are showing the backdrop
            if (this.props.options && this.props.options.backdrop) {
                // Add the backdrop
                document.body.classList.add("offcanvas-backdrop");
            }

            // Show the modal
            this.el.style.visibility = "visible";
            this.el.classList.add("offcanvas-toggling");
            this.el.classList.add("show");

            // Wait for the animation to complete
            setTimeout(() => {
                this.el.classList.remove("offcanvas-toggling");
            }, 250);
        }
    }
}
export const Offcanvas = (props: IOffcanvasProps, template?: string): IOffcanvas => { return new _Offcanvas(props, template); }