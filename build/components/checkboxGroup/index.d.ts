import { ICheckboxGroup, ICheckboxGroupProps } from "../../../@types/components/checkboxGroup";
/**
 * Checkbox Group Types
 */
export declare enum CheckboxGroupTypes {
    Checkbox = 1,
    Radio = 2,
    Switch = 3
}
export declare const CheckboxGroup: (props: ICheckboxGroupProps) => ICheckboxGroup;
