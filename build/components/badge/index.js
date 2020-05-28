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
var classNames_1 = require("../classNames");
var HTMLLink = require("./link.html");
var HTMLSpan = require("./span.html");
/**
 * Badge Types
 */
var BadgeTypes;
(function (BadgeTypes) {
    BadgeTypes[BadgeTypes["Danger"] = 1] = "Danger";
    BadgeTypes[BadgeTypes["Dark"] = 2] = "Dark";
    BadgeTypes[BadgeTypes["Info"] = 3] = "Info";
    BadgeTypes[BadgeTypes["Light"] = 4] = "Light";
    BadgeTypes[BadgeTypes["Primary"] = 5] = "Primary";
    BadgeTypes[BadgeTypes["Secondary"] = 6] = "Secondary";
    BadgeTypes[BadgeTypes["Success"] = 7] = "Success";
    BadgeTypes[BadgeTypes["Warning"] = 8] = "Warning";
})(BadgeTypes = exports.BadgeTypes || (exports.BadgeTypes = {}));
/**
 * Badge Class Names
 */
exports.BadgeClassNames = new classNames_1.ClassNames([
    "badge-danger",
    "badge-dark",
    "badge-info",
    "badge-light",
    "badge-primary",
    "badge-secondary",
    "badge-success",
    "badge-warning"
]);
/**
 * Badge
 */
var _Badge = /** @class */ (function (_super) {
    __extends(_Badge, _super);
    // Constructor
    function _Badge(props) {
        var _this = _super.call(this, props.href || props.onClick ? HTMLLink : HTMLSpan, props) || this;
        // Set the href property
        props.href ? _this.el.setAttribute("href", props.href) : null;
        // Configure the badge
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent element
        _this.configureParent();
        return _this;
    }
    // Configure the badge
    _Badge.prototype.configure = function () {
        // See if this is a pill
        if (this.props.isPill) {
            // Add the class name
            this.el.classList.add("badge-pill");
        }
        // Set the default styling
        this.el.classList.add(exports.BadgeClassNames.getByType(this.props.type) || exports.BadgeClassNames.getByType(BadgeTypes.Primary));
        // Set the content
        var content = this.props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML = content;
        }
        else {
            // Append the element
            this.el.appendChild(content);
        }
    };
    // Configures the events
    _Badge.prototype.configureEvents = function () {
        var _this = this;
        // Set the click event
        this.props.onClick ? this.el.addEventListener("click", function (ev) {
            // Call the event
            _this.props.onClick(_this.props, ev);
        }) : null;
    };
    return _Badge;
}(base_1.Base));
exports.Badge = function (props) { return new _Badge(props); };
