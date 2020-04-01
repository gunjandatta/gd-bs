import { IFormProps, IFormRow } from "../../../@types/components/form";
import { IFormControl } from "../../../@types/components/formControl";
import { FormColumn } from "./column";
import * as HTML from "./row.html";

/**
 * Form Row
 */
export class FormRow {
    private _columns: Array<FormColumn> = null;
    private _el: HTMLDivElement = null;
    private _parent: IFormProps = null;
    private _props: IFormRow = null;

    // Constructor
    constructor(props: IFormRow, parent: IFormProps) {
        // Save the parameters
        this._parent = parent;
        this._props = props;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = HTML as any;
        this._el = el.firstChild as HTMLDivElement;

        // Configure the row
        this.configure();
    }

    // Configure the row
    private configure() {
        // Set the attributes
        this._props.isCentered ? this._el.classList.add("align-items-center") : null;

        // Set the class name
        let classNames = this._parent.rowClassName ? this._parent.rowClassName.split(' ') : [];
        classNames = this._props.className ? classNames.concat(this._props.className.split(' ')) : classNames;
        for (let i = 0; i < classNames.length; i++) { this._el.classList.add(classNames[i]); }

        // Clear the columns and group
        this._columns = [];

        // Render the columns
        this.renderColumns();
    }

    // Render the columns
    private renderColumns() {
        // Parse the columns
        let columns = this._props.columns || [];
        for (let j = 0; j < columns.length; j++) {
            // Create the column
            let column = new FormColumn(columns[j], this._props, this.parent.value);
            this._columns.push(column);
            this._el.appendChild(column.el);
        }

    }

    /**
     * Public Interface
     */

    // The component HTML element
    get el(): HTMLDivElement { return this._el; }

    // The form controls
    get controls(): Array<IFormControl> {
        let controls: Array<IFormControl> = [];

        // Parse the columns
        for (let i = 0; i < this._columns.length; i++) {
            // Add the control
            controls.push(this._columns[i].control);
        }

        // Return the controls
        return controls;
    }

    // The component properties
    get props(): IFormRow { return this._props; }

    // The parent properties
    get parent(): IFormProps { return this._parent; }
}