import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/util";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";
/**
 * Tooltip Types
 */
export declare enum TooltipTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}
export declare const Tooltip: (props: ITooltipProps) => ITooltip;
