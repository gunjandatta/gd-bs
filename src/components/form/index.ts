import { IForm, IFormProps, IFormRow } from "./formTypes";
import { IFormControl, IFormControlProps } from "./controlTypes";
import { Base } from "../base";
import { FormControl as Control } from "./control";
import { FormGroup } from "./group";
import { FormRow } from "./row";
import { HTML } from "./templates";
import { FormValidationTypes } from "./types";
export * from "./custom";
export * from "./types";

/**
 * Form
 * @property props - The form properties.
 */
class _Form extends Base<IFormProps> implements IForm {
    private _groups: Array<FormGroup> = null;
    private _rows: Array<FormRow> = null;

    // Constructor
    constructor(props: IFormProps) {
        super(HTML, props);

        // Configure the form
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the form
    private configure() {
        // Clear the groups and rows
        this._groups = [];
        this._rows = [];

        // Add the class name
        let classNames = (this.props.className || "").split(" ");
        for (let i = 0; i < classNames.length; i++) {
            let className = classNames[i];

            // Append the class name
            className ? this.el.classList.add(className) : null;
        }

        // Set the floating class
        this.props.isFloating ? this.el.classList.add("form-floating") : null;

        // Append the controls
        this.appendControls(this.props.controls)

        // Append the rows
        this.appendRows(this.props.rows);
    }

    // Configure the events
    private configureEvents() {
        // See if an onrendered event exists
        if (this.props.onRendered) {
            // Wait before executing the rendered event, otherwise the controls will be null
            let intervalId = setInterval(() => {
                let isLoaded = true;

                // Parse the controls
                for (let i = 0; i < this.controls.length; i++) {
                    let control = this.controls[i];

                    // Set the flag
                    isLoaded = isLoaded && control && control.isRendered;
                }

                // See if the form is loaded
                if (isLoaded) {
                    // Clear the interval
                    clearInterval(intervalId);

                    // Execute the event
                    this.props.onRendered(this.controls);
                }
            }, 10);
        }
    }

    /**
     * Public Interface
     */

    // Append controls to the form
    appendControls(controls: Array<IFormControlProps> = []) {
        // Parse the controls
        for (let i = 0; i < controls.length; i++) {
            // Create the group
            let group = new FormGroup(controls[i], this.props);
            this._groups.push(group);
            this.el.appendChild(group.el);
        }
    }

    // Append rows to the form
    appendRows(rows: Array<IFormRow> = []) {
        // Parse the rows
        for (let i = 0; i < rows.length; i++) {
            // Create the row
            let row = new FormRow(rows[i], this.props);
            this._rows.push(row);
            this.el.appendChild(row.el);
        }
    }

    // The forms controls
    get controls() {
        let controls: Array<IFormControl> = [];

        // Parse the groups
        for (let i = 0; i < this._groups.length; i++) {
            // Add the control
            controls.push(this._groups[i].control);
        }

        // Parse the rows
        for (let i = 0; i < this._rows.length; i++) {
            // Add the controls
            controls = controls.concat(this._rows[i].controls);
        }

        // Return the controls
        return controls;
    }

    // Gets a form control by its name
    getControl(name: string) {
        // Parse the controls
        let controls = this.controls;
        for (let i = 0; i < controls.length; i++) {
            let control = controls[i];

            // See if this is the control we are looking for
            if (control && control.props && control.props.name == name) {
                // Return the control
                return control;
            }
        }

        // Control not found
        return null;
    }

    // Gets the form values
    getValues() {
        let values = {};

        // Parse the controls
        let controls = this.controls;
        for (let i = 0; i < controls.length; i++) {
            let control = controls[i];
            if (control.props.name) {
                // Set the value
                values[control.props.name] = control.getValue();
            }
        }

        // Return the values
        return values;
    }

    // Validates the form
    isValid() {
        let isValid = true;

        // Parse the controls
        let controls = this.controls;
        for (let i = 0; i < controls.length; i++) {
            // See if this control is valid
            if (controls[i].isValid == false) {
                // Set the flag
                isValid = false;
            }
        }

        // Update the classes
        this.el.classList.remove("needs-validation");
        this.el.classList.add("was-validated");

        // Return the flag
        return isValid;
    }
}
export const Form = (props: IFormProps): IForm => { return new _Form(props); }

/**
 * Form Control
 */
export const FormControl = (props: IFormControlProps) => {
    // Create a base object
    let base = new Base("", props);

    // Create the control
    let control = new Control(props, { validationType: FormValidationTypes.Default });

    // Wait for the control to be loaded
    control.isLoaded().then(() => {
        // Set the element
        base.el = control.el;

        // Configure the parent
        base.configureParent();
    });

    // Return the control
    return control;
}