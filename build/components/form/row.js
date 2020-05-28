"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = require("./group");
var HTML = require("./row.html");
/**
 * Form Row
 */
var FormRow = /** @class */ (function () {
    // Constructor
    function FormRow(props, parent) {
        this._columns = null;
        this._el = null;
        this._parent = null;
        this._props = null;
        // Save the parameters
        this._parent = parent;
        this._props = props;
        // Create the element
        var el = document.createElement("div");
        el.innerHTML = HTML;
        this._el = el.firstChild;
        // Configure the row
        this.configure();
    }
    // Configure the row
    FormRow.prototype.configure = function () {
        // Set the attributes
        this._props.isCentered ? this._el.classList.add("align-items-center") : null;
        // Set the class name
        var classNames = this._parent.rowClassName ? this._parent.rowClassName.split(' ') : [];
        classNames = this._props.className ? classNames.concat(this._props.className.split(' ')) : classNames;
        for (var i = 0; i < classNames.length; i++) {
            this._el.classList.add(classNames[i]);
        }
        // Clear the columns and group
        this._columns = [];
        // Render the columns
        this.renderColumns();
    };
    // Render the columns
    FormRow.prototype.renderColumns = function () {
        // Parse the columns
        var columns = this._props.columns || [];
        for (var i = 0; i < columns.length; i++) {
            var columnProps = columns[i];
            // Set the value
            var value = columnProps.control.value;
            if (this._parent.value) {
                // Set the value
                value = this._parent.value[columnProps.control.name] || value;
            }
            columnProps.control.value = value;
            // Create the column
            var column = new group_1.FormGroup(columnProps.control, this._parent);
            this._columns.push(column);
            this._el.appendChild(column.el);
            // Create the column
            var colSize = columnProps.size > 0 && columnProps.size < 13 ? columnProps.size : 0;
            // See if this column is auto sized
            if (columnProps.isAutoSized || this.props.isAutoSized || this.props.isCentered) {
                // Add the class name
                column.el.classList.add("col-auto");
            }
            // Else, see if a size is defined
            else if (colSize > 0 && colSize < 13) {
                // Add the class name based on the size
                column.el.classList.add("col-" + colSize);
            }
            else {
                // Default the size
                column.el.classList.add("col");
            }
        }
    };
    Object.defineProperty(FormRow.prototype, "el", {
        /**
         * Public Interface
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormRow.prototype, "controls", {
        // The form controls
        get: function () {
            var controls = [];
            // Parse the columns
            for (var i = 0; i < this._columns.length; i++) {
                // Add the control
                controls.push(this._columns[i].control);
            }
            // Return the controls
            return controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormRow.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    return FormRow;
}());
exports.FormRow = FormRow;
