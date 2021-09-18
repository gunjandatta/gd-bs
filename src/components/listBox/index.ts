import { IListBox, IListBoxProps } from "./types";
import { IDropdownItem } from "../dropdown/types";
import { Base } from "../base";
import { HTML, HTMLItem } from "./templates";

/**
 * List Box
 * @property props - The list box properties.
 */
class _ListBox extends Base<IListBoxProps> implements IListBox {
    private _elLabel: HTMLLabelElement = null;
    private _elSearchBox: HTMLInputElement = null;
    private _elDatalist: HTMLDataListElement = null;
    private _elValues: HTMLUListElement = null;
    private _initFl: boolean = false;
    private _items: Array<IDropdownItem> = null;
    private _selectedItems: Array<IDropdownItem> = null;

    // Constructor
    constructor(props: IListBoxProps, template: string = HTML) {
        super(template, props);

        // Configure the list box
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();

        // Set the flag
        this._initFl = true;
    }

    // Configures the list box
    private configure() {
        this._elLabel = this.el.querySelector("label");
        this._elSearchBox = this.el.querySelector("input");
        this._elDatalist = this.el.querySelector("datalist");
        this._elValues = this.el.querySelector("ul");

        // See if the placeholder exists
        if (this.props.placeholder) {
            // Update the placeholder
            this._elSearchBox ? this._elSearchBox.placeholder = this.props.placeholder : null;
        }

        // See if the id is set
        if (this.props.id) {
            // Update the ids
            this.el.id = this.props.id;
            this._elLabel ? this._elLabel.setAttribute("for", this.props.id + "-search") : null;
            this._elSearchBox ? this._elSearchBox.id = this.props.id + "-search" : null;
            this._elSearchBox ? this._elSearchBox.setAttribute("list", this.props.id + "-list") : null;
            this._elDatalist ? this._elDatalist.id = this.props.id + "-list" : null;
        }

        // See if the label exists
        if (this._elLabel) {
            if (this.props.label) {
                this._elLabel.innerHTML = this.props.label;
            } else {
                // Remove the label
                this.el.removeChild(this._elLabel);
            }
        }

        // See if this is read-only
        if (this.props.isReadonly) {
            // Disable the search box
            this._elSearchBox ? this._elSearchBox.disabled = true : null;
        }

        // Set the options
        this.setOptions(this.props.items);

        // Set the value if it's been defined
        if (this.props.value != undefined) { this.setValue(this.props.value); }
    }

    // Configures the events
    private configureEvents() {
        // Execute the load event
        let returnVal: any = this.props.onLoadData ? this.props.onLoadData() : null;
        if (returnVal) {
            // See if a promise was returned
            if (typeof (returnVal.then) === "function") {
                // Wait for the promise to complete
                returnVal.then(items => {
                    // Set the options
                    this.setOptions(items);

                    // Set the value if it's been defined
                    if (this.props.value != undefined) { this.setValue(this.props.value); }
                });
            } else {
                // Set the options
                this.setOptions(returnVal);

                // Set the value if it's been defined
                if (this.props.value != undefined) { this.setValue(this.props.value); }
            }
        }

        // Set the change event on the search box
        this._elSearchBox.addEventListener("input", ev => {
            let value = this._elSearchBox.value;

            // Parse the items
            for (let i = 0; i < this._items.length; i++) {
                let item = this._items[i];

                // See if this is the target item
                if (item.text == value) {
                    // See if this is a multi-select
                    if (this.props.multi) {
                        let existsFl = false;

                        // Parse the selected items
                        for (let j = 0; j < this._selectedItems.length; j++) {
                            let selectedItem = this._selectedItems[j];

                            // See if this item is already selected
                            if (selectedItem.text == item.text) {
                                // Set the flag
                                existsFl = true;
                                break;
                            }
                        }

                        // Ensure the item wasn't already selected
                        if (!existsFl) {
                            // Set the value
                            this.setValue(this._selectedItems.concat(item).sort((a, b) => {
                                if (a.text < b.text) { return -1; }
                                if (a.text > b.text) { return 1; }
                                return 0;
                            }));

                            // Call the change event
                            this.props.onChange ? this.props.onChange(this._selectedItems, ev) : null;
                        }
                    } else {
                        // Set the value
                        this.setValue(value);

                        // Call the change event
                        this.props.onChange ? this.props.onChange(this._selectedItems, ev) : null;
                    }

                    // Clear the selected value
                    this._elSearchBox.value = "";

                    // Bug - Edge (non-chromium)
                    // The menu is still visible, so we fill force a "blur" to hide the menu after selection
                    this._elSearchBox.blur();
                }
            }
        });
    }

