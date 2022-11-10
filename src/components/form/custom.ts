import { IFormControlProps } from "./controlTypes";
import { IFormProps } from "./formTypes";

/**
 * Custom Controls
 */
export class CustomControls {
    private static _customTypes = {};

    // Gets the event by type
    static getByType(key: number): (props?: IFormControlProps, formProps?: IFormProps) => void { return this._customTypes[key]; }

    // Registers a custom control type
    static registerType(key: number, event: (props?: IFormControlProps, formProps?: IFormProps) => void) { this._customTypes[key] = event; }
}
