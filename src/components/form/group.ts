import { IFormControlProps, IFormControl } from "./controlTypes";
import { IFormProps } from "./formTypes";
import { FormControl } from "./control";
import { HTMLGroup } from "./templates";
import { FormControlTypes } from "./types";

/**
 * Form Group
 */
export class FormGroup {
    private _control: IFormControl = null;
    private _el: HTMLDivElement = null;
    private _props: IFormControlProps = null;
    private _formProps: IFormProps = null;

    // Constructor
    constructor(props: IFormControlProps, formProps: IFormProps) {
        // Save the properties
        this._props = props;
        this._formProps = formProps;

        // Create the element
        let el = document.createElement("div");
        el.innerHTML = HTMLGroup;
        this._el = el.firstChild as HTMLDivElement;
        this._el.className = formProps.groupClassName = formProps.groupClassName || "";

        // Configure the control
        this.configure();
    }

    // Configure the row
    private configure() {
        // Execute the rendering event
        this.configureEvents(this._props.onControlRendering as any).then(() => {
            // Execute the parent rendering event
            this.configureEvents(this._formProps.onControlRendering as any).then(() => {
                // Remove the rendering event to prevent a duplicate run
                let onControlRendering = this._props.onControlRendering;
                this._props.onControlRendering = null;

                // Render the control
                this.render();

                // Update the property
                this._props.onControlRendering = onControlRendering;
            })
        });
    }

    // Configure the events
    private configureEvents(event: (control: IFormControlProps) => PromiseLike<IFormControlProps>): PromiseLike<void> {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Execute the rendering event
            let returnVal = event ? event(this._props) : null;
            if (returnVal && returnVal.then) {
                // Wait for the event to complete
                returnVal.then(props => {
                    // Update the properties
                    this._props = props;

                    // Resolve the promise
                    resolve();
                }, reject);
            } else {
                // Resolve the promise
                resolve();
            }
        });
    }

    // Renders the control
    private render() {
        // Update the label
        let elLabel = this._el.querySelector("label");
        let label = this._props.label || (this._control && this._control.props.label);
        if (label) {
            // Set the text
            elLabel.innerHTML = label;
        } else {
            // Remove the label
            this._el.removeChild(elLabel);
            elLabel = null;
        }

        // Update the description
        let elDescription = this._el.querySelector("small");
        let description = this._props.description || (this._control && this._control.props.description);
        if (description) {
            // Set the text
            elDescription.innerHTML = description;
        } else {
            // Remove the description
            this._el.removeChild(elDescription);
            elDescription = null;
        }

        // Create the control
        this._control = new FormControl(this._props, this._formProps, elLabel);

        // Wait for the control to be created
        this._control.isLoaded().then(() => {
            // See if the id/name and control element exists
            let controlId = this._props.id || this._props.name;
            let elControl = this._control.control && this._control.control.el ? this._control.control.el : null;
            elControl = elControl ? elControl.querySelector("input") || elControl.querySelector("select") || elControl : null;
            if (controlId && elControl && this._props.type != FormControlTypes.Checkbox) {
                // See if the description exists
                if (elDescription) {
                    // Set the id and aria properties
                    elDescription ? elDescription.id = controlId + "_desc" : null;
                    elControl.setAttribute("aria-describedby", elDescription.id);
                }

                // See if the label exists
                if (elLabel) {
                    // Set the id and aria properties
                    elLabel ? elLabel.id = controlId + "_label" : null;
                    elControl.setAttribute("aria-labelledby", elLabel.id);
                }
            }

            // Append the control, after the label
            elDescription ? this._el.insertBefore(this._control.el, elDescription) : this._el.appendChild(this._control.el);
        });
    }

    /**
     * Public Interface
     */

    get control() { return this._control; }
    get el() { return this._el; }
}