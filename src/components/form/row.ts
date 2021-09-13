import { IFormProps, IFormRow } from "./formTypes";
import { IFormControl } from "./controlTypes";
import { FormGroup } from "./group";
import { HTMLRow } from "./templates";

/**
 * Form Row
 */
export class FormRow {
    private _columns: Array<FormGroup> = null;
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
        el.innerHTML = HTMLRow;
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
        for (let i = 0; i < columns.length; i++) {
            let columnProps = columns[i];

            // Set the value
            let value = columnProps.control.value;
            if (value == undefined && this._parent.value) {
                // Set the value
                value = this._parent.value[columnProps.control.name] || value;
            }
            columnProps.control.value = value;

            // Create the column
            let column = new FormGroup(columnProps.control, this._parent);
            this._columns.push(column);
            this._el.appendChild(column.el);

            // Get the class names
            let classNames = (columnProps.className || "").split(" ");
            for (let i = 0; i < classNames.length; i++) {
                let className = classNames[i];

                // Add the class name if it exists
                className ? column.el.classList.add(className) : null;
            }

            // Create the column
            let colSize = columnProps.size > 0 && columnProps.size < 13 ? columnProps.size : 0;

            // See if this column is auto sized
            if (columnProps.isAutoSized || this.props.isAutoSized || this.props.isCentered) {
                // Add the class name
                column.el.classList.add("col-auto");
            }
            // Else, see if a size is defined
            else if (colSize > 0 && colSize < 13) {
                // Add the class name based on the size
                column.el.classList.add("col-" + colSize);
            } else {
                // Default the size
                column.el.classList.add("col");
            }
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
}