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
var modal_1 = require("../modal");
var base_1 = require("../base");
var HTML = require("./index.html");
/**
 * Panel Types
 */
var PanelTypes;
(function (PanelTypes) {
    PanelTypes[PanelTypes["Full"] = 1] = "Full";
    PanelTypes[PanelTypes["Large"] = 2] = "Large";
    PanelTypes[PanelTypes["Medium"] = 3] = "Medium";
    PanelTypes[PanelTypes["Small"] = 4] = "Small";
    PanelTypes[PanelTypes["XLarge"] = 5] = "XLarge";
})(PanelTypes = exports.PanelTypes || (exports.PanelTypes = {}));
/**
 * Panel
 */
var _Panel = /** @class */ (function (_super) {
    __extends(_Panel, _super);
    // Constructor
    function _Panel(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._modal = null;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Panel.prototype.configure = function () {
        // Create the modal
        var modalProps = this.props.modalProps || {};
        modalProps.el = modalProps.el || this.el;
        this._modal = modal_1.Modal(modalProps);
        // Set the panel type
        switch (this.props.type) {
            // Full
            case PanelTypes.Full:
                // Add the class name
                this._modal.el.classList.add("panel-full");
                break;
            // Large
            case PanelTypes.Large:
                // Add the class name
                this._modal.el.classList.add("panel-lg");
                break;
            // Small
            case PanelTypes.Small:
                // Add the class name
                this._modal.el.classList.add("panel-sm");
                break;
            // Extra Large
            case PanelTypes.XLarge:
                // Add the class name
                this._modal.el.classList.add("panel-xl");
                break;
            // Default - Medium
            default:
                // Add the class name
                this._modal.el.classList.add("panel-md");
                break;
        }
    };
    /**
     * Public Interface
     */
    // Disposes the modal
    _Panel.prototype.dispose = function () { this._modal.dispose(); };
    // Hides the modal
    _Panel.prototype.hide = function () { return this._modal.hide(); };
    Object.defineProperty(_Panel.prototype, "modal", {
        // Returns the modal
        get: function () { return this._modal; },
        enumerable: true,
        configurable: true
    });
    // Shows the modal
    _Panel.prototype.show = function () { return this._modal.show(); };
    // Toggles the modal
    _Panel.prototype.toggle = function () { return this._modal.toggle(); };
    return _Panel;
}(base_1.Base));
exports.Panel = function (props) { return new _Panel(props); };
