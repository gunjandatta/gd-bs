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
var card_1 = require("../card");
var HTML = require("./index.html");
/**
 * Card Group
 * @property props - The button group properties.
 */
var _CardGroup = /** @class */ (function (_super) {
    __extends(_CardGroup, _super);
    // Constructor
    function _CardGroup(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the card group
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _CardGroup.prototype.configure = function () {
        // Set the default class
        this.el.classList.add(this.props.isDeck ? "card-deck" : "card-group");
        // Parse the cards
        var cards = this.props.cards || [];
        for (var i = 0; i < cards.length; i++) {
            // Add the card
            this.el.appendChild(card_1.Card(cards[i]).el);
        }
    };
    return _CardGroup;
}(base_1.Base));
exports.CardGroup = function (props) { return new _CardGroup(props); };
