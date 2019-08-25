import { ICheckboxGroup } from "../../@types/checkboxGroup";
import { IDropdown } from "../../@types/dropdown";
import { IInputGroup } from "../../@types/inputGroup";
import { IFormControl, IFormControlProps, IFormControlPropsCheckbox, IFormControlPropsDropdown, IFormControlPropsNumberField, IFormControlPropsTextField, IFormControlValidationResult } from "../../@types/formControl";
import * as Common from "../common";
import { CheckboxGroup, CheckboxGroupTypes } from "./checkboxGroup";
import { Dropdown } from "./dropdown";
import { InputGroup, InputGroupTypes } from "./inputGroup";

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

/**
 * Form Control
 */
export const FormControl = (props: IFormControlProps): IFormControl => {
    let cb: ICheckboxGroup = null;
    let ddl: IDropdown = null;
    let tb: IInputGroup = null;

    // Create the element
    let el = props.el || document.createElement("div");
    props.className ? el.classList.add(props.className) : null;
    props.controlClassName ? el.classList.add(props.controlClassName) : null;

    // Render the control based on the type
    switch (props.type) {
        // Checkbox
        case FormControlTypes.Checkbox:
            // Ensure items exist
            let items = (props as IFormControlPropsCheckbox).items || [];
            if (items.length == 0) {
                // Add the item
                items.push({
                    name: props.name,
                    isSelected: props.value ? true : false
                });
            }

            // Add the checkbox group
            cb = CheckboxGroup({
                className: el.className,
                el,
                hideLabel: true,
                isReadonly: props.isReadonly,
                items,
                label: props.label,
                multi: (props as IFormControlPropsCheckbox).multi,
                onChange: (props as IFormControlPropsCheckbox).onChange,
                title: props.title,
                type: CheckboxGroupTypes.Checkbox,
                value: props.value
            });
            break;
        // Dropdown
        case FormControlTypes.Dropdown:
            // Add the dropdown
            ddl = Dropdown({
                className: el.className,
                el,
                formFl: true,
                isReadonly: props.isReadonly,
                items: (props as IFormControlPropsDropdown).items,
                onChange: (props as IFormControlPropsDropdown).onChange,
                title: props.title,
                value: props.value
            });
            break;
        // Email
        case FormControlTypes.Email:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                onChange: (props as IFormControlPropsTextField).onChange,
                placeholder: (props as IFormControlPropsTextField).placeholder,
                title: props.title,
                type: InputGroupTypes.Email,
                value: props.value
            });
            break;
        // File
        case FormControlTypes.File:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                onChange: (props as IFormControlPropsTextField).onChange,
                placeholder: (props as IFormControlPropsTextField).placeholder,
                title: props.title,
                type: InputGroupTypes.File,
                value: props.value
            });
            break;
        // Multi-Dropdown
        case FormControlTypes.MultiDropdown:
            // Add the dropdown
            ddl = Dropdown({
                className: el.className,
                el,
                formFl: true,
                isReadonly: props.isReadonly,
                items: (props as IFormControlPropsDropdown).items,
                multi: true,
                onChange: (props as IFormControlPropsDropdown).onChange,
                title: props.title,
                value: props.value
            });
            break;
        // Password
        case FormControlTypes.Password:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                onChange: (props as IFormControlPropsTextField).onChange,
                placeholder: (props as IFormControlPropsTextField).placeholder,
                title: props.title,
                type: InputGroupTypes.Password,
                value: props.value
            });
            break;
        // Radio
        case FormControlTypes.Radio:
            // Add the checkbox group
            cb = CheckboxGroup({
                className: el.className,
                el,
                hideLabel: true,
                isReadonly: props.isReadonly,
                items: (props as IFormControlPropsCheckbox).items,
                label: props.label,
                multi: (props as IFormControlPropsCheckbox).multi,
                onChange: (props as IFormControlPropsCheckbox).onChange,
                title: props.title,
                type: CheckboxGroupTypes.Radio,
                value: props.value
            });
            break;
        // Range
        case FormControlTypes.Range:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                min: (props as IFormControlPropsNumberField).min || 0,
                max: (props as IFormControlPropsNumberField).max || 100,
                onChange: (props as IFormControlPropsNumberField).onChange,
                placeholder: (props as IFormControlPropsNumberField).placeholder,
                step: (props as IFormControlPropsNumberField).step,
                title: props.title,
                type: InputGroupTypes.Range,
                value: props.value
            });
            break;
        // Switch
        case FormControlTypes.Switch:
            // Add the checkbox group
            cb = CheckboxGroup({
                className: el.className,
                el,
                hideLabel: true,
                isReadonly: props.isReadonly,
                items: (props as IFormControlPropsCheckbox).items,
                label: props.label,
                multi: (props as IFormControlPropsCheckbox).multi,
                onChange: (props as IFormControlPropsCheckbox).onChange,
                title: props.title,
                type: CheckboxGroupTypes.Switch,
                value: props.value
            });
            break;
        // Text Area
        case FormControlTypes.TextArea:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                onChange: (props as IFormControlPropsTextField).onChange,
                placeholder: (props as IFormControlPropsTextField).placeholder,
                rows: (props as IFormControlPropsTextField).rows,
                title: props.title,
                type: InputGroupTypes.TextArea,
                value: props.value
            });
            break;
        // Text Field
        case FormControlTypes.TextField:
            // Add the input
            tb = InputGroup({
                className: el.className,
                el,
                isPlainText: props.isPlainText,
                isReadonly: props.isReadonly,
                onChange: (props as IFormControlPropsTextField).onChange,
                placeholder: (props as IFormControlPropsTextField).placeholder,
                title: props.title,
                type: InputGroupTypes.TextField,
                value: props.value
            });
            break;
    }

    // See if an error message exists
    if (props.errorMessage) {
        // Get the group
        let elGroup = el.querySelector(".input-group") || el.querySelector(".form-check:last-child");
        if (elGroup) {
            // Add the error message
            let elErrorMessage = document.createElement("div");
            elErrorMessage.className = "invalid-feedback";
            elErrorMessage.innerHTML = props.errorMessage;
            elGroup.appendChild(elErrorMessage);
        }
    }

    // Method to get the form control value
    let getValue = () => {
        // See if there is an override event
        if (props.onGetValue) {
            return props.onGetValue(props);
        }

        // See if this is a checkbox
        if (cb) {
            // See if the items were defined
            if ((props as IFormControlPropsCheckbox).items) {
                // Return the value(s)
                return cb.getValue();
            }

            // Return the value
            return cb.getValue() ? true : false;
        }

        // See if this is a dropdown
        if (ddl) {
            // Return the value
            return ddl.getValue();
        }

        // See if this is a textbox
        if (tb) {
            // Return the value
            return tb.getValue();
        }
    }

    // Return the control
    return {
        el,
        // Get the control
        get: () => { return cb || ddl || tb },
        // Get the value
        getValue,
        hide: () => { Common.hide(el); },
        isValid: () => {
            let validation: IFormControlValidationResult = { isValid: true };
            
            // Get the element and value
            let elControl = (cb || ddl || tb) ? (cb || ddl || tb).el : el;
            let value = getValue();
            
            // See if this control is required
            if (props.required) {
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
            if (props.onValidate) {
                // Call the event
                let returnValue = props.onValidate(props, value);
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
                if (validation.invalidMessage || props.errorMessage) {
                    // Get the element
                    let elMessage = elControl.querySelector(".invalid-feedback");
                    if (elMessage == null) {
                        // Create the element
                        elMessage = document.createElement("div");
                        elMessage.className = "invalid-feedback";
                        elFormControl.parentElement.appendChild(elMessage);
                    }
                    
                    // Set the message
                    elMessage.innerHTML = validation.invalidMessage || props.errorMessage;
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
        },
        props,
        show: () => { Common.show(el); }
    }
}