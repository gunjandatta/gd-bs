"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dropdown Item
 */
var DropdownItem = /** @class */ (function () {
    // Constructor
    function DropdownItem(props, parent) {
        this._el = null;
        this._isSelected = false;
        this._parent = null;
        this._props = null;
        // Save the properties
        this._parent = parent;
        this._props = props;
        // Configure the item
        this.configure();
        // Configure the events
        this.configureEvents();
    }
    // Configures the item
    DropdownItem.prototype.configure = function () {
        // See if this is a divider
        if (this._props.isDivider) {
            // Add the divider
            this._el = document.createElement("div");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-divider");
            this._props.isDisabled ? this._el.classList.add("disabled") : null;
        }
        // Else, see if this is a header
        else if (this._props.isHeader) {
            // Add the header
            this._el = document.createElement("h6");
            this._el.className = this._props.className || "";
            this._el.classList.add("dropdown-header");
            this._props.isDisabled ? this._el.classList.add("disabled") : null;
            this._el.innerHTML = this._props.text == null ? "" : this._props.text;
        }
        else {
            // See if we are rendering this in a nav bar
            if (this._parent.navFl) {
                // Add the item
                this._el = document.createElement("a");
                this._el.className = this._props.className || "";
                this._el.classList.add("dropdown-item");
                this._props.isDisabled ? this._el.classList.add("disabled") : null;
                this._el.href = this._props.href || "#";
                this._el.innerHTML = this._props.text == null ? "" : this._props.text;
            }
            else {
                // Create the item
                this._el = document.createElement("a");
                this._el.className = this._props.className || "";
                this._el.classList.add("dropdown-item");
                this._props.isDisabled ? this._el.classList.add("disabled") : null;
                this._el.href = this._props.href || "#";
                this._el.innerHTML = this._props.text == null ? "" : this._props.text;
                // See if this item is selected
                if (this._props.isSelected) {
                    // Select the item
                    this._el.classList.add("active");
                }
                // Else, see if a value exists
                else if (typeof (this._parent.value) !== "undefined") {
                    // Ensure it's an array
                    var values = this._parent.value && this._parent.value.length && typeof (this._parent.value) !== "string" ? this._parent.value : [this._parent.value];
                    // Parse the values
                    for (var j = 0; j < values.length; j++) {
                        var value = typeof (this._props.value) === "undefined" ? this._props.text : this._props.value;
                        // See if this item is selected
                        if (value == values[j]) {
                            // Select the item
                            this._el.classList.add("active");
                            break;
                        }
                    }
                }
                // Set the flag
                this._isSelected = this._el.classList.contains("active");
            }
        }
    };
    // Configures the events
    DropdownItem.prototype.configureEvents = function () {
        var _this = this;
        // Set the click event
        this._el.addEventListener("click", function (ev) {
            // Toggle the item
            _this.toggle();
            // See if there is a click event defined
            if (_this._props.onClick) {
                // Execute the event
                _this._props.onClick(_this._props, ev);
            }
        });
    };
    Object.defineProperty(DropdownItem.prototype, "el", {
        /**
         * Public Interface
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownItem.prototype, "isSelected", {
        // Returns true if the item is selected
        get: function () { return this._isSelected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownItem.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    // Toggles the item selection
    DropdownItem.prototype.toggle = function () {
        // Skip the dividers, headers and nav items
        if (this._props.isDivider || this._props.isHeader || this._parent.navFl) {
            return;
        }
        // Update the selected flag
        this._isSelected = !this._isSelected;
        // Update the class
        if (this._isSelected) {
            // Add the active class
            this._el.classList.add("active");
        }
        else {
            // Remove the active class
            this._el.classList.remove("active");
        }
    };
    return DropdownItem;
}());
exports.DropdownItem = DropdownItem;
