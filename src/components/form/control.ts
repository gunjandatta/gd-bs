import { ICheckboxGroup } from "../../../@types/components/checkboxGroup";
import { IDropdown } from "../../../@types/components/dropdown";
import { IInputGroup } from "../../../@types/components/inputGroup";
import { IFormControl, IFormControlProps, IFormControlPropsCheckbox, IFormControlPropsDropdown, IFormControlPropsRange, IFormControlPropsTextField, IFormControlValidationResult } from "../../../@types/components/formControl";
import { CheckboxGroup, CheckboxGroupTypes } from "../checkboxGroup";
import { Dropdown } from "../dropdown";
import { InputGroup, InputGroupTypes } from "../inputGroup";
import { CustomControls } from "./custom";
import { FormControlTypes } from ".";

/**
 * Form Control
 */
export class FormControl implements IFormControl {
    private _cb: ICheckboxGroup = null;
    private _el: HTMLElement = null;
    private _ddl: IDropdown = null;
    private _props: IFormControlProps;
    private _tb: IInputGroup = null;

    // Constructor
    constructor(props: IFormControlProps) {
        // Save the parameters
        this._props = props;

        // Create the control
        this.create();

        // Configure the control
        this.configure();
    }

    // Configure the control
    private configure() {
        // Ensure a control was created
        if (this.control) {
            // Set the element
            this._el = this.control.el as HTMLElement;

            // See if an error message exists
            if (this._props.errorMessage) {
                // Get the group
                let elGroup = this._el.querySelector(".input-group") || this._el.querySelector(".form-check:last-child");
                if (elGroup) {
                    // Add the error message
                    let elErrorMessage = document.createElement("div");
                    elErrorMessage.className = "invalid-feedback";
                    elErrorMessage.innerHTML = this._props.errorMessage;
                    elGroup.appendChild(elErrorMessage);
                }
            }
        }
    }

