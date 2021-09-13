import { IListGroupItem } from "./types";
import { Base } from "../base";
import { Badge } from "../badge";
import { appendContent } from "../common";
import { ListGroupClassNames } from ".";
import { HTMLItem, HTMLTab, HTMLTabItem } from "./templates";

/**
 * List Group Item
 */
export class ListGroupItem extends Base<IListGroupItem> {
    private _elTab: HTMLDivElement = null;

    // Constructor
    constructor(props: IListGroupItem, isTab: boolean = false, itemTemplate: string = isTab ? HTMLTabItem : HTMLItem) {
        super(itemTemplate, props);

        // See if this is for a tab
        if (isTab) {
            // Create the tab element
            let el = document.createElement("div");
            el.innerHTML = HTMLTab;
            this._elTab = el.firstChild as HTMLDivElement;
        }

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the item
    private configure() {
        // Set the class name
        this.props.badge ? this.el.classList.add("d-flex") : null;
        this.props.badge ? this.el.classList.add("justify-content-between") : null;
        this.props.isActive ? this.el.classList.add("active") : null;

        // See if this item is active
        if (this.props.isActive) {
            // Set the class name
            this.el.classList.add("active");

            // Set the attribute
            this.el.setAttribute("aria-current", "true");
        }

        // See if this item is disabled
        if (this.props.isDisabled) {
            // Set the class name
            this.el.classList.add("disabled");

            // Set the attribute
            this.el.setAttribute("aria-disabled", "true");
        }

        // Set the class name
        let className = ListGroupClassNames.getByType(this.props.type);
        className ? this.el.classList.add(className) : null;

        // See if this is a tab
        if (this._elTab) {
            let tabId = this.props.tabName.replace(/[^a-zA-Z]/g, "");

            // Set the properties
            this.el.id = tabId + "-tab";
            this.el.setAttribute("href", "#" + tabId);
            this.el.setAttribute("data-bs-toggle", "list");
            this.el.setAttribute("aria-controls", tabId);
            this.el.innerHTML = this.props.tabName;

            // Update the tab
            this._elTab.id = tabId;
            this._elTab.setAttribute("aria-labelledby", tabId);
            this.props.isActive ? this._elTab.classList.add("active") : null;
        }

        // Append the content
        appendContent(this._elTab || this.el, this.props.content);

        // See if there is a badge
        if (this.props.badge) {
            // Append a badge
            this.el.appendChild(Badge(this.props.badge).el);
        }
    }

    // Configures the events
    private configureEvents() {
        // Add a click event
        (this.el as HTMLElement).addEventListener("click", ev => {
            // Prevent the page from moving to the top
            ev.preventDefault();

            // Execute the event
            this.props.onClick ? this.props.onClick(this.el, this.props) : null;
        });

        // See if there is a render event
        if (this.props.onRender) {
            // Execute the render event
            this.props.onRender(this._elTab || this.el, this.props);
        }
    }

    /**
     * Public Interface
     */

    // The HTML tab element
    get elTab(): HTMLDivElement { return this._elTab; }

    // Returns true if the link is visible
    get isVisible(): boolean { return this.el.classList.contains("active"); }

    // Toggles a link
    toggle(fadeTabs: boolean) {
        // See if this item is currently active
        if (this.isVisible) {
            // Hide this link and tab
            this.el.classList.remove("active");
            this._elTab ? this._elTab.classList.remove("active") : null;
            this._elTab ? this._elTab.classList.remove("show") : null;
        } else {
            // Show this link and tab
            this.el.classList.add("active");
            this._elTab ? this._elTab.classList.add("active") : null;
            this._elTab && fadeTabs ? this._elTab.classList.add("show") : null;
        }
    }
}