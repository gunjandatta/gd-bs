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
require("bootstrap/js/dist/tab");
var base_1 = require("../base");
var link_1 = require("./link");
var HTML = require("./index.html");
var HTMLTabs = require("./tabs.html");
var HTMLVerticalTabs = require("./tabsVertical.html");
/**
 * Navigation
 * @param props - The navigation properties.
 */
var _Nav = /** @class */ (function (_super) {
    __extends(_Nav, _super);
    // Constructor
    function _Nav(props) {
        var _this = _super.call(this, props.isTabs ? (props.isVertical ? HTMLVerticalTabs : HTMLTabs) : HTML, props) || this;
        _this._links = null;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Nav.prototype.configure = function () {
        // Update the navigation
        var nav = this.el.querySelector(".nav");
        this.props.id ? nav.id = this.props.id : null;
        this.props.enableFill ? this.el.classList.add("nav-fill") : null;
        this.props.isJustified ? this.el.classList.add("nav-justified") : null;
        this.props.isPills ? this.el.classList.add("nav-pills") : null;
        this.props.isTabs ? this.el.classList.add("nav-tabs") : null;
        this.props.isVertical ? this.el.classList.add("flex-column") : null;
        // Render the nav links
        this.renderItems();
    };
    // Renders the links
    _Nav.prototype.renderItems = function () {
        // Clear the links
        this._links = [];
        // Get the nav and tab elements
        var nav = this.el.querySelector(".nav") || this.el;
        var tabs = this.el.querySelector(".tab-content");
        // Parse the navigation items
        var links = this.props.items || [];
        for (var i = 0; i < links.length; i++) {
            // Create the link
            var link = new link_1.NavLink(links[i], tabs ? true : false);
            nav.appendChild(link.el);
            this._links.push(link);
            // See if we are rendering tabs
            if (tabs) {
                // Add the tab content
                tabs.appendChild(link.elTab);
                // See if the fade option is enabled
                if (this.props.fadeTabs) {
                    // Set the class name
                    link.elTab.classList.add("fade");
                    // See if the tab is active
                    if (link.props.isActive) {
                        // Set the class name
                        link.elTab.classList.add("show");
                    }
                }
            }
        }
    };
    /**
     * Public Interface
     */
    // Shows a tab
    _Nav.prototype.showTab = function (tabId) {
        // Ensure tabs exist
        if (this.props.isTabs) {
            // Parse the tabs
            for (var i = 0; i < this._links.length; i++) {
                var link = this._links[i];
                // See if this is the target tab
                if (tabId === i + 1 || link.elTab.id == tabId) {
                    // Toggle it if it's not visible
                    link.isVisible ? null : link.toggle(this.props.fadeTabs);
                }
                // Else, see if it's visible
                else if (link.isVisible) {
                    // Toggle it
                    link.toggle(this.props.fadeTabs);
                }
            }
        }
    };
    return _Nav;
}(base_1.Base));
exports.Nav = function (props) { return new _Nav(props); };
