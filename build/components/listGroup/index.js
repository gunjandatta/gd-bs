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
require("bootstrap/js/dist/tab");
var base_1 = require("../base");
var classNames_1 = require("../classNames");
var item_1 = require("./item");
var HTML = require("./index.html");
var HTMLTabs = require("./tabs.html");
/**
 * List Group Item Types
 */
var ListGroupItemTypes;
(function (ListGroupItemTypes) {
    ListGroupItemTypes[ListGroupItemTypes["Danger"] = 1] = "Danger";
    ListGroupItemTypes[ListGroupItemTypes["Dark"] = 2] = "Dark";
    ListGroupItemTypes[ListGroupItemTypes["Info"] = 3] = "Info";
    ListGroupItemTypes[ListGroupItemTypes["Light"] = 4] = "Light";
    ListGroupItemTypes[ListGroupItemTypes["Primary"] = 5] = "Primary";
    ListGroupItemTypes[ListGroupItemTypes["Secondary"] = 6] = "Secondary";
    ListGroupItemTypes[ListGroupItemTypes["Success"] = 7] = "Success";
    ListGroupItemTypes[ListGroupItemTypes["Warning"] = 8] = "Warning";
})(ListGroupItemTypes = exports.ListGroupItemTypes || (exports.ListGroupItemTypes = {}));
/**
 * List Group Classes
 */
exports.ListGroupClassNames = new classNames_1.ClassNames([
    "list-group-item-danger",
    "list-group-item-dark",
    "list-group-item-info",
    "list-group-item-light",
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-warning"
]);
/**
 * List Group
 * @param props The list group properties.
 */
var _ListGroup = /** @class */ (function (_super) {
    __extends(_ListGroup, _super);
    // Constructor
    function _ListGroup(props) {
        var _this = _super.call(this, props.isTabs && props.colWidth > 0 && props.colWidth < 12 ? HTMLTabs : HTML, props) || this;
        _this._items = null;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _ListGroup.prototype.configure = function () {
        // Update the list group
        var listGroup = this.el.querySelector(".list-group") || this.el;
        this.props.isFlush ? listGroup.classList.add("list-group-flush") : null;
        this.props.isHorizontal ? listGroup.classList.add("list-group-horizontal") : null;
        this.props.isTabs ? listGroup.setAttribute("role", "tablist") : null;
        // See if the column width is defined
        var column = this.el.querySelector(".col");
        if (column) {
            // Update the width
            column.className = "col-" + this.props.colWidth;
        }
        // Render the items
        this.renderItems(listGroup);
    };
    // Render the items
    _ListGroup.prototype.renderItems = function (listGroup) {
        // Clear the items
        this._items = [];
        // Get the tab content element
        var tabs = this.el.querySelector(".tab-content");
        // Parse the items
        var items = this.props.items || [];
        for (var i = 0; i < items.length; i++) {
            // Create the item
            var item = new item_1.ListGroupItem(items[i], tabs ? true : false);
            this._items.push(item);
            listGroup.appendChild(item.el);
            // See if we are rendering tabs
            if (tabs) {
                // Add the tab content
                tabs.appendChild(item.elTab);
                // See if the fade option is enabled
                if (this.props.fadeTabs) {
                    // Set the class name
                    item.elTab.classList.add("fade");
                    // See if the tab is active
                    if (item.props.isActive) {
                        // Set the class name
                        item.elTab.classList.add("show");
                    }
                }
            }
        }
    };
    /**
     * Public Interface
     */
    _ListGroup.prototype.showTab = function (tabId) {
        // Parse the tabs
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i];
            // See if this is the target tab
            if (tabId === i + 1 || item.elTab.id == tabId) {
                // Toggle it if it's not visible
                item.isVisible ? null : item.toggle(this.props.fadeTabs);
            }
            // Else, see if it's visible
            else if (item.isVisible) {
                // Toggle it
                item.toggle(this.props.fadeTabs);
            }
        }
    };
    return _ListGroup;
}(base_1.Base));
exports.ListGroup = function (props) { return new _ListGroup(props); };
