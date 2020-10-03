import * as toast from "bootstrap/js/dist/toast";
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

        // Initialize the toast component
        let options = this.props.options || {};
        this._bootstrapObj = new toast(this.el, options);

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
     * Bootstrap
     */

    // Hides the toast
    hide() { this._bootstrapObj.hide(); }

    // Shows the toast
    show() { this._bootstrapObj.show(); }

    /**
     * Public Interface
     */
}
export const Toast = (props: IToastProps, template?: string): IToast => { return new _Toast(props, template); }