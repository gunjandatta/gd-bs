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
var progress_1 = require("../progress");
var HTML = require("./index.html");
/**
 * Progress Group
 * @param props The progress group properties.
 */
var _ProgressGroup = /** @class */ (function (_super) {
    __extends(_ProgressGroup, _super);
    // Constructor
    function _ProgressGroup(props) {
        var _this = _super.call(this, HTML, props) || this;
        // Configure the collapse
        _this.configure();
        // Configure the parent
        _this.configureParent();
        return _this;
    }
    // Configure the card group
    _ProgressGroup.prototype.configure = function () {
        // Parse the progress bars
        var progressbars = this.props.progressbars || [];
        for (var i = 0; i < progressbars.length; i++) {
            // Add the progress bar
            this.el.appendChild(progress_1.Progress(progressbars[i]).progressBar);
        }
    };
    return _ProgressGroup;
}(base_1.Base));
exports.ProgressGroup = function (props) { return new _ProgressGroup(props); };
