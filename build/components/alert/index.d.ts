import "bootstrap/js/dist/alert";
import { IAlert, IAlertProps } from "../../../@types/components/alert";
import { ClassNames } from "../classNames";
/**
 * Alert Types
 */
export declare enum AlertTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}
/**
 * Alert Class Names
 */
export declare const AlertClassNames: ClassNames;
export declare const Alert: (props: IAlertProps) => IAlert;
