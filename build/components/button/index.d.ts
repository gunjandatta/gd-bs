import "bootstrap/js/dist/button";
import { ClassNames } from "../classNames";
import { IButton, IButtonProps } from "../../../@types/components/button";
/**
 * Button Types
 */
export declare enum ButtonTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Link = 5,
    Primary = 6,
    Secondary = 7,
    Success = 8,
    Warning = 9,
    OutlineDanger = 10,
    OutlineDark = 11,
    OutlineInfo = 12,
    OutlineLight = 13,
    OutlineLink = 14,
    OutlinePrimary = 15,
    OutlineSecondary = 16,
    OutlineSuccess = 17,
    OutlineWarning = 18
}
/**
 * Button Classes
 */
export declare const ButtonClassNames: ClassNames;
export declare const Button: (props: IButtonProps) => IButton;
