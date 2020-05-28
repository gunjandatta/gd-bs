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
var buttonGroup_1 = require("../buttonGroup");
var inputGroup_1 = require("../inputGroup");
var HTML = require("./index.html");
/**
 * Toolbar
 */
var _Toolbar = /** @class */ (function (_super) {
    __extends(_Toolbar, _super);
    // Constructor
    function _Toolbar(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _Toolbar.prototype.configure = function () {
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var el = null;
            // See if this is a button group
            if (item.buttons) {
                // Render an button group
                el = buttonGroup_1.ButtonGroup({ buttons: item.buttons }).el;
            }
            // See if this is an input group
            if (item.inputGroup) {
                // Render an input group
                el = inputGroup_1.InputGroup(item.inputGroup).el;
            }
            // Ensure the element exists
            if (el) {
                // See if there is a spacing value defined, and this is not the last element
                if (this.props.spacing > 0 && i < items.length - 1) {
                    // Add the spacing
                    el.classList.add("mr-" + this.props.spacing);
                }
                // Append the element
                this.el.appendChild(el);
            }
        }
    };
    return _Toolbar;
}(base_1.Base));
exports.Toolbar = function (props) { return new _Toolbar(props); };
