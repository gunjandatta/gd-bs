import { IProgressGroup, IProgressGroupProps } from "./types";
import { Base } from "../base";
import { Progress } from "../progress";
import { HTML } from "./templates";

/**
 * Progress Group
 * @param props The progress group properties.
 */
class _ProgressGroup extends Base<IProgressGroupProps> implements IProgressGroup {
    // Constructor
    constructor(props: IProgressGroupProps, template: string = HTML, itemTemplate?: string) {
        super(template, props);

        // Configure the collapse
        this.configure(itemTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(itemTemplate: string) {
        // Parse the progress bars
        let progressbars = this.props.progressbars || [];
        for (let i = 0; i < progressbars.length; i++) {
            // Add the progress bar
            this.el.appendChild(Progress(progressbars[i], itemTemplate).progressBar);
        }
    }
}
export const ProgressGroup = (props: IProgressGroupProps, template?: string, itemTemplate?: string): IProgressGroup => { return new _ProgressGroup(props, template, itemTemplate); }