"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var button_1 = require("../button");
var HTML = require("./action.html");
/**
 * Card Action
 */
var CardAction = /** @class */ (function () {
    // Constructor
    function CardAction(props, parent) {
        this._el = null;
        this._parent = null;
        this._props = null;
        // Save the properties
        this._parent = parent;
        this._props = props;
        // Create the item
        var elItem = document.createElement("div");
        elItem.innerHTML = HTML;
        this._el = elItem.firstChild;
        // Configure the item
        this.configure();
        // Configure the events
        this.configureEvents();
    }
    // Configure the action
    CardAction.prototype.configure = function () {
        // Set the attributes
        this._el.href = this._props.href || this._el.href;
        this._el.innerHTML = this._props.text == null ? "" : this._props.text;
        // Set the default type
        var defaultType = button_1.ButtonClassNames[this._props.buttonType - 1] || "card-link";
        this._el.classList.add(defaultType);
    };
    // Configure the events
    CardAction.prototype.configureEvents = function () {
        var _this = this;
        // See if there is a click event
        if (this._props.onClick) {
            // Add a click event
            this._el.addEventListener("click", function (ev) {
                // Execute the event
                _this._props.onClick(_this._props, _this._parent.props, ev);
            });
        }
    };
    Object.defineProperty(CardAction.prototype, "el", {
        /**
         * Public Interface
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    return CardAction;
}());
exports.CardAction = CardAction;
