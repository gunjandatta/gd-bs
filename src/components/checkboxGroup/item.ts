import { ICheckboxGroupProps, ICheckboxGroupItem } from "./types";
import { CheckboxGroupTypes } from ".";
import { HTMLCheckbox, HTMLRadio, HTMLSwitch } from "./templates";

/**
 * Checkbox Item
 */
export class CheckboxItem {
    private _el: HTMLDivElement = null;
    private _elCheckbox: HTMLInputElement = null;
    private _isSelected: boolean = null;
    private _parent: ICheckboxGroupProps = null;
    private _props: ICheckboxGroupItem = null;

    // Constructor
    constructor(props: ICheckboxGroupItem, parent: ICheckboxGroupProps, template?: string) {
        // Save the properties
        this._parent = parent;
        this._props = props;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = template || this.getHTML().trim();
        this._el = el.firstChild as HTMLDivElement;

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the item
    private configure() {
        // Set the attributes
        this._elCheckbox = this._el.querySelector("input");
        if (this._elCheckbox) {
            this._elCheckbox.disabled = this._parent.isReadonly || this._props.isDisabled ? true : false;

            // Default the title property for the checkbox
            this._elCheckbox.title = this.props.label || this._parent.title || "";
        }

        // See if the title property is defined
        if (this._parent.title) {
            // Set the title
            this._el.title = this._parent.title;
        }

        // See if the inline flag is set
        if (this._parent.isInline) {
            this._el.classList.add("form-check-inline");
        }

        // Set the label
        let label = this._el.querySelector("label");
        if (label) {
            label.innerHTML = this._props.label || "&nbsp;";
        }

        // Ensure the checkbox exists
        if (this._elCheckbox) {
            // See if the "isSelected" property is set
            if (typeof (this._props.isSelected) === "boolean") {
                // Set the selected property
                this._isSelected = this._props.isSelected;
                this._elCheckbox.checked = this._isSelected;
            }
            // Else, see if a value exists for the group
            else if (this._parent.value) {
                // Parse the values
                let values = typeof (this._parent.value) === "string" ? [this._parent.value] : this._parent.value;
                for (let j = 0; j < values.length; j++) {
                    // See if this item is selected
                    if (values[j] == this._props.label) {
                        // Select this item
                        this._elCheckbox.checked = true;
                    }
                }

                // Set the value
                this._isSelected = this._elCheckbox.checked;
            } else {
                // Set the default value
                this._isSelected = this._props.isSelected ? true : false;
                this._elCheckbox.checked = this._isSelected;
            }
        }
    }

    // Configures the events
    private configureEvents() {
        // Add a click event
        this._elCheckbox.addEventListener("click", ev => {
            // Update the value
            this._isSelected = !this._isSelected;
            this._elCheckbox.checked = this._isSelected;

            // See if an event is defined
            if (this._props.onChange) {
                // Call the event
                this._props.onChange(this._isSelected ? this._props : null, ev);
            }
        });
    }

    // Gets the HTML template
    private getHTML(): string {
        // Return it based on the type
        switch (this._props.type || this._parent.type) {
            // Radio
            case CheckboxGroupTypes.Radio:
                return HTMLRadio;
            // Switch
            case CheckboxGroupTypes.Switch:
                return HTMLSwitch;
            // Default to a checkbox
            default:
                return HTMLCheckbox;
        }
    }

    /**
     * Public Properties
     */

    // The checkbox element
    get checkbox(): HTMLInputElement { return this._elCheckbox; }

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // Returns true if the checkbox is checked
    get isChecked(): boolean {
        // Get the checkbox
        let cb = this._el.querySelector("input");

        // Return the value
        return cb ? cb.checked : null;
    }

    // The component properties
    get props(): ICheckboxGroupItem { return this._props; }

    // Toggles the checkbox
    toggle() {
        // Update the value
        this._isSelected = !this._isSelected;

        // Set the checkbox value
        this._el.querySelector("input").checked = this._isSelected;
    }
}