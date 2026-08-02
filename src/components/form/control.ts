import {
    IFormControl, IFormControlProps, IFormControlPropsCheckbox,
    IFormControlPropsDropdown, IFormControlPropsDropdownButton, IFormControlPropsDropdownCheckbox,
    IFormControlPropsListBox, IFormControlPropsMultiCheckbox,
    IFormControlPropsMultiDropdown, IFormControlPropsMultiDropdownButton, IFormControlPropsMultiDropdownCheckbox,
    IFormControlPropsMultiListBox,
    IFormControlPropsRange, IFormControlPropsTextField, IFormControlValidationResult
} from "./controlTypes";
import { ICheckboxGroup, ICheckboxGroupValue } from "../checkboxGroup/types";
import { IDropdown } from "../dropdown/types";
import { IInputGroup } from "../inputGroup/types";
import { IListBox } from "../listBox/types";
import { CheckboxGroup, CheckboxGroupTypes } from "../checkboxGroup";
import { CustomControls } from "./custom";
import { Dropdown } from "../dropdown";
import { InputGroup, InputGroupTypes } from "../inputGroup";
import { ListBox } from "../listBox";
import { FormControlTypes, FormValidationTypes } from ".";
import { IFormProps } from "./formTypes";

/**
 * Form Control
 */
export class FormControl implements IFormControl {
    private _cb: ICheckboxGroup = null;
    private _custom: any = null;
    private _el: HTMLElement = null;
    private _elDesc: HTMLElement = null;
    private _elLabel: HTMLLabelElement = null;
    private _formProps: IFormProps = null;
    private _ddl: IDropdown = null;
    private _isRendered: boolean = false;
    private _lb: IListBox = null;
    private _props: IFormControlProps;
    private _tb: IInputGroup = null;

