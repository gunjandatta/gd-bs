import { IDropdownItem, IDropdownProps } from "./types";

/**
 * Dropdown Item
 */
export class DropdownItem {
    private _el: HTMLLIElement | HTMLDivElement = null;
    private _elLink: HTMLAnchorElement = null;
    private _isSelected: boolean = false;
    private _parent: IDropdownProps = null;
    private _props: IDropdownItem = null;

    // Constructor
    constructor(props: IDropdownItem, parent: IDropdownProps) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configures the item
    private configure() {
        // See if this is a divider
        if (this._props.isDivider) {
            // Add the divider
            this._el = document.createElement("div");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-divider");
            this._props.isDisabled ? this._el.classList.add("disabled") : null;
        }
        // Else, see if this is a header
        else if (this._props.isHeader) {
            // Add the header
            this._el = document.createElement("h6");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-header");
            this._props.isDisabled ? this._el.classList.add("disabled") : null;
            this._el.innerText = this._props.text == null ? "" : this._props.text;
        } else {
            // See if we are rendering this in a nav bar
            if (this._parent.navFl) {
                // Create the link
                this._elLink = document.createElement("a");
                this._elLink.className = this._props.className || "";
                this._elLink.classList.add("dropdown-item");
                this._props.isDisabled ? this._elLink.classList.add("disabled") : null;
                this._props.target ? this._elLink.setAttribute("data-bs-target", this._props.target) : null;
                this._props.toggle ? this._elLink.setAttribute("data-bs-toggle", this._props.toggle) : null;
                this._elLink.href = this._props.href || "#";
                this._elLink.innerText = this._props.text == null ? "" : this._props.text;

                // Add the item
                this._el = document.createElement("li");
                this._el.appendChild(this._elLink);
            } else {
                // Create the item
                this._elLink = document.createElement("a");
                this._elLink.className = this._props.className || "";
                this._elLink.classList.add("dropdown-item");
                this._props.isDisabled ? this._elLink.classList.add("disabled") : null;
                this._props.target ? this._elLink.setAttribute("data-bs-target", this._props.target) : null;
                this._props.toggle ? this._elLink.setAttribute("data-bs-toggle", this._props.toggle) : null;
                this._elLink.href = this._props.href || "#";
                this._elLink.innerText = this._props.text == null ? "" : this._props.text;

                // See if this item is selected
                if (this._props.isSelected) {
                    // Select the item
                    this._elLink.classList.add("active");
                }
                // Else, see if a value exists
                else if (this._parent.value != undefined) {
                    // Ensure it's an array
                    let values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        let value = this._props.value == undefined ? this._props.text : this._props.value;

                        // See if this item is selected
                        if (value == values[j]) {
                            // Select the item
                            this._elLink.classList.add("active");
                            break;
                        }
                    }
                }

                // Set the flag
                this._isSelected = this._elLink.classList.contains("active");

                // Add the item
                this._el = document.createElement("li");
                this._el.appendChild(this._elLink);
            }
        }

        // Set the icon if it exists
        if (this.props.iconType) {
            let elItem = this._elLink || this._el;
            let iconSize = this.props.iconSize || 16;

            // See if it's a function
            if (typeof (this.props.iconType) === "function") {
                // Append the icon
                elItem.prepend(this.props.iconType(iconSize, iconSize));
            }
            // Else, it's an element
            else if (typeof (this.props.iconType === "object")) {
                // Append the icon
                elItem.prepend(this.props.iconType);
            }
        }
    }

    // Configures the events
    private configureEvents() {
        // Set the click event
        this._el.addEventListener("click", ev => {
            // Prevent the page from moving to the top
            ev.preventDefault();

            // See if we are selecting items
            if (this._parent.autoSelect) {
                // Toggle the item
                this.toggle();
            }

            // See if there is a click event defined
            if (this._props.onClick) {
                // Execute the event
                this._props.onClick(this._props, ev);
            }
        });
    }

    /**
     * Public Interface
     */

    // The component HTML element
    get el(): HTMLElement { return this._el; }

    // Returns true if the item is selected
    get isSelected(): boolean { return this._isSelected; }

    // The component properties
    get props(): IDropdownItem { return this._props; }

    // Toggles the item selection
    toggle() {
        // Skip the dividers, headers and nav items
        if (this._props.isDivider || this._props.isHeader || this._parent.navFl) { return; }

        // Update the selected flag
        this._isSelected = !this._isSelected;

        // Update the class
        if (this._isSelected) {
            // Add the active class
            (this._elLink || this._el).classList.add("active");
        } else {
            // Remove the active class
            (this._elLink || this._el).classList.remove("active");
        }
    }
}