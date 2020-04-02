import { IModal } from "../../../@types/components/modal";
import { IPanel, IPanelProps } from "../../../@types/components/panel";
import { Modal } from "../modal";
import { Base } from "../base";
import * as HTML from "./index.html";

/**
 * Panel Types
 */
export enum PanelTypes {
    Full = 1,
    Large = 2,
    Medium = 3,
    Small = 4,
    XLarge = 5
}

/**
 * Panel
 */
class _Panel extends Base<IPanelProps> implements IPanel {
    private _modal: IModal = null;

    // Constructor
    constructor(props: IPanelProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Create the modal
        let modalProps = this.props.modalProps || {};
        modalProps.el = modalProps.el || this.el;
        this._modal = Modal(modalProps);

        // Set the panel type
        switch (this.props.type) {
            // Full
            case PanelTypes.Full:
                // Add the class name
                this._modal.el.classList.add("panel-full");
                break;

            // Large
            case PanelTypes.Large:
                // Add the class name
                this._modal.el.classList.add("panel-lg");
                break;

            // Small
            case PanelTypes.Small:
                // Add the class name
                this._modal.el.classList.add("panel-sm");
                break;

            // Extra Large
            case PanelTypes.XLarge:
                // Add the class name
                this._modal.el.classList.add("panel-xl");
                break;

            // Default - Medium
            default:
                // Add the class name
                this._modal.el.classList.add("panel-md");
                break;
        }
    }

    /**
     * Public Interface
     */

    get modal() { return this._modal; }
}
export const Panel = (props: IPanelProps): IPanel => { return new _Panel(props); }