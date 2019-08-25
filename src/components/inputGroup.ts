import { IInputGroup, IInputGroupProps } from "../../@types/inputGroup";
import * as Common from "../common";
import { Button } from "./button";

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
export const InputGroup = (props: IInputGroupProps): IInputGroup => {
    // Create the input group
    let inputGroup = document.createElement("div");

    // Set the class names
    inputGroup.className = props.className || "";
    inputGroup.classList.add("input-group");
    props.isLarge ? inputGroup.classList.add("input-group-lg") : null;
    props.isSmall ? inputGroup.classList.add("input-group-sm") : null;

    // See if a label exists
    if (props.label) {
        inputGroup.innerHTML += [
            '<label' + (props.id ? ' for="' + props.id + '"' : '') + '>',
            props.label,
            '</label>'
        ].join('');
    }

    // See if we are pre-pending a label or buttons
    if (props.prependedButtons || props.prependedLabel) {
        // Create the group
        let elPrependGroup = document.createElement("div");
        elPrependGroup.className = "input-group-prepend";
        inputGroup.appendChild(elPrependGroup);

        // Add the label
        props.prependedLabel ? elPrependGroup.innerHTML += '<span class="input-group-text">' + props.prependedLabel + '</span>' : null;

        // Parse the buttons
        let buttons = props.prependedButtons || [];
        for (let i = 0; i < buttons.length; i++) {
            // Add the button
            elPrependGroup.appendChild(Button(buttons[i]).el);
        }
    }

    // Set the input type
    let inputType = "";
    switch (props.type) {
        case InputGroupTypes.Email:
            inputType = "email";
            break;
        case InputGroupTypes.File:
            inputType = "file";
            break;
        case InputGroupTypes.Password:
            inputType = "password";
            break;
        case InputGroupTypes.Range:
            inputType = "range";
            break;
        case InputGroupTypes.Search:
            inputType = "search";
            break;
        default:
            inputType = "text";
            break;
    }

    // Add the textbox
    inputGroup.innerHTML += props.type == InputGroupTypes.TextArea ?
        [
            '<textarea class="form-control"',
            props.placeholder ? 'placeholder="' + props.placeholder + '"' : '',
            props.isReadonly ? 'readonly' : '',
            props.rows ? 'rows="' + props.rows + '"' : '',
            props.title ? 'title="' + props.title + '"' : '',
            '>' + (props.value || "") + '</textarea>'
        ].join(' ')
        :
        [
            '<input class="' + (props.isPlainText ? 'form-control-plaintext' : 'form-control') + '"',
            'type="' + inputType + '"',
            props.placeholder ? 'placeholder="' + props.placeholder + '"' : '',
            props.id ? 'id="' + props.id + '"' : '',
            props.min ? 'min="' + props.min + '"' : '',
            props.max ? 'max="' + props.max + '"' : '',
            props.step ? 'step="' + props.step + '"' : '',
            props.value != null ? 'value="' + props.value + '"' : '',
            props.isReadonly ? 'readonly' : '',
            props.title ? 'title="' + props.title + '"' : '',
            props.type == InputGroupTypes.Search ? 'aria-label="Search"' : '',
            '></input>'
        ].join(' ');

    // Default the appended buttons
    let appendedButtons = props.appendedButtons || [];
    if (props.type == InputGroupTypes.Range) {
        // Add the button
        appendedButtons.push({
            id: "range-value",
            text: props.value || "50"
        });
    }

    // See if we are appending a label or buttons
    if (props.appendedLabel || appendedButtons.length > 0) {
        // Create the group
        let elAppendGroup = document.createElement("div");
        elAppendGroup.className = "input-group-append";
        inputGroup.appendChild(elAppendGroup);

        // Add the label
        props.appendedLabel ? elAppendGroup.innerHTML += '<span class="input-group-text">' + props.appendedLabel + '</span>' : null;

        // Parse the buttons
        for (let i = 0; i < appendedButtons.length; i++) {
            // Add the button
            elAppendGroup.appendChild(Button(appendedButtons[i]).el);
        }
    }

    // See if there is a description
    if (props.description) {
        // Add the description
        inputGroup.innerHTML += '<small class="text-muted">' + props.description + '</small>';
    }

    // See if a change event exists
    let isMulti = props.type == InputGroupTypes.TextArea;
    let elInput = inputGroup.querySelector(isMulti ? "textarea" : "input");
    let callbackValue = null;
    if (props.onChange) {
        // Add a input event
        elInput.addEventListener("input", ev => {
            let tb = ev.currentTarget as HTMLInputElement | HTMLTextAreaElement;

            // See if we have already executed the change event
            if (callbackValue != tb.value) {
                // Set the value
                callbackValue = tb.value;

                // Call the change event
                props.onChange(callbackValue, ev);
            }
        });
    }

    // See if this is a range
    if (props.type == InputGroupTypes.Range) {
        // Add a change event
        elInput.addEventListener("input", () => {
            // Get the button
            let btn = el.querySelector("#range-value");
            if (btn) {
                // Update the value
                btn.innerHTML = elInput.value;
            }
        })
    }

    // See if this is not a multi-line
    if (!isMulti) {
        // Add a mouse up event to detect the clear event
        elInput.addEventListener("mouseup", ev => {
            // Get the current value
            let el = ev.currentTarget as HTMLInputElement;
            let oldValue = el.value;

            // Wait for the clear event to update the value (if clicked)
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
                        props.onChange ? props.onChange(callbackValue, ev) : null;
                        props.onClear ? props.onClear() : null;
                    }
                }
            }, 1);
        });
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(inputGroup);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the input group
    return {
        el: props.formFl ? elInput : inputGroup,
        getValue: () => {
            // Ensure the input element exists
            let elTextbox = elInput;
            if (elTextbox == null && inputGroup) {
                // Query for the element
                elTextbox = inputGroup.querySelector("input") || inputGroup.querySelector("textarea") as any;
            }

            // Return the value
            return elTextbox ? elTextbox.value : null;
        },
        hide: () => { Common.hide(props.formFl ? elInput : inputGroup); },
        setValue: (value: string = "") => {
            // Get the textbox
            let elTextbox = elInput;
            if (elTextbox == null && inputGroup) {
                // Query for the element
                elTextbox = inputGroup.querySelector("input") || inputGroup.querySelector("textarea") as any;
            }
            
            // Ensure a textbox exists
            if (elTextbox) {
                // Set the value
                elTextbox.value = value;
            }
        },
        show: () => { Common.show(props.formFl ? elInput : inputGroup); }
    };
}