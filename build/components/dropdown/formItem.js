"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dropdown Form Item
 */
var DropdownFormItem = /** @class */ (function () {
    // Constructor
    function DropdownFormItem(props, parent) {
        this._el = null;
        this._isSelected = false;
        this._parent = null;
        this._props = null;
        // Save the properties
        this._parent = parent;
        this._props = props;
        // Configure the item
        this.configure();
    }
    // Configures the item
    DropdownFormItem.prototype.configure = function () {
        // See if this is a divider
        if (this._props.isDivider) {
            // Create the divider
            this._el = document.createElement("optgroup");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-divider");
        }
        // Else, see if this is a header
        else if (this._props.isHeader) {
            // Create the header
            this._el = document.createElement("optgroup");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-header");
            this._el.label = this._props.text == null ? "" : this._props.text;
        }
        else {
            // Create the option
            this._el = document.createElement("option");
            this._el.className = this._props.className || "";
            this._el.disabled = this._props.isDisabled ? true : false;
            this._el.innerHTML = this._props.text == null ? "" : this._props.text;
            // See if the item is selected
            if (this._props.isSelected) {
                // Select the option
                this._el.selected = true;
            }
            // Else, see if a value exists
            else if (typeof (this._parent.value) !== "undefined") {
                // Ensure it's an array
                var values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];
                // Parse the values
                for (var i = 0; i < values.length; i++) {
                    var value = typeof (this._props.value) === "undefined" ? this._props.text : this._props.value;
                    // See if this item is selected
                    if (value == values[i]) {
                        // Select the option
                        this._el.selected = true;
                        break;
                    }
                }
            }
            // Set the flag
            this._isSelected = this._el.selected;
        }
    };
    Object.defineProperty(DropdownFormItem.prototype, "el", {
        /**
         * Public Interface
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownFormItem.prototype, "isSelected", {
        // Returns true if the item is selected
        get: function () { return this._isSelected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownFormItem.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    // Toggles the item selection
    DropdownFormItem.prototype.toggle = function () {
        // Skip the dividers, headers
        if (this._props.isDivider || this._props.isHeader) {
            return;
        }
        // Update the selected flag
        this._isSelected = !this._isSelected;
        var option = this._el;
        // See if the value needs to be updated
        if (option.selected != this._isSelected) {
            // Update the option
            option.selected = this._isSelected;
        }
    };
    return DropdownFormItem;
}());
exports.DropdownFormItem = DropdownFormItem;
