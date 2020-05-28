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
var button_1 = require("../button");
var item_1 = require("./item");
var HTML = require("./index.html");
/**
 * Navbar Types
 */
var NavbarTypes;
(function (NavbarTypes) {
    NavbarTypes[NavbarTypes["Dark"] = 1] = "Dark";
    NavbarTypes[NavbarTypes["Light"] = 2] = "Light";
    NavbarTypes[NavbarTypes["Primary"] = 3] = "Primary";
})(NavbarTypes = exports.NavbarTypes || (exports.NavbarTypes = {}));
/**
 * Navbar
 */
var _Navbar = /** @class */ (function (_super) {
    __extends(_Navbar, _super);
    // Constructor
    function _Navbar(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._items = null;
        // Configure the collapse
        _this.configure();
        // Configure search
        _this.configureSearch();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Navbar.prototype.configure = function () {
        // See if there is a brand
        var brand = this.el.querySelector(".navbar-brand");
        if (this.props.brand) {
            // Update the brand
            this.props.brandUrl ? brand.href = this.props.brandUrl : null;
            brand.innerHTML = this.props.brand == null ? "" : this.props.brand;
        }
        else {
            // Remove the brand
            this.el.removeChild(brand);
        }
        // Update the nav bar
        var navbar = this.el.querySelector(".navbar-collapse");
        navbar.id = this.props.id || "navbar_content";
        // Set the toggle
        var toggler = this.el.querySelector(".navbar-toggler");
        toggler.setAttribute("aria-controls", navbar.id);
        toggler.setAttribute("data-target", "#" + navbar.id);
        // Add the classes based on the type
        var btnSearch = this.el.querySelector("button[type='submit']");
        switch (this.props.type) {
            // Dark
            case NavbarTypes.Dark:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-dark");
                btnSearch.classList.add("btn-outline-info");
                break;
            // Primary
            case NavbarTypes.Primary:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-primary");
                btnSearch.classList.add("btn-outline-light");
                break;
            // Default - Light
            default:
                // Add the class
                this.el.classList.add("navbar-light");
                this.el.classList.add("bg-light");
                btnSearch.classList.add("btn-outline-primary");
                break;
        }
        // Render the items
        this.renderItems();
    };
    // Configure the events
    _Navbar.prototype.configureEvents = function () {
        var props = this.props.searchBox || {};
        // See if search events exist
        var searchbox = this.el.querySelector("form input");
        if (searchbox) {
            // Set a keydown event to catch the "Enter" key being pressed
            searchbox.addEventListener("keydown", function (ev) {
                // See if the "Enter" key was pressed
                if (ev.keyCode == 13) {
                    // Disable the postback
                    ev.preventDefault();
                    // See if there is a search event
                    if (props.onSearch) {
                        // Call the event
                        props.onSearch(searchbox.value);
                    }
                }
            });
            // See if a change event exists
            if (props.onChange) {
                // Add an input event
                searchbox.addEventListener("input", function (ev) {
                    // Call the event
                    props.onChange(searchbox.value);
                });
                // Add a clear event
                searchbox.addEventListener("clear", function (ev) {
                    // Call the event
                    props.onChange(searchbox.value);
                });
                // Edge has a bug where the clear event isn't triggered
                // See if this is the Edge browser
                if (window.navigator.userAgent.indexOf("Edge") > 0) {
                    // Detect the mouse click event
                    searchbox.addEventListener("mouseup", function () {
                        var currentValue = searchbox.value;
                        // Set a timeout to see if the value is cleared
                        setTimeout(function () {
                            // Compare the values
                            if (currentValue != searchbox.value) {
                                // Call the event
                                props.onChange(searchbox.value);
                            }
                        }, 1);
                    });
                }
            }
        }
        // See if a search event exists
        var button = this.el.querySelector("form button");
        if (button && props.onSearch) {
            // Add a click event
            button.addEventListener("click", function (ev) {
                // Prevent the page from moving to the top
                ev.preventDefault();
                // Call the event
                props.onSearch(searchbox.value);
            });
        }
    };
    // Configures search
    _Navbar.prototype.configureSearch = function () {
        // See if we are rendering a search box
        var search = this.el.querySelector("form");
        if (this.props.enableSearch || this.props.searchBox) {
            var props = this.props.searchBox || {};
            // Update the searchbox
            var searchbox = search.querySelector("input");
            searchbox.placeholder = props.placeholder || searchbox.placeholder;
            props.btnText ? searchbox.setAttribute("aria-label", props.btnText) : null;
            // See if we are rendering a button
            var button = search.querySelector("button");
            if (props.hideButton == true) {
                // Remove the button
                search.removeChild(button);
            }
            else {
                // Set the button type class name
                var className = button_1.ButtonClassNames.getByType(props.btnType);
                className ? button.classList.add(className) : null;
            }
        }
        else {
            // Remove the searchbox
            search.remove();
        }
    };
    // Render the items
    _Navbar.prototype.renderItems = function () {
        // Clear the list
        this._items = [];
        // Create the navbar list
        var list = this.el.querySelector("ul.navbar-nav");
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Create the item
            var item = new item_1.NavbarItem(items[i], this.props);
            this._items.push(item);
            list.appendChild(item.el);
        }
    };
    return _Navbar;
}(base_1.Base));
exports.Navbar = function (props) { return new _Navbar(props); };
