import { ICheckboxGroup, ICheckboxGroupProps } from "./types/checkboxGroup";

/**
 * Checkbox Group Types
 */
export enum CheckboxGroupTypes {
    Checkbox = 1,
    RadioButton = 2
}

/**
 * Checkbox Group
 */
export const CheckboxGroup = (props: ICheckboxGroupProps): ICheckboxGroup => {
    // Create the checkbox group
    let cbGroup = document.createElement("div");

    // Set the class names
    props.className ? cbGroup.className = props.className : null;
    props.formFl ? cbGroup.classList.add("form-control") : null;

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Create the checkbox
        let elCheckbox = document.createElement("div");
        elCheckbox.classList.add("form-check");
        cbGroup.appendChild(elCheckbox);

        // Create the checkbox
        let checkbox = document.createElement("input");
        checkbox.classList.add("form-check-input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked ? true : false;
        checkbox.setAttribute("data-idx", i.toString());
        elCheckbox.appendChild(checkbox);

        // See if there is a label
        if (item.label) {
            // Append a label
            let label = document.createElement("label");
            label.classList.add("form-check-label");
            label.innerHTML = item.label;
            elCheckbox.appendChild(label);
        }

        // See if there is an event
        if (item.onChange) {
            // Set the event
            checkbox.addEventListener("click", ev => {
                let el = ev.currentTarget as HTMLInputElement;

                // Get the checkbox
                let cb = items[el.getAttribute("data-idx")];
                if (cb && cb.onChange) {
                    // Call the event
                    cb.onChange(el.checked);
                }
            });
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(cbGroup);

    // See if are rendering it to an element
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
    return { el };
}