    // Creates the control
    private create() {
        // Parse the custom classes to add
        let className = [(this._props.className || ""), (this._props.controlClassName || "")].join(" ").trim();

        // Render the control based on the type
        switch (this._props.type) {
            // Checkbox
            case FormControlTypes.Checkbox:
                let cbProps = this._props as IFormControlPropsCheckbox;

                // Ensure items exist
                let items = cbProps.items || [];
                if (items.length == 0) {
                    // Add the item
                    items.push({
                        label: cbProps.isInline ? this._props.label : null,
                        name: this._props.name,
                        isSelected: this._props.value ? true : false
                    });
                }

                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    hideLabel: true,
                    isInline: cbProps.isInline,
                    isReadonly: this._props.isReadonly,
                    items,
                    label: items.length == 0 ? null : this._props.label,
                    multi: cbProps.multi,
                    onChange: cbProps.onChange,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Checkbox,
                    value: this._props.value
                });
                break;
            // Dropdown
            case FormControlTypes.Dropdown:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: true,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsDropdown).items,
                    onChange: (this._props as IFormControlPropsDropdown).onChange,
                    title: this._props.title,
                    value: this._props.value
                });
                break;
            // Email
            case FormControlTypes.Email:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    title: this._props.title,
                    type: InputGroupTypes.Email,
                    value: this._props.value
                });
                break;
            // File
            case FormControlTypes.File:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    title: this._props.title,
                    type: InputGroupTypes.File,
                    value: this._props.value
                });
                break;
            // Multi-Dropdown
            case FormControlTypes.MultiDropdown:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: true,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsDropdown).items,
                    multi: true,
                    onChange: (this._props as IFormControlPropsDropdown).onChange,
                    title: this._props.title,
                    value: this._props.value
                });
                break;
            // Password
            case FormControlTypes.Password:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    title: this._props.title,
                    type: InputGroupTypes.Password,
                    value: this._props.value
                });
                break;
            // Radio
            case FormControlTypes.Radio:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    hideLabel: true,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsCheckbox).items,
                    label: this._props.label,
                    multi: (this._props as IFormControlPropsCheckbox).multi,
                    onChange: (this._props as IFormControlPropsCheckbox).onChange,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Radio,
                    value: this._props.value
                });
                break;
            // Range
            case FormControlTypes.Range:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    min: (this._props as IFormControlPropsRange).min || 0,
                    max: (this._props as IFormControlPropsRange).max || 100,
                    onChange: (this._props as IFormControlPropsRange).onChange,
                    placeholder: (this._props as IFormControlPropsRange).placeholder,
                    step: (this._props as IFormControlPropsRange).step,
                    title: this._props.title,
                    type: InputGroupTypes.Range,
                    value: this._props.value
                });
                break;
            // Switch
            case FormControlTypes.Switch:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    hideLabel: true,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsCheckbox).items,
                    label: this._props.label,
                    multi: (this._props as IFormControlPropsCheckbox).multi,
                    onChange: (this._props as IFormControlPropsCheckbox).onChange,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Switch,
                    value: this._props.value
                });
                break;
            // Text Area
            case FormControlTypes.TextArea:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    rows: (this._props as IFormControlPropsTextField).rows,
                    title: this._props.title,
                    type: InputGroupTypes.TextArea,
                    value: this._props.value
                });
                break;
            // Text Field
            case FormControlTypes.TextField:
                // Add the input
                this._tb = InputGroup({
                    className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    title: this._props.title,
                    type: InputGroupTypes.TextField,
                    value: this._props.value
                });
                break;

            // Custom Type
            default:
                // Create the default element
                this._el = document.createElement("div");

                // See if there is a custom type
                let custom = CustomControls.getByType(this._props.type);
                if (custom && typeof (custom) === "function") {
                    // Execute the event
                    custom(this._props);
                }
                break;
        }
    }

    /**
     * Public Interface
     */

    get el() { return this._el; }

    // The checkbox control
    get checkbox() { return this._cb; }

    // The dropdown control
    get dropdown() { return this._ddl; }

    // The textbox control
    get control() { return this._cb || this._ddl || this._tb }

    // The textbox control
    get textbox() { return this._tb; }

    // Method to get the form control value
    getValue() {
        // See if there is an override event
        if (this._props.onGetValue) {
            return this._props.onGetValue(this._props);
        }

        // See if this is a checkbox
        if (this._cb) {
            // See if the items were defined
            if ((this._props as IFormControlPropsCheckbox).items) {
                // Return the value(s)
                return this._cb.getValue();
            }

            // Return the value
            return this._cb.getValue() ? true : false;
        }

        // See if this is a dropdown
        if (this._ddl) {
            // Return the value
            return this._ddl.getValue();
        }

        // See if this is a textbox
        if (this._tb) {
            // Return the value
            return this._tb.getValue();
        }
    }

    // Validates the control
    get isValid(): boolean {
        let validation: IFormControlValidationResult = { isValid: true };

        // Get the element and value
        let elControl = (this._cb || this._ddl || this._tb) ? (this._cb || this._ddl || this._tb).el : this._el;
        let value = this.getValue();

        // See if this control is required
        if (this._props.required) {
            // See if a value doesn't exists
            if (value == null) {
                // Set the flag
                validation.isValid = false;
            }
            // Else, see if the value is an array
            else if (typeof (value.length) === "number") {
                // Set the flag
                validation.isValid = value.length > 0;
            }
        }

        // See if an event exists
        if (this._props.onValidate) {
            // Call the event
            let returnValue = this._props.onValidate(this._props, value);
            if (typeof (returnValue) === "boolean") {
                // Set the flag
                validation.isValid = returnValue;
            }
            // Else, ensure it exists
            else if (returnValue) {
                // Set the validation
                validation = returnValue;
            }
        }

        // Get the form control
        let elFormControl = elControl.querySelector(".form-control") as HTMLElement;
        if (elFormControl) {
            // Clear the invalid/valid classes
            elFormControl.classList.remove("is-invalid");
            elFormControl.classList.remove("is-valid");

            // Set the class
            elFormControl.classList.add(validation.isValid ? "is-valid" : "is-invalid");
        } else {
            // Parse the checkboxes
            let elCheckboxes = elControl.querySelectorAll(".form-check-input");
            for (let i = 0; i < elCheckboxes.length; i++) {
                let elCheckbox = elCheckboxes[i];

                // Clear the invalid/valid classes
                elCheckbox.classList.remove("is-invalid");
                elCheckbox.classList.remove("is-valid");

                // Set the class
                elCheckbox.classList.add(validation.isValid ? "is-valid" : "is-invalid");
            }

            // Set the form control
            elFormControl = elCheckboxes.length > 0 ? elCheckboxes[elCheckboxes.length - 1] as any : elFormControl;
        }

        // Ensure the form control exists
        if (elFormControl) {
            // See if there is invalid feedback
            if (validation.invalidMessage || this._props.errorMessage) {
                // Get the element
                let elMessage = elControl.querySelector(".invalid-feedback");
                if (elMessage == null) {
                    // Create the element
                    elMessage = document.createElement("div");
                    elMessage.className = "invalid-feedback";
                    elFormControl.parentElement.appendChild(elMessage);
                }

                // Set the message
                elMessage.innerHTML = validation.invalidMessage || this._props.errorMessage;
            }

            // See if there is valid feedback
            if (validation.validMessage) {
                // Get the element
                let elMessage = elControl.querySelector(".valid-feedback");
                if (elMessage == null) {
                    // Create the element
                    elMessage = document.createElement("div");
                    elMessage.className = "valid-feedback";
                    elFormControl.parentElement.appendChild(elMessage);
                }

                // Set the message
                elMessage.innerHTML = validation.validMessage;
            }
        }

        // Return the flag
        return validation.isValid;
    }

    // The form control properties
    get props(): IFormControlProps { return this._props; }
}