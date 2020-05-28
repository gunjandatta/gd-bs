"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var control_1 = require("./control");
var HTML = require("./group.html");
/**
 * Form Group
 */
var FormGroup = /** @class */ (function () {
    // Constructor
    function FormGroup(props, formProps) {
        this._control = null;
        this._el = null;
        this._props = null;
        this._formProps = null;
        // Save the properties
        this._props = props;
        this._formProps = formProps;
        // Create the element
        var el = document.createElement("div");
        el.innerHTML = HTML;
        this._el = el.firstChild;
        // Configure the control
        this.configure();
    }
    // Configure the row
    FormGroup.prototype.configure = function () {
        var _this = this;
        // Execute the rendering event
        this.configureEvents(this._props.onControlRendering).then(function () {
            // Execute the parent rendering event
            _this.configureEvents(_this._formProps.onControlRendering).then(function () {
                // Render the control
                _this.render();
            });
        });
    };
    // Configure the events
    FormGroup.prototype.configureEvents = function (event) {
        var _this = this;
        // Return a promise
        return new Promise(function (resolve, reject) {
            // Execute the rendering event
            var returnVal = event ? event(_this._props) : null;
            if (returnVal && returnVal.then) {
                // Wait for the event to complete
                returnVal.then(function (props) {
                    // Update the properties
                    _this._props = props;
                    // Resolve the promise
                    resolve();
                }, reject);
            }
            else {
                // Resolve the promise
                resolve();
            }
        });
    };
    // Executes after the control is rendered
    FormGroup.prototype.onRendered = function () {
        // Execute the rendered events
        this._props.onControlRendered ? this._props.onControlRendered(this._control) : null;
        this._formProps.onControlRendered ? this._formProps.onControlRendered(this._control) : null;
    };
    // Renders the control
    FormGroup.prototype.render = function () {
        // Update the label
        var elLabel = this._el.querySelector("label");
        var label = this._props.label || (this._control && this._control.props.label);
        if (label) {
            // Set the text
            elLabel.innerHTML = label;
        }
        else {
            // Remove the label
            this._el.removeChild(elLabel);
        }
        // Create the control
        this._control = new control_1.FormControl(this._props, elLabel);
        this._el.appendChild(this._control.el);
        // Execute the rendered event
        this.onRendered();
    };
    Object.defineProperty(FormGroup.prototype, "control", {
        /**
         * Public Interface
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroup.prototype, "el", {
        get: function () { return this._el; },
        enumerable: true,
        configurable: true
    });
    return FormGroup;
}());
exports.FormGroup = FormGroup;
