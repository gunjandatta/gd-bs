/**
 * Class Names
 */
export class ClassNames {
    private _items: Array<string> = null;

    // Constructor
    constructor(items: Array<string>) {
        // Set the items
        this._items = items || [];
    }

    // Gets a class name by type
    // The enumerator value is equal to the index + 1
    getByType(type: number) { return this._items[type - 1]; }

    // Parse the class names
    parse(callback: (className: string) => void) {
        // Parse the items
        for (let i = 0; i < this._items.length; i++) {
            // Call the callback
            callback(this._items[i]);
        }
    }
}