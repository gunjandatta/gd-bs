import * as jQuery from "jquery";
import { IAccordion, IAccordionProps } from "../../../@types/components/accordion";
import { Base } from "../base";
import * as HTML from "./index.html";
import { AccordionItem } from "./item";

/**
 * Accordion
 */
class _Accordion extends Base<IAccordionProps> implements IAccordion {
    // Constructor
    constructor(props: IAccordionProps) {
        super(HTML, props);

        // Ensure the id is set
        this.el.id = props.id || "accordion";

        // Render the items
        this.renderItems();

        // Configure the parent
        this._configureParent();

        // Apply the options if they exist
        props.options ? jQuery(this.el).collapse(props.options) : null;
    }

    // Renders the items
    private renderItems() {
        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item and append it to the card
            let item = new AccordionItem(this.el.id, this.el.id + "_" + i, items[i]);
            this.el.appendChild(item.el);
        }
    }
}
export const Accordion = (props: IAccordionProps) => { return new _Accordion(props); }