import { IFormControl, IFormControlTypes } from "./formControl";

/**
 * Form
 */
export const Form: (props: IFormProps) => IForm;

/**
 * Form Control Types
 */
export const FormControlTypes: IFormControlTypes;

/**
 * Form
 */
export interface IForm {
    el: HTMLFormElement,
    getValues: () => { [key: string]: any };
}

/**
 * Form Column
 */
export interface IFormColumn {
    control: IFormControl;
    size?: number;
}

/**
 * Form Properties
 */
export interface IFormProps {
    el?: Element | HTMLElement,
    rows?: Array<IFormRow>;
    value?: any;
}

/**
 * Form Row
 */
export interface IFormRow {
    isAutoSized?: boolean;
    isCentered?: boolean;
    control?: IFormControl;
    colSize?: number;
    columns?: Array<IFormColumn>;
}