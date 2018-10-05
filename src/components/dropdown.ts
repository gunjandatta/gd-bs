import * as jQuery from "jquery";
import { IDropdown, IDropdownItem, IDropdownProps } from "./types/dropdown";

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
        elSelect.className = "form-control";
        elSelect.multiple = props.multi ? true : false;
        elForm.appendChild(elSelect);

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Create the option
            let option = document.createElement("option");
            option.setAttribute("data-idx", i.toString());
            elSelect.appendChild(option);

            // Set the text
            option.innerHTML = item.text || "";

            // See if the item is selected
            if (item.isSelected) {
                // Select the option
                option.selected = true;
            }
            // Else, see if a value exists
            else if (props.value) {
                // Ensure it's an array
                let values = props.value.length && typeof (props.value) !== "string" ? props.value : [props.value];

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
        }
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
        link.innerHTML = props.label || "";
        elNav.appendChild(link);

        // Create the menu
        elMenu = document.createElement("div");
        elMenu.className = "dropdown-menu";
        elMenu.setAttribute("aria-labelledby", "navbarDDL_" + (props.label || ""));
        elNav.appendChild(elMenu);

        // Parse the items
        let items = props.items || [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // See if this is a divider
            if (item.isDivider) {
                // Add the divider
                let elDivider = document.createElement("div");
                elDivider.className = "dropdown-divider";
                elMenu.appendChild(elDivider);
            } else {
                // Add the item
                let elItem = document.createElement("a");
                elItem.className = "dropdown-item";
                item.isHeader ? elItem.classList.add("dropdown-header") : null;
                elItem.href = item.href || "#";
                elItem.setAttribute("data-idx", i.toString());
                elItem.innerHTML = item.text || "";
                elMenu.appendChild(elItem);

                // Add the item
                elMenu.appendChild(elItem);
            }
        }
    } else {
        // Create the button
        elDropdown = document.createElement("div");
        elDropdown.className = props.className || "";
        elDropdown.classList.add(props.isSplit ? "btn-group" : "dropdown");
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
            label.innerHTML = props.label || "";
            elDropdown.appendChild(label);

            // Set the click event to disable the postback
            label.addEventListener("click", ev => { ev.preventDefault(); });
        }

        // Create the button
        let elButton = document.createElement("button");
        elButton.className = "btn dropdown-toggle";
        elButton.classList.add(btnType);
        props.isSplit ? elButton.classList.add("dropdown-toggle-split") : null;
        elButton.setAttribute("data-toggle", "dropdown");
        elButton.setAttribute("aria-haspopup", "true");
        elButton.setAttribute("aria-expanded", "false");
        elButton.innerHTML = props.isSplit ? '<span class="sr-only">Toggle Dropdown</span>' : props.label || "";
        elDropdown.appendChild(elButton);

        // Create the menu
        elMenu = document.createElement("div");
        elMenu.className = "dropdown-menu";
        props.id ? elMenu.setAttribute("aria-labelledby", props.id) : null;
        elDropdown.appendChild(elMenu);

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // See if this is a divider
            if (item.isDivider) {
                // Add the divider
                let elDivider = document.createElement("div");
                elDivider.className = "dropdown-divider";
                elMenu.appendChild(elDivider);
                continue;
            }

            // Create the item
            let elItem = document.createElement("a");
            elItem.className = "dropdown-item";
            item.isHeader ? elItem.classList.add("dropdown-header") : null;
            elItem.href = item.href || "#";
            elItem.setAttribute("data-idx", i.toString());
            elItem.innerHTML = item.text || "";
            elMenu.appendChild(elItem);

            // See if this item is selected
            if (item.isSelected) {
                // Select the item
                elItem.classList.add("active");
            }
            // Else, see if a value exists
            else if (props.value) {
                // Ensure it's an array
                let values = props.value.length && typeof (props.value) !== "string" ? props.value : [props.value];

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
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(props.menuOnly ? elMenu : elDropdown || elForm || elNav);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList && props.el.parentElement.tagName != "BODY") {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
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

    // See if this is a form
    if (props.formFl) {
        // Parse the items
        let elItems = el.querySelectorAll("option");
        for (let i = 0; i < elItems.length; i++) {
            // Set the click event for the custom events
            elItems[i].addEventListener("click", ev => {
                let elItem = ev.currentTarget as HTMLElement;
                let itemIdx = elItem.getAttribute("data-idx");
                let item: IDropdownItem = props.items[itemIdx];
                let items: Array<IDropdownItem> = [];

                // Parse the selected items
                let elSelectedItems = el.querySelectorAll("option");
                for (let i = 0; i < elSelectedItems.length; i++) {
                    let elSelectedItem = elSelectedItems[i] as HTMLOptionElement;
                    let selectedIdx = elSelectedItem.getAttribute("data-idx");

                    // See if the item is selected
                    if (elSelectedItem.selected) {
                        // Add the item
                        items.push(props.items[selectedIdx]);
                    }
                }

                // Sort the items
                items = items.sort((a, b) => {
                    if (a.text < b.text) { return -1; }
                    if (a.text > b.text) { return 1; }
                    return 0;
                });

                // See if a click event exists
                if (item.onClick) {
                    // Call the click event
                    item.onClick(isMulti ? items : items[0], ev);
                }

                // See if a global change event exists
                if (props.onChange) {
                    // Call the change event
                    props.onChange(isMulti ? items : items[0], ev);
                }
            });
        }
    } else {
        // Parse the items
        let elItems = el.querySelectorAll(".dropdown-item");
        for (let i = 0; i < elItems.length; i++) {
            // Set the click event for the custom events
            elItems[i].addEventListener("click", ev => {
                let elItem = ev.currentTarget as HTMLElement;
                let itemIdx = elItem.getAttribute("data-idx");
                let item: IDropdownItem = props.items[itemIdx];
                let items: Array<IDropdownItem> = [];

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
                    let selectedItem = props.items[selectedIdx];

                    // Skip this item
                    if (itemIdx == selectedIdx) { continue; }

                    // See if this is a multi-select
                    if (isMulti) {
                        // Add the item
                        items.push(selectedItem);
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
                    items.push(item);
                }

                // Sort the items
                items = items.sort((a, b) => {
                    if (a.text < b.text) { return -1; }
                    if (a.text > b.text) { return 1; }
                    return 0;
                });

                // See if a click event exists
                if (item.onClick) {
                    // Call the click event
                    item.onClick(isMulti ? items : items[0], ev);
                }

                // See if a global change event exists
                if (props.onChange) {
                    // Call the change event
                    props.onChange(isMulti ? items : items[0], ev);
                }
            });
        }
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
                        values.push(props.items[selectedItem.getAttribute("data-idx")]);
                    }
                }
            } else {
                // Parse the selected items
                let items = el.querySelectorAll(".dropdown-item.active");
                for (let i = 0; i < items.length; i++) {
                    // Get the item
                    let item = props.items[items[i].getAttribute("data-idx")];
                    if (item) {
                        // Append the value
                        values.push(item);
                    }
                }
            }

            // Return the value
            return isMulti ? values : values[0];
        },
        isMulti,
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