import { IInputGroup, IInputGroupFileValue, IInputGroupProps } from "./types";
import { Base } from "../base";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { IDropdown, IDropdownItem } from "../dropdown/types";
import { HTML } from "./templates";

/**
 * Input Group Types
 */
export enum InputGroupTypes {
    ColorPicker = 1,
    Email = 2,
    File = 3,
    Password = 4,
    Range = 5,
    Search = 6,
    TextArea = 7,
    TextField = 8
}

/**
 * Input Group
 * @param props The input group properties.
 */
class _InputGroup extends Base<IInputGroupProps> implements IInputGroup {
    private _ddlAppended: IDropdown = null;
    private _ddlPrepended: IDropdown = null;
    private _fileValue: IInputGroupFileValue = null;
    private _initFl: boolean = false;

    // Constructor
    constructor(props: IInputGroupProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the textbox
        this.configureTextbox();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();

        // Set the flag
        this._initFl = true;
    }

    // Configure the card group
    private configure() {
        let elInput = this.el.querySelector("input");
        if (elInput) {
            // Set the class names
            this.props.isLarge ? this.el.classList.add("input-group-lg") : null;
            this.props.isSmall ? this.el.classList.add("input-group-sm") : null;

            // Update the label
            let label = this.el.querySelector("label");
            if (label) {
                this.props.id ? label.setAttribute("for", this.props.id) : null;

                // Set the label if it exists
                if (this.props.label) { label.innerHTML = this.props.label; }
                // Else, remove it
                else { this.el.removeChild(label); }
            }

            // See if the label exists
            if (this.props.prependedLabel) {
                // Add the label
                let label = document.createElement("span");
                label.classList.add("input-group-text");
                label.innerHTML = this.props.prependedLabel;
                this.el.insertBefore(label, elInput);
            }

            // Parse the buttons
            let buttons = this.props.prependedButtons || [];
            for (let i = 0; i < buttons.length; i++) {
                // Add the button
                this.el.insertBefore(Button(buttons[i]).el, elInput);
            }

            // See if there is a dropdown
            if (this.props.prependedDropdown) {
                // Add the dropdown
                this._ddlPrepended = Dropdown(this.props.prependedDropdown);
                this.el.insertBefore(this._ddlPrepended.el, elInput);
            }

            // Default the appended buttons
            let appendedButtons = this.props.appendedButtons || [];
            if (this.props.type == InputGroupTypes.Range) {
                // Add the button
                appendedButtons.push({
                    id: "range-value",
                    text: this.props.value == null ? "" : this.props.value
                });
            }

            // See if the label exists
            if (this.props.appendedLabel) {
                // Add the label
                let label = document.createElement("span");
                label.classList.add("input-group-text");
                label.innerHTML = this.props.appendedLabel;
                this.el.appendChild(label);
            }

            // Parse the buttons
            for (let i = 0; i < appendedButtons.length; i++) {
                // Add the button
                this.el.appendChild(Button(appendedButtons[i]).el);
            }

            // See if there is a dropdown
            if (this.props.appendedDropdown) {
                // Add the dropdown
                this._ddlAppended = Dropdown(this.props.appendedDropdown);
                this.el.appendChild(this._ddlAppended.el);
            }
        }
    }

    // Configure the events
    private configureEvents() {
        let isMultiLine = this.props.type == InputGroupTypes.TextArea;
        let elInput = this.el.querySelector("input") || this.el.querySelector("textarea");
        if (elInput) {
            // See if a change event exists
            let callbackValue = null;
            if (this.props.onChange) {
                // Add an input event
                elInput.addEventListener("input", ev => {
                    // See if we have already executed the change event
                    if (callbackValue != elInput.value) {
                        // Set the value
                        callbackValue = elInput.value;

                        // Call the change event
                        this.props.onChange(this.getValue(), ev);
                    }
                });
            }

            // See if this is a range
            if (this.props.type == InputGroupTypes.Range) {
                // Add a change event
                elInput.addEventListener("input", () => {
                    // Get the button
                    let btn = this.el.querySelector("#range-value");
                    if (btn) {
                        // Update the value
                        btn.innerHTML = elInput.value;
                    }
                })
            }

            // See if this is not a multi-line
            if (!isMultiLine) {
                // Add a mouse up event to detect the clear event
                elInput.addEventListener("mouseup", ev => {
                    // Get the current value
                    let el = ev.currentTarget as HTMLInputElement;
                    let oldValue = el.value;

                    // Wait for the user to stop updating the value
                    setTimeout(() => {
                        // Get the current value
                        let currentValue = el.value;

                        // See if the values have changed
                        if (currentValue != oldValue) {
                            // See if we have already executed the change event
                            if (callbackValue != currentValue) {
                                // Set the value
                                callbackValue = currentValue;

                                // Call the events
                                this.props.onChange ? this.props.onChange(this.getValue(), ev) : null;
                                this.props.onClear && callbackValue == "" ? this.props.onClear() : null;
                            }
                        }
                    }, 1);
                });
            }

            // See if this is a file
            if (this.props.type == InputGroupTypes.File) {
                // Set the change event
                (elInput as HTMLInputElement).addEventListener("change", (ev) => {
                    // Get the source file
                    let srcFile = ev.target["files"][0];
                    if (srcFile) {
                        let reader = new FileReader();

                        // Set the file loaded event
                        reader.onloadend = (ev) => {
                            this._fileValue = {
                                data: ev.target.result as any,
                                name: srcFile.name
                            };
                        }

                        // Set the error
                        reader.onerror = (ev: any) => {
                            // Log
                            console.log("Error reading the file", srcFile, ev.target.error);
                        }

                        // Read the file
                        reader.readAsArrayBuffer(srcFile);
                    }
                });
            }
        }
    }

