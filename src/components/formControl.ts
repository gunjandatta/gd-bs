import { CheckboxGroup } from "./checkboxGroup";
import { ICheckboxGroup } from "./types/checkboxGroup";
import { Dropdown } from "./dropdown";
import { IDropdown, IDropdownItem } from "./types/dropdown";
import { InputGroup, InputGroupTypes } from "./inputGroup";
import { IInputGroup } from "./types/inputGroup";
import { IFormControl, IFormControlProps, IFormControlPropsCheckbox, IFormControlPropsDropdown, IFormControlPropsNumberField, IFormControlPropsTextField } from "./types/formControl";

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
    Range = 7,
    Readonly = 8,
    TextArea = 9,
    TextField = 10
}

/**
 * Form Control
 */
export const FormControl = (props: IFormControlProps): IFormControl => {
    let el = props.el || document.createElement("div");

    // See if html is set
    if (props.html) {
        // Set the html
        el.innerHTML += props.html;
    } else {
        let cb: ICheckboxGroup = null;
        let ddl: IDropdown = null;
        let tb: IInputGroup = null;

        // Render the control based on the type
        switch (props.type) {
            // Checkbox
            case FormControlTypes.Checkbox:
                // Add the checkbox group
                cb = CheckboxGroup({
                    className: props.className,
                    el,
                    hideLabel: (props as IFormControlPropsCheckbox).hideLabel,
                    items: (props as IFormControlPropsCheckbox).items,
                    label: props.label
                });
                break;
            // Dropdown
            case FormControlTypes.Dropdown:
                // Add the dropdown
                ddl = Dropdown({
                    className: props.className,
                    el,
                    formFl: true,
                    items: (props as IFormControlPropsDropdown).items,
                    onChange: (props as IFormControlPropsDropdown).onChange,
                    value: props.value
                });
                break;
            // Email
            case FormControlTypes.Email:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    onChange: (props as IFormControlPropsTextField).onChange,
                    placeholder: (props as IFormControlPropsTextField).placeholder,
                    type: InputGroupTypes.Email,
                    value: props.value
                });
                break;
            // File
            case FormControlTypes.File:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    onChange: (props as IFormControlPropsTextField).onChange,
                    placeholder: (props as IFormControlPropsTextField).placeholder,
                    type: InputGroupTypes.File,
                    value: props.value
                });
                break;
            // Multi-Dropdown
            case FormControlTypes.MultiDropdown:
                // Add the dropdown
                ddl = Dropdown({
                    className: props.className,
                    el,
                    formFl: true,
                    items: (props as IFormControlPropsDropdown).items,
                    multi: true,
                    onChange: (props as IFormControlPropsDropdown).onChange,
                    value: props.value
                });
                break;
            // Password
            case FormControlTypes.Password:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    onChange: (props as IFormControlPropsTextField).onChange,
                    placeholder: (props as IFormControlPropsTextField).placeholder,
                    type: InputGroupTypes.Password,
                    value: props.value
                });
                break;
            // Range
            case FormControlTypes.Range:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    min: (props as IFormControlPropsNumberField).min || 0,
                    max: (props as IFormControlPropsNumberField).max || 100,
                    onChange: (props as IFormControlPropsNumberField).onChange,
                    placeholder: (props as IFormControlPropsNumberField).placeholder,
                    step: (props as IFormControlPropsNumberField).step,
                    type: InputGroupTypes.Range,
                    value: props.value
                });
                break;
            // Text Area
            case FormControlTypes.TextArea:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    onChange: (props as IFormControlPropsTextField).onChange,
                    placeholder: (props as IFormControlPropsTextField).placeholder,
                    type: InputGroupTypes.TextArea,
                    value: props.value
                });
                break;
            // Text Field
            case FormControlTypes.TextField:
                // Add the input
                tb = InputGroup({
                    className: props.className,
                    el,
                    isReadonly: props.isReadonly,
                    onChange: (props as IFormControlPropsTextField).onChange,
                    placeholder: (props as IFormControlPropsTextField).placeholder,
                    type: InputGroupTypes.TextField,
                    value: props.value
                });
                break;
        }

        // Return the control
        return {
            el,
            // Set the getValue method
            getValue: () => {
                // See if there is an override event
                if (props.onGetValue) {
                    return props.onGetValue(props);
                }

                // See if this is a checkbox
                if (cb) {
                    // Return the value
                    let elCheckbox = cb.el.querySelector("input");
                    return elCheckbox ? elCheckbox.checked : null;
                }

                // See if this is a dropdown
                if (ddl) {
                    // See if this is a multi-select
                    if (ddl.isMulti) {
                        let ddlValues = [];

                        // Parse the values
                        let values = ddl.getValue() as Array<IDropdownItem>;
                        for (let i = 0; i < values.length; i++) {
                            let value = values[i];

                            // Add the value
                            ddlValues.push(value);
                        }

                        // Return the values
                        return ddlValues;
                    }

                    // Get the value
                    let value = ddl.getValue() as IDropdownItem;

                    // Return the value
                    return value ? value : null;
                }

                // See if this is a textbox
                if (tb) {
                    // Return the value
                    let elTextbox = tb.el.querySelector("input");
                    return elTextbox ? elTextbox.value : null;
                }
            },
            props
        }
    }
}