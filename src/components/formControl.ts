import { CheckboxGroup } from "./checkboxGroup";
import { Dropdown } from "./dropdown";
import { InputGroup, InputGroupTypes } from "./inputGroup";
import { IFormControl, IFormControlCheckbox, IFormControlDropdown, IFormControlTextField } from "./types/formControl";

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
export const FormControl = (control: IFormControl) => {
    let el = control.el || document.createElement("div");

    // See if html is set
    if (control.html) {
        // Set the html
        el.innerHTML += control.html;
    } else {
        // Render the control based on the type
        switch (control.type) {
            // Checkbox
            case FormControlTypes.Checkbox:
                // Add the checkbox group
                CheckboxGroup({
                    className: control.className,
                    el,
                    formFl: true,
                    items: (control as IFormControlCheckbox).items,
                    value: control.value
                });
                break;
            // Dropdown
            case FormControlTypes.Dropdown:
                // Add the dropdown
                Dropdown({
                    className: control.className,
                    el,
                    formFl: true,
                    items: (control as IFormControlDropdown).items,
                    onChange: (control as IFormControlDropdown).onChange,
                    value: control.value
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
                    value: control.value
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
                    value: control.value
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
                    value: control.value
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
                    value: control.value
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
                    value: control.value
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
                    value: control.value
                });
                break;
        }
    }
}