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
var badge_1 = require("../badge");
var _1 = require(".");
var HTML = require("./item.html");
var HTMLTab = require("./tab.html");
/**
 * List Group Item
 */
var ListGroupItem = /** @class */ (function (_super) {
    __extends(ListGroupItem, _super);
    // Constructor
    function ListGroupItem(props, isTab) {
        if (isTab === void 0) { isTab = false; }
        var _this = _super.call(this, HTML, props) || this;
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
    ListGroupItem.prototype.configure = function () {
        // Set the class name
        this.props.badge ? this.el.classList.add("d-flex") : null;
        this.props.badge ? this.el.classList.add("justify-content-between") : null;
        this.props.isActive ? this.el.classList.add("active") : null;
        this.props.isDisabled ? this.el.classList.add("disabled") : null;
        // Set the class name
        var className = _1.ListGroupClassNames.getByType(this.props.type);
        className ? this.el.classList.add(className) : null;
        // See if this is a tab
        if (this._elTab) {
            var tabId = this.props.tabName.replace(/[^a-zA-Z0-9]/, "");
            // Set the properties
            this.el.setAttribute("href", "#" + tabId);
            this.el.setAttribute("data-toggle", "list");
            this.el.setAttribute("aria-controls", tabId);
            this.el.innerHTML = this.props.tabName;
            // Update the tab
            this._elTab.id = tabId;
            this._elTab.setAttribute("aria-labelledby", tabId);
            this.props.isActive ? this._elTab.classList.add("active") : null;
        }
        else {
            // Set the properties
            this.el.setAttribute("href", this.props.href || "#");
        }
        // See if there is a badge
        if (this.props.badge) {
            // Append a badge
            this.el.appendChild(badge_1.Badge(this.props.badge).el);
        }
        // Set the content
        var content = this.props.content || "";
        var elContent = this._elTab || this.el;
        if (typeof (content) === "string") {
            // Set the html
            elContent.innerHTML = content;
        }
        else {
            // Append the element
            elContent.appendChild(content);
        }
    };
    // Configures the events
    ListGroupItem.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", function (ev) {
                // Execute the event
                _this.props.onClick(_this.el, _this.props);
            });
        }
        // See if there is a render event
        if (this.props.onRender) {
            // Execute the render event
            this.props.onRender(this._elTab || this.el, this.props);
        }
    };
    Object.defineProperty(ListGroupItem.prototype, "elTab", {
        /**
         * Public Interface
         */
        // The HTML tab element
        get: function () { return this._elTab; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListGroupItem.prototype, "isVisible", {
        // Returns true if the link is visible
        get: function () { return this.el.classList.contains("active"); },
        enumerable: true,
        configurable: true
    });
    // Toggles a link
    ListGroupItem.prototype.toggle = function (fadeTabs) {
        // See if this item is currently active
        if (this.isVisible) {
            // Hide this link and tab
            this.el.classList.remove("active");
            this._elTab.classList.remove("active");
            this._elTab.classList.remove("show");
        }
        else {
            // Show this link and tab
            this.el.classList.add("active");
            this._elTab.classList.add("active");
            fadeTabs ? this._elTab.classList.add("show") : null;
        }
    };
    return ListGroupItem;
}(base_1.Base));
exports.ListGroupItem = ListGroupItem;
