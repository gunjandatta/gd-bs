import { IFormControl, IFormControlProps, IFormControlTypes } from "./formControl";

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
    controls: Array<IFormControl>;
    el: HTMLFormElement,
    getValues: () => { [key: string]: any };
}

/**
 * Form Column
 */
export interface IFormColumn {
    control: IFormControlProps;
    size?: number;
}

/**
 * Form Properties
 */
export interface IFormProps {
    el?: Element | HTMLElement,
    rows?: Array<IFormRow>;
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
    value?: any;
}

/**
 * Form Row
 */
export interface IFormRow {
    isAutoSized?: boolean;
    isCentered?: boolean;
    control?: IFormControlProps;
    colSize?: number;
    columns?: Array<IFormColumn>;
}