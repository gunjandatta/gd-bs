import { IBase, IBaseProps } from "./types";
import { setClassNames } from "./common";

/**
 * Base Components
 */
export class Base<IProps = IBaseProps<IBase>> implements IBase<IProps> {
    private _el = null;
    private _props: IBaseProps = null;

    // Constructor
    constructor(html, props: IProps) {
        // Save the properties
        this._props = props;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = html == null ? "" : html.trim();
        this._el = el.firstChild ? el.firstChild as HTMLDivElement : el;

        // Set the class names
        setClassNames(this._el, this._props.className);

        // Execute the assign to event
        this._props.assignTo ? this._props.assignTo(this) : null;
    }

    /**
     * Internal Methods
     */

    // Configures the parent element
    configureParent() {
        // Create the element
        let el: Element = document.createElement("div");
        el.appendChild(this._el);

        // See if the parent element exists
        if (this._props.el) {
            // Ensure the class list exists and it's not the body element
            if (this._props.el.classList && this._props.el.tagName != "BODY") {
                // Set the bootstrap class
                this._props.el.classList.contains("bs") ? null : this._props.el.classList.add("bs");
            }

            // Append the elements
            while (el.children.length > 0) {
                this._props.el.appendChild(el.children[0]);
            }

            // Update the element
            el = this._props.el;
        } else {
            // Set the bootstrap class
            el.classList.add("bs");
        }

        // Return the parent element
        return el;
    }

    /**
     * Public Properties
     */

    // The component element
    get el() { return this._el; }
    set el(el) { this._el = el; }

    // Hides the alert
    hide() {
        // Ensure the alert is hidden
        if (this._el.classList.contains("d-none")) { return; }

        // Hide the alert
        this._el.classList.add("d-none");
    }

    // The component properties
    get props(): IProps { return this._props as any as IProps; }

    // Shows the alert
    show() {
        // Ensure the alert is visible
        if (this._el.classList.contains("d-none")) {
            // Show the alert
            this._el.classList.remove("d-none");
        }
    }
}