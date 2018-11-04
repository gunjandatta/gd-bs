import { ICheckboxGroup, ICheckboxGroupItem, ICheckboxGroupProps } from "./types/checkboxGroup";

/**
 * Checkbox Group Types
 */
export enum CheckboxGroupTypes {
    Checkbox = 1,
    Radio = 2
}

/**
 * Checkbox Group
 */
export const CheckboxGroup = (props: ICheckboxGroupProps): ICheckboxGroup => {
    let colSize = props.colSize > 0 && props.colSize < 13 ? props.colSize : (props.label ? 10 : 12);
    let isMulti = props.multi ? true : false;

    // Create the checkbox group
    let cbGroup = document.createElement("div");

    // Set the class names
    cbGroup.className = props.className || "";
    cbGroup.classList.add("row");

    // See if the label exists
    if (props.label) {
        // Add the label
        let elLabel = document.createElement("legend");
        elLabel.classList.add("col-form-label");
        elLabel.classList.add("col-" + (12 - colSize));
        elLabel.innerHTML = props.label;
        props.hideLabel ? null : cbGroup.appendChild(elLabel);
    }

    // Create the checkbox group element
    let cbGroupElement = document.createElement("div");
    cbGroupElement.classList.add("col-" + colSize);
    cbGroup.appendChild(cbGroupElement);

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Create the checkbox
        let elCheckbox = document.createElement("div");
        elCheckbox.classList.add("form-check");
        cbGroupElement.appendChild(elCheckbox);

        // Create the checkbox
        let cb = document.createElement("input");
        cb.classList.add("form-check-input");
        cb.type = props.type == CheckboxGroupTypes.Radio ? "radio" : "checkbox";
        cb.checked = item.checked ? true : false;
        cb.setAttribute("data-idx", i.toString());
        elCheckbox.appendChild(cb);

        // Append a label
        let label = document.createElement("label");
        label.classList.add("form-check-label");
        label.innerHTML = item.label || "&nbsp;";
        elCheckbox.appendChild(label);

        // Set the event
        cb.addEventListener("click", ev => {
            let el = ev.currentTarget as HTMLElement;
            let idx = el.getAttribute("data-idx");
            let selectedItems: Array<ICheckboxGroupItem> = [];

            // Get the selected items
            let elSelectedItems = el.parentElement.parentElement.querySelectorAll("input:checked");

            // See if we aren't allow multiple selections
            if (!isMulti) {
                // Parse the selected items
                for (let i = 0; i < elSelectedItems.length; i++) {
                    let elSelectedItem = elSelectedItems[i] as HTMLInputElement;

                    // Skip this item
                    if (elSelectedItem.getAttribute("data-idx") == idx) { continue; }

                    // Uncheck it
                    elSelectedItem.checked = false;
                    elSelectedItem.value = "";
                }
            }

            // Parse the selected items
            for (let i = 0; i < elSelectedItems.length; i++) {
                let elSelectedItem = elSelectedItems[i] as HTMLInputElement;

                // Get the item
                let item = props.items[elSelectedItem.getAttribute("data-idx")];
                if (item) {
                    // Ensure this item is checked
                    if (elSelectedItem.checked) {
                        // Add the selected item
                        selectedItems.push(item);
                    }

                    // See if this is the target item
                    if (idx == i.toString()) {
                        // See if there is a change event
                        if (item.onChange) {
                            // Call the event
                            item.onChange(item);
                        }
                    }
                }
            }

            // See if there is a change event
            if (props.onChange) {
                // Call the event
                props.onChange(selectedItems);
            }
        });
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(cbGroup);

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

    // Return the checkbox
    return {
        el: cbGroup,
        getValue: () => {
            let values: Array<ICheckboxGroupItem> = [];

            // Parse the checkboxes
            let cbs = cbGroup.querySelectorAll("input:checked");
            for (let i = 0; i < cbs.length; i++) {
                // Add the value
                values.push(props.items[i]);
            }

            // Return the values
            return props.multi ? values : values[0];
        }
    };
}