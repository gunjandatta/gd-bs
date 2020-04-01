import { IFormControlProps, IFormControl } from "../../../@types/components";
import { FormControl } from "./control";
import * as HTML from "./group.html";

/**
 * Form Group
 */
export class FormGroup {
    private _control: IFormControl = null;
    private _el: HTMLDivElement = null;
    private _props: IFormControlProps = null;

    // Constructor
    constructor(props: IFormControlProps) {
        // Save the properties
        this._props = props;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = HTML as any;
        this._el = el.firstChild as HTMLDivElement;

        // Configure the control
        this.configure();
    }

    // Configure the row
    private configure() {
        // Execute the rendering event
        let returnVal = this._props.onControlRendering ? this._props.onControlRendering(this._props) : null;
        if (returnVal && returnVal.then) {
            // Wait for the event to complete
            returnVal.then(props => {
                // Update the properties
                this._props = props;

                // Render the control
                this.render();
            });
        } else {
            // Render the control
            this.render();
        }
    }

    // Executes after the control is rendered
    private onRendered() {
        // See if there is an event defined
        this._props.onControlRendered ? this._props.onControlRendered(this._control) : null;
    }

    // Renders the control
    private render() {
        // Update the label
        let label = this._el.querySelector("label");
        if (this._props.label) {
            // Set the text
            label.innerHTML = this._props.label;
        } else {
            // Hide the label
            this._el.removeChild(label);
        }

        // Create the control
        this._control = new FormControl(this._props);
        this._el.appendChild(this._control.el);

        // Execute the rendered event
        this.onRendered();
    }

    /**
     * Public Interface
     */

    get control() { return this._control; }
    get el() { return this._el; }
}