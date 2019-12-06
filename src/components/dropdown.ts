import * as jQuery from "jquery";
import * as Common from "../common";
import { IDropdown, IDropdownItem, IDropdownProps } from "../../@types/dropdown";

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

/**
 * Dropdown
 * @property props - The dropdown properties.
 */
export const Dropdown = (props: IDropdownProps): IDropdown => {
    let isMulti = props.multi || false;
    let items = props.items || [];
    let elMenu: HTMLElement = null;

    // Method to generate the items
    let generateItems = (elParent: HTMLElement, value?: any) => {
        // Method to update the label
        let updateLabel = (value: IDropdownItem | Array<IDropdownItem>) => {
            let isMulti = value && typeof (value["length"]) === "number";
            let item = value as IDropdownItem;
            let items = value as Array<IDropdownItem>;

            // Ensure we are updating the label
            if (props.setLabelToValue != true) { return; }

            // Get the label
            let label = null;
            let buttons = el.querySelectorAll("button");
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];

                // See if this is the label
                if (button.hasAttribute("data-is-label")) {
                    // Set the label and break from the loop
                    label = button;
                    break;
                }

                // See if this is the target button
                if (button.innerHTML == props.label) {
                    // Set the attribute
                    button.setAttribute("data-is-label", "true");

                    // Set the label and break from the loop
                    label = button;
                    break;
                }
            }

            // Ensure the label exists
            if (label == null) { return; }

            // See if a value exists
            if (value && ((isMulti && items.length > 0) || item)) {
                // See if this is a multi value
                if (isMulti) {
                    let values = [];

                    // Parse the items
                    for (let i = 0; i < items.length; i++) {
                        // Add the value
                        values.push(items[i].text);
                    }

                    // Set the value
                    label.innerHTML = values.join(", ");
                } else {

                    // Set the value
                    label.innerHTML = item.text;
                }
            } else {
                // Revert to the default label
                label.innerHTML = props.label;
            }
        };

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // See if we are rendering this in a form
            if (props.formFl) {
                // See if this is a divider
                if (item.isDivider) {
                    // Add the divider
                    let elDivider = document.createElement("optgroup");
                    elDivider.className = item.className || "";
                    elDivider.classList.add("dropdown-divider");
                    elDivider.disabled = true;
                    elParent.appendChild(elDivider);

                    // Call the event
                    item.onRender ? item.onRender(elDivider, item) : null;

                    // Continue the loop
                    continue;
                }

                // See if this is a header
                if (item.isHeader) {
                    // Add the header
                    let elHeader = document.createElement("optgroup");
                    elHeader.className = item.className || "";
                    elHeader.classList.add("dropdown-header");
                    elHeader.disabled = item.isDisabled;
                    elHeader.label = item.text || "";
                    elParent.appendChild(elHeader);

                    // Call the event
                    item.onRender ? item.onRender(elHeader, item) : null;

                    // Continue the loop
                    continue;
                }

                // Create the option
                let option = document.createElement("option");
                option.className = item.className || "";
                option.disabled = item.isDisabled ? true : false;
                option.setAttribute("data-idx", i.toString());
                elParent.appendChild(option);

                // Set the text
                option.innerHTML = item.text || "";

                // See if the item is selected
                if (item.isSelected) {
                    // Select the option
                    option.selected = true;
                }
                // Else, see if a value exists
                else if (typeof (value) !== "undefined") {
                    // Ensure it's an array
                    let values = value && value.length && typeof (value) !== "string" ? value : [value];

                    // Parse the values
                    for (let j = 0; j < values.length; j++) {
                        // See if this item is selected
                        if (item.value == values[j]) {
                            // Select the option
                            option.selected = true;
                            break;
                        }
                    }
                }

                // Call the event
                item.onRender ? item.onRender(option, item) : null;
            }
            else {
                // See if this is a divider
                if (item.isDivider) {
                    // Add the divider
                    let elDivider = document.createElement("div");
                    elDivider.className = item.className || "";
                    elDivider.classList.add("dropdown-divider");
                    item.isDisabled ? elDivider.classList.add("disabled") : null;
                    elParent.appendChild(elDivider);

                    // Call the event
                    item.onRender ? item.onRender(elDivider, item) : null;

                    // Continue the loop
                    continue;
                }

                // See if this is a header
                if (item.isHeader) {
                    // Add the header
                    let elHeader = document.createElement("h6");
                    elHeader.className = item.className || "";
                    elHeader.classList.add("dropdown-header");
                    item.isDisabled ? elHeader.classList.add("disabled") : null;
                    elHeader.innerHTML = item.text || "";
                    elParent.appendChild(elHeader);

                    // Call the event
                    item.onRender ? item.onRender(elHeader, item) : null;

                    // Continue the loop
                    continue;
                }

                // Set the click event for the custom events
                let onItemClick = (ev: Event) => {
                    let elItem = ev.currentTarget as HTMLElement;
                    let itemIdx = elItem.getAttribute("data-idx");
                    let item: IDropdownItem = items[itemIdx];
                    let selectedItems: Array<IDropdownItem> = [];

                    // See if this is a menu only
                    if (props.menuOnly) {
                        // Set the location
                        item.href && item.href != "#" ? document.location.href = item.href : null;
                    }

                    // Parse the selected items
                    let elSelectedItems = el.querySelectorAll(".dropdown-item.active");
                    for (let i = 0; i < elSelectedItems.length; i++) {
                        let elSelectedItem = elSelectedItems[i] as HTMLElement;
                        let selectedIdx = elSelectedItem.getAttribute("data-idx");
                        let selectedItem = items[selectedIdx];

                        // Skip this item
                        if (itemIdx == selectedIdx) { continue; }

                        // See if this is a multi-select
                        if (isMulti) {
                            // Add the item
                            selectedItems.push(selectedItem);
                        } else {
                            // Unselect the item
                            elSelectedItem.classList.remove("active");
                        }
                    }

                    // See if this item is selected
                    if (elItem.classList.contains("active")) {
                        // Unselect this item
                        elItem.classList.remove("active");
                    } else {
                        // Select this item
                        elItem.classList.add("active");

                        // Add the item
                        selectedItems.push(item);
                    }

                    // Sort the items
                    selectedItems = selectedItems.sort((a, b) => {
                        if (a.text < b.text) { return -1; }
                        if (a.text > b.text) { return 1; }
                        return 0;
                    });

                    // See if a click event exists
                    if (item.onClick) {
                        // Call the click event
                        item.onClick(item, ev);
                    }

                    // See if a global change event exists
                    if (props.onChange) {
                        let value = isMulti ? selectedItems : selectedItems[0];

                        // Update the label
                        updateLabel(value)

                        // Call the change event
                        props.onChange(value, ev);
                    }
                };

                // See if we are rendering this in a nav bar
                if (props.navFl) {
                    // Add the item
                    let elItem = document.createElement("a");
                    elItem.className = item.className || "";
                    elItem.classList.add("dropdown-item");
                    item.isDisabled ? elItem.classList.add("disabled") : null;
                    elItem.href = item.href || "#";
                    elItem.setAttribute("data-idx", i.toString());
                    elItem.innerHTML = item.text || "";
                    elParent.appendChild(elItem);

                    // Call the event
                    item.onRender ? item.onRender(elItem, item) : null;

                    // Set the click event
                    elItem.addEventListener("click", onItemClick);
                } else {
                    // Create the item
                    let elItem = document.createElement("a");
                    elItem.className = item.className || "";
                    elItem.classList.add("dropdown-item");
                    item.isDisabled ? elItem.classList.add("disabled") : null;
                    elItem.href = item.href || "#";
                    elItem.setAttribute("data-idx", i.toString());
                    elItem.innerHTML = item.text || "";
                    elParent.appendChild(elItem);

                    // See if this item is selected
                    if (item.isSelected) {
                        // Select the item
                        elItem.classList.add("active");
                    }
                    // Else, see if a value exists
                    else if (typeof (value) !== "undefined") {
                        // Ensure it's an array
                        let values = value && value.length && typeof (value) !== "string" ? value : [value];

                        // Parse the values
                        for (let j = 0; j < values.length; j++) {
                            // See if this item is selected
                            if (item.value == values[j]) {
                                // Select the item
                                elItem.classList.add("active");
                                break;
                            }
                        }
                    }

                    // Call the event
                    item.onRender ? item.onRender(elItem, item) : null;

                    // Set the click event
                    elItem.addEventListener("click", onItemClick);
                }
            }
        }

        // See if this is a form
        if (props.formFl) {
            // Set the change event for the custom events
            // The click event on a 'option' element will not work in chrome
            elParent.addEventListener("change", ev => {
                let elSelect = ev.currentTarget as HTMLSelectElement;
                let elItem = elSelect.children[elSelect.selectedIndex];
                let itemIdx = elItem.getAttribute("data-idx");
                let item: IDropdownItem = items[itemIdx];
                let selectedItems: Array<IDropdownItem> = [];

                // Parse the selected items
                let elSelectedItems = el.querySelectorAll("option");
                for (let i = 0; i < elSelectedItems.length; i++) {
                    let elSelectedItem = elSelectedItems[i] as HTMLOptionElement;
                    let selectedIdx = elSelectedItem.getAttribute("data-idx");

                    // See if the item is selected
                    if (elSelectedItem.selected) {
                        // Add the item
                        selectedItems.push(items[selectedIdx]);
                    }
                }

                // Sort the items
                selectedItems = selectedItems.sort((a, b) => {
                    if (a.text < b.text) { return -1; }
                    if (a.text > b.text) { return 1; }
                    return 0;
                });

                // See if a click event exists
                if (item.onClick) {
                    // Call the click event
                    item.onClick(item, ev);
                }

                // See if a global change event exists
                if (props.onChange) {
                    let value = isMulti ? selectedItems : selectedItems[0];

                    // Update the label
                    updateLabel(value)

                    // Call the change event
                    props.onChange(value, ev);
                }
            });
        }
    }

    // Create the dropdown
    let elDropdown: HTMLDivElement = null;
    let elForm: HTMLDivElement = null;
    let elNav: HTMLLIElement = null;

    // See if we are rendering this in a form
    if (props.formFl) {
        // Create the form element
        elForm = document.createElement("div");

        // See if there is a label
        if (props.label) {
            // Add the label
            elForm.innerHTML = "<label>" + props.label + "</label>";
        }

        // Create the select
        let elSelect = document.createElement("select");
        elSelect.className = props.className || "";
        elSelect.classList.add("form-control");
        elSelect.disabled = props.isReadonly ? true : false;
        elSelect.multiple = props.multi ? true : false;
        elSelect.title = props.title || "";
        elForm.appendChild(elSelect);

        // Generate the items
        generateItems(elSelect, props.value);
    }
    // Else, see if we are rendering this in a nav bar
    else if (props.navFl) {
        // Create the nav
        elNav = document.createElement("li");
        elNav.className = props.className || "";
        elNav.classList.add("nav-item");
        elNav.classList.add("dropdown");

        // Add the link
        let link = document.createElement("a");
        link.className = "nav-link dropdown-toggle";
        link.href = "#";
        link.id = "navbarDDL_" + (props.label || "");
        link.setAttribute("role", "button");
        link.setAttribute("data-toggle", "dropdown");
        link.setAttribute("aria-haspopup", "true");
        link.setAttribute("aria-expanded", "false");
        link.title = props.title || "";
        props.isReadonly ? link.setAttribute("aria-disabled", "true") : null;
        link.innerHTML = props.label || "";
        elNav.appendChild(link);

        // Create the menu
        elMenu = document.createElement("div");
        elMenu.className = props.menuOnly && props.className ? props.className : "";
        elMenu.classList.add("dropdown-menu");
        elMenu.setAttribute("aria-labelledby", "navbarDDL_" + (props.label || ""));
        elNav.appendChild(elMenu);

        // Generate the items
        generateItems(elMenu, props.value);
    } else {
        // Create the button
        elDropdown = document.createElement("div");
        elDropdown.className = props.className || "";
        elDropdown.classList.add(props.isSplit ? "btn-group" : "dropdown");
        elDropdown.title = props.title || "";
        props.dropLeft ? elDropdown.classList.add("dropleft") : null;
        props.dropRight ? elDropdown.classList.add("dropright") : null;
        props.dropUp ? elDropdown.classList.add("dropup") : null;

        // Set the type
        let btnType = "";
        switch (props.type) {
            // Danger
            case DropdownTypes.Danger:
                btnType = "btn-danger";
                break;
            // Info
            case DropdownTypes.Info:
                btnType = "btn-info";
                break;
            // Secondary
            case DropdownTypes.Secondary:
                btnType = "btn-secondary";
                break;
            // Success
            case DropdownTypes.Success:
                btnType = "btn-success";
                break;
            // Warning
            case DropdownTypes.Warning:
                btnType = "btn-warning";
                break;
            // Default - Primary
            default:
                btnType = "btn-primary";
                break;
        }

        // See if this is a split button
        if (props.isSplit) {
            // Add a label
            let label = document.createElement("button");
            label.className = "button";
            label.classList.add(btnType);
            label.disabled = props.isReadonly ? true : false;
            label.innerHTML = props.label || "";
            elDropdown.appendChild(label);

            // Set the click event to disable the postback
            label.addEventListener("click", ev => { ev.preventDefault(); });
        }

        // Create the button
        let elButton = document.createElement("button");
        elButton.className = "btn dropdown-toggle";
        elButton.classList.add(btnType);
        elButton.disabled = props.isReadonly ? true : false;
        props.isSplit ? elButton.classList.add("dropdown-toggle-split") : null;
        elButton.setAttribute("data-toggle", "dropdown");
        elButton.setAttribute("aria-haspopup", "true");
        elButton.setAttribute("aria-expanded", "false");
        elButton.innerHTML = props.isSplit ? '<span class="sr-only">Toggle Dropdown</span>' : props.label || "";
        elDropdown.appendChild(elButton);

        // Create the menu
        elMenu = document.createElement("div");
        elMenu.className = props.menuOnly && props.className ? props.className : "";
        elMenu.classList.add("dropdown-menu");
        props.id ? elMenu.setAttribute("aria-labelledby", props.id) : null;
        elDropdown.appendChild(elMenu);

        // Generate the items
        generateItems(elMenu, props.value);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(props.menuOnly ? elMenu : elDropdown || elForm || elNav);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the dropdown
    let ddl = props.menuOnly ? el : jQuery(el.children[0]);
    return {
        dispose: () => { ddl.dropdown ? ddl.dropdown("dispose") : null; },
        el,
        getValue: () => {
            let values = [];

            // Get the select
            let select = el.querySelector("select") as HTMLSelectElement;
            if (select) {
                // Parse the selected items
                let selectedItems = select.querySelectorAll("option");
                for (let i = 0; i < selectedItems.length; i++) {
                    let selectedItem = selectedItems[i];

                    // See if this item is selected
                    if (selectedItem.selected) {
                        // Add the value
                        values.push(items[selectedItem.getAttribute("data-idx")]);
                    }
                }
            } else {
                // Parse the selected items
                let elItems = el.querySelectorAll(".dropdown-item.active");
                for (let i = 0; i < elItems.length; i++) {
                    // Get the item
                    let item = items[elItems[i].getAttribute("data-idx")];
                    if (item) {
                        // Append the value
                        values.push(item);
                    }
                }
            }

            // Return the value
            return isMulti ? values : values[0];
        },
        hide: () => { Common.hide(el); },
        isMulti,
        show: () => { Common.show(el); },
        setItems: (newItems: Array<IDropdownItem> = []) => {
            // Set the items
            items = newItems;

            // See if we are rendering this in a form
            if (props.formFl) {
                // Get the select and clear it
                let elSelect = el.querySelector("select.form-control") as HTMLSelectElement;
                elSelect.innerHTML = "";
                elSelect.value = "";

                // Generate the items
                generateItems(elSelect);
            } else {
                // Get the menu and clear it
                elMenu = el.querySelector(".dropdown-menu");
                elMenu.innerHTML = "";

                // Generate the items
                generateItems(elMenu);
            }
        },
        toggle: () => {
            // See if we are only rendering a menu
            if (props.menuOnly) {
                // See if the "show" class exists
                if (el.children[0].classList.contains("show")) {
                    // Hide the dropdown
                    el.children[0].classList.remove("show");
                } else {
                    // Show the dropdown
                    el.children[0].classList.add("show");
                }
            } else {
                // Toggle the menu
                ddl.dropdown ? ddl.dropdown("toggle") : null;
            }
        },
        update: () => { ddl.dropdown ? ddl.dropdown("update") : null; }
    };
}