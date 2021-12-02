import { IBreadcrumb, IBreadcrumbItem, IBreadcrumbProps } from "./types";
import { Base } from "../base";
import { HTML } from "./templates";
import { BreadcrumbItem } from "./item";

/**
 * Breadcrumb
 */
class _Breadcrumb extends Base<IBreadcrumbProps> implements IBreadcrumb {
    private _elList: HTMLElement = null;
    private _itemTemplate: string = null;

    // Constructor
    constructor(props: IBreadcrumbProps, template: string = HTML, itemTemplate?: string) {
        super(template, props);

        // Set the template
        this._itemTemplate = itemTemplate;

        // Render the items
        this.renderItems(this.props.items);

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
    private renderItem(itemProps: IBreadcrumbItem) {
        // Render the item
        let item = new BreadcrumbItem(itemProps, this._itemTemplate);

        // Configure the events
        this.configureEvents(item);

        // Add the item
        this._elList.appendChild(item.el);
    }

    // Renders the breadcrumb items
    private renderItems(itemProps: IBreadcrumbItem[] = []) {
        // Get the list element
        this._elList = this.el.querySelector(".breadcrumb");
        if (this._elList) {
            // Parse the item properties
            for (let i = 0; i < itemProps.length; i++) {
                let itemProp = itemProps[i];

                // Set the active flag
                itemProp.isActive = i == itemProps.length - 1;

                // Render the item
                this.renderItem(itemProp);
            }
        }
    }

    /**
     * Public Methods
     */

    /** Adds a breadcrumb item. */
    add(item: IBreadcrumbItem) {
        // Find the active item
        let elActive = this._elList.querySelector(".breadcrumb-item.active");
        if (elActive) {
            // Remove the class
            elActive.classList.remove("active");
        }

        // Ensure this item is active
        item.isActive = true;

        // Add the item
        this.renderItem(item);
    }

    /** Removes the last breadcrumb item. */
    remove() {
        // Get the last item
        let items = this._elList.querySelectorAll("li.breadcrumb-item");
        if (items && items.length > 0) {
            // Remove the last item
            this._elList.removeChild(items[items.length - 1]);

            // See if there is still an item
            if (items.length > 1) {
                // Make this item active
                items[items.length - 2].classList.add("active");
            }
        }
    }

    /** Removes a breadcrumb item by it's name property. */
    removeByName(name: string) {
        // Get the element
        let el = this._elList.querySelector("li.breadcrumb-item[data-name='" + name + "']");
        if (el) {
            // Remove the item
            this._elList.removeChild(el);
        }
    }

    /** Sets the breadcrumb items. */
    setItems(items: IBreadcrumbProps[] = []) {
        // Clear the list
        while (this._elList.firstChild) { this._elList.removeChild(this._elList.firstChild); }

        // Render the items
        this.renderItems(items);
    }
}
export const Breadcrumb = (props: IBreadcrumbProps, template?: string, itemTemplate?: string): IBreadcrumb => { return new _Breadcrumb(props, template, itemTemplate); }