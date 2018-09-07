import { IForm, IFormProps } from "./types/form";
import { IFormControl } from "./types/formControl";
import { FormControl } from "./formControl";

/**
 * Form
 * @property props - The form properties.
 */
export const Form = (props: IFormProps): IForm => {
    let controls: Array<IFormControl> = [];

    // Create the form element
    let elForm = document.createElement("form");

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

                    // Set the element
                    column.control.el = elCol;

                    // Set the value
                    column.control.value = column.control.value || props.value[column.control.name];

                    // Render the control
                    controls.push(FormControl(column.control));

                    // Add the column to the row
                    elRow.appendChild(elCol);

                    // Call the render event
                    column.control.onRenderControl ? column.control.onRenderControl(column.control) : null;
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

                // Set the value
                row.control.value = row.control.value || props.value[row.control.name];

                // See if a column size is defined, and there is a label
                if (row.control.label && colSize > 0) {
                    // Add the row class
                    elRow.classList.add("row");

                    // Add the columns
                    elRow.innerHTML = [
                        '<label class="col-' + colSize + ' col-form-label">' + row.control.label + '</label>',
                        '<div class="col-' + (12 - colSize) + '"></div>'
                    ].join('\n');

                    // Set the element
                    row.control.el = elRow.children[1] as any;

                    // Render the control
                    controls.push(FormControl(row.control));
                } else {
                    // Set the element
                    row.control.el = elRow;

                    // Render the control
                    controls.push(FormControl(row.control));
                }

                // Add the row to the form
                elForm.appendChild(elRow);

                // Call the render event
                row.control.onRenderControl ? row.control.onRenderControl(row.control) : null;
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

            // Parse the controls
            for (let i = 0; i < controls.length; i++) {
                let control = controls[i];
                if (control && control.props.name) {
                    // Set the value
                    values[control.props.name] = control.getValue();
                }
            }

            // Return the values
            return values;
        }
    };
}