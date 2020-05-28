"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTML = require("./item.html");
var HTMLLink = require("./link.html");
/**
 * Breadcrumb Item
 */
var BreadcrumbItem = /** @class */ (function () {
    // Constructor
    function BreadcrumbItem(props) {
        this._el = null;
        this._elLink = null;
        this._props = null;
        // Save the properties
        this._props = props;
        // Create the item
        var elItem = document.createElement("div");
        elItem.innerHTML = (props.href && !props.isActive ? HTMLLink : HTML);
        this._el = elItem.firstChild;
        // Configure the item
        this.configure();
        // Configure the events
        this.configureEvents();
    }
    // Configure the item
    BreadcrumbItem.prototype.configure = function () {
        // See if this item is active
        if (this._props.isActive) {
            // Add the class name
            this._el.classList.add("active");
            // Set the attribute
            this._el.setAttribute("aria-current", "page");
        }
        // See if this is a link
        this._elLink = this.el.querySelector("a");
        if (this._elLink) {
            // Configure the link
            this._elLink.href = this._props.href;
            this._elLink.innerHTML = this._props.text == null ? "" : this._props.text;
        }
        else {
            // Configure the item
            this._el.innerHTML = this._props.text == null ? "" : this._props.text;
        }
    };
    // Configure the events
    BreadcrumbItem.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this._props.onClick) {
            // Add the click event
            (this._elLink || this._el).addEventListener("click", function (ev) {
                // Call the click event
                _this._props.onClick(_this._props, ev);
            });
        }
    };
    Object.defineProperty(BreadcrumbItem.prototype, "el", {
        /**
         * Public Properties
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreadcrumbItem.prototype, "props", {
        // The componen properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    return BreadcrumbItem;
}());
exports.BreadcrumbItem = BreadcrumbItem;
