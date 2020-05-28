import { ISpinner, ISpinnerProps } from "../../../@types/components/spinner";
import { ClassNames } from "../classNames";
/**
 * Spinner Types
 */
export declare enum SpinnerTypes {
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
 * Spinner Class Names
 */
export declare const SpinnerClassNames: ClassNames;
export declare const Spinner: (props: ISpinnerProps) => ISpinner;
