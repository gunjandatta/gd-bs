import { INavLink, INavLinkProps } from "./types";
import { Base } from "../base";
import { appendContent, setClassNames } from "../common";
import { HTMLLink, HTMLTab } from "./templates";

/**
 * Nav Link
 */
export class NavLink extends Base<INavLinkProps> implements INavLink {
    private _elLink: HTMLAnchorElement = null;
    private _elTab: HTMLDivElement = null;

    // Constructor
    constructor(props: INavLinkProps, isTab: boolean, template: string = HTMLLink) {
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
                this._elTab.setAttribute("data-title", this.props.title || "");

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

        // Execute the render events
        this.props.onRender ? this.props.onRender(this._elLink, this.props) : null;
        this._elTab && this.props.onRenderTab ? this.props.onRenderTab(this._elTab, this.props) : null;
    }

    /**
     * Public Interface
     */

    // The HTML tab element
    get elTab(): HTMLAnchorElement { return this._elLink; }

    // The HTML tab content element
    get elTabContent(): HTMLDivElement { return this._elTab; }

    // Returns true if the link is active
    get isActive(): boolean { return this._elLink.classList.contains("active"); }

    // Gets the tab name
    get tabName(): string { return this._elLink.innerHTML.trim(); }
    set tabName(value: string) { this._elLink.innerHTML = (value || "").trim(); }

    // Toggles a link
    toggle(fadeTabs?: boolean) {
        // See if this item is currently active
        if (this.isActive) {
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