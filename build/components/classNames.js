"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class Names
 */
var ClassNames = /** @class */ (function () {
    // Constructor
    function ClassNames(items) {
        this._items = null;
        // Set the items
        this._items = items || [];
    }
    // Gets a class name by type
    // The enumerator value is equal to the index + 1
    ClassNames.prototype.getByType = function (type) { return this._items[type - 1]; };
    // Parse the class names
    ClassNames.prototype.parse = function (callback) {
        // Parse the items
        for (var i = 0; i < this._items.length; i++) {
            // Call the callback
            callback(this._items[i]);
        }
    };
    return ClassNames;
}());
exports.ClassNames = ClassNames;
