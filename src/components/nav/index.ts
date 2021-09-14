import { INav, INavLink, INavProps } from "./types";
import { Base } from "../base";
import { NavLink } from "./link";
import { HTML, HTMLTabs, HTMLVerticalTabs } from "./templates";

/**
 * Navigation
 * @param props - The navigation properties.
 */
class _Nav extends Base<INavProps> implements INav {
    private _links: Array<NavLink> = null;

    // Constructor
    constructor(props: INavProps, template: string = props.isTabs ? (props.isVertical ? HTMLVerticalTabs : HTMLTabs) : HTML, itemTemplate?: string) {
        super(template, props);

        // Configure the collapse
        this.configure(itemTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(itemTemplate: string) {
        // Update the navigation
        let nav = this.el.querySelector(".nav");
        if (nav) {
            this.props.id ? nav.id = this.props.id : null;
            this.props.enableFill ? this.el.classList.add("nav-fill") : null;
            this.props.isJustified ? this.el.classList.add("nav-justified") : null;
            this.props.isPills ? this.el.classList.add("nav-pills") : null;
            this.props.isTabs ? this.el.classList.add("nav-tabs") : null;
            this.props.isVertical ? this.el.classList.add("flex-column") : null;
        }

        // Render the nav links
        this.renderItems(itemTemplate);
    }

    // Configures the link event
    private configureEvents(tab: NavLink) {
        // Add a click event
        tab.el.addEventListener("click", () => {
            let prevTab: INavLink = null;
            let newTab: INavLink = tab;

            // Parse the links
            for (let i = 0; i < this._links.length; i++) {
                let link = this._links[i];

                // See if it's active
                if (link.isActive) {
                    // Set the old tab
                    prevTab = link;

                    // Toggle it
                    link.toggle(this.props.fadeTabs);
                }
            }

            // Toggle the link
            tab.toggle(this.props.fadeTabs);

            // Call the click event
            this.props.onClick ? this.props.onClick(newTab, prevTab) : null;
        });
    }

    // Renders the links
    private renderItems(itemTemplate: string) {
        // Clear the links
        this._links = [];

        // Get the nav and tab elements
        let nav = this.el.querySelector(".nav") || this.el;
        if (nav) {
            let tabs = this.el.querySelector(".tab-content");

            // Parse the navigation items
            let links = this.props.items || [];
            for (let i = 0; i < links.length; i++) {
                // Create the link
                let link = new NavLink(links[i], tabs ? true : false, itemTemplate);
                nav.appendChild(link.el);
                this._links.push(link);

                // See if we are rendering tabs
                if (tabs) {
                    // Configure the events
                    this.configureEvents(link);

                    // Add the tab content
                    tabs.appendChild(link.elTabContent);

                    // See if the fade option is enabled
                    if (this.props.fadeTabs) {
                        // Set the class name
                        link.elTabContent.classList.add("fade");

                        // See if the tab is active
                        if (link.props.isActive) {
                            // Set the class name
                            link.elTabContent.classList.add("show");
                        }
                    }
                }

                // Call the render events
                this.props.onLinkRendered ? this.props.onLinkRendered(link.elTab, links[i]) : null;
                this.props.onTabRendered ? this.props.onTabRendered(link.elTabContent, links[i]) : null;
            }
        }
    }

    /**
     * Public Interface
     */

    // The active tab
    get activeTab(): INavLink {
        // Parse the links
        for (let i = 0; i < this._links.length; i++) {
            let link = this._links[i];

            // See if it's active
            if (link.isActive) {
                // Return the link
                return link;
            }
        }

        // Active tab not found
        return null;
    }

    // Shows a tab
    showTab(tabId?: string | number) {
        // Ensure tabs exist
        if (this.props.isTabs) {
            // Parse the tabs
            for (let i = 0; i < this._links.length; i++) {
                let link = this._links[i];

                // See if this is the target tab
                if (tabId === i + 1 || link.elTabContent.getAttribute("data-title") == tabId) {
                    // Toggle it if it's not active
                    link.isActive ? null : link.toggle(this.props.fadeTabs);
                }
                // Else, see if it's active
                else if (link.isActive) {
                    // Toggle it
                    link.toggle(this.props.fadeTabs);
                }
            }
        }
    }
}
export const Nav = (props: INavProps, template?: string, itemTemplate?: string): INav => { return new _Nav(props, template, itemTemplate); }