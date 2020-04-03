import * as jQuery from "jquery";
import { IToast, IToastProps } from "../../../@types/components/toast";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Toast
 * @param props - The toast properties.
 */
class _Toast extends Base<IToastProps> implements IToast {
    // Constructor
    constructor(props: IToastProps) {
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
        let header = this.el.querySelector(".toast-header");

        // See if we are rendering an image
        let img = header.querySelector("img");
        if (this.props.headerImgSrc) {
            // Create the image
            img.className = this.props.headerImgClass || "";
            img.src = this.props.headerImgSrc;
        } else {
            // Remove the image
            img.remove();
        }

        // See if header text is defined
        let headerText = header.querySelector("strong");
        if (this.props.headerText) {
            // Update the header text
            headerText.innerHTML = this.props.headerText;
        } else {
            // Remove the header
            headerText.remove();
        }

        // See if muted text is defined
        let mutedText = header.querySelector("small");
        if (this.props.mutedText) {
            // Create the text
            mutedText.innerHTML = this.props.mutedText;
        } else {
            // Remove the element
            mutedText.remove();
        }

        // See if we are creating the close button
        let closeButton = header.querySelector("button");
        if (this.props.hideCloseButton) {
            // Remove the button
            closeButton.remove();
        }

        // Update the body
        let body = this.el.querySelector(".toast-body");
        let content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Initialize the toast component
        let options = this.props.options || {};
        jQuery(this.el).toast(options);

        // See if we are showing this toast
        if (options.autohide == false) {
            // Show the toast
            this.show();
        }
    }

    // Configures the events
    private configureEvents() {
        // Execute the render events
        this.props.onRenderHeader ? this.props.onRenderHeader(this.el.querySelector(".toast-header"), this.props.data) : null;
        this.props.onRenderBody ? this.props.onRenderBody(this.el.querySelector(".toast-body"), this.props.data) : null;

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
    hide() { jQuery(this.el).toast("hide"); }

    // Shows the toast
    show() { jQuery(this.el).toast("show"); }
}
export const Toast = (props: IToastProps): IToast => { return new _Toast(props); }