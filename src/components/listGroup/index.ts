import { IListGroup, IListGroupProps } from "../../../@types/components/listGroup";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { ListGroupItem } from "./item";
import * as HTML from "./index.html";
import * as HTMLTabs from "./tabs.html";

/**
 * List Group Item Types
 */
export enum ListGroupItemTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * List Group Classes
 */
export const ListGroupClassNames = new ClassNames([
    "list-group-item-danger",
    "list-group-item-dark",
    "list-group-item-info",
    "list-group-item-light",
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-warning"
]);

/**
 * List Group
 * @param props The list group properties.
 */
class _ListGroup extends Base<IListGroupProps> {//implements IListGroup {
    private _items: Array<ListGroupItem> = null;

    // Constructor
    constructor(props: IListGroupProps) {
        super(props.isTabs && props.colWidth > 0 && props.colWidth < 12 ? HTMLTabs : HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Update the list group
        let listGroup = this.el.querySelector(".list-group") || this.el;
        this.props.isFlush ? listGroup.classList.add("list-group-flush") : null;
        this.props.isTabs ? listGroup.setAttribute("role", "tablist") : null;

        // See if the column width is defined
        let column = this.el.querySelector(".col");
        if (column) {
            // Update the width
            column.className = "col-" + this.props.colWidth;
        }

        // Render the items
        this.renderItems(listGroup);
    }

    // Configures the events
    private configureEvents(item: ListGroupItem) {
        // See if we are rendering tabs
        if (this.props.isTabs) {
            // Add the click event
            item.el.addEventListener("click", ev => {
                // Get the active items
                let activeItems = this.el.querySelectorAll(".active");
                for (let i = 0; i < activeItems.length; i++) {
                    // Remove the class
                    activeItems[i].classList.remove("active");
                }

                // Set this tab to be active
                item.el.classList.add("active");

                // Get the associated tab element
                let elTab = this.el.querySelector(item.el.getAttribute("href"));
                elTab ? elTab.classList.add("active") : null;

                // Execute the click event
                item.props.onClick ? item.props.onClick(item.el, item.props) : null;
            });
        }
    }

    // Render the items
    private renderItems(listGroup: Element) {
        // Clear the items
        this._items = [];

        // Get the tab content element
        let elTabs = this.el.querySelector(".tab-content");

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item
            let item = new ListGroupItem(items[i], elTabs ? true : false);
            this._items.push(item);
            listGroup.appendChild(item.el);

            // Add the tab content
            elTabs ? elTabs.appendChild(item.elTab) : null;

            // Configure the events
            this.configureEvents(item);
        }
    }

    /**
     * Public Interface
     */

    showTab(tabId?: string | number) {
        // Parse the tabs
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // Ensure a tab element exists
            if (item.elTab == null) { continue; }

            // See if this is the target tab
            if (tabId === i + 1 || item.elTab.id == tabId) {
                // Set the active class
                item.el.classList.add("active");
                item.elTab.classList.add("active");
            } else {
                // Remove the active class
                item.el.classList.remove("active");
                item.elTab.classList.remove("active");
            }
        }
    }
}
export const ListGroup = (props: IListGroupProps): IListGroup => { return new _ListGroup(props); }