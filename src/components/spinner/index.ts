import { ISpinner, ISpinnerProps } from "./types";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { HTML } from "./templates";

/**
 * Spinner Types
 */
export enum SpinnerTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Spinner Class Names
 */
export const SpinnerClassNames = new ClassNames([
    "text-danger",
    "text-dark",
    "text-info",
    "text-light",
    "text-primary",
    "text-secondary",
    "text-success",
    "text-warning"
]);

/**
 * Spinner
 * @param props The spinner properties.
 */
class _Spinner extends Base<ISpinnerProps> implements ISpinner {
    // Constructor
    constructor(props: ISpinnerProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the class name
        if (this.props.isGrowing) {
            // Set the class
            this.el.classList.add("spinner-grow" + (this.props.isSmall ? "-sm" : ""));
        } else {
            // Set the class
            this.el.classList.add("spinner-border" + (this.props.isSmall ? "-sm" : ""));
        }

        // Set the class name
        this.el.classList.add(SpinnerClassNames.getByType(this.props.type) || SpinnerClassNames.getByType(SpinnerTypes.Primary));

        // See if text is defined
        if (this.props.text) {
            // Update the text
            let elSpan = this.el.querySelector("span");
            if (elSpan) {
                elSpan.innerHTML = this.props.text;
            }
        }
    }
}
export const Spinner = (props: ISpinnerProps, template?: string): ISpinner => { return new _Spinner(props, template); }