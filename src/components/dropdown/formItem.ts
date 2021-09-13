import { IDropdownItem, IDropdownProps } from "./types";

/**
 * Dropdown Form Item
 */
export class DropdownFormItem {
    private _el: HTMLOptGroupElement | HTMLOptionElement = null;
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
    }

    // Configures the item
    private configure() {
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
            this._el.label = this._props.text == null ? "" : this._props.text;
        } else {
            // Create the option
            this._el = document.createElement("option");
            this._el.className = this._props.className || "";
            this._el.disabled = this._props.isDisabled ? true : false;
            this._el.innerText = this._props.text == null ? "" : this._props.text;

            // See if the item is selected
            if (this._props.isSelected) {
                // Select the option
                (this._el as HTMLOptionElement).selected = true;
            }
            // Else, see if a value exists
            else if (this._parent.value != undefined) {
                // Ensure it's an array
                let values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];

                // Parse the values
                for (let i = 0; i < values.length; i++) {
                    let value = this._props.value == undefined ? this._props.text : this._props.value;

                    // See if this item is selected
                    if (value == values[i]) {
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
    set isSelected(value: boolean) { this._isSelected = value; }

    // The component properties
    get props(): IDropdownItem { return this._props; }

    // Toggles the item selection
    toggle() {
        // Skip the dividers, headers
        if (this._props.isDivider || this._props.isHeader) { return; }

        // Update the selected flag
        this._isSelected = !this._isSelected;

        let option = this._el as HTMLOptionElement;

        // See if the value needs to be updated
        if (option.selected != this._isSelected) {
            // Update the option
            option.selected = this._isSelected;
        }
    }
}