import { IFormControlProps } from "../../../@types/components/formControl";
/**
 * Custom Controls
 */
export declare class CustomControls {
    private static _customTypes;
    static getByType(key: number): (props?: IFormControlProps) => void;
    static registerType(key: number, event: (props?: IFormControlProps) => void): void;
}
