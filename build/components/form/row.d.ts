import { IFormProps, IFormRow } from "../../../@types/components/form";
import { IFormControl } from "../../../@types/components/formControl";
/**
 * Form Row
 */
export declare class FormRow {
    private _columns;
    private _el;
    private _parent;
    private _props;
    constructor(props: IFormRow, parent: IFormProps);
    private configure;
    private renderColumns;
    /**
     * Public Interface
     */
    get el(): HTMLDivElement;
    get controls(): Array<IFormControl>;
    get props(): IFormRow;
}
