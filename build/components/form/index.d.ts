import { IForm, IFormProps } from "../../../@types/components/form";
import { IFormControlProps } from "../../../@types/components/formControl";
import { FormControl as Control } from "./control";
export * from "./custom";
export declare const Form: (props: IFormProps) => IForm;
/**
 * Form Control
 */
export declare const FormControl: (props: IFormControlProps) => Control;
/**
 * Form Control Types
 */
export declare enum FormControlTypes {
    Checkbox = 1,
    Email = 2,
    Dropdown = 3,
    File = 4,
    ListBox = 5,
    MultiDropdown = 6,
    Password = 7,
    Radio = 8,
    Range = 9,
    Readonly = 10,
    Switch = 11,
    TextArea = 12,
    TextField = 13
}
