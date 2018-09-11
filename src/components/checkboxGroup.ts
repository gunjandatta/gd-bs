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
            let idx = (ev.currentTarget as HTMLInputElement).getAttribute("data-idx");

            // See if we aren't allow multiple selections
            if (!isMulti) {
                // Get the check boxes
                let elCheckboxes = el.querySelectorAll("input[type='checkbox']");
                for (let i = 0; i < elCheckboxes.length; i++) {
                    let elCheckbox = elCheckboxes[i] as HTMLInputElement;

                    // Skip this item
                    if (elCheckbox.getAttribute("data-idx") == idx) { continue; }

                    // See if it's checked
                    if (elCheckbox.checked) {
                        // Uncheck it
                        elCheckbox.checked = false;
                        elCheckbox.value = "";
                    }
                }
            }

            // Get the item
            let item = items[idx];
            if (item) {
                // See if there is a change event
                if (item.onChange) {
                    // Call the event
                    item.onChange(item);
                }
            }
        });
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(cbGroup);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
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

    // Return the checkbox
    return {
        el: cbGroup,
        getValues: () => {
            let values: Array<ICheckboxGroupItem> = [];

            // Parse the checkboxes
            let cbs = cbGroup.querySelectorAll("input[type='checkbox']");
            for (let i = 0; i < cbs.length; i++) {
                let cb = cbs[i] as HTMLInputElement;
                let item = props.items[i];

                // See if this is checked and the item exists
                if (item && cb.checked) {
                    // Add the value
                    values.push();
                }
            }

            // Return the values
            return values;
        }
    };
}