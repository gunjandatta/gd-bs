import { IFormColumn, IFormRow } from "../../../@types/components/form";
import { IFormControl } from "../../../@types/components/formControl";
import { FormGroup } from "./group";
import * as HTML from "./column.html";

/**
 * Form Column
 */
export class FormColumn {
    private _formGroup: FormGroup = null;
    private _el: HTMLDivElement = null;
    private _parent: IFormRow = null;
    private _props: IFormColumn = null;

    // Constructor
    constructor(props: IFormColumn, parent: IFormRow, formValue: any) {
        // Save the parameters
        this._parent = parent;
        this._props = props;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = HTML as any;
        this._el = el.firstChild as HTMLDivElement;

        // Configure the column
        this.configure(formValue);
    }

    // Configure the column
    private configure(formValue: any) {
        let colSize = this._props.size > 0 && this._props.size < 13 ? this._props.size : 0;

        // See if this column is auto sized
        if (this._props.isAutoSized || this._parent.isAutoSized || this._parent.isCentered) {
            // Add the class name
            this._el.classList.add("col-auto");
        } else {
            // Add the class name based on the size
            this._el.classList.add(colSize > 0 ? "col-" + colSize : "col");
        }

        // Set the value
        this._props.control.value = this._props.control.value == null && formValue ? formValue[this._props.control.name] : this._props.control.value;

        // Create the form control
        this._formGroup = new FormGroup(this._props.control);
        this._el.appendChild(this._formGroup.el);
    }

    /**
     * Public Interface
     */

    // Returns the form control
    get control(): IFormControl { return this._formGroup.control; }

    // The column HTML element
    get el() { return this._el; }
}