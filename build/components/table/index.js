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
/**
 * Table
 */
var _Table = /** @class */ (function (_super) {
    __extends(_Table, _super);
    // Constructor
    function _Table(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Table.prototype.configure = function () {
        // See if columns are defined
        var head = this.el.querySelector("thead");
        if (this.props.columns) {
            // Append the row
            var row = document.createElement("tr");
            head.appendChild(row);
            // Parse the columns
            for (var i = 0; i < this.props.columns.length; i++) {
                // Append the column
                var column = document.createElement("th");
                row.appendChild(column);
                // Render the column
                this.renderColumn(i, column, this.props.columns[i]);
            }
            // See if there is an event
            if (this.props.onRenderHeaderRow) {
                // Call the event
                this.props.onRenderHeaderRow(row);
            }
        }
        // Add the rows
        this.addRows(this.props.rows);
    };
    // Renders a column
    _Table.prototype.renderColumn = function (colIdx, column, props) {
        var _this = this;
        column.innerHTML = props.isHidden ? "" : props.title || props.name;
        column.setAttribute("scope", "col");
        // See if there is an event for this column
        if (props.onRenderHeader) {
            // Call the event
            props.onRenderHeader(column, props);
        }
        // See if there is an event for this component
        if (this.props.onRenderHeaderCell) {
            // Call the event
            this.props.onRenderHeaderCell(column, props);
        }
        // See if we are sorting this column
        if (props.enableSort) {
            // Add a click event
            column.addEventListener("click", function (ev) {
                // Sort the table data
                _this.sortTable(colIdx, column, props);
            });
        }
        // See if there is a click event
        if (props.onClickHeader || this.props.onClickHeader) {
            // Add the click event
            column.addEventListener("click", function (ev) {
                // Call the event
                props.onClickHeader ? props.onClickHeader(column, props) : null;
                _this.props.onClickHeader ? _this.props.onClickHeader(column, props) : null;
            });
        }
    };
    // Renders a cell
    _Table.prototype.renderCell = function (row, props, data) {
        var _this = this;
        // Create the cell
        var cell = document.createElement("td");
        cell.className = props.className || "";
        cell.innerHTML = data[props.name] == null ? "" : data[props.name];
        row.appendChild(cell);
        // See if there is a scope
        if (props.scope) {
            // Set the scope
            cell.setAttribute("scope", props.scope);
        }
        // See if there is an event for this column
        if (props.onRenderCell) {
            // Call the event
            props.onRenderCell(cell, props, data);
        }
        // See if there is an event for this component
        if (this.props.onRenderCell) {
            // Call the event
            this.props.onRenderCell(cell, props, data);
        }
        // See if there is a click event
        if (props.onClickCell || this.props.onClickCell) {
            // Add the click event
            cell.addEventListener("click", function (ev) {
                // Call the event
                props.onClickCell ? props.onClickCell(cell, props, data) : null;
                _this.props.onClickCell ? _this.props.onClickCell(cell, props, data) : null;
            });
        }
    };
    // Renders a row
    _Table.prototype.renderRow = function (row, data) {
        // See if columns
        for (var i = 0; i < this.props.columns.length; i++) {
            // Create the cell
            this.renderCell(row, this.props.columns[i], data);
        }
        // See if there is an event
        if (this.props.onRenderRow) {
            // Call the event
            this.props.onRenderRow(row, data);
        }
    };
    // Sorts the table
    _Table.prototype.sortTable = function (colIdx, column, props) {
        var sortAscending = true;
        // Get the sort icon
        var head = this.el.querySelector("thead");
        var elIcon = head.querySelector(".sort-icon");
        if (elIcon) {
            // Remove the sort icon
            elIcon.parentElement.removeChild(elIcon);
        }
        // Get the sort attribute
        if (column.hasAttribute("data-sort-asc")) {
            // Set the flag
            sortAscending = false;
            // Remove the attribute
            column.removeAttribute("data-sort-asc");
        }
        else {
            // Add the attribute
            column.setAttribute("data-sort-asc", "true");
        }
        // Create the icon
        elIcon = document.createElement("i");
        elIcon.className = "ml-1 sort-icon";
        elIcon.innerHTML = sortAscending ? "&uarr;" : "&darr;";
        column.appendChild(elIcon);
        // Parse the table rows
        var idx = -1;
        var body = this.el.querySelector("tbody");
        while (++idx < body.children.length) {
            var elRow = body.children[idx];
            var text = elRow.children[colIdx].innerText;
            var value = (text == null ? "" : text).toString().toLowerCase();
            // Loop through the previous items
            var counter = idx;
            while (--counter >= 0) {
                var elPreviousRow = body.children[counter];
                var elPreviousCol = elPreviousRow.children[colIdx];
                var prevValue = (elPreviousCol ? elPreviousCol.innerText : "").toLowerCase();
                // Compare the values
                if (sortAscending ? value < prevValue : value > prevValue) {
                    // Switch the values
                    body.insertBefore(elRow, elPreviousRow);
                }
                else {
                    break;
                }
            }
        }
    };
    /**
     * Public Interface
     */
    // Method to add the rows
    _Table.prototype.addRows = function (rows) {
        if (rows === void 0) { rows = []; }
        var tbody = this.el.querySelector("tbody");
        // Parse the rows
        for (var i = 0; i < rows.length; i++) {
            // Create the row
            var row = document.createElement("tr");
            tbody.appendChild(row);
            // Render the row
            this.renderRow(row, rows[i]);
        }
    };
    return _Table;
}(base_1.Base));
exports.Table = function (props) { return new _Table(props); };
