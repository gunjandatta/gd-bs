"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkboxGroup_1 = require("../checkboxGroup");
var custom_1 = require("./custom");
var dropdown_1 = require("../dropdown");
var inputGroup_1 = require("../inputGroup");
var listBox_1 = require("../listBox");
var _1 = require(".");
/**
 * Form Control
 */
var FormControl = /** @class */ (function () {
    // Constructor
    function FormControl(props, elLabel) {
        this._cb = null;
        this._el = null;
        this._elLabel = null;
        this._ddl = null;
        this._lb = null;
        this._tb = null;
        // Save the parameters
        this._props = props;
        this._elLabel = elLabel;
        // Create the control
        this.create();
        // Configure the control
        this.configure();
    }
    // Configure the control
    FormControl.prototype.configure = function () {
        // Ensure a control was created
        if (this.control) {
            // Set the element
            this._el = this.control.el;
            // See if an error message exists
            if (this._props.errorMessage) {
                // Get the group
                var elGroup = this._el.querySelector(".input-group") || this._el.querySelector(".form-check:last-child");
                if (elGroup) {
                    // Add the error message
                    var elErrorMessage = document.createElement("div");
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
        }
    };
    // Creates the control
    FormControl.prototype.create = function () {
        // Parse the custom classes to add
        var className = [(this._props.className || ""), (this._props.controlClassName || "")].join(" ").trim();
        // Render the control based on the type
        switch (this._props.type) {
            // Checkbox
            case _1.FormControlTypes.Checkbox:
                var cbProps = this._props;
                // Add the checkbox group
                this._cb = checkboxGroup_1.CheckboxGroup({
                    className: className,
                    hideLabel: true,
                    isInline: cbProps.isInline,
                    isReadonly: this._props.isReadonly,
                    items: cbProps.items,
                    multi: cbProps.multi,
                    onChange: cbProps.onChange,
                    title: this._props.title,
                    type: checkboxGroup_1.CheckboxGroupTypes.Checkbox,
                    value: this._props.value
                });
                break;
            // Dropdown
            case _1.FormControlTypes.Dropdown:
                // Add the dropdown
                this._ddl = dropdown_1.Dropdown({
                    className: className,
                    formFl: true,
                    isReadonly: this._props.isReadonly,
                    items: this._props.items,
                    onChange: this._props.onChange,
                    title: this._props.title,
                    value: this._props.value
                });
                break;
            // Email
            case _1.FormControlTypes.Email:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.Email,
                    value: this._props.value
                });
                break;
            // File
            case _1.FormControlTypes.File:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.File,
                    value: this._props.value
                });
                break;
            // List Box
            case _1.FormControlTypes.ListBox:
                // Add the list box
                this._lb = listBox_1.ListBox({
                    items: this._props.items,
                    multi: this._props.multi,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    value: this._props.value
                });
                break;
            // Multi-Dropdown
            case _1.FormControlTypes.MultiDropdown:
                // Add the dropdown
                this._ddl = dropdown_1.Dropdown({
                    className: className,
                    formFl: true,
                    isReadonly: this._props.isReadonly,
                    items: this._props.items,
                    multi: true,
                    onChange: this._props.onChange,
                    title: this._props.title,
                    value: this._props.value
                });
                break;
            // Password
            case _1.FormControlTypes.Password:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.Password,
                    value: this._props.value
                });
                break;
            // Radio
            case _1.FormControlTypes.Radio:
                // Add the checkbox group
                this._cb = checkboxGroup_1.CheckboxGroup({
                    className: className,
                    hideLabel: true,
                    isReadonly: this._props.isReadonly,
                    items: this._props.items,
                    multi: this._props.multi,
                    onChange: this._props.onChange,
                    title: this._props.title,
                    type: checkboxGroup_1.CheckboxGroupTypes.Radio,
                    value: this._props.value
                });
                break;
            // Range
            case _1.FormControlTypes.Range:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    min: this._props.min || 0,
                    max: this._props.max || 100,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    step: this._props.step,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.Range,
                    value: this._props.value
                });
                break;
            // Read Only
            case _1.FormControlTypes.Readonly:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: true,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.TextField,
                    value: this._props.value
                });
                break;
            // Switch
            case _1.FormControlTypes.Switch:
                // Add the checkbox group
                this._cb = checkboxGroup_1.CheckboxGroup({
                    className: className,
                    hideLabel: true,
                    isReadonly: this._props.isReadonly,
                    items: this._props.items,
                    multi: this._props.multi,
                    onChange: this._props.onChange,
                    title: this._props.title,
                    type: checkboxGroup_1.CheckboxGroupTypes.Switch,
                    value: this._props.value
                });
                break;
            // Text Area
            case _1.FormControlTypes.TextArea:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    rows: this._props.rows,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.TextArea,
                    value: this._props.value
                });
                break;
            // Text Field
            case _1.FormControlTypes.TextField:
                // Add the input
                this._tb = inputGroup_1.InputGroup({
                    className: className,
                    isPlainText: this._props.isPlainText,
                    isReadonly: this._props.isReadonly,
                    onChange: this._props.onChange,
                    placeholder: this._props.placeholder,
                    title: this._props.title,
                    type: inputGroup_1.InputGroupTypes.TextField,
                    value: this._props.value
                });
                break;
            // Custom Type
            default:
                // Create the default element
                this._el = document.createElement("div");
                // See if there is a custom type
                var custom = custom_1.CustomControls.getByType(this._props.type);
                if (custom && typeof (custom) === "function") {
                    // Execute the event
                    custom(this._props);
                }
                break;
        }
    };
    Object.defineProperty(FormControl.prototype, "el", {
        /**
         * Public Interface
         */
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "checkbox", {
        // The checkbox control
        get: function () { return this._cb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "dropdown", {
        // The dropdown control
        get: function () { return this._ddl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "control", {
        // The textbox control
        get: function () { return this._cb || this._ddl || this._lb || this._tb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "listbox", {
        // The listbox control
        get: function () { return this._lb; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "textbox", {
        // The textbox control
        get: function () { return this._tb; },
        enumerable: true,
        configurable: true
    });
    // Method to get the form control value
    FormControl.prototype.getValue = function () {
        // See if there is an override event
        if (this._props.onGetValue) {
            return this._props.onGetValue(this._props);
        }
        // See if this is a checkbox
        if (this._cb) {
            // See if the items were defined
            if (this._props.items) {
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
        // See if this is a list box
        if (this._lb) {
            // Return the value
            return this._lb.getValue();
        }
        // See if this is a textbox
        if (this._tb) {
            // Return the value
            return this._tb.getValue();
        }
    };
    Object.defineProperty(FormControl.prototype, "isValid", {
        // Validates the control
        get: function () {
            var validation = { isValid: true };
            // Get the element and value
            var elControl = (this._cb || this._ddl || this._lb || this._tb) ? (this._cb || this._ddl || this._lb || this._tb).el : this._el;
            var value = this.getValue();
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
                var returnValue = this._props.onValidate(this._props, value);
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
            var elFormControl = elControl.querySelector(".form-control");
            if (elFormControl) {
                // Clear the invalid/valid classes
                elFormControl.classList.remove("is-invalid");
                elFormControl.classList.remove("is-valid");
                // Set the class
                elFormControl.classList.add(validation.isValid ? "is-valid" : "is-invalid");
            }
            else {
                var validateControls = function (controls) {
                    // Parse the controls
                    for (var i = 0; i < controls.length; i++) {
                        var control = controls[i];
                        // Clear the invalid/valid classes
                        control.classList.remove("is-invalid");
                        control.classList.remove("is-valid");
                        // Set the class
                        control.classList.add(validation.isValid ? "is-valid" : "is-invalid");
                    }
                };
                // Get the checkboxes
                var elCheckboxes = elControl.querySelectorAll(".form-check-input");
                if (elCheckboxes.length > 0) {
                    // Validate the controls
                    validateControls(elCheckboxes);
                    // Set the form control
                    elFormControl = elCheckboxes.length > 0 ? elCheckboxes[elCheckboxes.length - 1] : elFormControl;
                }
                // Get the custom controls
                var elCustomControls = elControl.querySelectorAll(".custom-control-input");
                if (elCustomControls.length > 0) {
                    // Validate the controls
                    validateControls(elCustomControls);
                    // Set the form control
                    elFormControl = elCustomControls.length > 0 ? elCustomControls[elCustomControls.length - 1] : elFormControl;
                }
            }
            // Ensure the form control exists
            if (elFormControl) {
                // See if there is invalid feedback
                if (validation.invalidMessage || this._props.errorMessage) {
                    // Get the element
                    var elMessage = elControl.querySelector(".invalid-feedback");
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
                    var elMessage = elControl.querySelector(".valid-feedback");
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControl.prototype, "props", {
        // The form control properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    // Sets the form control label
    FormControl.prototype.setLabel = function (value) {
        // Update the label
        this._elLabel ? this._elLabel.innerHTML = value || "" : null;
    };
    // Sets the form control value
    FormControl.prototype.setValue = function (value) {
        // Set the value
        this.control ? this.control.setValue(value) : null;
    };
    return FormControl;
}());
exports.FormControl = FormControl;
