import { IForm, IFormProps } from "../../../@types/components/form";
import { IFormControl, IFormControlProps } from "../../../@types/components/formControl";
import { Base } from "../base";
import { FormControl as Control } from "./control";
import { FormGroup } from "./group";
import { FormRow } from "./row";
import * as HTML from "./index.html";

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

        // Configure the parent
        this.configureParent();
    }

    // Configure the form
    private configure() {
        // Clear the groups and rows
        this._groups = [];
        this._rows = [];

        // Parse the controls
        let controls = this.props.controls || [];
        for (let i = 0; i < controls.length; i++) {
            // Create the group
            let group = new FormGroup(controls[i]);
            this._groups.push(group);
            this.el.appendChild(group.el);
        }

        // Parse the rows
        let rows = this.props.rows || [];
        for (let i = 0; i < rows.length; i++) {
            // Create the row
            let row = new FormRow(rows[i], this.props);
            this._rows.push(row);
            this.el.appendChild(row.el);
        }
    }

    /**
     * Public Interface
     */

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
            if (control.props.name == name) {
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

        // Return the flag
        return isValid;
    }
}
export const Form = (props: IFormProps): IForm => { return new _Form(props); }

/**
 * Form Control
 */
export const FormControl = (props: IFormControlProps) => { return new Control(props); }

// Custom Control Types
FormControl["_customTypes"] = {};

// Gets the event by type
FormControl["getByType"] = (key: number): (props?: IFormControlProps) => void => { return FormControl["_customTypes"][key]; }

// Registers a custom control type
FormControl["registerType"] = (key: number, event: (props?: IFormControlProps) => void) => { FormControl["_customTypes"][key] = event; }

/**
 * Form Control Types
 */
export enum FormControlTypes {
    Checkbox = 1,
    Email = 2,
    Dropdown = 3,
    File = 4,
    MultiDropdown = 5,
    Password = 6,
    Radio = 7,
    Range = 8,
    Readonly = 9,
    Switch = 10,
    TextArea = 11,
    TextField = 12
}