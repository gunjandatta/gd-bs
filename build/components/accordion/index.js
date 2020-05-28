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
var core_1 = require("../../core");
var base_1 = require("../base");
var HTML = require("./index.html");
var item_1 = require("./item");
/**
 * Accordion
 */
var _Accordion = /** @class */ (function (_super) {
    __extends(_Accordion, _super);
    // Constructor
    function _Accordion(props) {
        var _this = _super.call(this, HTML, props) || this;
        _this._items = null;
        // Ensure the id is set
        _this.el.id = props.id || "accordion";
        // Render the items
        _this.renderItems();
        // Configure the parent
        _this.configureParent();
        // Apply the options if they exist
        _this._bootstrapObj = core_1.jQuery ? core_1.jQuery(_this.el).collapse(props.options || {}) : null;
        return _this;
    }
    // Renders the items
    _Accordion.prototype.renderItems = function () {
        // Clear the items
        this._items = [];
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Create the item and append it to the card
            var item = new item_1.AccordionItem(this.el.id, this.el.id + "_" + i, items[i]);
            this._items.push(item);
            this.el.appendChild(item.el);
        }
    };
    return _Accordion;
}(base_1.Base));
exports.Accordion = function (props) { return new _Accordion(props); };
