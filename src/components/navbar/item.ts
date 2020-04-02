import { INavbarItem, INavbarProps } from "../../../@types/components/navbar";
import { Dropdown } from "../dropdown";
import * as HTML from "./item.html";

/**
 * Navbar Item
 */
export class NavbarItem {
    private _el: HTMLElement = null;
    private _parent: INavbarProps = null;
    private _props: INavbarItem = null;

    // Constructor
    constructor(props: INavbarItem, parent: INavbarProps) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Create the item
        let el = document.createElement("div");
        el.innerHTML = HTML as any;
        this._el = el.firstChild as HTMLElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configures the item
    private configure() {
        // See if this is a dropdown
        if (this._props.items) {
            // Render a dropdown
            this._el = Dropdown({
                isReadonly: this._props.isDisabled,
                items: this._props.items,
                label: this._props.text,
                navFl: true,
                onChange: (item, ev) => {
                    // Prevent the page from moving to the top
                    ev.preventDefault();
                }
            }).el as HTMLElement;
        }
        // Else, ensure there is text
        else if (this._props.text) {
            // Update the link
            let link = this._el.querySelector("a");
            this._props.isActive ? link.classList.add("active") : link.removeChild(link.querySelector('span'));
            this._props.isDisabled ? link.classList.add("disabled") : null;
            link.innerHTML = this._props.text || "";
        }
    }

    // Configures the events
    private configureEvents() {
        // Ensure it's not disabled
        if (this._props.isDisabled) { return; }

        // Add a click event
        this._el.addEventListener("click", ev => {
            // Prevent the page from moving to the top
            ev.preventDefault();

            // Call the events
            this._props.onClick ? this._props.onClick(this._props, ev) : null;
            this._parent.onClick ? this._parent.onClick(this._props, ev) : null;
        });
    }

    /**
     * Public Interface
     */

    get el() { return this._el; }
}