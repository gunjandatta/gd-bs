"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var HTMLCheckbox = require("./checkbox.html");
var HTMLRadio = require("./radio.html");
var HTMLSwitch = require("./switch.html");
/**
 * Checkbox Item
 */
var CheckboxItem = /** @class */ (function () {
    // Constructor
    function CheckboxItem(props, parent) {
        this._el = null;
        this._isSelected = null;
        this._parent = null;
        this._props = null;
        // Save the properties
        this._parent = parent;
        this._props = props;
        // Create the element
        var el = document.createElement("div");
        el.innerHTML = this.getHTML();
        this._el = el.firstChild;
        // Configure the item
        this.configure();
        // Configure the events
        this.configureEvents();
    }
    // Configure the item
    CheckboxItem.prototype.configure = function () {
        // Set the attributes
        var checkbox = this._el.querySelector("input");
        checkbox.disabled = this._props.isDisabled ? true : false;
        checkbox.title = this._parent.title == null ? "" : this._parent.title;
        // See if the inline flag is set
        if (this._parent.isInline) {
            switch (this._props.type || this._parent.type) {
                case _1.CheckboxGroupTypes.Checkbox:
                    // Set the class name
                    this._el.classList.add("form-check-inline");
                    break;
                case _1.CheckboxGroupTypes.Radio:
                    // Set the class name
                    this._el.classList.add("custom-control-inline");
                    break;
                case _1.CheckboxGroupTypes.Switch:
                    // Set the class name
                    this._el.classList.add("custom-control-inline");
                    break;
            }
        }
        // Set the label
        var label = this._el.querySelector("label");
        label.innerHTML = this._props.label || "&nbsp;";
        // See if a value exists for the group
        if (this._parent.value) {
            // Parse the values
            var values = typeof (this._parent.value) === "string" ? [this._parent.value] : this._parent.value;
            for (var j = 0; j < values.length; j++) {
                // See if this item is selected
                if (values[j] == this._props.label) {
                    // Select this item
                    checkbox.checked = true;
                }
            }
            // Set the value
            this._isSelected = checkbox.checked;
        }
        else {
            // Set the default value
            this._isSelected = this._props.isSelected ? true : false;
            checkbox.checked = this._isSelected;
        }
    };
    // Configures the events
    CheckboxItem.prototype.configureEvents = function () {
        var _this = this;
        // Add a click event
        this._el.addEventListener("click", function (ev) {
            // Update the value
            _this._isSelected = !_this._isSelected;
            _this._el.querySelector("input").checked = _this._isSelected;
            // See if an event is defined
            if (_this._props.onChange) {
                // Call the event
                _this._props.onChange(_this._props);
            }
        });
    };
    // Gets the HTML template
    CheckboxItem.prototype.getHTML = function () {
        // Return it based on the type
        switch (this._props.type || this._parent.type) {
            // Radio
            case _1.CheckboxGroupTypes.Radio:
                return HTMLRadio;
            // Switch
            case _1.CheckboxGroupTypes.Switch:
                return HTMLSwitch;
            // Default to a checkbox
            default:
                return HTMLCheckbox;
        }
    };
    Object.defineProperty(CheckboxItem.prototype, "el", {
        /**
         * Public Properties
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxItem.prototype, "isChecked", {
        // Returns true if the checkbox is checked
        get: function () {
            // Get the checkbox
            var cb = this._el.querySelector("input");
            // Return the value
            return cb.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxItem.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    // Toggles the checkbox
    CheckboxItem.prototype.toggle = function () {
        // Update the value
        this._isSelected = !this._isSelected;
        // Set the checkbox value
        this._el.querySelector("input").checked = this._isSelected;
    };
    return CheckboxItem;
}());
exports.CheckboxItem = CheckboxItem;
