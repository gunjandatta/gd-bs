import { IForm, IFormProps, IFormRow } from "../../../@types/components/form";
import { IFormControl, IFormControlProps } from "../../../@types/components/formControl";
import { Base } from "../base";
import { FormControl as Control } from "./control";
import { FormGroup } from "./group";
import { FormRow } from "./row";
import { HTML } from "./templates";
export * from "./custom";

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

        // Append the controls
        this.appendControls(this.props.controls)

        // Append the rows
        this.appendRows(this.props.rows);
    }

    // Configure the events
    private configureEvents() {
        // Wait before executing the rendered event, otherwise the controls will be null
        setTimeout(() => {
            // Execute the event
            this.props.onRendered ? this.props.onRendered(this.controls) : null;
        }, 10);
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

/**
 * Form Control Types
 */
export enum FormControlTypes {
    Checkbox = 1,
    ColorPicker = 2,
    Email = 3,
    Datalist = 4,
    Dropdown = 5,
    File = 6,
    ListBox = 7,
    MultiDropdown = 8,
    Password = 9,
    Radio = 10,
    Range = 11,
    Readonly = 12,
    Switch = 13,
    TextArea = 14,
    TextField = 15
}