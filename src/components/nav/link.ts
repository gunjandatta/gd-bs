import { INavLink } from "../../../@types/components/nav";
import { Base } from "../base";
import * as HTML from "./link.html";
import * as HTMLTab from "./tab.html";

/**
 * Nav Link
 */
export class NavLink extends Base<INavLink> {
    private _elLink: HTMLAnchorElement = null;
    private _elTab: HTMLDivElement = null;

    // Constructor
    constructor(props: INavLink, isTab: boolean) {
        super(HTML, props);

        // See if this is for a tab
        if (isTab) {
            // Create the tab element
            let el = document.createElement("div");
            el.innerHTML = HTMLTab as any;
            this._elTab = el.firstChild as HTMLDivElement;
        }

        // Configure the item
        this.configure();

        // Configure the events
        this.configureEvents();
    }

    // Configure the item
    private configure() {
        // Update the link
        this._elLink = this.el.querySelector("a.nav-link");
        this.props.isActive ? this._elLink.classList.add("active") : null;
        this.props.isDisabled ? this._elLink.classList.add("disabled") : null;
        this._elLink.innerHTML = this.props.title || "";

        // See if this is a tab
        if (this._elTab) {
            let tabId = this.props.title.replace(/[^a-zA-Z0-9]/, "");

            // Set the properties
            this._elLink.setAttribute("href", "#" + tabId);
            this._elLink.setAttribute("data-toggle", "tab");
            this._elLink.setAttribute("aria-controls", tabId);
            this._elLink.innerHTML = this.props.title || "";

            // Update the tab
            this._elTab.id = tabId;
            this._elTab.setAttribute("aria-labelledby", tabId);

            // See if this tab is active
            if (this.props.isActive) {
                // Update the classes
                this._elTab.classList.add("active")
            }

            // Set the content
            let content = this.props.tabContent || "";
            if (typeof (content) === "string") {
                // Set the html
                this._elTab.innerHTML = content;
            } else {
                // Append the element
                this._elTab.appendChild(content);
            }
        } else {
            // Set the properties
            this._elLink.setAttribute("href", this.props.href || "#");
        }
    }

    // Configures the events
    private configureEvents() {
        // See if there is a click event
        if (this.props.onClick) {
            // Add a click event
            this.el.addEventListener("click", ev => {
                // Execute the event
                this.props.onClick(this.props, ev);
            });
        }

        // Execute the tab render event
        this._elTab && this.props.onRenderTab ? this.props.onRenderTab(this.props, this._elTab) : null;
    }

    /**
     * Public Interface
     */

    // The HTML tab element
    get elTab(): HTMLDivElement { return this._elTab; }

    // Returns true if the link is visible
    get isVisible(): boolean { return this._elLink.classList.contains("active"); }

    // Toggles a link
    toggle(fadeTabs: boolean) {
        // See if this item is currently active
        if (this.isVisible) {
            // Hide this link and tab
            this._elLink.classList.remove("active");
            this._elTab.classList.remove("active");
            this._elTab.classList.remove("show");
        } else {
            // Show this link and tab
            this._elLink.classList.add("active");
            this._elTab.classList.add("active");
            fadeTabs ? this._elTab.classList.add("show") : null;
        }
    }
}