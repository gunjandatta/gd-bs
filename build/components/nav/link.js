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
var HTML = require("./link.html");
var HTMLTab = require("./tab.html");
/**
 * Nav Link
 */
var NavLink = /** @class */ (function (_super) {
    __extends(NavLink, _super);
    // Constructor
    function NavLink(props, isTab) {
        var _this = _super.call(this, HTML, props) || this;
        _this._elLink = null;
        _this._elTab = null;
        // See if this is for a tab
        if (isTab) {
            // Create the tab element
            var el = document.createElement("div");
            el.innerHTML = HTMLTab;
            _this._elTab = el.firstChild;
        }
        // Configure the item
        _this.configure();
        // Configure the events
        _this.configureEvents();
        return _this;
    }
    // Configure the item
    NavLink.prototype.configure = function () {
        // Update the link
        this._elLink = this.el.querySelector("a.nav-link");
        this.props.isActive ? this._elLink.classList.add("active") : null;
        this.props.isDisabled ? this._elLink.classList.add("disabled") : null;
        this._elLink.innerHTML = this.props.title == null ? "" : this.props.title;
        // See if this is a tab
        if (this._elTab) {
            var tabId = this.props.title.replace(/[^a-zA-Z0-9]/, "");
            // Set the properties
            this._elLink.setAttribute("href", "#" + tabId);
            this._elLink.setAttribute("data-toggle", "tab");
            this._elLink.setAttribute("aria-controls", tabId);
            this._elLink.innerHTML = this.props.title == null ? "" : this.props.title;
            // Update the tab
            this._elTab.id = tabId;
            this._elTab.setAttribute("aria-labelledby", tabId);
            // See if this tab is active
            if (this.props.isActive) {
                // Update the classes
                this._elTab.classList.add("active");
            }
            // Set the content
            var content = this.props.tabContent || "";
            if (typeof (content) === "string") {
                // Set the html
                this._elTab.innerHTML = content;
            }
            else {
                // Append the element
                this._elTab.appendChild(content);
            }
        }
        else {
            // Set the properties
            this._elLink.setAttribute("href", this.props.href || "#");
        }
    };
    // Configures the events
    NavLink.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", function (ev) {
                // Execute the event
                _this.props.onClick(_this.props, ev);
            });
        }
        // Execute the tab render event
        this._elTab && this.props.onRenderTab ? this.props.onRenderTab(this.props, this._elTab) : null;
    };
    Object.defineProperty(NavLink.prototype, "elTab", {
        /**
         * Public Interface
         */
        // The HTML tab element
        get: function () { return this._elTab; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavLink.prototype, "isVisible", {
        // Returns true if the link is visible
        get: function () { return this._elLink.classList.contains("active"); },
        enumerable: true,
        configurable: true
    });
    // Toggles a link
    NavLink.prototype.toggle = function (fadeTabs) {
        // See if this item is currently active
        if (this.isVisible) {
            // Hide this link and tab
            this._elLink.classList.remove("active");
            this._elTab.classList.remove("active");
            this._elTab.classList.remove("show");
        }
        else {
            // Show this link and tab
            this._elLink.classList.add("active");
            this._elTab.classList.add("active");
            fadeTabs ? this._elTab.classList.add("show") : null;
        }
    };
    return NavLink;
}(base_1.Base));
exports.NavLink = NavLink;
