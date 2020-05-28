import "bootstrap/js/dist/dropdown";
import "popper.js";
import { IDropdown, IDropdownProps } from "../../../@types/components/dropdown";
/**
 * Dropdown Types
 */
export declare enum DropdownTypes {
    Danger = 1,
    Info = 2,
    Primary = 3,
    Secondary = 4,
    Success = 5,
    Warning = 6
}
export declare const Dropdown: (props: IDropdownProps) => IDropdown;
