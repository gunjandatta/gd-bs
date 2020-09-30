import "bootstrap/js/dist/tab";
import { IListGroup, IListGroupProps } from "../../../@types/components/listGroup";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { ListGroupItem } from "./item";
import { HTML, HTMLTabs } from "./templates";

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
class _ListGroup extends Base<IListGroupProps> implements IListGroup {
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
        this.props.isHorizontal ? listGroup.classList.add("list-group-horizontal") : null;
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

    // Render the items
    private renderItems(listGroup: Element) {
        // Clear the items
        this._items = [];

        // Get the tab content element
        let tabs = this.el.querySelector(".tab-content");

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item
            let item = new ListGroupItem(items[i], tabs ? true : false);
            this._items.push(item);
            listGroup.appendChild(item.el);

            // See if we are rendering tabs
            if (tabs) {
                // Add the tab content
                tabs.appendChild(item.elTab);

                // See if the fade option is enabled
                if (this.props.fadeTabs) {
                    // Set the class name
                    item.elTab.classList.add("fade");

                    // See if the tab is active
                    if (item.props.isActive) {
                        // Set the class name
                        item.elTab.classList.add("show");
                        item.elTab.classList.add("active");
                    }
                }
            }
        }
    }

    /**
     * Public Interface
     */

    showTab(tabId?: string | number) {
        // Parse the tabs
        for (let i = 0; i < this._items.length; i++) {
            let item = this._items[i];

            // See if this is the target tab
            if (tabId === i + 1 || item.elTab.id == tabId) {
                // Toggle it if it's not visible
                item.isVisible ? null : item.toggle(this.props.fadeTabs);
            }
            // Else, see if it's visible
            else if (item.isVisible) {
                // Toggle it
                item.toggle(this.props.fadeTabs);
            }
        }
    }
}
export const ListGroup = (props: IListGroupProps): IListGroup => { return new _ListGroup(props); }