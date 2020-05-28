import "bootstrap/js/dist/popover";
import "popper.js";
import { IPopover, IPopoverProps } from "../../../@types/components/popover";
/**
 * Popover Types
 */
export declare enum PopoverTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}
export declare const Popover: (props: IPopoverProps) => IPopover;
