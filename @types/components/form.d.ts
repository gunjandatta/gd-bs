import { IFormControl, IFormControlProps, IFormControlTypes } from "./formControl";

/**
 * Form
 */
export const Form: (props: IFormProps) => IForm;

/**
 * Form
 */
export interface IForm {
    /** The form controls */
    controls: Array<IFormControl>;

    /** The form element */
    el: Element | HTMLElement;

    /** Gets a control by its name */
    getControl: (name: string) => IFormControl;

    /** Returns the form values */
    getValues: () => { [key: string]: any };

    /** Hides the form. */
    hide: () => void;

    /** Validates the form */
    isValid: () => boolean;

    /** Shows the form. */
    show: () => void;
}

/**
 * Form Column
 */
export interface IFormColumn {
    control: IFormControlProps;
    isAutoSized?: boolean;
    size?: number;
}

/**
 * Form Properties
 */
export interface IFormProps {
    className?: string;
    controls?: Array<IFormControl>;
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
    columns?: Array<IFormColumn>;
}