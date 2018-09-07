import { Dropdown, InputGroup, InputGroupTypes } from ".";
import {
    IForm, IFormProps,
    IFormControl, IFormControlDropdown, IFormControlTextField
} from "./types/form";

/**
 * Form Control Type
 */
export enum FormControlTypes {
    CheckBox = 1,
    Email = 2,
    Dropdown = 3,
    File = 4,
    MultiDropdown = 5,
    Password = 6,
    Range = 7,
    Readonly = 8,
    TextArea = 9,
    TextField = 10
}

/**
 * Form
 * @property props - The form properties.
 */
export const Form = (props: IFormProps): IForm => {
    // Create the form element
    let elForm = document.createElement("form");

    // Method to render the control
    let renderControl = (el: HTMLElement, control: IFormControl) => {
        let value = props.value || {};

        // See if html is set
        if (control.html) {
            // Set the html
            el.innerHTML += control.html;
        } else {
            // Render the control based on the type
            switch (control.type) {
                // Checkbox
                case FormControlTypes.CheckBox:
                    break;
                // Dropdown
                case FormControlTypes.Dropdown:
                    Dropdown({
                        className: control.className,
                        el,
                        formFl: true,
                        items: (control as IFormControlDropdown).items,
                        onChange: (control as IFormControlDropdown).onChange,
                        value: value[control.name]
                    });
                    break;
                // Email
                case FormControlTypes.Email:
                    // Add the input
                    InputGroup({
                        className: control.className,
                        el,
                        isReadonly: control.isReadonly,
                        onChange: (control as IFormControlTextField).onChange,
                        placeholder: (control as IFormControlTextField).placeholder,
                        type: InputGroupTypes.Email,
                        value: value[control.name]
                    });
                    break;
                // File
                case FormControlTypes.File:
                    // Add the input
                    InputGroup({
                        className: control.className,
                        el,
                        isReadonly: control.isReadonly,
                        onChange: (control as IFormControlTextField).onChange,
                        placeholder: (control as IFormControlTextField).placeholder,
                        type: InputGroupTypes.File,
                        value: value[control.name]
                    });
                    break;
                // Multi-Dropdown
                case FormControlTypes.MultiDropdown:
                    Dropdown({
                        className: control.className,
                        el,
                        formFl: true,
                        items: (control as IFormControlDropdown).items,
                        multi: true,
                        onChange: (control as IFormControlDropdown).onChange,
                        value: value[control.name]
                    });
                    break;
                // Password
                case FormControlTypes.Password:
                    // Add the input
                    InputGroup({
                        className: control.className,
                        el,
                        isReadonly: control.isReadonly,
                        onChange: (control as IFormControlTextField).onChange,
                        placeholder: (control as IFormControlTextField).placeholder,
                        type: InputGroupTypes.Password,
                        value: value[control.name]
                    });
                    break;
                // Range
                case FormControlTypes.Range:
                    break;
                // Text Area
                case FormControlTypes.TextArea:
                    // Add the input
                    InputGroup({
                        className: control.className,
                        el,
                        isReadonly: control.isReadonly,
                        onChange: (control as IFormControlTextField).onChange,
                        placeholder: (control as IFormControlTextField).placeholder,
                        type: InputGroupTypes.TextArea,
                        value: value[control.name]
                    });
                    break;
                // Text Field
                case FormControlTypes.TextField:
                    // Add the input
                    InputGroup({
                        className: control.className,
                        el,
                        isReadonly: control.isReadonly,
                        onChange: (control as IFormControlTextField).onChange,
                        placeholder: (control as IFormControlTextField).placeholder,
                        type: InputGroupTypes.TextField,
                        value: value[control.name]
                    });
                    break;
            }
        }
    }

    // Method to render the form
    let renderForm = () => {
        // Parse the rows
        let rows = props.rows || [];
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];

            // See if columns exist
            if (row.columns) {
                let elRow = document.createElement("div");

                // Set the row class names
                elRow.classList.add("form-row");
                row.isCentered ? elRow.classList.add("align-items-center") : null;

                // Parse the columns
                let columns = row.columns || [];
                for (let j = 0; j < columns.length; j++) {
                    let column = columns[j];
                    let elCol = document.createElement("div");
                    let colSize = column.size > 0 && column.size < 13 ? column.size : 0;

                    // Set the row class name based on the properties
                    elCol.classList.add("form-group");
                    if (row.isCentered) {
                        // Add the class name
                        elCol.classList.add("col-auto");
                    } else {
                        // Add the class name based on the size
                        elCol.classList.add(colSize > 0 ? "col-" + colSize : "col");
                    }

                    // See if there is a label
                    if (column.control.label) {
                        // Set the label
                        elCol.innerHTML = "<label>" + column.control.label + "</label>";
                    }

                    // Render the control
                    renderControl(elCol, column.control);

                    // Add the column to the row
                    elRow.appendChild(elCol);
                }

                // Add the row to the form
                elForm.appendChild(elRow);
            }
            // Else, see if a control is defined
            else if (row.control) {
                let colSize = row.colSize > 0 && row.colSize < 13 ? row.colSize : 0;

                // Create the row
                let elRow = document.createElement("div");
                elRow.classList.add("form-group");

                // See if a column size is defined, and there is a label
                if (row.control.label && colSize > 0) {
                    // Add the row class
                    elRow.classList.add("row");

                    // Add the columns
                    elRow.innerHTML = [
                        '<label class="col-' + colSize + ' col-form-label">' + row.control.label + '</label>',
                        '<div class="col-' + (12 - colSize) + '"></div>'
                    ].join('\n');

                    // Render the control
                    renderControl(elRow.children[1] as any, row.control);
                } else {
                    // Render the control
                    renderControl(elRow, row.control);
                }

                // Add the row to the form
                elForm.appendChild(elRow);
            }
        }
    }

    // Render the form
    renderForm();

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elForm);

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

    // Return the form
    return {
        el: elForm,
        getValues: () => {
            let values = {};

            // Return the values
            return values;
        }
    };
}