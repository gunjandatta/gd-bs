import { ICheckboxGroup } from "../../../@types/components/checkboxGroup";
import { IDropdown } from "../../../@types/components/dropdown";
import { IInputGroup } from "../../../@types/components/inputGroup";
import { IFormControl, IFormControlProps } from "../../../@types/components/formControl";
import { IListBox } from "../../../@types/components/listBox";
/**
 * Form Control
 */
export declare class FormControl implements IFormControl {
    private _cb;
    private _el;
    private _elLabel;
    private _ddl;
    private _lb;
    private _props;
    private _tb;
    constructor(props: IFormControlProps, elLabel?: HTMLLabelElement);
    private configure;
    private create;
    /**
     * Public Interface
     */
    get el(): HTMLElement;
    get checkbox(): ICheckboxGroup;
    get dropdown(): IDropdown;
    get control(): ICheckboxGroup | IDropdown | IInputGroup | IListBox;
    get listbox(): IListBox;
    get textbox(): IInputGroup;
    getValue(): any;
    get isValid(): boolean;
    get props(): IFormControlProps;
    setLabel(value: string): void;
    setValue(value: any): void;
}
