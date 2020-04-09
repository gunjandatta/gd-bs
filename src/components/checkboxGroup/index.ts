import { ICheckboxGroup, ICheckboxGroupItem, ICheckboxGroupProps } from "../../../@types/components/checkboxGroup";
import { Base } from "../base";
import * as HTML from "./index.html";
import { CheckboxItem } from "./item";

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
    private _checkboxes: Array<CheckboxItem> = null;

    // Constructor
    constructor(props: ICheckboxGroupProps) {
        super(HTML, props);

        // Configure the checkbox group
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        let colSize = this.props.colSize > 0 && this.props.colSize < 13 ? this.props.colSize : (this.props.label ? 10 : 12);

        // See if a label is defined
        let label = this.el.querySelector("legend");
        if (this.props.label && this.props.hideLabel != true) {
            // Add the label
            label.classList.add("col-" + (12 - colSize));
            label.innerHTML = this.props.label;
        } else {
            // Remove the label
            this.el.removeChild(label);
        }

        // Get the group and configure the size
        let group = this.el.querySelector("div");
        group.classList.add("col-" + colSize);

        // Render the checkboxes
        this.renderItems(group);
    }

    // Configure the events
    private configureEvents(item: CheckboxItem) {
        // See if we are not allowing multiple selections
        if (this.props.multi != true) {
            // Add a click event
            item.el.addEventListener("click", ev => {
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
            item.el.addEventListener("click", ev => {
                // Call the event
                this.props.onChange(this.getValue());
            });
        }
    }

    // Render the checkboxes
    private renderItems(group: HTMLDivElement) {
        // Clear the checkboxes
        this._checkboxes = [];

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the checkbox
            let checkbox = new CheckboxItem(items[i], this.props);
            this._checkboxes.push(checkbox);
            group.appendChild(checkbox.el);

            // Configure the events
            this.configureEvents(checkbox);
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

    // Method to set the value
    // Sets the dropdown value
    setValue(value) {
        // Ensure it's an array
        let values = typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value];

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
    }
}
export const CheckboxGroup = (props: ICheckboxGroupProps): ICheckboxGroup => { return new _CheckboxGroup(props); }