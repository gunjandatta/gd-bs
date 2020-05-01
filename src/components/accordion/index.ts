import * as jQuery from "jquery";
import { IAccordion, IAccordionProps } from "../../../@types/components/accordion";
import { Base } from "../base";
import * as HTML from "./index.html";
import { AccordionItem } from "./item";

/**
 * Accordion
 */
class _Accordion extends Base<IAccordionProps> implements IAccordion {
    private _items: Array<AccordionItem> = null;

    // Constructor
    constructor(props: IAccordionProps) {
        super(HTML, props);

        // Ensure the id is set
        this.el.id = props.id || "accordion";

        // Render the items
        this.renderItems();

        // Configure the parent
        this.configureParent();

        // Apply the options if they exist
        props.options ? jQuery(this.el).collapse(props.options) : null;
    }

    // Configure the events
    private configureEvents(accordionItem: AccordionItem) {
        // Create a click event
        accordionItem.el.addEventListener("click", ev => {
            // See if we are auto-closing items
            if (this.props.autoCollapse) {
                // Parse the items
                for (let i = 0; i < this._items.length; i++) {
                    let item = this._items[i];

                    // Skip this item
                    if (item.id == accordionItem.id) { continue; }
                    // Else, see if this item is expanded
                    else if (item.isExpanded) {
                        // Toggle the item
                        item.toggle();
                    }
                }
            }
        });
    }

    // Renders the items
    private renderItems() {
        // Clear the items
        this._items = [];

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item and append it to the card
            let item = new AccordionItem(this.el.id, this.el.id + "_" + i, items[i]);
            this._items.push(item);
            this.el.appendChild(item.el);

            // Configure the events
            this.configureEvents(item);
        }
    }
}
export const Accordion = (props: IAccordionProps): IAccordion => { return new _Accordion(props); }