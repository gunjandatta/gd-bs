import { IDropdownItem } from "../../../@types/components/dropdown";
import { IListBox, IListBoxProps } from "../../../@types/components/listBox";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * TODO - Figure out how to remove a selected item
 */

/**
 * List Box
 * @property props - The list box properties.
 */
class _ListBox extends Base<IListBoxProps> implements IListBox {
    private _elLabel: HTMLLabelElement = null;
    private _elSearchBox: HTMLInputElement = null;
    private _elDatalist: HTMLDataListElement = null;
    private _items: Array<IDropdownItem> = null;
    private _selectedItem: IDropdownItem = null;

    // Constructor
    constructor(props: IListBoxProps) {
        super(HTML, props);

        // Configure the list box
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configures the list box
    private configure() {
        this._elLabel = this.el.querySelector("label") as HTMLLabelElement;
        this._elSearchBox = this.el.querySelector("input") as HTMLInputElement;
        this._elDatalist = this.el.querySelector("datalist") as HTMLDataListElement;

        // See if the placeholder exists
        if (this.props.placeholder) {
            // Update the placeholder
            this._elSearchBox.placeholder = this.props.placeholder;
        }

        // See if the id is set
        if (this.props.id) {
            // Update the ids
            this.el.id = this.props.id;
            this._elLabel.setAttribute("for", this.props.id + "-search");
            this._elSearchBox.id = this.props.id + "-search";
            this._elSearchBox.setAttribute("list", this.props.id + "-list");
            this._elDatalist.id = this.props.id + "-list";
        }

        // Set the options
        this.setOptions(this.props.items);

        // Set the value
        this._elSearchBox.value = this.props.value || "";
        this._selectedItem = this.getValue();
        if (this._selectedItem == null) {
            // Clear the value
            this._elSearchBox.value = "";
        }
    }

    // Configures the events
    private configureEvents() {
        // See if a change event exists
        if (this.props.onChange) {
            // Set the change event on the search box
            this._elSearchBox.addEventListener("input", ev => {
                // Get the value
                let value = this.getValue();

                // See if it's changed
                if ((value == null && this._selectedItem != null) ||
                    (value != null && this._selectedItem == null) ||
                    (value.text != this._selectedItem.text)
                ) {
                    // Set the selected item
                    this._selectedItem = value;

                    // Call the event
                    this.props.onChange([this._selectedItem]);
                }
            });
        }
    }

    /**
     * Public Interface
     */

    getValue() {
        let value = this._elSearchBox.value;

        // Parse the items
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // See if this is the target item
            if (item.text == value) {
                // Return the item
                return item;
            }
        }

        // Item not found
        return null;
    }

    setOptions(items: Array<IDropdownItem> = []) {
        let elDatalist = this.el.querySelector("datalist") as HTMLDataListElement;

        // Save a reference to the items
        this._items = items;

        // Clear the options
        while (elDatalist.options.length > 0) { elDatalist.options[0].remove(); }

        // Clear the value
        this._elSearchBox.value = "";

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            // Add the option
            let elOption = document.createElement("option");
            elOption.value = items[i].text;
            elDatalist.appendChild(elOption);
        }
    }

    // Set the value
    setValue(value) { this._elSearchBox.value = value || ""; }
}
export const ListBox = (props: IListBoxProps): IListBox => { return new _ListBox(props); }