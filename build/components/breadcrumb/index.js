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
var HTML = require("./index.html");
var item_1 = require("./item");
/**
 * Breadcrumb
 */
var _Breadcrumb = /** @class */ (function (_super) {
    __extends(_Breadcrumb, _super);
    // Constructor
    function _Breadcrumb(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Render the items
        _this.renderItems();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configures the events
    _Breadcrumb.prototype.configureEvents = function (item) {
        var _this = this;
        // See if there is a click event
        if (this.props.onClick) {
            // Add the click event
            item.el.addEventListener("click", function (ev) {
                // Call the click event
                _this.props.onClick(item.props, ev);
            });
        }
    };
    // Renders the breadcrumb items
    _Breadcrumb.prototype.renderItems = function () {
        // Get the list element
        var elList = this.el.querySelector(".breadcrumb");
        // Parse the item properties
        var itemProps = this.props.items || [];
        for (var i = 0; i < itemProps.length; i++) {
            var itemProp = itemProps[i];
            // Set the active flag
            itemProp.isActive = i == itemProps.length - 1;
            // Render the item
            var item = new item_1.BreadcrumbItem(itemProp);
            // Configure the events
            this.configureEvents(item);
            // Add the item
            elList.appendChild(item.el);
        }
    };
    return _Breadcrumb;
}(base_1.Base));
exports.Breadcrumb = function (props) { return new _Breadcrumb(props); };
