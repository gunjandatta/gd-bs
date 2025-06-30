import { IDropdown, IDropdownItem, IDropdownProps } from "./types";
import { ICheckboxGroup, ICheckboxGroupItem } from "../checkboxGroup/types";
import { IFloatingUI } from "../floating-ui/types";
import { Base } from "../base";
import { ButtonClassNames, ButtonTypes } from "../button";
import { CheckboxGroup, CheckboxGroupTypes } from "../checkboxGroup"
import { FloatingUI, FloatingUIPlacements, FloatingUITypes } from "../floating-ui";
import { DropdownFormItem } from "./formItem";
import { DropdownItem } from "./item";
import { HTML, HTMLForm, HTMLNavItem, HTMLSplit } from "./templates";

/**
 * Dropdown Types
 */
export const DropdownPlacements = FloatingUIPlacements;
export const DropdownTypes = ButtonTypes;

// Gets the template
const GetHTML = (props: IDropdownProps) => {
    // See if we are rendering items for a form
    if (props.formFl) { return HTMLForm; }

    // See if we are rendering for a nav bar
    if (props.navFl) { return HTMLNavItem; }

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
    private _autoSelect: boolean = null;
    private _cb: ICheckboxGroup = null;
    private _elMenu: HTMLElement;
    private _floatingUI: IFloatingUI = null;
    private _initFl: boolean = false;
    private _items: Array<DropdownFormItem | DropdownItem> = null;

    // Constructor
    constructor(props: IDropdownProps, template: string = GetHTML(props)) {
        super(template, props);

        // Configure the dropdown
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();

        // Set the flag
        this._initFl = true;
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

        // Set the menu element
        this._elMenu = this.el.querySelector(".dropdown-menu");
        if (this._elMenu) {
            // See if we are only rendering a menu
            if (this.props.menuOnly) {
                // Update the element
                this.el = this._elMenu;
            }
        }

        // Set the dark theme
        this.props.isDark ? this.setTheme(true) : null;
    }

    // Configures the dropdown
    private configureDefault() {
        // Set the attributes
        this.props.title ? this.el.title = this.props.title : null;
        this.props.dropLeft ? this.el.classList.add("dropstart") : null;
        this.props.dropRight ? this.el.classList.add("dropend") : null;
        this.props.dropUp ? this.el.classList.add("dropup") : null;

        // Set the type
        let btnType = ButtonClassNames.getByType(this.props.type) || ButtonClassNames.getByType(DropdownTypes.Primary);

        // See if this is a split button
        if (this.props.isSplit) {
            // Update a label
            let label = this.el.querySelector("button");
            if (label) {
                label.classList.add(btnType);
                label.disabled = this.props.isReadonly ? true : false;
                label.innerHTML = this.props.label == null ? "" : this.props.label;

                // Set the click event to disable the postback
                label.addEventListener("click", ev => { ev.preventDefault(); });
            }
        } else {
            // Update the label
            let label = this.el.querySelector(".dropdown-toggle");
            if (label) {
                label.innerHTML = this.props.label == null ? "" : this.props.label;
            }
        }

        // Update the dropdown
        let toggle = this.el.querySelector(".dropdown-toggle");
        if (toggle) {
            toggle.classList.add(btnType);
            toggle.disabled = this.props.isReadonly ? true : false;
            toggle.setAttribute("aria-label", this.props.label || "");
        }

        // See if we are rendering the menu only
        let menu = this.el.querySelector(".dropdown-menu") as HTMLElement;
        if (menu) {
            // See if we are rendering the menu only
            if (this.props.menuOnly) {
                // Update the menu
                this.props.id ? menu.id = this.props.id : null;
                this.props.className ? menu.classList.add(this.props.className) : null;
            } else {
                // Update the menu
                this.props.id ? menu.setAttribute("aria-labelledby", this.props.id) : null;
            }

            // See if a button class name exists
            let classNames = (this.props.btnClassName || "").split(' ');
            for (let i = 0; i < classNames.length; i++) {
                // Ensure the class name exists
                let className = classNames[i];
                if (className) {
                    // Add the class name
                    (this.props.menuOnly ? menu : toggle).classList.add(className);
                }
            }
        }
    }

    // Configure the events
    private configureEvents() {
        // Set the auto select property
        this._autoSelect = typeof (this.props.autoSelect) === "boolean" ? this.props.autoSelect : true;

        // See if this is a select element and a change event exists
        let menu = this.el.querySelector("select");
        if (menu) {
            // Add a change event
            menu.addEventListener("change", ev => {
                // See if multiple options are allowed
                if (this.props.multi == true) {
                    // See if we are selecting the values
                    if (this._autoSelect) {
                        // Parse the items
                        for (let i = 0; i < this._items.length; i++) {
                            let item = this._items[i] as DropdownFormItem;

                            // Update the flag
                            item.isSelected = (item.el as HTMLOptionElement).selected;
                        }
                    }

                    // Call the change event
                    this.props.onChange ? this.props.onChange(this.getValue(), ev) : null;
                } else {
                    // Get the selected value
                    let selectedValue = ((ev.target as HTMLSelectElement).value || "").trim();

                    // Parse the items
                    for (let i = 0; i < this._items.length; i++) {
                        let item = this._items[i];

                        // Replace special characters
                        let value = (item.props.text || "");

                        // See if this item was selected
                        if (selectedValue == value) {
                            // Ensure this item is selected
                            if (this._autoSelect && !item.isSelected) { item.toggle(); }

                            // Call the change event
                            this.props.onChange ? this.props.onChange(item.props, ev) : null;
                        } else {
                            // Unselect the other values
                            if (this._autoSelect && item.isSelected) { item.toggle(); }
                        }
                    }
                }
            });
        }

        // Get the toggle
        let toggle = this.el.querySelector(".dropdown-toggle") as HTMLElement;
        if (toggle && this._elMenu) {
            // Set the type, based on the current dropdown type
            let popoverType = FloatingUITypes.LightBorder;
            switch (this.props.type) {
                case DropdownTypes.Danger:
                case DropdownTypes.OutlineDanger:
                    popoverType = FloatingUITypes.Danger;
                    break;
                case DropdownTypes.Dark:
                case DropdownTypes.OutlineDark:
                    popoverType = FloatingUITypes.Dark;
                    break;
                case DropdownTypes.Info:
                case DropdownTypes.OutlineInfo:
                    popoverType = FloatingUITypes.Info;
                    break;
                case DropdownTypes.Light:
                case DropdownTypes.OutlineLight:
                case DropdownTypes.Link:
                case DropdownTypes.OutlineLink:
                    popoverType = FloatingUITypes.Light;
                    break;
                case DropdownTypes.Primary:
                case DropdownTypes.OutlinePrimary:
                    popoverType = FloatingUITypes.Primary;
                    break;
                case DropdownTypes.Secondary:
                case DropdownTypes.OutlineSecondary:
                    popoverType = FloatingUITypes.Secondary;
                    break;
                case DropdownTypes.Success:
                case DropdownTypes.OutlineSuccess:
                    popoverType = FloatingUITypes.Success;
                    break;
                case DropdownTypes.Warning:
                case DropdownTypes.OutlineWarning:
                    popoverType = FloatingUITypes.Warning;
                    break;
            }

            // Create the menu
            this._floatingUI = FloatingUI({
                className: "floating-dropdown",
                elContent: this._elMenu,
                elTarget: toggle,
                placement: typeof (this.props.placement) === "number" ? this.props.placement : FloatingUIPlacements.BottomStart,
                theme: popoverType,
                options: {
                    arrow: false,
                    flip: true,
                    shift: true,
                    trigger: "click"
                }
            });
        }
    }

    // Configures the dropdown for a form
    private configureForm() {
        // Configure the label
        let elLabel = this.el.querySelector("label") as HTMLElement;
        if (elLabel) {
            let label = this.props.label == null ? "" : this.props.label;
            if (label) {
                // Set the label
                elLabel.innerHTML = label;
            } else {
                // Remove the label
                elLabel.parentNode.removeChild(elLabel);
            }
        }

        // Update the dropdown
        let dropdown = this.el.querySelector("select");
        if (dropdown) {
            dropdown.className = this.props.className || "";
            dropdown.classList.add("form-select");
            dropdown.disabled = this.props.isReadonly ? true : false;
            dropdown.multiple = this.props.multi ? true : false;
            dropdown.required = this.props.required ? true : false;
            this.props.title ? dropdown.title = this.props.title : null;
        }
    }

    // Configure the item events
    private configureItemEvents(item: DropdownFormItem | DropdownItem) {
        // Ensure this isn't a header/divider
        if (item.props.isDivider || item.props.isHeader) { return; }

        // See if multi selections is not allowed
        if (this.props.multi != true) {
            // Add a click event
            item.el.addEventListener("click", ev => {
                // See if an item was selected, and is disabled
                if (item.props.isDisabled == true) {
                    // Ignore the click event
                    return;
                }

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

                // See if we are updating the label
                if (this.props.updateLabel) {
                    let selectedItem = this.getValue() as IDropdownItem;

                    // Set the label
                    let toggle = this.el.querySelector(".dropdown-toggle");
                    if (toggle) {
                        toggle.innerHTML = selectedItem ? selectedItem.text : this.props.label;
                    }
                }
            });
        }

        // Add a click event
        item.el.addEventListener("click", ev => {
            // Prevent other events to occur
            ev.stopPropagation();

            // Ensure this isn't a multi-select
            if (this.isMulti != true) {
                // Toggle the menu if it's visible
                this.isVisible ? this.toggle() : null;
            }
            // Else, see if we are updating the label for a multi-dropdown
            else if (this.props.updateLabel) {
                // Set the selected values
                let selectedItems: IDropdownItem[] = this.getValue();
                let selectedValues = [];
                for (let i = 0; i < selectedItems.length; i++) {
                    // Append the value
                    selectedValues.push(selectedItems[i].text);
                }

                // Set the label
                let toggle = this.el.querySelector(".dropdown-toggle");
                if (toggle) {
                    // Set the label
                    toggle.innerHTML = selectedValues.length == 0 ? this.props.label : selectedValues.join(', ');
                }
            }

            // Execute the event
            this.props.onChange ? this.props.onChange(this.getValue(), ev) : null;
        });
    }

    // Configures the dropdown for a nav bar
    private configureNavBar() {
        // Update the link
        let link = this.el.querySelector("a");
        if (link) {
            link.id = ("navbarDDL" + (this.props.label == null ? "" : this.props.label)).replace(/ /g, '');
            this.props.title ? link.title = this.props.title : null;
            this.props.isReadonly ? link.setAttribute("aria-disabled", "true") : null;
            link.innerHTML = this.props.label == null ? "" : this.props.label;
        }

        // See if we are rendering the menu only
        let menu = this.el.querySelector(".dropdown-menu");
        if (menu) {
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
    }

    // Generates the checkbox items
    private generateCheckboxItems(): ICheckboxGroupItem[] {
        let cbItems: ICheckboxGroupItem[] = [];

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Create the checkbox item
            cbItems.push({
                data: item,
                isDisabled: item.isDisabled,
                isSelected: item.isSelected,
                label: item.text,
                onChange: item.onClick,
                type: CheckboxGroupTypes.Checkbox
            });
        }

        // Return the items
        return cbItems;
    }

    // Generates the checkbox value
    private generateCheckboxValue(currentValues: string | string[] | IDropdownItem[]): string[] {
        let values: string[] = [];

        // Ensure a value exists
        if (currentValues == null) { return values; }

        // Ensure it's an array
        if (typeof (currentValues) === "string") {
            // Make it an array
            currentValues = [currentValues];
        }

        // Parse the current values
        for (let i = 0; i < currentValues.length; i++) {
            let currentValue = currentValues[i];
            let currentItem: IDropdownItem = {};

            // See if this is a string
            if (typeof (currentValue) == "string") {
                // Set the text and value properties
                currentItem.text = currentValue;
                currentItem.value = currentValue;
            } else {
                // Set the item
                currentItem = currentValue;
            }

            // Find the item
            let item = this.props.items?.find((item) => { return item.value == currentValue || item.text == currentValue; });
            if (item) {
                // Add the text property
                values.push(item.text);
            }
        }

        // Return the values
        return values;
    }

    // Handles the click event outside of the menu to close it
    private handleClick = (ev: Event) => {
        // See if we clicked within the menu
        if (!ev.composedPath().includes(this._elMenu)) {
            if (this.isVisible) {
                // Hide the menu
                this.toggle();
            } else {
                // Remove this event (This shouldn't happen, but to be safe)
                document.body.removeEventListener("click", this.handleClick);
            }
        }
    }

    // Renders the items
    private renderItems() {
        // Clear the items
        this._items = [];

        // Get the menu
        let menu = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select");
        if (menu) {
            // See if we are creating checkboxes
            if (this.props.isCheckbox) {
                // Render the checkbox
                this._cb = CheckboxGroup({
                    className: "m-2",
                    el: menu,
                    items: this.generateCheckboxItems(),
                    multi: this.props.multi,
                    value: this.generateCheckboxValue(this.props.value),
                    onChange: this.props.onChange ? (selectedItems, allItems, ev) => {
                        // Pass the current values
                        this.props.onChange(selectedItems, ev);
                    } : null
                });
            } else {
                let isForm = menu.nodeName == "SELECT";
                let values: string[] = [];

                // Parse the items
                let items = this.props.items || [];
                for (let i = 0; i < items.length; i++) {
                    // Create the item
                    let item = isForm ? new DropdownFormItem(items[i], this.props) : new DropdownItem(items[i], this.props);
                    this._items.push(item);

                    // See if this item is selected
                    if (item.isSelected) { values.push(item.props.value || item.props.text); }

                    // See if this isn't for a form
                    if (!isForm) {
                        // Configure the item events
                        this.configureItemEvents(item);
                    }

                    // Add the item to the menu
                    menu.appendChild(item.el);
                }

                // Set the value
                this.setValue(this.props.multi ? values : values[0]);

                // See if this is a form
                if (isForm) {
                    // Ensure the selected values match the index
                    let idx = (menu as HTMLSelectElement).selectedIndex;
                    if (idx >= 0 && idx < this._items.length) {
                        // Parse the items and ensure none are toggled except for the selected index
                        for (let i = 0; i < this._items.length; i++) {
                            // Ensure it's not selected
                            if (i != idx && this._items[i].isSelected) { this._items[i].toggle(); }
                            // Else, toggle it if it's the selected item
                            else if (idx == i && this._items[i].isSelected == false) { this._items[i].toggle(); }
                        }
                    }
                }
            }
        }
    }

    /**
     * Public Interface
     */

    // Disables the button
    disable() {
        // Get the buttons
        let buttons = this.el.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
            // Disable the button
            (buttons[i] as HTMLButtonElement).disabled = true;
        }
    }

    // Enables the button
    enable() {
        // Get the buttons
        let buttons = this.el.querySelectorAll("button");
        for (let i = 0; i < buttons.length; i++) {
            // Enable the button
            (buttons[i] as HTMLButtonElement).disabled = false;
        }
    }

    // Gets the value
    getValue() {
        let values = [];

        // See if the checkboxes exist
        if (this._cb) {
            // Get the values
            let items = (this._cb.getValue().selectedItems) as ICheckboxGroupItem[];
            items = typeof (items["length"]) === "number" ? items : [items] as any;

            // Parse the items
            for (let i = 0; i < items.length; i++) {
                // Add the value
                values.push(items[i].data);
            }
        } else {
            // Parse the items
            for (let i = 0; i < this._items.length; i++) {
                let item = this._items[i];

                // Skip disabled items
                if ((item.el as HTMLOptionElement).disabled) { continue; }

                // See if this item is selected
                if (item.isSelected) {
                    // Add the value
                    values.push(item.props);
                }
            }
        }

        // Return the value
        return this.props.multi ? values : values[0];
    }

    // Returns true if the dropdown allows multiple selections
    get isMulti(): boolean { return this.props.multi; }

    // Returns true if the dropdown menu is visible
    get isVisible(): boolean { return this._floatingUI ? this._floatingUI.isVisible : false; }

    // The floating ui menu
    get floatingUI(): IFloatingUI { return this._floatingUI; }

    // Sets the dropdown items
    setItems(newItems: Array<IDropdownItem> = []) {
        // Update the properties
        this.props.items = newItems;

        // See if we are rendering checkboxes
        if (this._cb) {
            // Set the items
            this._cb.setItems(this.generateCheckboxItems());
            return;
        }

        // Get the menu
        let menu: HTMLSelectElement = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select") || this.el.classList.contains("dropdown-menu");
        if (menu) {
            // Clear the menu
            while (menu.firstChild) { menu.removeChild(menu.firstChild); }

            // Clear the current value
            menu.value = "";

            // Render the items
            this.renderItems();

            // Parse the items
            for (let i = 0; i < newItems.length; i++) {
                let item = newItems[i];

                // See if the item is selected
                if (item.isSelected) {
                    menu.value = item.text;
                    break;
                }
            }
        }
    }

    // Sets the label of the dropdown
    setLabel(value: string = "") {
        // Get the dropdown
        let ddl = this.el.querySelector(".dropdown-toggle");
        if (ddl) {
            // Set the inner html
            ddl.innerHTML = value;
            ddl.setAttribute("aria-label", value);
        }
    }

    // Enables/Disables the dark theme
    setTheme(isDark: boolean) {
        // Get the menu
        // See if we are setting the dark theme
        if (isDark) {
            // Set the theme
            this._elMenu.classList.add("dropdown-menu-dark");
        } else {
            // Set the theme
            this._elMenu.classList.remove("dropdown-menu-dark");
        }
    }

    // Sets the button type
    setType(ddlType: number) {
        // Parse the element types to search for
        let elTypes = ["button", ".dropdown-toggle"];
        for (let i = 0; i < elTypes.length; i++) {
            let el = this.el.querySelector(elTypes[i]);
            if (el) {
                // Parse the class names
                ButtonClassNames.parse(className => {
                    // Remove the class names
                    el.classList.remove(className);
                });

                // Set the class name
                let className = ButtonClassNames.getByType(ddlType);
                className ? el.classList.add(className) : null;
            }
        }
    }

    // Sets the dropdown value
    setValue(value) {
        // Ensure it's an array
        let values = value == null ? [] : (typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value]);

        // See if this is a checkbox
        if (this._cb) {
            // Set the value
            this._cb.setValue(this.generateCheckboxValue(value));
            return;
        }

        // Parse the items
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // Toggle checked items
            item.isSelected ? item.toggle() : null;
        }

        // Parse the values
        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            let ddlText = value ? value.text || value : null;
            let ddlValue = value ? value.value || value : null;

            // Parse the items
            for (let j = 0; j < this._items.length; j++) {
                let item = this._items[j];

                // See if this is the target item
                if (item.props.value == undefined) {
                    // Select this item if the text matches
                    item.props.text == ddlText ? item.toggle() : null;
                } else {
                    // Select this item if the value matches
                    item.props.value == ddlValue ? item.toggle() : null;
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

        // See if we are updating the label
        if (this.props.updateLabel) {
            // See if a value exists
            if (value && typeof (value) === "string") {
                // Set the label
                this.setLabel(value);
            }
            // Else, see if label exists
            else if (this.props.label) {
                // Set the label
                this.setLabel(this.props.label);
            }
        }

        // See if a change event exists
        if (this._initFl && this.props.onChange) {
            // Execute the change event
            this.props.onChange(this.getValue());
        }
    }

    // Toggles the menu
    toggle() {
        // Toggle the popover
        this._floatingUI ? this._floatingUI.toggle() : null;
    }
}
export const Dropdown = (props: IDropdownProps, template?: string): IDropdown => { return new _Dropdown(props, template); }
