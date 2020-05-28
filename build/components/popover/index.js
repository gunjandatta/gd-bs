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
require("bootstrap/js/dist/popover");
require("popper.js");
var core_1 = require("../../core");
var button_1 = require("../button");
var base_1 = require("../base");
/**
 * Popover Types
 */
var PopoverTypes;
(function (PopoverTypes) {
    PopoverTypes[PopoverTypes["Auto"] = 1] = "Auto";
    PopoverTypes[PopoverTypes["Bottom"] = 2] = "Bottom";
    PopoverTypes[PopoverTypes["Left"] = 3] = "Left";
    PopoverTypes[PopoverTypes["Right"] = 4] = "Right";
    PopoverTypes[PopoverTypes["Top"] = 5] = "Top";
})(PopoverTypes = exports.PopoverTypes || (exports.PopoverTypes = {}));
/**
 * Popover
 */
var _Popover = /** @class */ (function (_super) {
    __extends(_Popover, _super);
    // Constructor
    function _Popover(props) {
        var _this = _super.call(this, "", props) || this;
        _this._popovers = null;
        // Configure the collapse
        _this.configure();
        // Configure the events
        _this.configureEvents();
        // Configure the parent, if the target wasn't specified
        _this.props.target ? null : _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Popover.prototype.configure = function () {
        // Ensure the main popover element exists
        // This will ensure the popovers are wrapped with a parent element with the "bs" class applied to it.
        this._popovers = document.querySelector("#bs-popovers");
        if (this._popovers == null) {
            // Create the main element
            this._popovers = document.createElement("div");
            this._popovers.classList.add("bs");
            this._popovers.id = "bs-popovers";
            // Add it to the page
            document.body.appendChild(this._popovers);
        }
        // Set the options to target the main popover element
        var options = this.props.options || {};
        options.container = "#bs-popovers";
        // See if the placement needs to be set
        if (options.placement == null) {
            // Set the type
            switch (this.props.type) {
                // Auto
                case PopoverTypes.Auto:
                    options.placement = "auto";
                    break;
                // Bottom
                case PopoverTypes.Bottom:
                    options.placement = "bottom";
                    break;
                // Left
                case PopoverTypes.Left:
                    options.placement = "left";
                    break;
                // Right
                case PopoverTypes.Right:
                    options.placement = "right";
                    break;
                // Top
                case PopoverTypes.Top:
                    options.placement = "top";
                    break;
            }
        }
        // See if we are targeting an element
        var popover = null;
        if (this.props.target) {
            // Set the popover to the target element
            popover = this.props.target;
            // Ensure the attributes are set in the target element
            popover.setAttribute("tabindex", "0");
            popover.setAttribute("toggle", "popover");
            popover.setAttribute("trigger", "focus");
            // Update this element
            this.el = popover;
        }
        else {
            // Create the button
            var btnProps = this.props.btnProps || {};
            btnProps.isLink = this.props.isDismissible ? true : false;
            btnProps.toggle = "popover";
            this.props.isDismissible ? btnProps.trigger = "focus" : null;
            var button = button_1.Button(btnProps);
            // Update this element
            this.el = button.el;
            // Set the popover title and content
            typeof (options.title) === "string" ? this.el.setAttribute("title", options.title) : null;
            typeof (options.content) === "string" ? this.el.setAttribute("data-content", options.content) : null;
        }
        // Create the popover
        this._bootstrapObj = core_1.jQuery ? core_1.jQuery(this.el).popover(options) : null;
    };
    // Configures the events
    _Popover.prototype.configureEvents = function () {
        // Set a click event
        this.el.addEventListener("click", function (ev) {
            // Prevent the page from moving to the top
            ev.preventDefault();
        });
    };
    /**
     * Bootstrap
     */
    // Disposes the popover
    _Popover.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.popover("dispose") : null; };
    // Disables the popover
    _Popover.prototype.disable = function () { this._bootstrapObj ? this._bootstrapObj.popover("disable") : null; };
    // Enables the popover
    _Popover.prototype.enable = function () { this._bootstrapObj ? this._bootstrapObj.popover("enable") : null; };
    // Hides the popover
    _Popover.prototype.hide = function () { this._bootstrapObj ? this._bootstrapObj.popover("hide") : null; };
    // Shows the popover
    _Popover.prototype.show = function () { this._bootstrapObj ? this._bootstrapObj.popover("show") : null; };
    // Toggles the popover
    _Popover.prototype.toggle = function () { this._bootstrapObj ? this._bootstrapObj.popover("toggle") : null; };
    // Enables toggling 
    _Popover.prototype.toggleEnabled = function () { this._bootstrapObj ? this._bootstrapObj.popover("toggleEnabled") : null; };
    // Updates the popover
    _Popover.prototype.update = function () { this._bootstrapObj ? this._bootstrapObj.popover("update") : null; };
    return _Popover;
}(base_1.Base));
exports.Popover = function (props) { return new _Popover(props); };
