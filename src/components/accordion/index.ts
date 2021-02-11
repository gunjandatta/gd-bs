import { IAccordion, IAccordionProps } from "../../../@types/components/accordion";
import { Base } from "../base";
import { HTML, HTMLItem } from "./templates";
import { AccordionItem } from "./item";

/**
 * Accordion
 */
class _Accordion extends Base<IAccordionProps> implements IAccordion {
    private _items: Array<AccordionItem> = null;

    // Constructor
    constructor(props: IAccordionProps, template: string = HTML, itemTemplate: string = HTMLItem) {
        super(template, props);

        // Ensure the id is set
        this.el.id = this.el.id || props.id || "accordion";

        // Render the items
        this.renderItems(itemTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Renders the items
    private renderItems(itemTemplate: string) {
        // Clear the items
        this._items = [];

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item and append it to the card
            let item = new AccordionItem(this.el.id, this.el.id + i, items[i], itemTemplate);
            this._items.push(item);
            this.el.appendChild(item.el);
        }
    }
}
export const Accordion = (props: IAccordionProps, template?: string, itemTemplate?: string): IAccordion => { return new _Accordion(props, template, itemTemplate); }