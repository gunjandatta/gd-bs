import { IProgress, IProgressProps } from "./types";
import { ClassNames } from "../classNames";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Progress Bar Types
 */
export enum ProgressBarTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Transparent = 8,
    Warning = 9,
    White = 10
}

/**
 * Progress Bar Class Names
 */
export const ProgressBarClassNames = new ClassNames([
    "bg-danger",
    "bg-dark",
    "bg-info",
    "bg-light",
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-transparent",
    "bg-warning",
    "bg-white"
]);

/**
 * Progress
 */
class _Progress extends Base<IProgressProps> implements IProgress {
    // Constructor
    constructor(props: IProgressProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Set the default values
        let maxValue = typeof (this.props.max) === "number" ? this.props.max : 100;
        let minValue = typeof (this.props.min) === "number" ? this.props.min : 0;
        let size = typeof (this.props.size) === "number" ? this.props.size : 0;

        // Update the progress bar
        let progressBar = this.el.querySelector(".progress-bar") as HTMLDivElement;
        if (progressBar) {
            progressBar.style.width = size + "%";
            progressBar.setAttribute("aria-valuenow", size.toString());
            progressBar.setAttribute("aria-valuemin", minValue.toString());
            progressBar.setAttribute("aria-valuemax", maxValue.toString());
            this.props.isAnimated ? progressBar.classList.add("progress-bar-animated") : null;
            this.props.isStriped ? progressBar.classList.add("progress-bar-striped") : null;
            this.props.label ? progressBar.innerHTML = this.props.label : null;

            // See if a type exists
            let className = ProgressBarClassNames.getByType(this.props.type);
            if (className) {
                // Add the class name
                progressBar.classList.add(className);
            }
        }
    }

    /**
     * Public Interface
     */

    // Return the progress bar element
    get progressBar() { return this.el.querySelector(".progress-bar") as HTMLDivElement; }
}
export const Progress = (props: IProgressProps, template?: string): IProgress => { return new _Progress(props, template); }