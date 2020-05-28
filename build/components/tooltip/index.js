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
require("bootstrap/js/dist/tooltip");
require("bootstrap/js/dist/util");
var core_1 = require("../../core");
var base_1 = require("../base");
var button_1 = require("../button");
var HTML = require("./index.html");
/**
 * Tooltip Types
 */
var TooltipTypes;
(function (TooltipTypes) {
    TooltipTypes[TooltipTypes["Auto"] = 1] = "Auto";
    TooltipTypes[TooltipTypes["Bottom"] = 2] = "Bottom";
    TooltipTypes[TooltipTypes["Left"] = 3] = "Left";
    TooltipTypes[TooltipTypes["Right"] = 4] = "Right";
    TooltipTypes[TooltipTypes["Top"] = 5] = "Top";
})(TooltipTypes = exports.TooltipTypes || (exports.TooltipTypes = {}));
/**
 * Tooltip
 */
var _Tooltip = /** @class */ (function (_super) {
    __extends(_Tooltip, _super);
    // Constructor
    function _Tooltip(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the tooltip
    _Tooltip.prototype.configure = function () {
        // Set the button text
        this.el.innerHTML = this.props.text == null ? "" : this.props.text;
        // See if a type was defined
        var className = button_1.ButtonClassNames.getByType(this.props.btnType) || button_1.ButtonClassNames.getByType(button_1.ButtonTypes.Primary);
        if (className) {
            // Add the class name
            this.el.classList.add(className);
        }
        // Configure the options
        this.configureOptions();
    };
    // Configure the options
    _Tooltip.prototype.configureOptions = function () {
        // Update the options
        var options = this.props.options || {};
        // See if a container was defined
        if (typeof (options.container) !== "string") {
            // Set the default container
            options.container = "#bs-tooltips";
            // Ensure the main tooltip element exists
            // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
            var elParent = document.querySelector(options.container);
            if (elParent == null) {
                // Create the main element
                elParent = document.createElement("div");
                elParent.classList.add("bs");
                elParent.id = "bs-tooltips";
                // Add it to the page
                document.body.appendChild(elParent);
            }
        }
        // Set the type
        switch (this.props.type) {
            // Auto
            case TooltipTypes.Auto:
                options.placement = "auto";
                break;
            // Bottom
            case TooltipTypes.Bottom:
                options.placement = "bottom";
                break;
            // Left
            case TooltipTypes.Left:
                options.placement = "left";
                break;
            // Right
            case TooltipTypes.Right:
                options.placement = "right";
                break;
            // Default - Top
            default:
                options.placement = "top";
                break;
        }
        // Set the attributes
        this.el.setAttribute("data-placement", options.placement);
        // See if the title is a string
        if (typeof (options.title) === "string") {
            // Set the attribute
            this.el.setAttribute("title", options.title);
        }
        // Create the tooltip
        this._bootstrapObj = core_1.jQuery ? core_1.jQuery(this.el).tooltip(options) : null;
    };
    /**
     * Bootstrap
     */
    // Disposes the tooltip
    _Tooltip.prototype.dispose = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("dispose") : null; };
    // Enables the tooltip
    _Tooltip.prototype.enable = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("enable") : null; };
    // Hides the tooltip
    _Tooltip.prototype.hide = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("hide") : null; };
    // Shows the tooltip
    _Tooltip.prototype.show = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("show") : null; };
    // Toggles the tooltip
    _Tooltip.prototype.toggle = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("toggle") : null; };
    // Enables the toggle
    _Tooltip.prototype.toggleEnabled = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("toggleEnabled") : null; };
    // Updates the tooltip
    _Tooltip.prototype.update = function () { this._bootstrapObj ? this._bootstrapObj.tooltip("update") : null; };
    return _Tooltip;
}(base_1.Base));
exports.Tooltip = function (props) { return new _Tooltip(props); };
