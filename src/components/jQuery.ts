// Get jQuery from the global constant
// This is a fix for some SPO environments
export const getLib = () => { return window["GD"].jQuery; }