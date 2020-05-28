"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Custom Controls
 */
var CustomControls = /** @class */ (function () {
    function CustomControls() {
    }
    // Gets the event by type
    CustomControls.getByType = function (key) { return this._customTypes[key]; };
    // Registers a custom control type
    CustomControls.registerType = function (key, event) { this._customTypes[key] = event; };
    CustomControls._customTypes = {};
    return CustomControls;
}());
exports.CustomControls = CustomControls;
