import { INavbarItem, INavbarProps } from "./types";
import { setClassNames } from "../common";
import { Dropdown } from "../dropdown";
import { HTMLItem, HTMLItemButton } from "./templates";

/**
 * Navbar Item
 */
export class NavbarItem {
    private _el: HTMLElement = null;
    private _parent: INavbarProps = null;
    private _props: INavbarItem = null;

    // Constructor
    constructor(props: INavbarItem, parent: INavbarProps, template: string = props.isButton ? HTMLItemButton : HTMLItem) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Create the item
        let el = document.createElement("div");
        el.innerHTML = template;
        this._el = el.firstChild as HTMLElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configures the item
    private configure() {
        let link: HTMLAnchorElement = null;

        // See if this is a dropdown
        if (this._props.items) {
            // Render a dropdown menu
            this._el = Dropdown({
                isReadonly: this._props.isDisabled,
                items: this._props.items,
                label: this._props.text,
                navFl: true,
                onMenuRendering: this._props.onMenuRendering
            }).el as HTMLElement;

            // Update the link
            link = this._el.querySelector(".nav-link");
            if (link) {
                this._props.isActive ? link.classList.add("active") : null;

                // See if this is a button
                if (this._props.isButton) {
                    link.classList.remove("nav-link");
                    link.classList.add("btn");
                    this._props.iconType ? link.classList.add("nav-icon") : null;
                }
            }
        }
        // Else, ensure there is text
        else if (this._props.text) {
            // Update the link
            link = this._el.querySelector("a");
            if (link) {
                this._props.isActive ? link.classList.add("active") : link.removeChild(link.querySelector('span'));
                link.innerHTML = this._props.text == null ? "" : this._props.text;
            }
        }

        // Set the class names
        setClassNames(link, this._props.className);
        setClassNames(this._el, this._props.classNameItem);

        // Update the link
        if (link) {
            this._props.target ? link.setAttribute("data-bs-target", this._props.target) : null;
            this._props.toggle ? link.setAttribute("data-bs-toggle", this._props.toggle) : null;

            // See if the link is disabled
            if (this._props.isDisabled) {
                // Add the class and set the tab index
                link.classList.add("disabled");
                link.setAttribute("aria-disabled", "true");
                link.tabIndex = -1;
            }

            // Set the icon if it exists
            if (this._props.iconType) {
                let iconSize = this._props.iconSize || 16;

                // See if it's a function
                if (typeof (this._props.iconType) === "function") {
                    // Append the icon
                    link.prepend(this._props.iconType(iconSize, iconSize));
                }
                // Else, it's an element
                else if (typeof (this._props.iconType === "object")) {
                    // Append the icon
                    link.prepend(this._props.iconType);
                }
            }
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

            // See if we are toggling anything
            if (this._props.toggleObj && typeof (this._props.toggleObj.toggle) === "function") {
                // Toggle the object
                this._props.toggleObj.toggle();
            }

            // Call the events
            this._props.onClick ? this._props.onClick(this._props, ev) : null;
            this._parent.onClick ? this._parent.onClick(this._props, ev) : null;
        });

        // Execute the render events
        this._props.onRender ? this._props.onRender(this._el, this._props) : null;
    }

    /**
     * Public Interface
     */

    get el() { return this._el; }
}