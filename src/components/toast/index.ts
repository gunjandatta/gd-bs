import { IToast, IToastProps } from "./types";
import { Base } from "../base";
import { appendContent } from "../common";
import { HTML } from "./templates";

/**
 * Toast
 * @param props - The toast properties.
 */
class _Toast extends Base<IToastProps> implements IToast {

    // Constructor
    constructor(props: IToastProps, template: string = HTML) {
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
        // Get the header
        let header = this.el.querySelector(".toast-header");
        if (header) {
            // See if we are rendering an image
            let img = header.querySelector("img") as HTMLImageElement;
            if (img) {
                if (this.props.headerImgSrc) {
                    // Create the image
                    img.className = this.props.headerImgClass || "";
                    img.src = this.props.headerImgSrc;
                } else {
                    // Remove the image
                    img.parentNode.removeChild(img);
                }
            }

            // See if header text is defined
            let headerText = header.querySelector("strong") as HTMLElement;
            if (headerText) {
                if (this.props.headerText) {
                    // Update the header text
                    headerText.innerHTML = this.props.headerText;
                } else {
                    // Remove the header
                    headerText.parentNode.removeChild(headerText);
                }
            }

            // See if muted text is defined
            let mutedText = header.querySelector("small") as HTMLElement;
            if (mutedText) {
                if (this.props.mutedText) {
                    // Create the text
                    mutedText.innerHTML = this.props.mutedText;
                } else {
                    // Remove the element
                    mutedText.parentNode.removeChild(mutedText);
                }
            }

            // Get the close button
            let closeButton = header.querySelector("button") as HTMLElement;
            if (closeButton) {
                if (this.props.options && this.props.options.autohide == false) {
                    // Remove the button
                    closeButton.parentNode.removeChild(closeButton);
                }
            }
        }

        // Set the body
        appendContent(this.el.querySelector(".toast-body"), this.props.body);
    }

    // Configures the events
    private configureEvents() {
        // Execute the render events
        this.props.onRenderHeader ? this.props.onRenderHeader(this.el.querySelector(".toast-header"), this.props.data) : null;
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".toast-body"), this.props.data) : null;

        // See if we are dismissing the alert
        let btnClose = this.el.querySelector(".btn-close") as HTMLButtonElement;
        if (btnClose) {
            // Add a click event
            btnClose.addEventListener("click", () => {
                // Hide the toast
                this.hide();
            });
        }

        // See if the click event exists
        if (this.props.onClick) {
            // Set the click event
            this.el.addEventListener("click", () => {
                // Execute the click event
                this.props.onClick(this.el, this.props.data);
            });
        }
    }

    /**
     * Public Interface
     */

    // Hides the toast
    hide() {
        // Completes the animation
        let onComplete = () => {
            // Remove the classes
            this.el.classList.add("hide");
            this.el.classList.remove("fade", "showing");
        };

        // Starts the animation
        let start = () => {
            // See if we are not showing animation
            if (this.props.options && this.props.options.animation == false) {
                // Update the classes
                this.el.classList.remove("show");

                // Complete the request
                onComplete();
            } else {
                // Start the animation
                this.el.classList.add("fade");
                this.el.classList.remove("show");
                this.el.classList.add("showing");

                // Complete the animation
                setTimeout(onComplete, 250);
            }
        };

        // See if there is a delay
        let delay = this.props.options ? this.props.options.delay : null;
        if (delay > 0) {
            // Delay the request
            setTimeout(start, delay);
        } else {
            // Start the animation
            start();
        }
    }

    // Shows the toast
    show() {
        // Completes the animation
        let onComplete = () => {
            // Update the classes
            this.el.classList.remove("fade", "showing");
            this.el.classList.add("show");
        };

        // See if we are not showing animation
        if (this.props.options && this.props.options.animation == false) {
            // Update the classes
            this.el.classList.remove("hide");

            // Complete the request
            onComplete();
        } else {
            // Start the animation
            this.el.classList.add("fade");
            this.el.classList.remove("hide");
            this.el.classList.add("showing");

            // Complete the animation
            setTimeout(onComplete, 250);
        }
    }
}
export const Toast = (props: IToastProps, template?: string): IToast => { return new _Toast(props, template); }