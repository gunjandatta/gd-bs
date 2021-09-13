import { IBreadcrumb, IBreadcrumbProps } from "./types";
import { Base } from "../base";
import { HTML } from "./templates";
import { BreadcrumbItem } from "./item";

/**
 * Breadcrumb
 */
class _Breadcrumb extends Base<IBreadcrumbProps> implements IBreadcrumb {
    // Constructor
    constructor(props: IBreadcrumbProps, template: string = HTML, itemTemplate?: string) {
        super(template, props);

        // Render the items
        this.renderItems(itemTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configures the events
    private configureEvents(item: BreadcrumbItem) {
        // See if there is a click event
        if (this.props.onClick) {
            // Add the click event
            item.el.addEventListener("click", ev => {
                // Call the click event
                this.props.onClick(item.props, ev);
            });
        }
    }

    // Renders the breadcrumb items
    private renderItems(itemTemplate: string) {
        // Get the list element
        let elList = this.el.querySelector(".breadcrumb");
        if (elList) {
            // Parse the item properties
            let itemProps = this.props.items || [];
            for (let i = 0; i < itemProps.length; i++) {
                let itemProp = itemProps[i];

                // Set the active flag
                itemProp.isActive = i == itemProps.length - 1;

                // Render the item
                let item = new BreadcrumbItem(itemProp, itemTemplate);

                // Configure the events
                this.configureEvents(item);

                // Add the item
                elList.appendChild(item.el);
            }
        }
    }
}
export const Breadcrumb = (props: IBreadcrumbProps, template?: string, itemTemplate?: string): IBreadcrumb => { return new _Breadcrumb(props, template, itemTemplate); }