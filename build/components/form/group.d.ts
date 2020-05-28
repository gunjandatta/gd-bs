import { IFormControlProps, IFormControl, IFormProps } from "../../../@types/components";
/**
 * Form Group
 */
export declare class FormGroup {
    private _control;
    private _el;
    private _props;
    private _formProps;
    constructor(props: IFormControlProps, formProps: IFormProps);
    private configure;
    private configureEvents;
    private onRendered;
    private render;
    /**
     * Public Interface
     */
    get control(): IFormControl;
    get el(): HTMLDivElement;
}
