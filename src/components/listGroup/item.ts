import { IListGroupItem } from "../../../@types/components/listGroup";
import { Base } from "../base";
import { Badge } from "../badge";
import { ListGroupClassNames } from ".";
import { HTMLItem, HTMLTab } from "./templates";

/**
 * List Group Item
 */
export class ListGroupItem extends Base<IListGroupItem> {
    private _elTab: HTMLDivElement = null;

    // Constructor
    constructor(props: IListGroupItem, isTab: boolean = false) {
        super(HTMLItem, props);

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
        this.props.isDisabled ? this.el.classList.add("disabled") : null;

        // Set the class name
        let className = ListGroupClassNames.getByType(this.props.type);
        className ? this.el.classList.add(className) : null;

        // See if this is a tab
        if (this._elTab) {
            let tabId = this.props.tabName.replace(/[^a-zA-Z0-9]/, "");

            // Set the properties
            this.el.setAttribute("href", "#" + tabId);
            this.el.setAttribute("data-toggle", "list");
            this.el.setAttribute("aria-controls", tabId);
            this.el.innerHTML = this.props.tabName;

            // Update the tab
            this._elTab.id = tabId;
            this._elTab.setAttribute("aria-labelledby", tabId);
            this.props.isActive ? this._elTab.classList.add("active") : null;
        } else {
            // Set the properties
            this.el.setAttribute("href", this.props.href || "#");
        }

        // See if there is a badge
        if (this.props.badge) {
            // Append a badge
            this.el.appendChild(Badge(this.props.badge).el);
        }

        // Set the content
        let content = this.props.content || "";
        let elContent = this._elTab || this.el;
        if (typeof (content) === "string") {
            // Set the html
            elContent.innerHTML = content;
        } else {
            // Append the element
            elContent.appendChild(content);
        }
    }

    // Configures the events
    private configureEvents() {
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", ev => {
                // Execute the event
                this.props.onClick(this.el, this.props);
            });
        }

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
            this._elTab.classList.remove("active");
            this._elTab.classList.remove("show");
        } else {
            // Show this link and tab
            this.el.classList.add("active");
            this._elTab.classList.add("active");
            fadeTabs ? this._elTab.classList.add("show") : null;
        }
    }
}