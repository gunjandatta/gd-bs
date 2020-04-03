import { IProgressGroup, IProgressGroupProps } from "../../../@types/components/progressGroup";
import { Base } from "../base";
import { Progress } from "../progress";
import * as HTML from "./index.html";

/**
 * Progress Group
 * @param props The progress group properties.
 */
class _ProgressGroup extends Base<IProgressGroupProps> implements IProgressGroup {
    // Constructor
    constructor(props: IProgressGroupProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Parse the progress bars
        let progressbars = this.props.progressbars || [];
        for (let i = 0; i < progressbars.length; i++) {
            // Add the progress bar
            this.el.appendChild(Progress(progressbars[i]).progressBar);
        }
    }
}
export const ProgressGroup = (props: IProgressGroupProps): IProgressGroup => { return new _ProgressGroup(props); }