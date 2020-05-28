import { IBadge, IBadgeProps } from "../../../@types/components/badge";
import { ClassNames } from "../classNames";
/**
 * Badge Types
 */
export declare enum BadgeTypes {
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
 * Badge Class Names
 */
export declare const BadgeClassNames: ClassNames;
export declare const Badge: (props: IBadgeProps) => IBadge;
