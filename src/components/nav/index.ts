import { INav, INavProps } from "../../../@types/components/nav";
import { Base } from "../base";
import { NavLink } from "./link";
import * as HTML from "./index.html";
import * as HTMLTabs from "./tabs.html";
import * as HTMLVerticalTabs from "./tabsVertical.html";

/**
 * Navigation
 * @param props - The navigation properties.
 */
class _Nav extends Base<INavProps> implements INav {
    private _links: Array<NavLink> = null;

    // Constructor
    constructor(props: INavProps) {
        super(props.isTabs ? (props.isVertical ? HTMLVerticalTabs : HTMLTabs) : HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Update the navigation
        let nav = this.el.querySelector(".nav");
        this.props.id ? nav.id = this.props.id : null;
        this.props.enableFill ? this.el.classList.add("nav-fill") : null;
        this.props.isJustified ? this.el.classList.add("nav-justified") : null;
        this.props.isPills ? this.el.classList.add("nav-pills") : null;
        this.props.isTabs ? this.el.classList.add("nav-tabs") : null;
        this.props.isVertical ? this.el.classList.add("flex-column") : null;

        // Render the nav links
        this.renderItems();
    }

    // Renders the links
    private renderItems() {
        // Clear the links
        this._links = [];

        // Get the nav and tab elements
        let nav = this.el.querySelector(".nav") || this.el;
        let tabs = this.el.querySelector(".tab-content");

        // Parse the navigation items
        let links = this.props.items || [];
        for (let i = 0; i < links.length; i++) {
            // Create the link
            let link = new NavLink(links[i], tabs ? true : false);
            nav.appendChild(link.el);
            this._links.push(link);

            // See if we are rendering tabs
            if (tabs) {
                // Add the tab content
                tabs.appendChild(link.elTab);

                // See if the fade option is enabled
                if (this.props.fadeTabs) {
                    // Set the class name
                    link.elTab.classList.add("fade");

                    // See if the tab is active
                    if (link.props.isActive) {
                        // Set the class name
                        link.elTab.classList.add("show");
                    }
                }
            }
        }
    }

    /**
     * Public Interface
     */

    // Shows a tab
    showTab(tabId?: string | number) {
        // Ensure tabs exist
        if (this.props.isTabs) {
            // Parse the tabs
            for (let i = 0; i < this._links.length; i++) {
                let link = this._links[i];

                // See if this is the target tab
                if (tabId === i + 1 || link.elTab.id == tabId) {
                    // Toggle it if it's not visible
                    link.isVisible ? null : link.toggle(this.props.fadeTabs);
                }
                // Else, see if it's visible
                else if (link.isVisible) {
                    // Toggle it
                    link.toggle(this.props.fadeTabs);
                }
            }
        }
    }
}
export const Nav = (props: INavProps): INav => { return new _Nav(props); }