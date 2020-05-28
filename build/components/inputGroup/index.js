"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var button_1 = require("../button");
var HTML = require("./index.html");
/**
 * Input Group Types
 */
var InputGroupTypes;
(function (InputGroupTypes) {
    InputGroupTypes[InputGroupTypes["Email"] = 1] = "Email";
    InputGroupTypes[InputGroupTypes["File"] = 2] = "File";
    InputGroupTypes[InputGroupTypes["Password"] = 3] = "Password";
    InputGroupTypes[InputGroupTypes["Range"] = 4] = "Range";
    InputGroupTypes[InputGroupTypes["Search"] = 5] = "Search";
    InputGroupTypes[InputGroupTypes["TextArea"] = 6] = "TextArea";
    InputGroupTypes[InputGroupTypes["TextField"] = 7] = "TextField";
})(InputGroupTypes = exports.InputGroupTypes || (exports.InputGroupTypes = {}));
/**
 * Input Group
 * @param props The input group properties.
 */
var _InputGroup = /** @class */ (function (_super) {
    __extends(_InputGroup, _super);
    // Constructor
    function _InputGroup(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the textbox
        _this.configureTextbox();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _InputGroup.prototype.configure = function () {
        // Set the class names
        this.props.isLarge ? this.el.classList.add("input-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("input-group-sm") : null;
        // See if a label exists
        var label = this.el.querySelector("label");
        if (this.props.label) {
            // Update the label
            this.props.id ? label.setAttribute("for", this.props.id) : null;
            label.innerHTML = this.props.label;
        }
        else {
            // Remove the label
            this.el.removeChild(label);
        }
        // See if we are pre-pending a label or buttons
        var prepend = this.el.querySelector(".input-group-prepend");
        if (this.props.prependedButtons || this.props.prependedLabel) {
            // See if the label exists
            var label_1 = prepend.querySelector("span");
            if (this.props.appendedLabel) {
                // Add the label
                label_1.innerHTML = this.props.prependedLabel;
            }
            else {
                // Remove the label
                prepend.removeChild(label_1);
            }
            // Parse the buttons
            var buttons = this.props.prependedButtons || [];
            for (var i = 0; i < buttons.length; i++) {
                // Add the button
                prepend.appendChild(button_1.Button(buttons[i]).el);
            }
        }
        else {
            // Remove the element
            this.el.removeChild(prepend);
        }
        // Default the appended buttons
        var appendedButtons = this.props.appendedButtons || [];
        if (this.props.type == InputGroupTypes.Range) {
            // Add the button
            appendedButtons.push({
                id: "range-value",
                text: this.props.value == null ? "" : this.props.value
            });
        }
        // See if we are appending a label or buttons
        var append = this.el.querySelector(".input-group-append");
        if (appendedButtons.length > 0 || this.props.appendedLabel) {
            // See if the label exists
            var label_2 = append.querySelector("span");
            if (this.props.appendedLabel) {
                // Add the label
                label_2.innerHTML = this.props.appendedLabel;
            }
            else {
                // Remove the label
                append.removeChild(label_2);
            }
            // Parse the buttons
            for (var i = 0; i < appendedButtons.length; i++) {
                // Add the button
                append.appendChild(button_1.Button(appendedButtons[i]).el);
            }
        }
        else {
            // Remove the element
            this.el.removeChild(append);
        }
        // See if there is a description
        var description = this.el.querySelector("small.text-muted");
        if (this.props.description) {
            // Add the description
            description.innerHTML = this.props.description;
        }
        else {
            // Remove the description
            this.el.removeChild(description);
        }
    };
    // Configure the events
    _InputGroup.prototype.configureEvents = function () {
        var _this = this;
        var isMultiLine = this.props.type == InputGroupTypes.TextArea;
        var elInput = this.el.querySelector("input") || this.el.querySelector("textarea");
        // See if a change event exists
        var callbackValue = null;
        if (this.props.onChange) {
            // Add an input event
            elInput.addEventListener("input", function (ev) {
                // See if we have already executed the change event
                if (callbackValue != elInput.value) {
                    // Set the value
                    callbackValue = elInput.value;
                    // Call the change event
                    _this.props.onChange(callbackValue, ev);
                }
            });
        }
        // See if this is a range
        if (this.props.type == InputGroupTypes.Range) {
            // Add a change event
            elInput.addEventListener("input", function () {
                // Get the button
                var btn = _this.el.querySelector("#range-value");
                if (btn) {
                    // Update the value
                    btn.innerHTML = elInput.value;
                }
            });
        }
        // See if this is not a multi-line
        if (!isMultiLine) {
            // Add a mouse up event to detect the clear event
            elInput.addEventListener("mouseup", function (ev) {
                // Get the current value
                var el = ev.currentTarget;
                var oldValue = el.value;
                // Wait for the user to stop updating the value
                setTimeout(function () {
                    // Get the current value
                    var currentValue = el.value;
                    // See if the values have changed
                    if (currentValue != oldValue) {
                        // See if we have already executed the change event
                        if (callbackValue != currentValue) {
                            // Set the value
                            callbackValue = currentValue;
                            // Call the events
                            _this.props.onChange ? _this.props.onChange(callbackValue, ev) : null;
                            _this.props.onClear && callbackValue == "" ? _this.props.onClear() : null;
                        }
                    }
                }, 1);
            });
        }
    };
    // Configures the text box
    _InputGroup.prototype.configureTextbox = function () {
        var isTextArea = this.props.type == InputGroupTypes.TextArea;
        var input = this.el.querySelector("input");
        var textarea = this.el.querySelector("textarea");
        // See if this is a text area
        if (isTextArea) {
            // Remove the input
            this.el.removeChild(input);
            // Update the textbox
            this.props.id ? textarea.id = this.props.id : null;
            this.props.placeholder ? textarea.placeholder = this.props.placeholder : null;
            textarea.readOnly = this.props.isReadonly ? true : false;
            textarea.rows = this.props.rows;
            this.props.title ? textarea.title = this.props.title : null;
        }
        else {
            // Remove the textarea
            this.el.removeChild(textarea);
            // Update the textbox
            this.props.id ? input.id = this.props.id : null;
            this.props.placeholder ? input.placeholder = this.props.placeholder : null;
            input.readOnly = this.props.isReadonly ? true : false;
            this.props.title ? input.title = this.props.title : null;
            typeof (this.props.min) === "number" ? input.min = this.props.min + "" : null;
            typeof (this.props.max) === "number" ? input.max = this.props.max + "" : null;
            typeof (this.props.step) === "number" ? input.step = this.props.step + "" : null;
            // See if this is plain text
            if (this.props.isPlainText) {
                // Update the class names
                this.el.classList.remove("form-control");
                this.el.classList.add("form-control-plaintext");
            }
            // Update the type
            switch (this.props.type) {
                // Email
                case InputGroupTypes.Email:
                    input.type = "email";
                    break;
                // File
                case InputGroupTypes.File:
                    input.type = "file";
                    break;
                // Password
                case InputGroupTypes.Password:
                    input.type = "password";
                    break;
                // Range
                case InputGroupTypes.Range:
                    input.type = "range";
                    break;
                // Search
                case InputGroupTypes.Search:
                    input.type = "search";
                    input.setAttribute("aria-label", "Search");
                    break;
            }
        }
        // Set the default value
        this.setValue(this.props.value);
    };
    /**
     * Public Interface
     */
    _InputGroup.prototype.getValue = function () { return this.textbox.value; };
    // Method to set the value
    _InputGroup.prototype.setValue = function (value) {
        if (value === void 0) { value = ""; }
        this.textbox.value = value;
    };
    Object.defineProperty(_InputGroup.prototype, "textbox", {
        // Returns the textbox
        get: function () { return this.el.querySelector("input") || this.el.querySelector("textarea"); },
        enumerable: true,
        configurable: true
    });
    return _InputGroup;
}(base_1.Base));
exports.InputGroup = function (props) { return new _InputGroup(props); };
