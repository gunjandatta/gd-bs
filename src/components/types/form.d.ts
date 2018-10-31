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
    el: HTMLFormElement;
    getControl: (name: string) => IFormControl;
    getValues: () => { [key: string]: any };
    isValid: () => boolean;
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
    className?: string;
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