import { IInputGroup, IInputGroupProps } from "../../../@types/components/inputGroup";
import { Base } from "../base";
import { Button } from "../button";
import * as HTML from "./index.html";

/**
 * Input Group Types
 */
export enum InputGroupTypes {
    Email = 1,
    File = 2,
    Password = 3,
    Range = 4,
    Search = 5,
    TextArea = 6,
    TextField = 7
}

/**
 * Input Group
 * @param props The input group properties.
 */
class _InputGroup extends Base<IInputGroupProps> {//implements IInputGroup {
    // Constructor
    constructor(props: IInputGroupProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the textbox
        this.configureTextbox();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the class names
        this.el.className = this.props.className || "";
        this.el.classList.add("input-group");
        this.props.isLarge ? this.el.classList.add("input-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("input-group-sm") : null;

        // See if a label exists
        let label = this.el.querySelector("label");
        if (this.props.label) {
            // Update the label
            this.props.id ? label.setAttribute("for", this.props.id) : null;
            label.innerHTML = this.props.label;
        } else {
            // Remove the label
            this.el.removeChild(label);
        }

        // See if we are pre-pending a label or buttons
        let prepend = this.el.querySelector(".input-group-prepend");
        if (this.props.prependedButtons || this.props.prependedLabel) {
            // See if the label exists
            let label = prepend.querySelector("span");
            if (this.props.appendedLabel) {
                // Add the label
                label.innerHTML = this.props.prependedLabel;
            } else {
                // Remove the label
                prepend.removeChild(label);
            }

            // Parse the buttons
            let buttons = this.props.prependedButtons || [];
            for (let i = 0; i < buttons.length; i++) {
                // Add the button
                prepend.appendChild(Button(buttons[i]).el);
            }
        } else {
            // Remove the element
            this.el.removeChild(prepend);
        }

        // Default the appended buttons
        let appendedButtons = this.props.appendedButtons || [];
        if (this.props.type == InputGroupTypes.Range) {
            // Add the button
            appendedButtons.push({
                id: "range-value",
                text: this.props.value || ""
            });
        }

        // See if we are appending a label or buttons
        let append = this.el.querySelector(".input-group-append");
        if (appendedButtons.length > 0 || this.props.appendedLabel) {
            // See if the label exists
            let label = append.querySelector("span");
            if (this.props.appendedLabel) {
                // Add the label
                label.innerHTML = this.props.appendedLabel;
            } else {
                // Remove the label
                append.removeChild(label);
            }

            // Parse the buttons
            for (let i = 0; i < appendedButtons.length; i++) {
                // Add the button
                append.appendChild(Button(appendedButtons[i]).el);
            }
        } else {
            // Remove the element
            this.el.removeChild(append);
        }

        // See if there is a description
        let description = this.el.querySelector("small.text-muted");
        if (this.props.description) {
            // Add the description
            description.innerHTML = '<small class="text-muted">' + this.props.description + '</small>';
        } else {
            // Remove the description
            this.el.removeChild(description);
        }
    }

    // Configure the events
    private configureEvents() {
        let isMultiLine = this.props.type == InputGroupTypes.TextArea;
        let elInput = this.el.querySelector("input") || this.el.querySelector("textarea");

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
                    this.props.onChange(callbackValue, ev);
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
                            this.props.onChange ? this.props.onChange(callbackValue, ev) : null;
                            this.props.onClear ? this.props.onClear() : null;
                        }
                    }
                }, 1);
            });
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
            this.el.removeChild(input);

            // Update the textbox
            this.props.id ? textarea.id = this.props.id : null;
            this.props.placeholder ? textarea.placeholder = this.props.placeholder : null;
            textarea.readOnly = this.props.isReadonly ? true : false;
            textarea.rows = this.props.rows;
            this.props.title ? textarea.title = this.props.title : null;
        } else {
            // Remove the textarea
            this.el.removeChild(textarea);

            // Update the textbox
            this.props.id ? input.id = this.props.id : null;
            this.props.placeholder ? input.placeholder = this.props.placeholder : null;
            input.readOnly = this.props.isReadonly ? true : false;
            this.props.title ? input.title = this.props.title : null;
            typeof (this.props.min) === "number" ? input.min = this.props.min + "" : null;
            typeof (this.props.max) === "number" ? input.max = this.props.max + "" : null;
            typeof (this.props.step) === "number" ? input.step = this.props.step + "" : null;

            // See if this is plain text
            if (this.props.isPlainText) {
                // Update the class names
                this.el.classList.remove("form-control");
                this.el.classList.add("form-control-plaintext");
            }

            // Update the type
            switch (this.props.type) {
                // Email
                case InputGroupTypes.Email:
                    input.type = "email";
                    break;

                // File
                case InputGroupTypes.File:
                    input.type = "file";
                    break;

                // Password
                case InputGroupTypes.Password:
                    input.type = "password";
                    break;

                // Range
                case InputGroupTypes.Range:
                    input.type = "range";
                    break;

                // Search
                case InputGroupTypes.Search:
                    input.type = "search";
                    input.setAttribute("aria-label", "Search");
                    break;
            }
        }

        // Set the default value
        this.setValue(this.props.value);
    }

    /**
     * Public Interface
     */

    getValue() { return this.textbox.value; }

    // Method to set the value
    setValue(value: string = "") { this.textbox.value = value; }

    // Returns the textbox
    get textbox(): HTMLInputElement | HTMLTextAreaElement { return this.el.querySelector("input") || this.el.querySelector("textarea"); }
}
export const InputGroup = (props: IInputGroupProps): IInputGroup => { return new _InputGroup(props); }