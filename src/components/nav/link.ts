import { INavLink } from "../../../@types/components/nav";
import { Base } from "../base";
import { appendContent, setClassNames } from "../common";
import { HTMLLink, HTMLTab } from "./templates";

/**
 * Nav Link
 */
export class NavLink extends Base<INavLink> {
    private _elLink: HTMLAnchorElement = null;
    private _elTab: HTMLDivElement = null;

    // Constructor
    constructor(props: INavLink, isTab: boolean, template: string = HTMLLink) {
        super(template, props);

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
        // Update the link
        this._elLink = this.el.querySelector("a.nav-link");
        if (this._elLink) {
            // Set the class names
            setClassNames(this._elLink, this.props.className);
            this.props.isActive ? this._elLink.classList.add("active") : null;
            this.props.isDisabled ? this._elLink.classList.add("disabled") : null;

            // Set the html
            this._elLink.innerHTML = this.props.title == null ? "" : this.props.title;

            // See if this is a tab
            if (this._elTab) {
                let tabId = this.props.title.replace(/[^a-zA-Z]/g, "");

                // Set the properties
                this._elLink.id = tabId + "-tab";
                this._elLink.setAttribute("href", "#" + tabId);
                this._elLink.setAttribute("data-bs-toggle", "tab");
                this._elLink.setAttribute("aria-controls", tabId);
                this._elLink.innerHTML = this.props.title == null ? "" : this.props.title;

                // Update the tab
                this._elTab.id = tabId;
                this._elTab.setAttribute("aria-labelledby", tabId);

                // See if this tab is active
                if (this.props.isActive) {
                    // Update the classes
                    this._elTab.classList.add("active")
                }

                // Append the content
                appendContent(this._elTab, this.props.tabContent);
            } else {
                // Set the properties
                this._elLink.setAttribute("href", this.props.href || "#");
            }
        }
    }

    // Configures the events
    private configureEvents() {
        // Add a click event
        (this.el as HTMLElement).addEventListener("click", ev => {
            // Prevent the page from moving to the top
            ev.preventDefault();

            // Execute the event
            this.props.onClick ? this.props.onClick(this.props, ev) : null;
        });

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