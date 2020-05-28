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
var HTML = require("./index.html");
/**
 * Button Group
 * @property props - The button group properties.
 */
var _ButtonGroup = /** @class */ (function (_super) {
    __extends(_ButtonGroup, _super);
    // Constructor
    function _ButtonGroup(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._buttons = null;
        // Configure the button group
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the button group
    _ButtonGroup.prototype.configure = function () {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;
        // Set the class names
        this.el.classList.add(this.props.isVertical ? "btn-group-vertical" : "btn-group");
        this.props.isLarge ? this.el.classList.add("btn-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-group-sm") : null;
        // Render the buttons
        this.renderButtons();
    };
    // Render the buttons
    _ButtonGroup.prototype.renderButtons = function () {
        // Clear the buttons
        this._buttons = [];
        // Parse the buttons
        var buttons = this.props.buttons || [];
        for (var i = 0; i < buttons.length; i++) {
            var buttonProps = buttons[i];
            // Set the property
            buttonProps.type = buttonProps.type || this.props.buttonType;
            // Create the button
            var button = button_1.Button(buttonProps);
            this._buttons.push(button);
            // Append the button to the group
            this.el.appendChild(button.el);
        }
    };
    Object.defineProperty(_ButtonGroup.prototype, "buttons", {
        /**
         * Public Interface
         */
        // Reference to the buttons
        get: function () { return this._buttons; },
        enumerable: true,
        configurable: true
    });
    return _ButtonGroup;
}(base_1.Base));
exports.ButtonGroup = function (props) { return new _ButtonGroup(props); };
