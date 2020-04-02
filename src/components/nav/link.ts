import { INavLink } from "../../../@types/components/nav";
import { Base } from "../base";
import * as HTML from "./link.html";
import * as HTMLTab from "./tab.html";

/**
 * Nav Link
 */
export class NavLink extends Base<INavLink> {
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
        let link = this.el.querySelector("a.nav-link");
        this.props.isActive ? link.classList.add("active") : null;
        this.props.isDisabled ? link.classList.add("disabled") : null;
        link.innerHTML = this.props.title || "";

        // See if this is a tab
        if (this._elTab) {
            let tabId = this.props.title.replace(/[^a-zA-Z0-9]/, "");

            // Set the properties
            link.setAttribute("href", "#" + tabId);
            link.setAttribute("data-toggle", "tab");
            link.setAttribute("aria-controls", tabId);
            link.innerHTML = this.props.title || "";

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
            link.setAttribute("href", this.props.href || "#");
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
}