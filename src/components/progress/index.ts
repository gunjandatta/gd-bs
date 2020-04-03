import { IProgress, IProgressProps } from "../../../@types/components/progress";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Progress
 */
class _Progress extends Base<IProgressProps> implements IProgress {
    // Constructor
    constructor(props: IProgressProps) {
        super(HTML, props);

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
        progressBar.style.width = size + "%";
        progressBar.setAttribute("aria-valuenow", size.toString());
        progressBar.setAttribute("aria-valuemin", minValue.toString());
        progressBar.setAttribute("aria-valuemax", maxValue.toString());
        this.props.isAnimated ? progressBar.classList.add("progress-bar-animated") : null;
        this.props.isStriped ? progressBar.classList.add("progress-bar-striped") : null;
        this.props.label ? progressBar.innerHTML = this.props.label : null;
    }

    /**
     * Public Interface
     */

    // Return the progress bar element
    get progressBar() { return this.el.querySelector(".progress-bar") as HTMLDivElement; }
}
export const Progress = (props: IProgressProps): IProgress => { return new _Progress(props); }