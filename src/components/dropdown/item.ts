import { IDropdownItem, IDropdownProps } from "../../../@types/components/dropdown";

/**
 * Dropdown Item
 */
export class DropdownItem {
    private _el: HTMLAnchorElement | HTMLDivElement | HTMLOptGroupElement | HTMLOptionElement = null;
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
        // See if this is for a form
        if (this._parent.formFl) {
            // Configure the item
            this.configureForm();
        } else {
            // Configure the item
            this.configureDefault();
        }
    }

    // Configures the item
    private configureDefault() {
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
            this._el.innerHTML = this._props.text || "";
        } else {
            // See if we are rendering this in a nav bar
            if (this._parent.navFl) {
                // Add the item
                this._el = document.createElement("a");
                this._el.className = this._props.className || "";
                this._el.classList.add("dropdown-item");
                this._props.isDisabled ? this._el.classList.add("disabled") : null;
                this._el.href = this._props.href || "#";
                this._el.innerHTML = this._props.text || "";
            } else {
                // Create the item
                this._el = document.createElement("a");
                this._el.className = this._props.className || "";
                this._el.classList.add("dropdown-item");
                this._props.isDisabled ? this._el.classList.add("disabled") : null;
                this._el.href = this._props.href || "#";
                this._el.innerHTML = this._props.text || "";

                // See if this item is selected
                if (this._props.isSelected) {
                    // Select the item
                    this._el.classList.add("active");
                }
                // Else, see if a value exists
                else if (typeof (this._parent.value) !== "undefined") {
                    // Ensure it's an array
                    let values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        // See if this item is selected
                        if (this._parent.value == values[j]) {
                            // Select the item
                            this._el.classList.add("active");
                            break;
                        }
                    }
                }

                // Set the flag
                this._isSelected = this._el.classList.contains("active");
            }
        }
    }

    // Configures the events
    private configureEvents() {
        // Ensure this isn't a form
        if (!this._parent.formFl) {
            // Set the click event
            this._el.addEventListener("click", ev => {
                // Toggle the item
                this.toggle();

                // See if there is a click event defined
                if (this._props.onClick) {
                    // Execute the event
                    this._props.onClick(this._props, ev);
                }
            });
        }
    }

    // Configure the item for a form
    private configureForm() {
        // See if this is a divider
        if (this._props.isDivider) {
            // Create the divider
            this._el = document.createElement("optgroup");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-divider");
        }
        // Else, see if this is a header
        else if (this._props.isHeader) {
            // Create the header
            this._el = document.createElement("optgroup");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-header");
            this._el.label = this._props.text || "";
        } else {
            // Create the option
            this._el = document.createElement("option");
            this._el.className = this._props.className || "";
            this._el.disabled = this._props.isDisabled ? true : false;
            this._el.innerHTML = this._props.text || "";

            // See if the item is selected
            if (this._props.isSelected) {
                // Select the option
                (this._el as HTMLOptionElement).selected = true;
            }
            // Else, see if a value exists
            else if (typeof (this._parent.value) !== "undefined") {
                // Ensure it's an array
                let values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];

                // Parse the values
                for (let i = 0; i < values.length; i++) {
                    // See if this item is selected
                    if (this._props.value == values[i]) {
                        // Select the option
                        (this._el as HTMLOptionElement).selected = true;
                        break;
                    }
                }
            }

            // Set the flag
            this._isSelected = (this._el as HTMLOptionElement).selected;
        }
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

        // See if this is not a form
        if (this._parent.formFl) {
            let option = this._el as HTMLOptionElement;

            // See if the value needs to be updated
            if (option.selected != this._isSelected) {
                // Update the option
                option.selected = this._isSelected;
            }
        } else {
            // Update the class
            if (this._isSelected) {
                // Add the active class
                this._el.classList.add("active");
            } else {
                // Remove the active class
                this._el.classList.remove("active");
            }

        }
    }
}