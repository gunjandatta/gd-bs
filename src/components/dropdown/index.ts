import * as jQuery from "jquery";
import { IDropdown, IDropdownItem, IDropdownProps } from "../../../@types/components/dropdown";
import { Base } from "../base";
import { ButtonClassNames, ButtonTypes } from "../button";
import { DropdownFormItem } from "./formItem";
import { DropdownItem } from "./item";
import * as HTML from "./index.html";
import * as HTMLForm from "./form.html";
import * as HTMLNav from "./nav.html";
import * as HTMLSplit from "./split.html";

/**
 * Dropdown Types
 */
export enum DropdownTypes {
    Danger = 1,
    Info = 2,
    Primary = 3,
    Secondary = 4,
    Success = 5,
    Warning = 6
}

// Gets the template
const GetHTML = (props: IDropdownProps) => {
    // See if we are rendering items for a form
    if (props.formFl) { return HTMLForm; }

    // See if we are rendering for a nav bar
    if (props.navFl) { return HTMLNav; }

    // See if we are rendering a split button dropdown
    if (props.isSplit) { return HTMLSplit; }

    // Return the default template
    return HTML;
}

/**
 * Dropdown
 * @property props - The dropdown properties.
 */
class _Dropdown extends Base<IDropdownProps> implements IDropdown {
    private _items: Array<DropdownFormItem | DropdownItem> = null;

    // Constructor
    constructor(props: IDropdownProps) {
        super(GetHTML(props), props);

        // Configure the dropdown
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // See if this is for a form
        if (this.props.formFl) {
            // Configure the dropdown for a form
            this.configureForm();
        }
        // Else, see if this is for a nav bar
        else if (this.props.navFl) {
            // Configure the dropdown for a nav bar
            this.configureNavBar();
        } else {
            // Configure the dropdown
            this.configureDefault();
        }

        // Render the items
        this.renderItems();

        // See if we are only rendering a menu
        if (this.props.menuOnly) {
            // Update the element
            this.el = this.el.querySelector(".dropdown-menu");
        }
    }

    // Configures the dropdown
    private configureDefault() {
        // Set the attributes
        this.el.title = this.props.title == null ? "" : this.props.title;
        this.props.dropLeft ? this.el.classList.add("dropleft") : null;
        this.props.dropRight ? this.el.classList.add("dropright") : null;
        this.props.dropUp ? this.el.classList.add("dropup") : null;

        // Set the type
        let btnType = ButtonClassNames.getByType(this.props.type) || ButtonClassNames.getByType(ButtonTypes.Primary);

        // See if this is a split button
        if (this.props.isSplit) {
            // Update a label
            let label = this.el.querySelector("button");
            label.classList.add(btnType);
            label.disabled = this.props.isReadonly ? true : false;
            label.innerHTML = this.props.label == null ? "" : this.props.label;

            // Set the click event to disable the postback
            label.addEventListener("click", ev => { ev.preventDefault(); });
        } else {
            // Update the label
            let label = this.el.querySelector(".dropdown-toggle");
            label.innerHTML = this.props.label == null ? "" : this.props.label;
        }

        // Update the dropdown
        let dropdown = this.el.querySelector(".dropdown-toggle") as HTMLButtonElement;
        dropdown.classList.add(btnType);
        dropdown.disabled = this.props.isReadonly ? true : false;

        // See if we are rendering the menu only
        let menu = this.el.querySelector(".dropdown-menu");
        if (this.props.menuOnly) {
            // Update the menu
            this.props.id ? menu.id = this.props.id : null;
            menu.className = this.props.className ? this.props.className : "";
            menu.classList.add("dropdown-menu");
        } else {
            // Update the menu
            this.props.id ? menu.setAttribute("aria-labelledby", this.props.id) : null;
        }
    }

    // Configure the events
    private configureEvents() {
        // See if this is a select element and a change event exists
        let menu = this.el.querySelector("select");
        if (menu) {
            // See if multiple options are allowed
            if (this.props.multi == true) {
                // Add a scroll event
                menu.addEventListener("click", ev => {
                    let selectedIdx = -1;

                    // Get the mouse position
                    let xPos = ev.clientX;
                    let yPos = ev.clientY;

                    // Parse the items
                    for (let i = 0; i < this._items.length; i++) {
                        let item = this._items[i];
                        let itemPos = item.el.getBoundingClientRect();

                        // See if this item was selected
                        if (xPos >= itemPos.left && xPos <= itemPos.right &&
                            yPos >= itemPos.top && yPos <= itemPos.bottom) {
                            // Set the index
                            selectedIdx = i;

                            // Toggle the item
                            item.toggle();

                            // Break from the loop
                            break;
                        }
                    }

                    // See if an item was selected
                    if (selectedIdx >= 0) {
                        // Parse the items
                        for (let i = 0; i < this._items.length; i++) {
                            let item = this._items[i];

                            // Skip the selected item
                            if (selectedIdx == i) { continue; }

                            // See if this item was selected
                            if (item.isSelected) {
                                // Ensure the element is still selected
                                (item.el as HTMLOptionElement).selected = true;
                            }
                        }

                        // Call the change event
                        this.props.onChange ? this.props.onChange(this.getValue(), ev) : null;
                    }
                });
            } else {
                // Add a change event
                menu.addEventListener("change", ev => {
                    // Parse the items
                    for (let i = 0; i < this._items.length; i++) {
                        let item = this._items[i];

                        // See if this item was selected
                        if ((ev.target as HTMLSelectElement).value == item.props.text) {
                            // Ensure this item is selected
                            if (!item.isSelected) { item.toggle(); }

                            // Call the change event
                            this.props.onChange ? this.props.onChange(item.props, ev) : null;
                        } else {
                            // Unselect the other values
                            if (item.isSelected) { item.toggle(); }
                        }
                    }
                });
            }
        }
    }

