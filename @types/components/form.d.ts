import { IFormControl, IFormControlProps, IFormControlTypes } from "./formControl";

/**
 * Form
 */
export const Form: (props: IFormProps) => IForm;

/**
 * Form
 */
export interface IForm {
    controls: Array<IFormControl>;
    el: HTMLFormElement;
    getControl: (name: string) => IFormControl;
    getValues: () => { [key: string]: any };

    /** Hides the form. */
    hide: () => void;
    
    isValid: () => boolean;
    
    /** Shows the form. */
    show: () => void;
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
    rowClassName?: string;
    rows?: Array<IFormRow>;
    onControlRendering?: (control: IFormControlProps) => void | Promise<IFormControlProps>;
    onControlRendered?: (control: IFormControl) => void | Promise<IFormControl>;
    onRendered?: (controls: Array<IFormControl>) => void;
    value?: any;
}

/**
 * Form Row
 */
export interface IFormRow {
    className?: string;
    isAutoSized?: boolean;
    isCentered?: boolean;
    control?: IFormControlProps;
    colSize?: number;
    columns?: Array<IFormColumn>;
}