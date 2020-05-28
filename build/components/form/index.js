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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../base");
var control_1 = require("./control");
var group_1 = require("./group");
var row_1 = require("./row");
var HTML = require("./index.html");
__export(require("./custom"));
/**
 * Form
 * @property props - The form properties.
 */
var _Form = /** @class */ (function (_super) {
    __extends(_Form, _super);
    // Constructor
    function _Form(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._groups = null;
        _this._rows = null;
        // Configure the form
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the form
    _Form.prototype.configure = function () {
        // Clear the groups and rows
        this._groups = [];
        this._rows = [];
        // Append the controls
        this.appendControls(this.props.controls);
        // Append the rows
        this.appendRows(this.props.rows);
    };
    // Configure the events
    _Form.prototype.configureEvents = function () {
        var _this = this;
        // Wait before executing the rendered event, otherwise the controls will be null
        setTimeout(function () {
            // Execute the event
            _this.props.onRendered ? _this.props.onRendered(_this.controls) : null;
        }, 10);
    };
    /**
     * Public Interface
     */
    // Append controls to the form
    _Form.prototype.appendControls = function (controls) {
        if (controls === void 0) { controls = []; }
        // Parse the controls
        for (var i = 0; i < controls.length; i++) {
            // Create the group
            var group = new group_1.FormGroup(controls[i], this.props);
            this._groups.push(group);
            this.el.appendChild(group.el);
        }
    };
    // Append rows to the form
    _Form.prototype.appendRows = function (rows) {
        if (rows === void 0) { rows = []; }
        // Parse the rows
        for (var i = 0; i < rows.length; i++) {
            // Create the row
            var row = new row_1.FormRow(rows[i], this.props);
            this._rows.push(row);
            this.el.appendChild(row.el);
        }
    };
    Object.defineProperty(_Form.prototype, "controls", {
        // The forms controls
        get: function () {
            var controls = [];
            // Parse the groups
            for (var i = 0; i < this._groups.length; i++) {
                // Add the control
                controls.push(this._groups[i].control);
            }
            // Parse the rows
            for (var i = 0; i < this._rows.length; i++) {
                // Add the controls
                controls = controls.concat(this._rows[i].controls);
            }
            // Return the controls
            return controls;
        },
        enumerable: true,
        configurable: true
    });
    // Gets a form control by its name
    _Form.prototype.getControl = function (name) {
        // Parse the controls
        var controls = this.controls;
        for (var i = 0; i < controls.length; i++) {
            var control = controls[i];
            // See if this is the control we are looking for
            if (control.props.name == name) {
                // Return the control
                return control;
            }
        }
        // Control not found
        return null;
    };
    // Gets the form values
    _Form.prototype.getValues = function () {
        var values = {};
        // Parse the controls
        var controls = this.controls;
        for (var i = 0; i < controls.length; i++) {
            var control = controls[i];
            if (control.props.name) {
                // Set the value
                values[control.props.name] = control.getValue();
            }
        }
        // Return the values
        return values;
    };
    // Validates the form
    _Form.prototype.isValid = function () {
        var isValid = true;
        // Parse the controls
        var controls = this.controls;
        for (var i = 0; i < controls.length; i++) {
            // See if this control is valid
            if (controls[i].isValid == false) {
                // Set the flag
                isValid = false;
            }
        }
        // Return the flag
        return isValid;
    };
    return _Form;
}(base_1.Base));
exports.Form = function (props) { return new _Form(props); };
/**
 * Form Control
 */
exports.FormControl = function (props) { return new control_1.FormControl(props); };
/**
 * Form Control Types
 */
var FormControlTypes;
(function (FormControlTypes) {
    FormControlTypes[FormControlTypes["Checkbox"] = 1] = "Checkbox";
    FormControlTypes[FormControlTypes["Email"] = 2] = "Email";
    FormControlTypes[FormControlTypes["Dropdown"] = 3] = "Dropdown";
    FormControlTypes[FormControlTypes["File"] = 4] = "File";
    FormControlTypes[FormControlTypes["ListBox"] = 5] = "ListBox";
    FormControlTypes[FormControlTypes["MultiDropdown"] = 6] = "MultiDropdown";
    FormControlTypes[FormControlTypes["Password"] = 7] = "Password";
    FormControlTypes[FormControlTypes["Radio"] = 8] = "Radio";
    FormControlTypes[FormControlTypes["Range"] = 9] = "Range";
    FormControlTypes[FormControlTypes["Readonly"] = 10] = "Readonly";
    FormControlTypes[FormControlTypes["Switch"] = 11] = "Switch";
    FormControlTypes[FormControlTypes["TextArea"] = 12] = "TextArea";
    FormControlTypes[FormControlTypes["TextField"] = 13] = "TextField";
})(FormControlTypes = exports.FormControlTypes || (exports.FormControlTypes = {}));
