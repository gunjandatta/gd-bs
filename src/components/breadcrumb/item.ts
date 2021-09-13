import { IBreadcrumbItem } from "./types";
import { HTMLItem, HTMLLink } from "./templates";

/**
 * Breadcrumb Item
 */
export class BreadcrumbItem {
    private _el: HTMLLIElement = null;
    private _elLink: HTMLAnchorElement = null;
    private _props: IBreadcrumbItem = null;

    // Constructor
    constructor(props: IBreadcrumbItem, template: string = props.href && !props.isActive ? HTMLLink : HTMLItem) {
        // Save the properties
        this._props = props;

        // Create the item
        let elItem = document.createElement("div");
        elItem.innerHTML = template;
        this._el = elItem.firstChild as HTMLLIElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the item
    private configure() {
        // See if this item is active
        if (this._props.isActive) {
            // Add the class name
            this._el.classList.add("active");

            // Set the attribute
            this._el.setAttribute("aria-current", "page")
        }

        // See if this is a link
        this._elLink = this.el.querySelector("a");
        if (this._elLink) {
            // Configure the link
            this._elLink.href = this._props.href;
            this._elLink.innerHTML = this._props.text == null ? "" : this._props.text;
        } else {
            // Configure the item
            this._el.innerHTML = this._props.text == null ? "" : this._props.text;
        }
    }

    // Configure the events
    private configureEvents() {
        // See if there is a click event
        if (this._props.onClick) {
            // Add the click event
            (this._elLink || this._el).addEventListener("click", ev => {
                // Call the click event
                this._props.onClick(this._props, ev);
            });
        }
    }

    /**
     * Public Properties
     */

    // The component HTML element
    get el() { return this._el; }

    // The componen properties
    get props() { return this._props; }
}