import { IToolbar, IToolbarProps } from "./types";
import { Base } from "../base";
import { ButtonGroup } from "../buttonGroup";
import { InputGroup } from "../inputGroup";
import { HTML } from "./templates";

/**
 * Toolbar
 */
class _Toolbar extends Base<IToolbarProps> implements IToolbar {
    // Constructor
    constructor(props: IToolbarProps, template: string = HTML) {
        super(template, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let el = null;

            // See if this is a button group
            if (item.buttons) {
                // Render an button group
                el = ButtonGroup({ buttons: item.buttons }).el;
            }

            // See if this is an input group
            if (item.inputGroup) {
                // Render an input group
                el = InputGroup(item.inputGroup).el;
            }

            // Ensure the element exists
            if (el) {
                // See if there is a spacing value defined, and this is not the last element
                if (this.props.spacing > 0 && i < items.length - 1) {
                    // Add the spacing
                    el.classList.add("me-" + this.props.spacing);
                }

                // Append the element
                this.el.appendChild(el);
            }
        }
    }
}
export const Toolbar = (props: IToolbarProps, template?: string): IToolbar => { return new _Toolbar(props, template); }