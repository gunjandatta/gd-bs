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
require("bootstrap/js/dist/dropdown");
require("popper.js");
var core_1 = require("../../core");
var base_1 = require("../base");
var button_1 = require("../button");
var formItem_1 = require("./formItem");
var item_1 = require("./item");
var HTML = require("./index.html");
var HTMLForm = require("./form.html");
var HTMLNav = require("./nav.html");
var HTMLSplit = require("./split.html");
/**
 * Dropdown Types
 */
var DropdownTypes;
(function (DropdownTypes) {
    DropdownTypes[DropdownTypes["Danger"] = 1] = "Danger";
    DropdownTypes[DropdownTypes["Info"] = 2] = "Info";
    DropdownTypes[DropdownTypes["Primary"] = 3] = "Primary";
    DropdownTypes[DropdownTypes["Secondary"] = 4] = "Secondary";
    DropdownTypes[DropdownTypes["Success"] = 5] = "Success";
    DropdownTypes[DropdownTypes["Warning"] = 6] = "Warning";
})(DropdownTypes = exports.DropdownTypes || (exports.DropdownTypes = {}));
// Gets the template
var GetHTML = function (props) {
    // See if we are rendering items for a form
    if (props.formFl) {
        return HTMLForm;
    }
    // See if we are rendering for a nav bar
    if (props.navFl) {
        return HTMLNav;
    }
    // See if we are rendering a split button dropdown
    if (props.isSplit) {
        return HTMLSplit;
    }
    // Return the default template
    return HTML;
};
/**
 * Dropdown
 * @property props - The dropdown properties.
 */
