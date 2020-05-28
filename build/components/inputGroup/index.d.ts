import { IInputGroup, IInputGroupProps } from "../../../@types/components/inputGroup";
/**
 * Input Group Types
 */
export declare enum InputGroupTypes {
    Email = 1,
    File = 2,
    Password = 3,
    Range = 4,
    Search = 5,
    TextArea = 6,
    TextField = 7
}
export declare const InputGroup: (props: IInputGroupProps) => IInputGroup;
