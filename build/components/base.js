"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base Components
 */
var Base = /** @class */ (function () {
    // Constructor
    function Base(html, props) {
        this._bootstrapObj = null;
        this._el = null;
        this._props = null;
        // Save the properties
        this._props = props;
        // Create the element
        var el = document.createElement("div");
        el.innerHTML = html == null ? "" : html;
        this._el = el.firstChild ? el.firstChild : el;
        // Set the class names
        var classNames = (this._props.className || "").split(' ');
        for (var i = 0; i < classNames.length; i++) {
            // Ensure the class name exists
            var className = classNames[i];
            if (className) {
                // Add the class
                this._el.classList.add(className);
            }
        }
        // Execute the assign to event
        this._props.assignTo ? this._props.assignTo(this) : null;
    }
    /**
     * Internal Methods
     */
    // Configures the parent element
    Base.prototype.configureParent = function () {
        // Create the element
        var el = document.createElement("div");
        el.appendChild(this._el);
        // See if the parent element exists
        if (this._props.el) {
            // Ensure the class list exists and it's not the body element
            if (this._props.el.classList && this._props.el.tagName != "BODY") {
                // Set the bootstrap class
                this._props.el.classList.contains("bs") ? null : this._props.el.classList.add("bs");
            }
            // Append the elements
            while (el.children.length > 0) {
                this._props.el.appendChild(el.children[0]);
            }
            // Update the element
            el = this._props.el;
        }
        else {
            // Set the bootstrap class
            el.classList.add("bs");
        }
        // Return the parent element
        return el;
    };
    Object.defineProperty(Base.prototype, "el", {
        /**
         * Public Properties
         */
        // The component element
        get: function () { return this._el; },
        set: function (el) { this._el = el; },
        enumerable: true,
        configurable: true
    });
    // Hides the alert
    Base.prototype.hide = function () {
        // Ensure the alert is hidden
        if (this._el.classList.contains("d-none")) {
            return;
        }
        // Hide the alert
        this._el.classList.add("d-none");
    };
    Object.defineProperty(Base.prototype, "props", {
        // The component properties
        get: function () { return this._props; },
        enumerable: true,
        configurable: true
    });
    // Shows the alert
    Base.prototype.show = function () {
        // Ensure the alert is visible
        if (this._el.classList.contains("d-none")) {
            // Show the alert
            this._el.classList.remove("d-none");
        }
    };
    return Base;
}());
exports.Base = Base;