    // Configures the text box
    private configureTextbox() {
        let isTextArea = this.props.type == InputGroupTypes.TextArea;
        let input = this.el.querySelector("input");
        let textarea = this.el.querySelector("textarea");

        // See if this is a text area
        if (isTextArea) {
            // Remove the input
            input ? this.el.removeChild(input) : null;

            // Ensure the textarea exists
            if (textarea) {
                // Update the textbox
                this.props.id ? textarea.id = this.props.id : null;
                this.props.placeholder ? textarea.placeholder = this.props.placeholder : null;
                textarea.disabled = this.props.isDisabled ? true : false;
                textarea.readOnly = this.props.isReadonly ? true : false;
                textarea.required = this.props.required ? true : false;
                textarea.rows = this.props.rows;
                this.props.title ? textarea.title = this.props.title : null;
            }
        } else {
            // Remove the textarea
            textarea ? this.el.removeChild(textarea) : null;

            // Ensure the input exists
            if (input) {
                // Update the textbox
                this.props.id ? input.id = this.props.id : null;
                this.props.placeholder ? input.placeholder = this.props.placeholder : null;
                input.disabled = this.props.isDisabled ? true : false;
                input.readOnly = this.props.isReadonly ? true : false;
                input.required = this.props.required ? true : false;
                this.props.title ? input.title = this.props.title : null;
                typeof (this.props.min) === "number" ? input.min = this.props.min + "" : null;
                typeof (this.props.max) === "number" ? input.max = this.props.max + "" : null;
                typeof (this.props.step) === "number" ? input.step = this.props.step + "" : null;

                // Update the type
                switch (this.props.type) {
                    // Color Picker
                    case InputGroupTypes.ColorPicker:
                        input.classList.add("form-control-color");
                        input.type = "color";
                        break;

                    // Email
                    case InputGroupTypes.Email:
                        input.classList.add("form-email");
                        input.type = "email";
                        break;

                    // File
                    case InputGroupTypes.File:
                        input.type = "file";
                        break;

                    // Password
                    case InputGroupTypes.Password:
                        input.classList.add("form-password");
                        input.type = "password";
                        break;

                    // Range
                    case InputGroupTypes.Range:
                        input.classList.add("form-range");
                        input.type = "range";
                        break;

                    // Search
                    case InputGroupTypes.Search:
                        input.classList.add("form-search");
                        input.type = "search";
                        input.setAttribute("aria-label", "Search");
                        break;
                }
            }
        }

        // Set the default value
        this.setValue(this.props.value);
    }

    /**
     * Public Interface
     */

    get appendedDropdown() { return this._ddlAppended; }

    disable() { this.elTextbox.disabled = true; }

    enable() { this.elTextbox.disabled = false; }

    getFileInfo() { return this._fileValue; }

    getValue() {
        let value = "";

        // See if a prepended dropdown exist
        if (this._ddlPrepended) {
            // See if this is a multi item
            if (this.props.prependedDropdown.multi) {
                // Set the value
                let items = this._ddlPrepended.getValue() as IDropdownItem[];
                for (let i = 0; i < items.length; i++) {
                    // Add the value
                    value += items[i].value;
                }
            } else {
                // Set the value
                value += (this._ddlPrepended.getValue() as IDropdownItem)?.value;
            }
        }

        // Append the input value
        value += this.elTextbox.value;

        // See if a appended dropdown exist
        if (this._ddlAppended) {
            // See if this is a multi item
            if (this.props.appendedDropdown.multi) {
                // Set the value
                let items = this._ddlAppended.getValue() as IDropdownItem[];
                for (let i = 0; i < items.length; i++) {
                    // Add the value
                    value += items[i].value;
                }
            } else {
                // Set the value
                value += (this._ddlAppended.getValue() as IDropdownItem)?.value;
            }
        }

        // Return the value
        return value;
    }

    get prependedDropdown() { return this._ddlPrepended; }

    // Sets the textbox value
    setValue(value: string = "") {
        // Set the textbox value
        this.elTextbox.value = value;

        // See if a change event exists
        if (this._initFl && this.props.onChange) {
            // Execute the change event
            this.props.onChange(value);
        }
    }

    // Returns the textbox
    get elTextbox(): HTMLInputElement | HTMLTextAreaElement { return this.el.querySelector("input") || this.el.querySelector("textarea"); }
}
export const InputGroup = (props: IInputGroupProps, template?: string): IInputGroup => { return new _InputGroup(props, template); }