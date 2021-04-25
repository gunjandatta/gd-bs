import { IToast, IToastProps } from "../../../@types/components/toast";
import { Base } from "../base";
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

            // See if we are creating the close button
            let closeButton = header.querySelector("button") as HTMLElement;
            if (closeButton) {
                if (this.props.hideCloseButton) {
                    // Remove the button
                    closeButton.parentNode.removeChild(closeButton);
                }
            }
        }


        // Update the body
        let body = this.el.querySelector(".toast-body");
        if (body) {
            let content = this.props.body || "";
            if (typeof (content) === "string" || typeof (content) === "number") {
                // Set the html
                body.innerHTML = content;
            } else {
                // Append the element
                body.appendChild(content);
            }
        }
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
        // Start the animation
        this.el.classList.add("fade");
        this.el.classList.remove("show");
        this.el.classList.add("showing");
        setTimeout(() => {
            // Remove the classes
            this.el.classList.add("hide");
            this.el.classList.remove("fade", "showing");
        }, 250);
    }

    // Shows the toast
    show() {
        // Start the animation
        this.el.classList.add("fade");
        this.el.classList.remove("hide");
        this.el.classList.add("showing");
        setTimeout(() => {
            // Update the classes
            this.el.classList.remove("fade", "showing");
            this.el.classList.add("show");
        }, 250);
    }
}
export const Toast = (props: IToastProps, template?: string): IToast => { return new _Toast(props, template); }