    // Configures the dropdown for a form
    private configureForm() {
        // Update the label
        let label = this.el.querySelector("label");
        label.innerHTML = this.props.label == null ? "" : this.props.label;

        // Update the dropdown
        let dropdown = this.el.querySelector("select");
        dropdown.className = this.props.className || "";
        dropdown.classList.add("form-control");
        dropdown.disabled = this.props.isReadonly ? true : false;
        dropdown.multiple = this.props.multi ? true : false;
        dropdown.title = this.props.title == null ? "" : this.props.title;
    }

    // Configure the item events
    private configureItemEvents(item: DropdownFormItem | DropdownItem) {
        // Ensure this isn't a header/divider
        if (item.props.isDivider || item.props.isHeader) { return; }

        // See if multi selections is not allowed
        if (this.props.multi != true) {
            // Add a click event
            item.el.addEventListener("click", ev => {
                // Parse the items
                for (let i = 0; i < this._items.length; i++) {
                    let selectedItem = this._items[i];

                    // Skip this item
                    if (item.el.innerHTML == selectedItem.el.innerHTML) { continue; }

                    // Ensure this item is selected
                    if (selectedItem.isSelected) {
                        // Unselect the item
                        selectedItem.toggle();
                    }
                }
            });
        }

        // See if there is a change event
        if (this.props.onChange) {
            // Add a click event
            item.el.addEventListener("click", ev => {
                // Execute the event
                this.props.onChange(this.getValue(), ev);
            });
        }
    }

    // Configures the dropdown for a nav bar
    private configureNavBar() {
        // Update the link
        let link = this.el.querySelector("a");
        link.id = "navbarDDL_" + (this.props.label == null ? "" : this.props.label);
        link.title = this.props.title == null ? "" : this.props.title;
        this.props.isReadonly ? link.setAttribute("aria-disabled", "true") : null;
        link.innerHTML = this.props.label == null ? "" : this.props.label;

        // See if we are rendering the menu only
        let menu = this.el.querySelector(".dropdown-menu");
        if (this.props.menuOnly) {
            // Update the menu
            this.props.id ? menu.id = this.props.id : null;
            menu.className = this.props.className ? this.props.className : "";
            menu.classList.add("dropdown-menu");
        } else {
            // Update the menu
            this.props.id ? menu.setAttribute("aria-labelledby", this.props.id) : null;
        }
    }

    // Renders the items
    private renderItems() {
        // Clear the items
        this._items = [];

        // Get the menu
        let menu = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select");
        let isForm = menu.nodeName == "SELECT";

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item
            let item = isForm ? new DropdownFormItem(items[i], this.props) : new DropdownItem(items[i], this.props);
            this._items.push(item);

            // See if this isn't for a form
            if (!isForm) {
                // Configure the item events
                this.configureItemEvents(item);
            }

            // Add the item to the menu
            menu.appendChild(item.el);
        }

        // See if this is a form
        if (isForm) {
            // Ensure the selected values match the index
            let idx = (menu as HTMLSelectElement).selectedIndex;
            if (this._items[idx] && this._items[idx].isSelected == false) {
                // Select the item
                this._items[idx].toggle();
            }
        }
    }

    /**
     * Public Interface
     */

    // Disposes the dropdown
    dispose() { jQuery(this.el).dropdown("dispose"); }

    // Gets the value
    getValue() {
        let values = [];

        // Parse the items
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // See if this item is selected
            if (item.isSelected) {
                // Add the value
                values.push(item.props);
            }
        }

        // Return the value
        return this.props.multi ? values : values[0];
    }

    // Returns true if the dropdown allows multiple selections
    get isMulti(): boolean { return this.props.multi; }

    // Sets the dropdown items
    setItems(newItems: Array<IDropdownItem> = []) {
        // Update the properties
        this.props.items = newItems;

        // Get the menu
        let menu = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select");

        // Clear the menu
        while (menu.firstChild) { menu.removeChild(menu.firstChild); }

        // Render the items
        this.renderItems();
    }

    // Sets the dropdown value
    setValue(value) {
        // Ensure it's an array
        let values = typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value];

        // Parse the items
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // Toggle checked items
            item.isSelected ? item.toggle() : null;
        }

        // Parse the values
        for (let i = 0; i < values.length; i++) {
            let value = values[i];

            // Parse the items
            for (let j = 0; j < this._items.length; j++) {
                let item = this._items[j];

                // See if this is the target item
                if (typeof (item.props.value) === "undefined") {
                    // Select this item if the text matches
                    item.props.text == value ? item.toggle() : null;
                } else {
                    // Select this item if the value matches
                    item.props.value == value ? item.toggle() : null;
                }
            }
        }

        // See if this is a form
        let ddl = this.el.querySelector("select");
        if (ddl) {
            // Ensure the selected values match the index
            if (this._items[ddl.selectedIndex] && this._items[ddl.selectedIndex].isSelected == false) {
                // Select the item
                this._items[ddl.selectedIndex].toggle();
            }
        }
    }

    // Toggles the menu
    toggle() { jQuery(this.el).dropdown("toggle"); }

    // Updates the dropdown
    update() { jQuery(this.el).dropdown("update") }
}
export const Dropdown = (props: IDropdownProps): IDropdown => { return new _Dropdown(props); }