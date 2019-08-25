import * as Common from "../common";
import { IForm, IFormProps } from "../../@types/form";
import { IFormControl, IFormControlProps } from "../../@types/formControl";
import { FormControl } from "./formControl";
import { Progress } from "./progress";

/**
 * Form
 * @property props - The form properties.
 */
export const Form = (props: IFormProps): IForm => {
    let controls: Array<IFormControl> = [];
    let counter: number = 0;

    // Create the form element
    let form = document.createElement("form");
    form.className = props.className || "";

    // Helper method for the events
    let executeEvent = (event: any, props: any): PromiseLike<any> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the event and see if it's a promise
            let returnVal = event ? event(props) : null;
            if (returnVal && returnVal.then) {
                // Wait for the promise to be completed
                returnVal.then(resolve);
            } else {
                // Resolve the promise
                resolve(props);
            }
        })
    }

    // The on form rendered event
    let onFormRendered = () => {
        // Decrement the counter
        if (--counter == 0) {
            // Call the event
            props.onRendered ? props.onRendered(controls) : null;
        }
    }

    // The on rendered event
    let onRendered = (control: IFormControl): Promise<IFormControl> => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Ensure a control exists
            if (control) {
                // Execute the control event
                executeEvent(control.props.onControlRendered, control).then(control => {
                    // Execute the component event
                    executeEvent(props.onControlRendered, control).then(control => {
                        // Resolve the promise
                        resolve(control);
                    });
                });
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // The on rendering event
    let onRendering = (el: HTMLElement, controlProps: IFormControlProps): Promise<IFormControlProps> => {
        // Increment the the counter
        counter++;

        // Return a promise
        return new Promise((resolve, reject) => {
            // Render a loading message
            let loadingMessage = Progress({
                el,
                isAnimated: true,
                isStriped: true,
                size: 100,
                label: controlProps.loadingMessage ? controlProps.loadingMessage : "Loading the Data..."
            });

            // Ensure properties exist
            if (controlProps) {
                // Execute the control event
                executeEvent(controlProps.onControlRendering, controlProps).then(controlProps => {
                    // Execute the component event
                    executeEvent(props.onControlRendering, controlProps).then(controlProps => {
                        // Remove the loading message
                        loadingMessage.el.parentElement ? loadingMessage.el.parentElement.removeChild(loadingMessage.el) : null;

                        // Resolve the promise
                        resolve(controlProps);
                    });
                });
            } else {
                // Remove the loading message
                loadingMessage.el.parentElement ? loadingMessage.el.parentElement.removeChild(loadingMessage.el) : null;

                // Resolve the promise
                resolve();
            }
        });
    }

    // Method to render the form rows
    let renderFormRows = () => {
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

                // Get the row class name
                let classNames = props.rowClassName ? props.rowClassName.split(' ') : [];
                classNames = row.className ? classNames.concat(row.className.split(' ')) : classNames;
                for (let i = 0; i < classNames.length; i++) { elRow.classList.add(classNames[i]); }

                // Parse the columns
                let columns = row.columns || [];
                for (let j = 0; j < columns.length; j++) {
                    let column = columns[j];
                    let colSize = column.size > 0 && column.size < 13 ? column.size : 0;

                    // Create the column
                    let elCol = document.createElement("div");
                    elRow.appendChild(elCol);

                    // Set the row class name based on the properties
                    elCol.classList.add("form-group");
                    if (row.isCentered) {
                        // Add the class name
                        elCol.classList.add("col-auto");
                    } else {
                        // Add the class name based on the size
                        elCol.classList.add(colSize > 0 ? "col-" + colSize : "col");
                    }

                    // Set the value
                    column.control.value = column.control.value || (props.value ? props.value[column.control.name] : null);

                    // Call the rendering event
                    onRendering(elCol, column.control).then(controlProps => {
                        // See if there is a label
                        if (controlProps.label) {
                            // Set the label element
                            elCol.innerHTML = "<label>" + controlProps.label + "</label>";
                        }

                        // Create the control
                        let control = FormControl(controlProps || column.control);

                        // Append the control to the column
                        let elControl = control.get();
                        elCol.appendChild(elControl ? elControl.el : control.el);

                        // Call the rendered event
                        onRendered(control).then(control => {
                            // Save the control
                            controls.push(control);

                            // Call the form rendered event
                            onFormRendered();
                        });
                    });
                }

                // Add the row to the form
                form.appendChild(elRow);
            }
            // Else, see if a control is defined
            else if (row.control) {
                let colSize = row.colSize > 0 && row.colSize < 13 ? row.colSize : 0;

                // Create the row
                let elRow = document.createElement("div");
                elRow.classList.add("form-group");

                // Set the value
                row.control.value = row.control.value || (props.value ? props.value[row.control.name] : null);

                // See if there is a label
                let elLabel: HTMLLabelElement = null;
                if (row.control.label) {
                    let elNewRow = null;

                    // Create the label element
                    elLabel = document.createElement("label");

                    // See if a column size is defined
                    if (colSize > 0) {
                        // Add the row class
                        elRow.classList.add("row");

                        // Set the class name
                        elLabel.className = "col-" + colSize + " col-form-label";

                        // Add the label element
                        elRow.appendChild(elLabel);

                        // Create the new row element
                        elNewRow = document.createElement("div");
                        elNewRow.className = "col-" + (12 - colSize);
                        elRow.appendChild(elNewRow);
                    } else {
                        // Add the label element
                        elRow.appendChild(elLabel);
                    }

                    // Set the element
                    row.control.el = elNewRow || elRow;
                } else {
                    // Set the element
                    row.control.el = elRow;
                }

                // Add the row to the form
                form.appendChild(elRow);

                // Call the rendering event
                onRendering(elRow, row.control).then(controlProps => {
                    // See if a label exists
                    if (elLabel && controlProps.label) {
                        // Set the label
                        elLabel.innerHTML = controlProps.label;
                    }

                    // Create the control
                    let control = FormControl(controlProps || row.control);

                    // Call the rendered event
                    onRendered(control).then(control => {
                        // Save the control
                        controls.push(control);

                        // Call the form rendered event
                        onFormRendered();
                    });
                });
            }
        }
    }

    // Render the form rows
    renderFormRows();

    // Create the element
    let el = document.createElement("div");
    el.appendChild(form);

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

    // Return the form
    return {
        controls,
        el: form,
        getControl: (name: string) => {
            // Parse the controls
            for (let i = 0; i < controls.length; i++) {
                let control = controls[i];

                // See if this is the control we are looking for
                if (control.props.name == name) {
                    // Return the control
                    return control;
                }
            }

            // Control not found
            return null;
        },
        getValues: () => {
            let values = {};

            // Parse the controls
            for (let i = 0; i < controls.length; i++) {
                let control = controls[i];
                if (control.props.name) {
                    // Set the value
                    values[control.props.name] = control.getValue();
                }
            }

            // Return the values
            return values;
        },
        hide: () => { Common.hide(form); },
        isValid: () => {
            let isValid = true;

            // Parse the controls
            for (let i = 0; i < controls.length; i++) {
                // See if this control is valid
                if (controls[i].isValid() == false) {
                    // Set the flag
                    isValid = false;
                }
            }

            // Return the flag
            return isValid;
        },
        show: () => { Common.show(form); }
    };
}