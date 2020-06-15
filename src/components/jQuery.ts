// Get jQuery from the global constant
// This is a fix for some SPO environments
export const getLib = (method: string) => {
    // Ensure the method exists
    if (window["GD"].jQuery.prototype[method]) { return window["GD"].jQuery; }
    if (window["$REST"].jQuery.prototype[method]) { return window["$REST"].jQuery; }
}