var _Dropdown = /** @class */ (function (_super) {
    __extends(_Dropdown, _super);
    // Constructor
    function _Dropdown(props) {
        var _this = _super.call(this, GetHTML(props), props) || this;
        _this._items = null;
        // Configure the dropdown
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        // Create the bootstrap object
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el) : null;
        return _this;
    }
    // Configure the card group
    _Dropdown.prototype.configure = function () {
        // See if this is for a form
        if (this.props.formFl) {
            // Configure the dropdown for a form
            this.configureForm();
        }
        // Else, see if this is for a nav bar
        else if (this.props.navFl) {
            // Configure the dropdown for a nav bar
            this.configureNavBar();
        }
        else {
            // Configure the dropdown
            this.configureDefault();
        }
        // Render the items
        this.renderItems();
        // See if we are only rendering a menu
        if (this.props.menuOnly) {
            // Update the element
            this.el = this.el.querySelector(".dropdown-menu");
        }
    };
    // Configures the dropdown
    _Dropdown.prototype.configureDefault = function () {
        // Set the attributes
        this.el.title = this.props.title == null ? "" : this.props.title;
        this.props.dropLeft ? this.el.classList.add("dropleft") : null;
        this.props.dropRight ? this.el.classList.add("dropright") : null;
        this.props.dropUp ? this.el.classList.add("dropup") : null;
        // Set the type
        var btnType = button_1.ButtonClassNames.getByType(this.props.type) || button_1.ButtonClassNames.getByType(button_1.ButtonTypes.Primary);
        // See if this is a split button
        if (this.props.isSplit) {
            // Update a label
            var label = this.el.querySelector("button");
            label.classList.add(btnType);
            label.disabled = this.props.isReadonly ? true : false;
            label.innerHTML = this.props.label == null ? "" : this.props.label;
            // Set the click event to disable the postback
            label.addEventListener("click", function (ev) { ev.preventDefault(); });
        }
        else {
            // Update the label
            var label = this.el.querySelector(".dropdown-toggle");
            label.innerHTML = this.props.label == null ? "" : this.props.label;
        }
        // Update the dropdown
        var dropdown = this.el.querySelector(".dropdown-toggle");
        dropdown.classList.add(btnType);
        dropdown.disabled = this.props.isReadonly ? true : false;
        // See if we are rendering the menu only
        var menu = this.el.querySelector(".dropdown-menu");
        if (this.props.menuOnly) {
            // Update the menu
            this.props.id ? menu.id = this.props.id : null;
            menu.className = this.props.className ? this.props.className : "";
            menu.classList.add("dropdown-menu");
        }
        else {
            // Update the menu
            this.props.id ? menu.setAttribute("aria-labelledby", this.props.id) : null;
        }
    };
    // Configure the events
    _Dropdown.prototype.configureEvents = function () {
        var _this = this;
        // See if this is a select element and a change event exists
        var menu = this.el.querySelector("select");
        if (menu) {
            // See if multiple options are allowed
            if (this.props.multi == true) {
                // Add a scroll event
                menu.addEventListener("click", function (ev) {
                    var selectedIdx = -1;
                    // Get the mouse position
                    var xPos = ev.clientX;
                    var yPos = ev.clientY;
                    // Parse the items
                    for (var i = 0; i < _this._items.length; i++) {
                        var item = _this._items[i];
                        var itemPos = item.el.getBoundingClientRect();
                        // See if this item was selected
                        if (xPos >= itemPos.left && xPos <= itemPos.right &&
                            yPos >= itemPos.top && yPos <= itemPos.bottom) {
                            // Set the index
                            selectedIdx = i;
                            // Toggle the item
                            item.toggle();
                            // Break from the loop
                            break;
                        }
                    }
                    // See if an item was selected
                    if (selectedIdx >= 0) {
                        // Parse the items
                        for (var i = 0; i < _this._items.length; i++) {
                            var item = _this._items[i];
                            // Skip the selected item
                            if (selectedIdx == i) {
                                continue;
                            }
                            // See if this item was selected
                            if (item.isSelected) {
                                // Ensure the element is still selected
                                item.el.selected = true;
                            }
                        }
                        // Call the change event
                        _this.props.onChange ? _this.props.onChange(_this.getValue(), ev) : null;
                    }
                });
            }
            else {
                // Add a change event
                menu.addEventListener("change", function (ev) {
                    // Parse the items
                    for (var i = 0; i < _this._items.length; i++) {
                        var item = _this._items[i];
                        // See if this item was selected
                        if (ev.target.value == item.props.text) {
                            // Ensure this item is selected
                            if (!item.isSelected) {
                                item.toggle();
                            }
                            // Call the change event
                            _this.props.onChange ? _this.props.onChange(item.props, ev) : null;
                        }
                        else {
                            // Unselect the other values
                            if (item.isSelected) {
                                item.toggle();
                            }
                        }
                    }
                });
            }
        }
    };
    // Configures the dropdown for a form
    _Dropdown.prototype.configureForm = function () {
        // Configure the label
        var elLabel = this.el.querySelector("label");
        var label = this.props.label == null ? "" : this.props.label;
        if (label) {
            // Set the label
            elLabel.innerHTML = label;
        }
        else {
            // Remove the label
            elLabel.remove();
        }
        // Update the dropdown
        var dropdown = this.el.querySelector("select");
        dropdown.className = this.props.className || "";
        dropdown.classList.add("form-control");
        dropdown.disabled = this.props.isReadonly ? true : false;
        dropdown.multiple = this.props.multi ? true : false;
        dropdown.title = this.props.title == null ? "" : this.props.title;
    };
    // Configure the item events
    _Dropdown.prototype.configureItemEvents = function (item) {
        var _this = this;
        // Ensure this isn't a header/divider
        if (item.props.isDivider || item.props.isHeader) {
            return;
        }
        // See if multi selections is not allowed
        if (this.props.multi != true) {
            // Add a click event
            item.el.addEventListener("click", function (ev) {
                // Parse the items
                for (var i = 0; i < _this._items.length; i++) {
                    var selectedItem = _this._items[i];
                    // Skip this item
                    if (item.el.innerHTML == selectedItem.el.innerHTML) {
                        continue;
                    }
                    // Ensure this item is selected
                    if (selectedItem.isSelected) {
                        // Unselect the item
                        selectedItem.toggle();
                    }
                }
            });
        }
        // See if there is a change event
        if (this.props.onChange) {
            // Add a click event
            item.el.addEventListener("click", function (ev) {
                // Execute the event
                _this.props.onChange(_this.getValue(), ev);
            });
        }
    };
    // Configures the dropdown for a nav bar
    _Dropdown.prototype.configureNavBar = function () {
        // Update the link
        var link = this.el.querySelector("a");
        link.id = "navbarDDL_" + (this.props.label == null ? "" : this.props.label);
        link.title = this.props.title == null ? "" : this.props.title;
        this.props.isReadonly ? link.setAttribute("aria-disabled", "true") : null;
        link.innerHTML = this.props.label == null ? "" : this.props.label;
        // See if we are rendering the menu only
        var menu = this.el.querySelector(".dropdown-menu");
        if (this.props.menuOnly) {
            // Update the menu
            this.props.id ? menu.id = this.props.id : null;
            menu.className = this.props.className ? this.props.className : "";
            menu.classList.add("dropdown-menu");
        }
        else {
            // Update the menu
            this.props.id ? menu.setAttribute("aria-labelledby", this.props.id) : null;
        }
    };
    // Renders the items
    _Dropdown.prototype.renderItems = function () {
        // Clear the items
        this._items = [];
        // Get the menu
        var menu = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select");
        var isForm = menu.nodeName == "SELECT";
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Create the item
            var item = isForm ? new formItem_1.DropdownFormItem(items[i], this.props) : new item_1.DropdownItem(items[i], this.props);
            this._items.push(item);
            // See if this isn't for a form
            if (!isForm) {
                // Configure the item events
                this.configureItemEvents(item);
            }
            // Add the item to the menu
            menu.appendChild(item.el);
        }
        // See if this is a form
        if (isForm) {
            // Ensure the selected values match the index
            var idx = menu.selectedIndex;
            if (this._items[idx] && this._items[idx].isSelected == false) {
                // Select the item
                this._items[idx].toggle();
            }
        }
    };
    /**
     * Bootstrap
     */
    // Disposes the dropdown
    _Dropdown.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.dropdown("dispose") : null; };
    // Toggles the menu
    _Dropdown.prototype.toggle = function () { this._bootstrapObj ? this._bootstrapObj.dropdown("toggle") : null; };
    // Updates the dropdown
    _Dropdown.prototype.update = function () { this._bootstrapObj ? this._bootstrapObj.dropdown("update") : null; };
    /**
     * Public Interface
     */
    // Gets the value
    _Dropdown.prototype.getValue = function () {
        var values = [];
        // Parse the items
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            // See if this item is selected
            if (item.isSelected) {
                // Add the value
                values.push(item.props);
            }
        }
        // Return the value
        return this.props.multi ? values : values[0];
    };
    Object.defineProperty(_Dropdown.prototype, "isMulti", {
        // Returns true if the dropdown allows multiple selections
        get: function () { return this.props.multi; },
        enumerable: true,
        configurable: true
    });
    // Sets the dropdown items
    _Dropdown.prototype.setItems = function (newItems) {
        if (newItems === void 0) { newItems = []; }
        // Update the properties
        this.props.items = newItems;
        // Get the menu
        var menu = this.el.querySelector(".dropdown-menu") || this.el.querySelector("select");
        // Clear the menu
        while (menu.firstChild) {
            menu.removeChild(menu.firstChild);
        }
        // Render the items
        this.renderItems();
    };
    // Sets the dropdown value
    _Dropdown.prototype.setValue = function (value) {
        // Ensure it's an array
        var values = value == null ? [] : (typeof (value.length) === "number" && typeof (value) !== "string" ? value : [value]);
        // Parse the items
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            // Toggle checked items
            item.isSelected ? item.toggle() : null;
        }
        // Parse the values
        for (var i = 0; i < values.length; i++) {
            var value_1 = values[i];
            var ddlText = value_1 ? value_1.text || value_1 : null;
            var ddlValue = value_1 ? value_1.value || value_1 : null;
            // Parse the items
            for (var j = 0; j < this._items.length; j++) {
                var item = this._items[j];
                // See if this is the target item
                if (typeof (item.props.value) === "undefined") {
                    // Select this item if the text matches
                    item.props.text == ddlText ? item.toggle() : null;
                }
                else {
                    // Select this item if the value matches
                    item.props.value == ddlValue ? item.toggle() : null;
                }
            }
        }
        // See if this is a form
        var ddl = this.el.querySelector("select");
        if (ddl) {
            // Ensure the selected values match the index
            if (this._items[ddl.selectedIndex] && this._items[ddl.selectedIndex].isSelected == false) {
                // Select the item
                this._items[ddl.selectedIndex].toggle();
            }
        }
    };
    return _Dropdown;
}(base_1.Base));
exports.Dropdown = function (props) { return new _Dropdown(props); };
