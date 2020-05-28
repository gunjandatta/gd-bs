"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dropdown_1 = require("../dropdown");
var HTML = require("./item.html");
/**
 * Navbar Item
 */
var NavbarItem = /** @class */ (function () {
    // Constructor
    function NavbarItem(props, parent) {
        this._el = null;
        this._parent = null;
        this._props = null;
        // Save the properties
        this._parent = parent;
        this._props = props;
        // Create the item
        var el = document.createElement("div");
        el.innerHTML = HTML;
        this._el = el.firstChild;
        // Configure the item
        this.configure();
        // Configure the events
        this.configureEvents();
    }
    // Configures the item
    NavbarItem.prototype.configure = function () {
        // See if this is a dropdown
        if (this._props.items) {
            // Render a dropdown
            this._el = dropdown_1.Dropdown({
                isReadonly: this._props.isDisabled,
                items: this._props.items,
                label: this._props.text,
                navFl: true,
                onChange: function (item, ev) {
                    // Prevent the page from moving to the top
                    ev.preventDefault();
                }
            }).el;
            // Update the link
            var link = this._el.querySelector(".nav-link");
            this._props.isActive ? link.classList.add("active") : null;
            this._props.isDisabled ? link.classList.add("disabled") : null;
        }
        // Else, ensure there is text
        else if (this._props.text) {
            // Update the link
            var link = this._el.querySelector("a");
            this._props.isActive ? link.classList.add("active") : link.removeChild(link.querySelector('span'));
            this._props.isDisabled ? link.classList.add("disabled") : null;
            link.innerHTML = this._props.text == null ? "" : this._props.text;
        }
    };
    // Configures the events
    NavbarItem.prototype.configureEvents = function () {
        var _this = this;
        // Ensure it's not disabled
        if (this._props.isDisabled) {
            return;
        }
        // Add a click event
        this._el.addEventListener("click", function (ev) {
            // Prevent the page from moving to the top
            ev.preventDefault();
            // Call the events
            _this._props.onClick ? _this._props.onClick(_this._props, ev) : null;
            _this._parent.onClick ? _this._parent.onClick(_this._props, ev) : null;
        });
    };
    Object.defineProperty(NavbarItem.prototype, "el", {
        /**
         * Public Interface
         */
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    return NavbarItem;
}());
exports.NavbarItem = NavbarItem;
