"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTML = require("./item.html");
var action_1 = require("./action");
/**
 * Card Body
 */
var CardBody = /** @class */ (function () {
    // Constructor
    function CardBody(props) {
        this._el = null;
        this._props = null;
        // Save the properties
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
    // Configure the body
    CardBody.prototype.configure = function () {
        // Set the class names
        if (this._props.className) {
            this._el.classList.add(this._props.className);
        }
        // Update the title
        var elTitle = this._el.querySelector(".card-title");
        if (this._props.title || this._props.onRenderTitle) {
            // See if the title is a string
            var title = this._props.title || "";
            if (typeof (title) === "string") {
                // Set the title
                elTitle.innerHTML += title;
            }
            else {
                // Append the element
                elTitle.appendChild(title);
            }
            // Call the render event
            this._props.onRenderTitle ? this._props.onRenderTitle(elTitle, this._props) : null;
        }
        else {
            // Remove the title
            this._el.removeChild(elTitle);
        }
        // Update the sub-title
        var subTitle = this._el.querySelector(".card-subtitle");
        if (this._props.subTitle) {
            // Set the title
            subTitle.innerHTML = this._props.subTitle;
        }
        else {
            // Remove the title
            this._el.removeChild(subTitle);
        }
        // Update the text
        var text = this._el.querySelector(".card-text");
        if (this._props.text) {
            // Set the title
            text.innerHTML = this._props.text;
        }
        else {
            // Remove the title
            this._el.removeChild(text);
        }
        // Set the content
        var content = this._props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            this._el.innerHTML += content;
        }
        else {
            // Append the element
            this._el.appendChild(content);
        }
        // Render the actions
        this.renderActions();
    };
    // Configure the events
    CardBody.prototype.configureEvents = function () {
        var _this = this;
        // Call the render event if it exists
        this._props.onRender ? this._props.onRender(this._el, this._props) : null;
        // See if there is a click event
        if (this._props.onClick) {
            // Set the click event
            this._el.addEventListener("click", function (ev) {
                // Execute the event
                _this._props.onClick(_this._props, ev);
            });
        }
    };
    // Render the card actions
    CardBody.prototype.renderActions = function () {
        // Parse the actions
        var actions = this._props.actions || [];
        for (var i = 0; i < actions.length; i++) {
            // Add the action
            var action = new action_1.CardAction(actions[i], this);
            this._el.appendChild(action.el);
        }
    };
    Object.defineProperty(CardBody.prototype, "el", {
        /**
         * Public Interface
         */
        // The component HTML element
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardBody.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    return CardBody;
}());
exports.CardBody = CardBody;
