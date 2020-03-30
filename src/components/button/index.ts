import * as jQuery from "jquery";
import { Base } from "../base";
import { Badge, BadgeTypes } from "../badge";
import { Spinner } from "../spinner";
import { IButton, IButtonProps } from "../../../@types/components/button";
import * as HTML from "./index.html";
import * as HTMLLink from "./link.html";

/**
 * Button Types
 */
export enum ButtonTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Link = 5,
    Primary = 6,
    Secondary = 7,
    Success = 8,
    Warning = 9
}

/**
 * Button Classes
 */
export const ButtonClassNames = [
    "btn-danger",
    "btn-dark",
    "btn-info",
    "btn-light",
    "btn-link",
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-warning"
]

/**
 * Button
 * @param props The button properties.
 */
class _Button extends Base<IButtonProps> implements IButton {
    // Constructor
    constructor(props: IButtonProps) {
        super(props.href || props.isLink ? HTMLLink : HTML, props);

        // Configure the button
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the button
    private configure() {
        // Add the class names
        this.props.isBlock ? this.el.classList.add("btn-block") : null;
        this.props.isLarge ? this.el.classList.add("btn-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-sm") : null;

        // Set the default type
        this.setType(this.props.type || ButtonTypes.Primary)

        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isDisabled ? this.el.setAttribute("disabled", "disabled") : null;
        this.props.target ? this.el.setAttribute("data-target", this.props.target) : null;
        this.props.title ? this.el.title = this.props.title : null;
        this.props.toggle ? this.el.setAttribute("data-toggle", this.props.toggle) : null;
        this.props.trigger ? this.el.setAttribute("data-trigger", this.props.trigger) : null;
        typeof (this.props.isExpanded) === "boolean" ? this.el.setAttribute("aria-expanded", this.props.isExpanded ? "true" : "false") : null;
        this.props.controls ? this.el.setAttribute("aria-controls", this.props.controls.join(' ')) : null;

        // Set the text
        this.setText(this.props.text);

        // See if this is a spinner
        if (this.props.spinnerProps) {
            // Set the element to render to
            this.props.spinnerProps.el = this.el;

            // Render the spinner
            Spinner(this.props.spinnerProps);
        }

        // See if there is a badge
        if (this.props.badge) {
            // Default the type
            this.props.badge.type = this.props.badge.type || BadgeTypes.Light;

            // Render the badge
            this.el.appendChild(Badge(this.props.badge).el);
        }
    }

    // Configure the events
    private configureEvents() {
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", ev => {
                // Call the click event
                this.props.onClick(this.props, ev);
            });
        }
    }

    /**
     * Public Properties
     */

    // Disposes the component
    dispose() { jQuery(this.el).button("dispose"); }

    // Sets the button text
    setText(btnText?: string) {
        // Clear the element
        while (this.el.firstChild) { this.el.removeChild(this.el.firstChild); }

        // Set the text
        let elText = document.createTextNode(btnText || "");

        // Append the text
        this.el.appendChild(elText);
    }

    // Sets the button type
    setType(buttonType: number) {
        // Parse the class names
        for (let i = 0; i < ButtonClassNames.length; i++) {
            // Remove the class names
            this.el.classList.remove(ButtonClassNames[i]);
            this.el.classList.remove(ButtonClassNames[i].replace("btn-", "btn-outline-"));
        }

        // Set the default type
        let defaultType = ButtonClassNames[buttonType] || ButtonClassNames[ButtonTypes.Primary];
        this.el.classList.add(this.props.isOutline ? defaultType.replace("btn-", "btn-outline-") : defaultType);
    }

    // Toggles the button
    toggle() { jQuery(this.el).button("toggle"); }
}
export const Button = (props: IButtonProps): IButton => { return new _Button(props); }