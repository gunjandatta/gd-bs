import { IFormControlProps } from "./controlTypes";

/**
 * Custom Controls
 */
export class CustomControls {
    private static _customTypes = {};

    // Gets the event by type
    static getByType(key: number): (props?: IFormControlProps) => void { return this._customTypes[key]; }

    // Registers a custom control type
    static registerType(key: number, event: (props?: IFormControlProps) => void) { this._customTypes[key] = event; }
}
