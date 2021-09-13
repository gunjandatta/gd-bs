import { IButton, IButtonProps } from "./types";
import { Base } from "../base";
import { Badge, BadgeTypes } from "../badge";
import { ClassNames } from "../classNames";
import { Spinner } from "../spinner";
import { HTML, HTMLBlock, HTMLLink } from "./templates";

declare var GD;

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
    Warning = 9,
    OutlineDanger = 10,
    OutlineDark = 11,
    OutlineInfo = 12,
    OutlineLight = 13,
    OutlineLink = 14,
    OutlinePrimary = 15,
    OutlineSecondary = 16,
    OutlineSuccess = 17,
    OutlineWarning = 18
}

/**
 * Button Classes
 */
export const ButtonClassNames = new ClassNames([
    "btn-danger",
    "btn-dark",
    "btn-info",
    "btn-light",
    "btn-link",
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-warning",
    "btn-outline-danger",
    "btn-outline-dark",
    "btn-outline-info",
    "btn-outline-light",
    "btn-outline-link",
    "btn-outline-primary",
    "btn-outline-secondary",
    "btn-outline-success",
    "btn-outline-warning"
]);

/**
 * Button
 * @param props The button properties.
 */
class _Button extends Base<IButtonProps> implements IButton {

    // Constructor
    constructor(props: IButtonProps, template: string = props.isBlock ? HTMLBlock : (props.href || props.isLink ? HTMLLink : HTML)) {
        super(template, props);

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
        this.props.isLarge ? this.el.classList.add("btn-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-sm") : null;

        // Set the default type
        this.setType(this.props.type || ButtonTypes.Primary)

        // Set the attributes
        this.props.dismiss ? this.el.setAttribute("data-bs-dismiss", this.props.dismiss) : null;
        this.props.href ? this.el.href = this.props.href : null;
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isDisabled ? this.el.setAttribute("disabled", "disabled") : null;
        this.props.tabIndex != null ? this.el.setAttribute("tabindex", this.props.tabIndex) : null;
        this.props.target ? this.el.setAttribute("data-bs-target", this.props.target) : null;
        this.props.title ? this.el.title = this.props.title : null;
        this.props.toggle ? this.el.setAttribute("data-bs-toggle", this.props.toggle) : null;
        this.props.trigger ? this.el.setAttribute("data-bs-trigger", this.props.trigger) : null;
        typeof (this.props.isExpanded) === "boolean" ? this.el.setAttribute("aria-expanded", this.props.isExpanded ? "true" : "false") : null;

        // See if controls are defined
        if (this.props.controls) {
            // See if this is a string
            if (typeof (this.props.controls) === "string") {
                // Set the controls
                this.el.setAttribute("aria-controls", this.props.controls);
            } else {
                // Set the controls
                this.el.setAttribute("aria-controls", this.props.controls.join(' '));
            }
        }

        // Set the text
        this.setText(this.props.text);

        // Set the icon if it exists
        if (this.props.iconType) {
            if (typeof (this.props.iconType) === "function") {
                // Append the icon
                this.el.prepend(this.props.iconType(this.props.iconSize, this.props.iconSize));

                // Update the styling of the button
                this.el.classList.add("btn-icon");
            }
            // Else, it's an element
            else if (typeof (this.props.iconType === "object")) {
                // Append the icon
                this.el.prepend(this.props.iconType);
            }
        }

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

        // See if we are toggling anything
        if (this.props.toggleObj && typeof (this.props.toggleObj.toggle) === "function") {
            // Add a click event
            this.el.addEventListener("click", ev => {
                // Toggle the object
                this.props.toggleObj.toggle();
            });
        }
    }

    /**
     * Public Properties
     */

    // Disables the button
    disable() { (this.el as HTMLButtonElement).disabled = true; }

    // Enables the button
    enable() { (this.el as HTMLButtonElement).disabled = false; }

    // Sets the button text
    setText(btnText?: string) {
        // Clear the element
        while (this.el.firstChild) { this.el.removeChild(this.el.firstChild); }

        // Set the text
        let elText = document.createTextNode(btnText == null ? "" : btnText);

        // Append the text
        this.el.appendChild(elText);
    }

    // Sets the button type
    setType(buttonType: number) {
        // Parse the class names
        ButtonClassNames.parse(className => {
            // Remove the class names
            this.el.classList.remove(className);
        });

        // Set the class name
        let className = ButtonClassNames.getByType(buttonType) || ButtonClassNames.getByType(ButtonTypes.Primary);
        this.el.classList.add(className);
    }

    // Toggles the button
    toggle() {
        let btn = this.el as HTMLButtonElement;

        // Toggle the element
        btn.classList.contains("active") ? btn.classList.remove("active") : btn.classList.add("active");
    }
}
export const Button = (props: IButtonProps, template?: string): IButton => { return new _Button(props, template); }