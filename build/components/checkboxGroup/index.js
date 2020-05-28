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
var HTML = require("./index.html");
var item_1 = require("./item");
/**
 * Checkbox Group Types
 */
var CheckboxGroupTypes;
(function (CheckboxGroupTypes) {
    CheckboxGroupTypes[CheckboxGroupTypes["Checkbox"] = 1] = "Checkbox";
    CheckboxGroupTypes[CheckboxGroupTypes["Radio"] = 2] = "Radio";
    CheckboxGroupTypes[CheckboxGroupTypes["Switch"] = 3] = "Switch";
})(CheckboxGroupTypes = exports.CheckboxGroupTypes || (exports.CheckboxGroupTypes = {}));
/**
 * Checkbox Group
 */
var _CheckboxGroup = /** @class */ (function (_super) {
    __extends(_CheckboxGroup, _super);
    // Constructor
    function _CheckboxGroup(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._checkboxes = null;
        // Configure the checkbox group
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _CheckboxGroup.prototype.configure = function () {
        var colSize = this.props.colSize > 0 && this.props.colSize < 13 ? this.props.colSize : (this.props.label ? 10 : 12);
        // See if a label is defined
        var label = this.el.querySelector("legend");
        if (this.props.label && this.props.hideLabel != true) {
            // Add the label
            label.classList.add("col-" + (12 - colSize));
            label.innerHTML = this.props.label;
        }
        else {
            // Remove the label
            this.el.removeChild(label);
        }
        // Get the group and configure the size
        var group = this.el.querySelector("div");
        group.classList.add("col-" + colSize);
        // Render the checkboxes
        this.renderItems(group);
    };
    // Configure the events
    _CheckboxGroup.prototype.configureEvents = function (item) {
        var _this = this;
        // See if we are not allowing multiple selections
        if (this.props.multi != true) {
            // Add a click event
            item.el.addEventListener("click", function (ev) {
                // Parse the checkboxes
                for (var i = 0; i < _this._checkboxes.length; i++) {
                    var checkbox = _this._checkboxes[i];
                    // Ensure this item is checked
                    if (!checkbox.isChecked) {
                        continue;
                    }
                    // Skip this item
                    if (checkbox.el.outerHTML == item.el.outerHTML) {
                        continue;
                    }
                    // Toggle the checkbox
                    checkbox.toggle();
                }
            });
        }
        // See if there is a change event defined
        if (this.props.onChange) {
            // Add a click event
            item.el.addEventListener("click", function (ev) {
                // Call the event
                _this.props.onChange(_this.getValue());
            });
        }
    };
    // Render the checkboxes
    _CheckboxGroup.prototype.renderItems = function (group) {
        // Clear the checkboxes
        this._checkboxes = [];
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Create the checkbox
            var checkbox = new item_1.CheckboxItem(items[i], this.props);
            this._checkboxes.push(checkbox);
            group.appendChild(checkbox.el);
            // Configure the events
            this.configureEvents(checkbox);
        }
    };
    /**
     * Public Methods
     */
    // Method to get the value
    _CheckboxGroup.prototype.getValue = function () {
        var values = [];
        // Parse the checkboxes
        for (var i = 0; i < this._checkboxes.length; i++) {
            var cb = this._checkboxes[i];
            // See if it's checked
            if (cb.isChecked) {
                // Add the value
                values.push(cb.props);
            }
        }
        // Return the values
        return this.props.multi ? values : values[0];
    };
    // Method to set the value
    // Sets the dropdown value
    _CheckboxGroup.prototype.setValue = function (value) {
        // Ensure it's an array
        var values = typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value];
        // Parse the items
        for (var i = 0; i < this._checkboxes.length; i++) {
            var checkbox = this._checkboxes[i];
            // Toggle checked items
            checkbox.isChecked ? checkbox.toggle() : null;
        }
        // Parse the values
        for (var i = 0; i < values.length; i++) {
            var value_1 = values[i];
            // Parse the items
            for (var j = 0; j < this._checkboxes.length; j++) {
                var checkbox = this._checkboxes[j];
                // Select this checkbox if the label matches
                checkbox.props.label == value_1 ? checkbox.toggle() : null;
            }
        }
    };
    return _CheckboxGroup;
}(base_1.Base));
exports.CheckboxGroup = function (props) { return new _CheckboxGroup(props); };
