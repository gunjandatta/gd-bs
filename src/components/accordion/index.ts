import { IAccordion, IAccordionProps } from "./types";
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

    // Configure the item event
    private configureEvent(item: AccordionItem) {
        // Set the click event
        if (item.elHeader) {
            item.elHeader.addEventListener("click", (ev) => {
                // Parse the items
                for (let i = 0; i < this._items.length; i++) {
                    let item = this._items[i];

                    // Toggle the item if it's active
                    if (item.isExpanded) { item.toggle(); }
                }

                // Toggle this item
                item.toggle();
            });
        }
    }

    // Renders the items
    private renderItems(itemTemplate: string) {
        // Clear the items
        this._items = [];

        // Set the flag
        let autoCollapse = typeof (this.props.autoCollapse) === "boolean" ? this.props.autoCollapse : true;

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item and append it to the accordion
            let item = new AccordionItem(this.el.id, this.el.id + i, items[i], itemTemplate, autoCollapse);
            this._items.push(item);
            autoCollapse ? this.configureEvent(item) : null;
            this.el.appendChild(item.el);
        }
    }
}
export const Accordion = (props: IAccordionProps, template?: string, itemTemplate?: string): IAccordion => { return new _Accordion(props, template, itemTemplate); }