    // Constructor
    constructor(props: IFormControlProps, formProps: IFormProps, elLabel?: HTMLLabelElement) {
        // Save the parameters
        this._formProps = formProps;
        this._props = props;
        this._elLabel = elLabel;

        // See if there is a rendering event
        if (typeof (this._props.onControlRendering) === "function") {
            // Call the event and see if a promise is returned
            let returnVal = this._props.onControlRendering(Object.assign({}, this._props));
            if (returnVal && typeof (returnVal["then"]) === "function") {
                // Wait for it to complete
                returnVal["then"](newProps => {
                    // Update the properties
                    this._props = newProps || this._props;

                    // Create the control
                    this.create();
                });
            }
            else {
                // Create the control
                this.create();
            }
        } else {
            // Create the control
            this.create();
        }
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

            // See if an element was defined to render to
            if (this._props.el) {
                // Append the control to the element
                this._props.el.appendChild(this._el);
            }


            // See if the label is set
            if (this._elLabel && this._formProps.isFloating && this._el.id) {
                // Set the attributes
                this._elLabel.setAttribute("for", this._el.id);
            }
        }
    }

    // Creates the control
    private create() {
        // Parse the custom classes to add
        let className = this._props.controlClassName || "";

        // Set the value
        let formValue = this._formProps.value ? this._formProps.value[this._props.name] : null;
        let value = typeof (this._props.value) === "undefined" ? formValue : this._props.value;

        // Render the control based on the type
        switch (this._props.type) {
            // Checkbox
            case FormControlTypes.Checkbox:
                let cbProps = this._props as IFormControlPropsCheckbox;

                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: cbProps.colSize,
                    hideLabel: true,
                    isInline: cbProps.isInline,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    items: cbProps.items,
                    onChange: cbProps.onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Checkbox,
                    value
                });
                break;
            // Color Picker
            case FormControlTypes.ColorPicker:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.ColorPicker,
                    value
                });
                break;
            // Datalist
            case FormControlTypes.Datalist:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: true,
                    id: this._props.id,
                    isDatalist: true,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsDropdown).items,
                    onChange: (this._props as IFormControlPropsDropdown).onChange,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Dropdown
            case FormControlTypes.Dropdown:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: true,
                    id: this._props.id,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsDropdown).items,
                    onChange: (this._props as IFormControlPropsDropdown).onChange,
                    onMenuRendering: (this._props as IFormControlPropsDropdown).onMenuRendering,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Dropdown
            case FormControlTypes.DropdownButton:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: false,
                    id: this._props.id,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsDropdownButton).items,
                    label: (this.props as IFormControlPropsDropdownButton).placeholder,
                    onChange: (this._props as IFormControlPropsDropdownButton).onChange,
                    onMenuRendering: (this._props as IFormControlPropsDropdownButton).onMenuRendering,
                    placement: (this._props as IFormControlPropsDropdownButton).placement,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Dropdown
            case FormControlTypes.DropdownCheckbox:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: false,
                    id: this._props.id,
                    isCheckbox: true,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsDropdownCheckbox).items,
                    label: (this.props as IFormControlPropsDropdownCheckbox).placeholder,
                    onChange: (this._props as IFormControlPropsDropdownCheckbox).onChange,
                    onMenuRendering: (this._props as IFormControlPropsDropdownCheckbox).onMenuRendering,
                    placement: (this._props as IFormControlPropsDropdownCheckbox).placement,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Email
            case FormControlTypes.Email:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.Email,
                    value
                });
                break;
            // File
            case FormControlTypes.File:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.File,
                    value
                });
                break;
            // List Box
            case FormControlTypes.ListBox:
                // Add the list box
                this._lb = ListBox({
                    id: this._props.name,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsListBox).items,
                    onChange: (this._props as IFormControlPropsListBox).onChange,
                    placeholder: (this._props as IFormControlPropsListBox).placeholder,
                    required: this._props.required,
                    value
                });
                break;
            // Multi-Checkbox
            case FormControlTypes.MultiCheckbox:
                let cbMultiProps = this._props as IFormControlPropsMultiCheckbox;

                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: cbMultiProps.colSize,
                    hideLabel: true,
                    isDisabled: this._props.isDisabled,
                    isInline: cbMultiProps.isInline,
                    isReadonly: this._props.isReadonly,
                    items: cbMultiProps.items,
                    multi: true,
                    onChange: cbMultiProps.onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Checkbox,
                    value
                });
                break;
            // Multi-Dropdown
            case FormControlTypes.MultiDropdown:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: true,
                    id: this._props.id,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsMultiDropdown).items,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiDropdown).onChange,
                    onMenuRendering: (this._props as IFormControlPropsMultiDropdown).onMenuRendering,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Multi-Dropdown Button
            case FormControlTypes.MultiDropdownButton:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: false,
                    id: this._props.id,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsMultiDropdownButton).items,
                    label: (this._props as IFormControlPropsMultiDropdownButton).placeholder,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiDropdownButton).onChange,
                    onMenuRendering: (this._props as IFormControlPropsMultiDropdownButton).onMenuRendering,
                    placement: (this._props as IFormControlPropsMultiDropdownButton).placement,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Multi-Dropdown Checkbox
            case FormControlTypes.MultiDropdownCheckbox:
                // Add the dropdown
                this._ddl = Dropdown({
                    className,
                    formFl: false,
                    id: this._props.id,
                    isCheckbox: true,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsMultiDropdownCheckbox).items,
                    label: (this._props as IFormControlPropsMultiDropdownCheckbox).placeholder,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiDropdownCheckbox).onChange,
                    onMenuRendering: (this._props as IFormControlPropsMultiDropdownCheckbox).onMenuRendering,
                    placement: (this._props as IFormControlPropsMultiDropdownCheckbox).placement,
                    required: this._props.required,
                    title: this._props.title,
                    value
                });
                break;
            // Multi-List Box
            case FormControlTypes.MultiListBox:
                // Add the list box
                this._lb = ListBox({
                    id: this._props.name,
                    isReadonly: this._props.isReadonly || this._props.isDisabled,
                    items: (this._props as IFormControlPropsMultiListBox).items,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiListBox).onChange,
                    placeholder: (this._props as IFormControlPropsMultiListBox).placeholder,
                    required: this._props.required,
                    value
                });
                break;
            // Multi-Radio
            case FormControlTypes.MultiRadio:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: (this._props as IFormControlPropsMultiCheckbox).colSize,
                    hideLabel: true,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsMultiCheckbox).items,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiCheckbox).onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Radio,
                    value
                });
                break;
            // Multi-Switch
            case FormControlTypes.MultiSwitch:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: (this._props as IFormControlPropsMultiCheckbox).colSize,
                    hideLabel: true,
                    isDisabled: this._props.isDisabled,
                    isInline: (this._props as IFormControlPropsCheckbox).isInline,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsMultiCheckbox).items,
                    multi: true,
                    onChange: (this._props as IFormControlPropsMultiCheckbox).onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Switch,
                    value
                });
                break;
            // Password
            case FormControlTypes.Password:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.Password,
                    value
                });
                break;
            // Radio
            case FormControlTypes.Radio:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: (this._props as IFormControlPropsCheckbox).colSize,
                    hideLabel: true,
                    isDisabled: this._props.isDisabled,
                    isInline: (this._props as IFormControlPropsCheckbox).isInline,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsCheckbox).items,
                    onChange: (this._props as IFormControlPropsCheckbox).onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Radio,
                    value
                });
                break;
            // Range
            case FormControlTypes.Range:
                // Add the input
                this._tb = InputGroup({
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    min: (this._props as IFormControlPropsRange).min || 0,
                    max: (this._props as IFormControlPropsRange).max || 100,
                    onChange: (this._props as IFormControlPropsRange).onChange,
                    placeholder: (this._props as IFormControlPropsRange).placeholder,
                    required: this._props.required,
                    step: (this._props as IFormControlPropsRange).step,
                    title: this._props.title,
                    type: InputGroupTypes.Range,
                    value
                });
                break;
            // Read Only
            case FormControlTypes.Readonly:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: true,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.TextField,
                    value
                });
                break;
            // Switch
            case FormControlTypes.Switch:
                // Add the checkbox group
                this._cb = CheckboxGroup({
                    className,
                    colSize: (this._props as IFormControlPropsCheckbox).colSize,
                    hideLabel: true,
                    isDisabled: this._props.isDisabled,
                    isInline: (this._props as IFormControlPropsCheckbox).isInline,
                    isReadonly: this._props.isReadonly,
                    items: (this._props as IFormControlPropsCheckbox).items,
                    onChange: (this._props as IFormControlPropsCheckbox).onChange,
                    required: this._props.required,
                    title: this._props.title,
                    type: CheckboxGroupTypes.Switch,
                    value
                });
                break;
            // Text Area
            case FormControlTypes.TextArea:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    rows: (this._props as IFormControlPropsTextField).rows,
                    title: this._props.title,
                    type: InputGroupTypes.TextArea,
                    value
                });
                break;
            // Text Field
            case FormControlTypes.TextField:
                // Add the input
                this._tb = InputGroup({
                    appendedDropdown: (this.props as IFormControlPropsTextField).appendedDropdown,
                    appendedLabel: (this.props as IFormControlPropsTextField).appendedLabel,
                    className,
                    id: this._props.id,
                    isDisabled: this._props.isDisabled,
                    isReadonly: this._props.isReadonly,
                    onChange: (this._props as IFormControlPropsTextField).onChange,
                    placeholder: (this._props as IFormControlPropsTextField).placeholder,
                    prependedDropdown: (this.props as IFormControlPropsTextField).prependedDropdown,
                    prependedLabel: (this.props as IFormControlPropsTextField).prependedLabel,
                    required: this._props.required,
                    title: this._props.title,
                    type: InputGroupTypes.TextField,
                    value
                });
                break;

            // Custom Type
            default:
                // Create the default element
                this._el = document.createElement("div");
                this._el.className = className;

                // See if there is a custom type
                let custom = CustomControls.getByType(this._props.type);
                if (custom && typeof (custom) === "function") {
                    // Set the default value
                    this._props.value = this._props.value || value;

                    // Execute the event
                    this._custom = custom(this._props, this._formProps);
                }
                break;
        }

        // See if a checkbox was rendered and an id was set
        if (this.control && this._props.id) {
            // Set the id
            this.control.el.id = this._props.id;
        }

        // Configure the control
        this.configure();

        // Wait before executing the rendered event, otherwise the controls will be null
        setTimeout(() => {
            // Execute the events
            this._props.onControlRendered ? this._props.onControlRendered(this) : null;
            this._formProps.onControlRendered ? this._formProps.onControlRendered(this) : null;

            // Set the flag
            this._isRendered = true;
        }, 10);
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
    get control() { return this._cb || this._ddl || this._lb || this._tb || this._custom }

    // The control label
    get label() { return this._elLabel; }

    // The listbox control
    get listbox() { return this._lb; }

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
            // See if this is a multi-checkbox
            if (this._props.type == FormControlTypes.MultiCheckbox || this._props.type == FormControlTypes.MultiRadio || this._props.type == FormControlTypes.MultiSwitch) {
                // Return the selected items
                return this._cb.getValue().selectedItems;
            }

            // Return a boolean
            return this._cb.getValue().selectedItems ? true : false;
        }

        // See if this is a dropdown
        if (this._ddl) {
            // Return the value
            return this._ddl.getValue();
        }

        // See if this is a list box
        if (this._lb) {
            // Return the value
            return this._lb.getValue();
        }

        // See if this is a textbox
        if (this._tb) {
            // See if this is a file
            if (this._props.type == FormControlTypes.File) {
                // Return the file information
                return this._tb.getFileInfo();
            }

            // Return the value
            return this._tb.getValue();
        }
    }

    // Hides the control
    hide() {
        // Ensure an element exists
        if (this._el) {
            // See if this is a row
            if (this._el.parentElement && this._el.parentElement.parentElement && this._el.parentElement.parentElement.classList.contains("row")) {
                // See if there are other controls in this row
                if (this._el.parentElement.parentElement.querySelectorAll(".col").length > 1) {
                    // Hide the column element
                    this._el.parentElement.classList.add("d-none");
                } else {
                    // Hide the row element
                    this._el.parentElement.parentElement.classList.add("d-none");
                }
            }
            // Else, ensure the parent element exists
            else if (this._el.parentElement) {
                // Hide the group element
                this._el.parentElement.classList.add("d-none");
            }
        }
    }

    // Is loaded
    isLoaded(): PromiseLike<void> {
        // Return a promise
        return new Promise(resolve => {
            // Wait for the control to be created
            let id = setInterval(() => {
                // See if the control has been rendered
                if (this.isRendered) {
                    // Stop the loop
                    clearInterval(id);

                    // Resolve the promise
                    resolve();
                }
            }, 10);
        });
    }

    // Flag indicating the control is loaded
    get isRendered(): boolean { return this._isRendered; }

    // Validates the control
    get isValid(): boolean {
        let validation: IFormControlValidationResult = { isValid: true };

        // Get the element and value
        let elControl = (this._cb || this._ddl || this._lb || this._tb) ? (this._cb || this._ddl || this._lb || this._tb).el : this._el;
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
            // Else, see if this is a single checkbox
            else if (this._cb && typeof (value) === "boolean") {
                // Set the flag
                validation.isValid = value;
            }
            // Else, see if this is a dropdown and ensure it has a value
            else if (this._ddl && !this._ddl.isMulti && value) {
                // Set the flag to ensure a text/value exists
                validation.isValid = value.text || value.value ? true : false;
            }
        }

        // See if an event exists
        if (this._props.onValidate) {
            // Call the event
            let returnValue = this._props.onValidate(this._props, { value });
            if (typeof (returnValue) === "boolean") {
                // Set the flag
                validation.isValid = returnValue;
            }
            // Else, ensure it exists
            else if (returnValue) {
                // Set the validation
                validation = { ...validation, ...returnValue };
            }
        }

        // Update the validation
        this.updateValidation(elControl, validation);

        // Return the flag
        return validation.isValid;
    }

    // Returns true if the control is visible
    get isVisible(): boolean {
        // See if this control is visible
        return !this._el.parentElement?.classList.contains("d-none") ? true : false;
    }

    // The form control properties
    get props(): IFormControlProps { return this._props; }

    // Sets the description of the control
    setDescription(value: string) {
        // Get the element
        let elDesc = this._el?.parentElement?.querySelector(".form-text");
        if (elDesc) {
            // Update the description
            elDesc.innerHTML = value || "";
        }
    }

    // Sets the form control label
    setLabel(value: string) {
        // Update the label
        this._elLabel ? this._elLabel.innerHTML = value || "" : null;
    }

    // Sets the custom control
    setControl(control) {
        // Set the custom control
        this._custom = control;
    }

    // Sets the form control value
    setValue(value) {
        // Set the value
        this.control ? this.control.setValue(value) : null;
    }

    // Shows the control
    show() {
        // Ensure an element exists
        if (this._el) {
            // See if this is a row
            if (this._el.parentElement && this._el.parentElement.parentElement && this._el.parentElement.parentElement.classList.contains("row")) {
                // See if there are other controls in this row
                if (this._el.parentElement.parentElement.querySelectorAll(".col").length > 1) {
                    // Show the column element
                    this._el.parentElement.classList.remove("d-none");
                } else {
                    // Show the row element
                    this._el.parentElement.parentElement.classList.remove("d-none");
                }
            }
            // Else, ensure the parent element exists
            else if (this._el.parentElement) {
                // Show the group element
                this._el.parentElement.classList.remove("d-none");
            }
        }
    }

    // Updates the control validation
    updateValidation(elControl: Element, validation: IFormControlValidationResult) {
        // See if this is a checkbox/switch
        let isCheckbox = elControl.querySelectorAll(".form-check").length > 0;

        // Get the form controls
        let elFormControls = isCheckbox ? [elControl] : elControl.querySelectorAll(".form-control");
        elFormControls = elFormControls.length == 0 ? elControl.querySelectorAll(".form-select") : elFormControls;

        // Parse the form controls
        for (let i = 0; i < elFormControls.length; i++) {
            // Ensure the control exists
            let elFormControl = elFormControls[i] as HTMLElement;
            if (!isCheckbox) {
                // Clear the invalid/valid classes
                elFormControl.classList.remove("is-invalid");
                elFormControl.classList.remove("is-valid");

                // Set the class
                elFormControl.classList.add(validation.isValid ? "is-valid" : "is-invalid");
            } else {
                let validateControls = (controls: Array<HTMLElement>) => {
                    // Parse the controls
                    for (let i = 0; i < controls.length; i++) {
                        let control = controls[i];

                        // Clear the invalid/valid classes
                        control.classList.remove("is-invalid");
                        control.classList.remove("is-valid");

                        // Set the class
                        control.classList.add(validation.isValid ? "is-valid" : "is-invalid");
                    }
                }

                // Get the checkboxes
                let elCheckboxes = elControl.querySelectorAll(".form-check-input");
                if (elCheckboxes.length > 0) {
                    // Validate the controls
                    validateControls(elCheckboxes as any);

                    // Set the form control
                    elFormControl = elCheckboxes.length > 0 ? elCheckboxes[elCheckboxes.length - 1] as any : elFormControl;
                }

                // Get the custom controls
                let elCustomControls = elControl.querySelectorAll(".custom-control-input");
                if (elCustomControls.length > 0) {
                    // Validate the controls
                    validateControls(elCustomControls as any);

                    // Set the form control
                    elFormControl = elCustomControls.length > 0 ? elCustomControls[elCustomControls.length - 1] as any : elFormControl;
                }
            }

            // Ensure the form control exists
            if (elFormControl) {
                let useTooltip = this._formProps.validationType == FormValidationTypes.Tooltip;

                // Clear the old valid message if it exists
                let validClassName = useTooltip ? "valid-tooltip" : "valid-feedback";
                let elMessage = elFormControl.parentNode.querySelector("." + validClassName) as HTMLElement;
                if (elMessage) {
                    // Clear the message
                    elMessage.innerHTML = "";
                    elMessage.style.display = "";
                }

                // Clear the old valid message if it exists
                let invalidClassName = useTooltip ? "invalid-tooltip" : "invalid-feedback";
                elMessage = elFormControl.parentNode.querySelector("." + invalidClassName) as HTMLElement;
                if (elMessage) {
                    // Clear the message
                    elMessage.innerHTML = "";
                    elMessage.style.display = "";
                }

                // See if there is invalid feedback
                if (validation.invalidMessage || this._props.errorMessage) {
                    // Get the element
                    let invalidClassName = useTooltip ? "invalid-tooltip" : "invalid-feedback";
                    elMessage = elFormControl.parentNode.querySelector("." + invalidClassName) as HTMLElement;
                    if (elMessage == null) {
                        // Create the element
                        elMessage = document.createElement("div");
                        elMessage.className = invalidClassName;
                        elFormControl.parentNode.appendChild(elMessage);
                    }

                    // Set the message
                    elMessage.innerHTML = validation.invalidMessage || this._props.errorMessage;

                    // Update the display
                    elMessage.style.display = validation.isValid ? "" : "block";
                }

                // See if there is valid feedback
                if (validation.validMessage) {
                    // Get the element
                    let validClassName = useTooltip ? "valid-tooltip" : "valid-feedback";
                    elMessage = elFormControl.parentNode.querySelector("." + validClassName) as HTMLElement;
                    if (elMessage == null) {
                        // Create the element
                        elMessage = document.createElement("div");
                        elMessage.className = validClassName;
                        elFormControl.parentNode.appendChild(elMessage);
                    }

                    // Set the message
                    elMessage.innerHTML = validation.validMessage;

                    // Update the display
                    elMessage.style.display = validation.isValid ? "block" : "";
                }
            }
        }
    }
}