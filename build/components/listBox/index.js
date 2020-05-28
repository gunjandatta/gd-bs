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
var form_1 = require("../form");
var HTML = require("./index.html");
/**
 * TODO - Figure out how to remove a selected item
 */
/**
 * List Box
 * @property props - The list box properties.
 */
var _ListBox = /** @class */ (function (_super) {
    __extends(_ListBox, _super);
    // Constructor
    function _ListBox(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._ddlItems = null;
        _this._ddlValues = null;
        // Configure the list box
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configures the list box
    _ListBox.prototype.configure = function () {
        var _this = this;
        // Set the placeholder
        var placeholder = typeof (this.props.placeholder) === "undefined" ? "Search" : this.props.placeholder;
        // Render a form to this element
        form_1.Form({
            el: this.el,
            rows: [
                {
                    columns: [{
                            control: {
                                label: this.props.label,
                                placeholder: placeholder,
                                type: form_1.FormControlTypes.TextField,
                                onChange: function (value) {
                                    // Filter the items
                                    _this.filterItems(value);
                                }
                            }
                        }]
                },
                {
                    columns: [
                        {
                            control: {
                                items: this.props.items,
                                type: form_1.FormControlTypes.MultiDropdown,
                                onChange: function (items) {
                                    // See if we are allowing multiple values
                                    if (_this.props.multi) {
                                        // Get the items and sort them
                                        var allItems_1 = _this._ddlValues.getValue().concat(items).sort(function (a, b) {
                                            if (a.text < b.text) {
                                                return -1;
                                            }
                                            if (a.text > b.text) {
                                                return 1;
                                            }
                                            return 0;
                                        });
                                        // Remove any duplicates and update the values dropdown
                                        _this.configureValuesDDL(allItems_1.filter(function (item, idx) {
                                            return allItems_1.indexOf(item) === idx;
                                        }));
                                    }
                                    else {
                                        // Set the values
                                        _this.configureValuesDDL([items[0]]);
                                    }
                                    // Clear this dropdown
                                    _this._ddlItems.setValue([]);
                                    // Call the change event
                                    _this.props.onChange ? _this.props.onChange(items) : null;
                                },
                                onControlRendered: function (ctrl) {
                                    // Set the dropdown
                                    _this._ddlItems = ctrl.dropdown;
                                }
                            }
                        },
                        {
                            control: {
                                type: form_1.FormControlTypes.MultiDropdown,
                                isReadonly: true,
                                onControlRendered: function (ctrl) {
                                    // Set the dropdown
                                    _this._ddlValues = ctrl.dropdown;
                                }
                            }
                        }
                    ]
                }
            ],
            onRendered: function () {
                // Get the selected items
                _this._ddlItems.setValue(_this.props.value);
                var items = _this._ddlItems.getValue();
                _this._ddlItems.setValue([]);
                // Configure the values dropdown
                _this.configureValuesDDL(items);
            }
        });
    };
    // Configures the values dropdown
    _ListBox.prototype.configureValuesDDL = function (items) {
        var _this = this;
        // Update the dropdown
        this._ddlValues.setItems(items);
        this._ddlValues.setValue(items);
        // Parse the options
        var options = this._ddlValues.el.querySelectorAll("option");
        for (var i = 0; i < options.length; i++) {
            var option = options[i];
            // Add a click event
            option.setAttribute("data-idx", i.toString());
            option.addEventListener("mouseup", function (ev) {
                var idx = parseInt(ev.currentTarget.getAttribute("data-idx"));
                // Remove the item
                items.splice(idx, 1);
                // Update the values
                _this.configureValuesDDL(items);
            });
        }
    };
    // Filters the dropdown menu items
    _ListBox.prototype.filterItems = function (filter) {
        var filterValue = filter.toLowerCase();
        // Parse the items
        var elItems = this._ddlItems.el.querySelectorAll("option");
        for (var i = 0; i < elItems.length; i++) {
            var elItem = elItems[i];
            // See if the filter exists
            if (filterValue) {
                // See if this value contains the filter
                if (elItem.innerText.toLowerCase().indexOf(filterValue) >= 0) {
                    // Show the item
                    elItem.classList.remove("d-none");
                }
                else {
                    // Hide the item
                    elItem.classList.add("d-none");
                }
            }
            else {
                // Show the item
                elItem.classList.remove("d-none");
            }
        }
    };
    /**
     * Public Interface
     */
    _ListBox.prototype.getValue = function () { return this._ddlValues.getValue(); };
    _ListBox.prototype.setValue = function (value) {
        // Get the items
        this._ddlItems.setValue(value);
        var items = this._ddlItems.getValue();
        // Set the value
        this.configureValuesDDL(items);
        // Clear the items
        this._ddlItems.setValue();
    };
    return _ListBox;
}(base_1.Base));
exports.ListBox = function (props) { return new _ListBox(props); };
