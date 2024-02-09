import { ICheckboxGroup, ICheckboxGroupItem, ICheckboxGroupProps } from "./types";
import { Base } from "../base";
import { CheckboxItem } from "./item";
import { HTML } from "./templates";

/**
 * Checkbox Group Types
 */
export enum CheckboxGroupTypes {
    Checkbox = 1,
    Radio = 2,
    Switch = 3
}

/**
 * Checkbox Group
 */
class _CheckboxGroup extends Base<ICheckboxGroupProps> implements ICheckboxGroup {
    private _cbTemplate: string = null;
    private _checkboxes: Array<CheckboxItem> = null;
    private _elCheckboxes: HTMLElement = null;
    private _initFl: boolean = false;

    // Constructor
    constructor(props: ICheckboxGroupProps, template: string = HTML, cbTemplate?: string) {
        super(template, props);

        // Set the template
        this._cbTemplate = cbTemplate;

        // Configure the checkbox group
        this.configure();

        // Configure the parent
        this.configureParent();

        // Set the flag
        this._initFl = true;
    }

    // Configure the card group
    private configure() {
        let renderRow = typeof (this.props.colSize) === "number" ? this.props.colSize > 0 : false;

        // See if a label is defined
        let label = this.el.querySelector("legend");
        if (label) {
            if (this.props.label && this.props.hideLabel != true) {
                // Add the label
                label.innerHTML = this.props.label;
            } else {
                // Remove the label
                this.el.removeChild(label);
            }
        }

        // Get the group and configure the size
        let group = this.el.querySelector("div");
        if (group) {
            if (!renderRow) {
                // Remove the group element
                this.el.removeChild(group);

                // Set the checkboxes element
                this._elCheckboxes = this.el;
            } else {
                // Set the checkboxes element
                this._elCheckboxes = group;
            }
        }

        // Render the checkboxes
        this.renderItems();

        // Set the value
        this.setValue(this.props.value);
    }

    // Configure the events
    private configureEvents(item: CheckboxItem) {
        // See if we are not allowing multiple selections
        if (this.props.multi != true) {
            // Add a click event
            item.checkbox.addEventListener("click", ev => {
                // Parse the checkboxes
                for (let i = 0; i < this._checkboxes.length; i++) {
                    let checkbox = this._checkboxes[i];

                    // Ensure this item is checked
                    if (!checkbox.isChecked) { continue; }

                    // Skip this item
                    if (checkbox.el.outerHTML == item.el.outerHTML) { continue; }

                    // Toggle the checkbox
                    checkbox.toggle();
                }
            });
        }

        // See if there is a change event defined
        if (this.props.onChange) {
            // Add a click event
            item.checkbox.addEventListener("click", ev => {
                // Call the event
                this.props.onChange(this.getValue(), ev);
            });
        }
    }

    // Render the checkboxes
    private renderItems() {
        // Clear the checkboxes
        this._checkboxes = [];

        // Set the items
        let items = this.props.items;
        if (items == null || typeof (items.length) !== "number") {
            // Clear the items
            items = [];

            // Create an item based on the label
            items.push({
                label: this.props.label || ""
            });
        }

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Create the checkbox
            let checkbox = new CheckboxItem(item, this.props, this._cbTemplate);
            this._checkboxes.push(checkbox);
            this._elCheckboxes.appendChild(checkbox.el);

            // Configure the events
            this.configureEvents(checkbox);

            // Execute the render event
            this.props.onRender ? this.props.onRender(checkbox.el, item) : null;
        }
    }

    /**
     * Public Methods
     */

    // Method to get the value
    getValue(): ICheckboxGroupItem | Array<ICheckboxGroupItem> {
        let values: Array<ICheckboxGroupItem> = [];

        // Parse the checkboxes
        for (let i = 0; i < this._checkboxes.length; i++) {
            let cb = this._checkboxes[i];

            // See if it's checked
            if (cb.isChecked) {
                // Add the value
                values.push(cb.props);
            }
        }

        // Return the values
        return this.props.multi ? values : values[0];
    }

    // Sets the checkbox items
    setItems(newItems: Array<ICheckboxGroupItem> = []) {
        let renderRow = typeof (this.props.colSize) === "number" ? this.props.colSize > 0 : false;

        // Update the properties
        this.props.items = newItems;

        // Get the element containing the checkboxes and clear them
        let elParent = renderRow ? this.el.querySelector("div") : this.el;
        while (elParent.firstChild) { elParent.removeChild(elParent.firstChild); }

        // Render the checkboxes
        this.renderItems();
    }

    // Method to set the value
    // Sets the dropdown value
    setValue(value) {
        // See if this is a single checkbox
        if (this.props.multi != true && this._checkboxes.length == 1) {
            // See if this checkbox should be checked
            if (typeof (value) === "boolean" && value) {
                // Select the item
                this._checkboxes[0].isChecked ? null : this._checkboxes[0].toggle();
            }
            return;
        }

        // Ensure it's an array
        let values = value ? (typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value]) : [];

        // Parse the items
        for (let i = 0; i < this._checkboxes.length; i++) {
            let checkbox = this._checkboxes[i];

            // Toggle checked items
            checkbox.isChecked ? checkbox.toggle() : null;
        }

        // Parse the values
        for (let i = 0; i < values.length; i++) {
            let value = values[i];

            // Parse the items
            for (let j = 0; j < this._checkboxes.length; j++) {
                let checkbox = this._checkboxes[j];

                // Select this checkbox if the label matches
                checkbox.props.label == value ? checkbox.toggle() : null;
            }
        }

        // See if a change event exists
        if (this._initFl && this.props.onChange) {
            // Execute the change event
            this.props.onChange(this.getValue());
        }
    }
}
export const CheckboxGroup = (props: ICheckboxGroupProps, template?: string, cbTemplate?: string): ICheckboxGroup => { return new _CheckboxGroup(props, template, cbTemplate); }