    // Method to configure the item event
    private configureItemEvent(elRemove: HTMLSpanElement, elItem: HTMLLIElement, item: IDropdownItem) {
        // Ensure the remove element exists
        if (elRemove) {
            // Add a click event to the badge
            let badge = elItem.querySelector(".badge")
            if (badge) {
                badge.addEventListener("click", ev => {
                    // Remove the item
                    this._elValues.removeChild(elItem);

                    // Find the selected item
                    for (let i = 0; i < this._selectedItems.length; i++) {
                        let selectedItem = this._selectedItems[i];

                        // See if this is the target item
                        if (selectedItem.text == item.text) {
                            // Remove this item
                            this._selectedItems.splice(i, 1);

                            // Call the change event
                            this.props.onChange ? this.props.onChange(this._selectedItems, ev) : null;
                            break;
                        }
                    }
                });
            }
        }
    }

    /**
     * Public Interface
     */

    // Gets the selected items
    getValue() { return this._selectedItems; }

    // Sets the options
    setOptions(items: Array<IDropdownItem> = []) {
        let elDatalist = this.el.querySelector("datalist") as HTMLDataListElement;
        if (elDatalist) {
            // Save a reference to the items
            this._items = items;

            // Clear the options
            while (elDatalist.firstChild) { elDatalist.removeChild(elDatalist.firstChild); }

            // Clear the value
            this._elSearchBox.value = "";
            this._selectedItems = [];

            // Parse the items
            for (let i = 0; i < items.length; i++) {
                let props = items[i];

                // Add the option
                let elOption = document.createElement("option");
                elOption.value = props.text;
                elDatalist.appendChild(elOption);

                // See if the item is selected
                if (props.isSelected) {
                    // Add the selected item
                    this._selectedItems.push(props);
                }
            }

            // See if items are selected
            if (this._selectedItems.length > 0) {
                // Set the value
                this.setValue(this._selectedItems);
            }
        }
    }

    // Set the value
    setValue(value) {
        // Clear the items
        this._selectedItems = [];
        while (this._elValues.firstChild) { this._elValues.removeChild(this._elValues.firstChild); }

        // Parse the values
        if (value) {
            // Ensure this is an array
            let values = typeof (value) === "string" || typeof (value) === "number" ? [value] : value;

            // Parse the values
            for (let i = 0; i < values.length; i++) {
                let itemValue = values[i];
                itemValue = typeof (itemValue) === "string" || typeof (itemValue) === "number" ? itemValue : itemValue.text;

                // Parse the items
                for (let j = 0; j < this._items.length; j++) {
                    let item = this._items[j];

                    // See if this is the target item
                    if (item.text == itemValue || item.value == itemValue) {
                        // Add the selected item
                        this._selectedItems.push(item);

                        // Create the list item
                        let elItem: HTMLLIElement = document.createElement("div") as any;
                        elItem.innerHTML = HTMLItem;
                        elItem = elItem.firstChild as any;
                        this._elValues.appendChild(elItem);

                        // Set the text value
                        let elRemove = elItem.querySelector("span");
                        if (elRemove) {
                            let text = document.createTextNode(item.text);
                            elItem.insertBefore(text, elRemove);
                        }

                        // See if this is read-only
                        if (this.props.isReadonly) {
                            // Delete the "remove" button
                            elItem.removeChild(elRemove);
                            elRemove = null;
                        }

                        // Configure the event for this item
                        this.configureItemEvent(elRemove, elItem, item);

                        // Break from the loop
                        break;
                    }
                }
            }
        }

        // See if a change event exists
        if (this._initFl && this.props.onChange) {
            // Execute the change event
            this.props.onChange(this.getValue());
        }
    }
}
export const ListBox = (props: IListBoxProps, template?: string): IListBox => { return new _ListBox(props, template); }