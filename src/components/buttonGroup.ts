import { IButtonGroup, IButtonGroupProps } from "../../@types/buttonGroup";
import * as Common from "../common";
import { Button } from "./button";

/**
 * Button Group
 * @property props - The button group properties.
 */
export const ButtonGroup = (props: IButtonGroupProps): IButtonGroup => {
    // Create the button group
    let buttonGroup = document.createElement("div");
    buttonGroup.setAttribute("role", "group");
    props.id ? buttonGroup.id = props.id : null;
    props.label ? buttonGroup.setAttribute("aria-label", props.label) : null;

    // Set the class names
    buttonGroup.className = props.className || "";
    buttonGroup.classList.add(props.isVertical ? "btn-group-vertical" : "btn-group");
    props.isLarge ? buttonGroup.classList.add("btn-group-lg") : null;
    props.isSmall ? buttonGroup.classList.add("btn-group-sm") : null;

    // Parse the buttons
    let buttons = props.buttons || [];
    for (let i = 0; i < buttons.length; i++) {
        let buttonProps = buttons[i];

        // Set the property
        buttonProps.type = buttonProps.type || props.buttonType;

        // Add the button html
        buttonGroup.appendChild(Button(buttonProps).el);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(buttonGroup);

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

    // Return the button group
    return {
        el: buttonGroup,
        hide: () => { Common.hide(buttonGroup); },
        show: () => { Common.show(buttonGroup); }
    };
}