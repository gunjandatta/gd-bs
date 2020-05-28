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
require("bootstrap/js/dist/button");
var core_1 = require("../../core");
var base_1 = require("../base");
var classNames_1 = require("../classNames");
var badge_1 = require("../badge");
var spinner_1 = require("../spinner");
var HTML = require("./index.html");
var HTMLLink = require("./link.html");
/**
 * Button Types
 */
var ButtonTypes;
(function (ButtonTypes) {
    ButtonTypes[ButtonTypes["Danger"] = 1] = "Danger";
    ButtonTypes[ButtonTypes["Dark"] = 2] = "Dark";
    ButtonTypes[ButtonTypes["Info"] = 3] = "Info";
    ButtonTypes[ButtonTypes["Light"] = 4] = "Light";
    ButtonTypes[ButtonTypes["Link"] = 5] = "Link";
    ButtonTypes[ButtonTypes["Primary"] = 6] = "Primary";
    ButtonTypes[ButtonTypes["Secondary"] = 7] = "Secondary";
    ButtonTypes[ButtonTypes["Success"] = 8] = "Success";
    ButtonTypes[ButtonTypes["Warning"] = 9] = "Warning";
    ButtonTypes[ButtonTypes["OutlineDanger"] = 10] = "OutlineDanger";
    ButtonTypes[ButtonTypes["OutlineDark"] = 11] = "OutlineDark";
    ButtonTypes[ButtonTypes["OutlineInfo"] = 12] = "OutlineInfo";
    ButtonTypes[ButtonTypes["OutlineLight"] = 13] = "OutlineLight";
    ButtonTypes[ButtonTypes["OutlineLink"] = 14] = "OutlineLink";
    ButtonTypes[ButtonTypes["OutlinePrimary"] = 15] = "OutlinePrimary";
    ButtonTypes[ButtonTypes["OutlineSecondary"] = 16] = "OutlineSecondary";
    ButtonTypes[ButtonTypes["OutlineSuccess"] = 17] = "OutlineSuccess";
    ButtonTypes[ButtonTypes["OutlineWarning"] = 18] = "OutlineWarning";
})(ButtonTypes = exports.ButtonTypes || (exports.ButtonTypes = {}));
/**
 * Button Classes
 */
exports.ButtonClassNames = new classNames_1.ClassNames([
    "btn-danger",
    "btn-dark",
    "btn-info",
    "btn-light",
    "btn-link",
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-warning",
    "btn-outline-danger",
    "btn-outline-dark",
    "btn-outline-info",
    "btn-outline-light",
    "btn-outline-link",
    "btn-outline-primary",
    "btn-outline-secondary",
    "btn-outline-success",
    "btn-outline-warning"
]);
/**
 * Button
 * @param props The button properties.
 */
var _Button = /** @class */ (function (_super) {
    __extends(_Button, _super);
    // Constructor
    function _Button(props) {
        var _this = _super.call(this, props.href || props.isLink ? HTMLLink : HTML, props) || this;
        // Configure the button
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent
        _this.configureParent();
        // Create the bootstrap object
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el) : null;
        return _this;
    }
    // Configure the button
    _Button.prototype.configure = function () {
        // Add the class names
        this.props.isBlock ? this.el.classList.add("btn-block") : null;
        this.props.isLarge ? this.el.classList.add("btn-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-sm") : null;
        // Set the default type
        this.setType(this.props.type || ButtonTypes.Primary);
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isDisabled ? this.el.setAttribute("disabled", "disabled") : null;
        this.props.target ? this.el.setAttribute("data-target", this.props.target) : null;
        this.props.title ? this.el.title = this.props.title : null;
        this.props.toggle ? this.el.setAttribute("data-toggle", this.props.toggle) : null;
        this.props.trigger ? this.el.setAttribute("data-trigger", this.props.trigger) : null;
        typeof (this.props.isExpanded) === "boolean" ? this.el.setAttribute("aria-expanded", this.props.isExpanded ? "true" : "false") : null;
        // See if controls are defined
        if (this.props.controls) {
            // See if this is a string
            if (typeof (this.props.controls) === "string") {
                // Set the controls
                this.el.setAttribute("aria-controls", this.props.controls);
            }
            else {
                // Set the controls
                this.el.setAttribute("aria-controls", this.props.controls.join(' '));
            }
        }
        // Set the text
        this.setText(this.props.text);
        // See if this is a spinner
        if (this.props.spinnerProps) {
            // Set the element to render to
            this.props.spinnerProps.el = this.el;
            // Render the spinner
            spinner_1.Spinner(this.props.spinnerProps);
        }
        // See if there is a badge
        if (this.props.badge) {
            // Default the type
            this.props.badge.type = this.props.badge.type || badge_1.BadgeTypes.Light;
            // Render the badge
            this.el.appendChild(badge_1.Badge(this.props.badge).el);
        }
    };
    // Configure the events
    _Button.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", function (ev) {
                // Call the click event
                _this.props.onClick(_this.props, ev);
            });
        }
    };
    /**
     * Bootstrap
     */
    // Disposes the button
    _Button.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.button("dispose") : null; };
    // Toggles the button
    _Button.prototype.toggle = function () { this._bootstrapObj ? this._bootstrapObj.button("toggle") : null; };
    /**
     * Public Properties
     */
    // Disables the button
    _Button.prototype.disable = function () { this.el.disabled = true; };
    // Enables the button
    _Button.prototype.enable = function () { this.el.disabled = false; };
    // Sets the button text
    _Button.prototype.setText = function (btnText) {
        // Clear the element
        while (this.el.firstChild) {
            this.el.removeChild(this.el.firstChild);
        }
        // Set the text
        var elText = document.createTextNode(btnText == null ? "" : btnText);
        // Append the text
        this.el.appendChild(elText);
    };
    // Sets the button type
    _Button.prototype.setType = function (buttonType) {
        var _this = this;
        // Parse the class names
        exports.ButtonClassNames.parse(function (className) {
            // Remove the class names
            _this.el.classList.remove(className);
        });
        // Set the class name
        var className = exports.ButtonClassNames.getByType(buttonType) || exports.ButtonClassNames.getByType(ButtonTypes.Primary);
        this.el.classList.add(className);
    };
    return _Button;
}(base_1.Base));
exports.Button = function (props) { return new _Button(props); };
