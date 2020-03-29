import * as jQuery from "jquery";
import * as Common from "../common";
import { INav, INavProps } from "../../@types/components/nav";

/**
 * Navigation
 * @param props - The navigation properties.
 */
export const Nav = (props: INavProps): INav => {
    let renderTabContent = false;

    // Create the navigation
    let nav = document.createElement("div");

    // Create the navigation links
    let navLinks = document.createElement("ul");
    props.id ? navLinks.id = props.id : null;
    props.isTabs ? navLinks.setAttribute("role", "tablist") : null;
    nav.appendChild(navLinks);

    // Set the class names
    navLinks.className = props.className || "";
    navLinks.classList.add("nav");
    props.enableFill ? navLinks.classList.add("nav-fill") : null;
    props.isJustified ? navLinks.classList.add("nav-justified") : null;
    props.isPills ? navLinks.classList.add("nav-pills") : null;
    props.isTabs ? navLinks.classList.add("nav-tabs") : null;
    props.isVertical ? navLinks.classList.add("flex-column") : null;

    // Parse the navigation items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Create the navigation item
        let elNavItem = document.createElement("li");
        elNavItem.className = "nav-item";
        elNavItem.setAttribute("data-idx", i.toString());
        navLinks.appendChild(elNavItem);

        // Set the link class names
        let linkClassNames = ["nav-link"];
        item.isActive ? linkClassNames.push("active") : null;
        item.isDisabled ? linkClassNames.push("disabled") : null;

        // See if tab content exists
        if (item.onRenderTab || item.tabContent) {
            // Set the flag
            renderTabContent = true;
        }

        // Set the link
        elNavItem.innerHTML = '<a class="' + linkClassNames.join(' ') + '" href="' + (item.href || '#') + '">' + (item.title || '') + '</a>';

        // See if we are rendering tabs
        if (props.isPills || props.isTabs) {
            // Add a click event
            elNavItem.addEventListener("click", ev => {
                let elTab = ev.currentTarget as HTMLElement;

                // Parse the selected tab links
                let tabs = elTab.parentElement.querySelectorAll(".active");
                for (let i = 0; i < tabs.length; i++) {
                    // Unselect this tab
                    tabs[i].classList.remove("active");
                }

                // Select this tab
                elTab.children[0].classList.add("active");

                // Get the tab content
                let elTabContent = elTab.parentElement.nextElementSibling;
                if (elTabContent) {
                    // Parse the selected tab content
                    for (let i = 0; i < elTabContent.children.length; i++) {
                        let elSelectedTab = elTabContent.children[i] as HTMLElement;

                        // See if this tab is visible
                        if (elSelectedTab.classList.contains("active")) {
                            // Hide this tab
                            elSelectedTab.classList.remove("active");
                            elSelectedTab.classList.remove("show");
                        }
                    }

                    // Get the tab content
                    elTabContent = elTabContent.children[elTab.getAttribute("data-idx")];
                    if (elTabContent) {
                        // Show the tab content
                        elTabContent.classList.add("active");
                        elTabContent.classList.add("show");
                    }
                }
            });
        }

        // See if a click event exists
        if (item.onClick) {
            // Add a click event
            elNavItem.addEventListener("click", ev => {
                let elTab = ev.currentTarget as HTMLDivElement;
                let idx = elTab.getAttribute("data-idx");
                let item = props.items[idx];

                // Call the click event
                item.onClick(item, ev);
            });
        }

        // See if there is no href
        if (item.href == null || item.href != "#") {
            // Add a click event
            elNavItem.addEventListener("click", ev => {
                // Cancel the page from moving to the top
                ev.preventDefault();
            });
        }
    }

    // See if we are rendering tab content
    if (renderTabContent) {
        // Create the tab content element
        let elTabContent = document.createElement("div");
        elTabContent.className = "tab-content";
        nav.appendChild(elTabContent);

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the tab class names
            let tabClassNames = ["tab-pane"];
            props.enableFade ? tabClassNames.push("fade") : null;
            item.isActive ? tabClassNames.push("active show") : null;

            // Add the tab content
            let elTabContentDiv = document.createElement("div");
            elTabContentDiv.className = tabClassNames.join(' ');
            elTabContent.appendChild(elTabContentDiv);

            // Set the tab content
            let content = item.tabContent || "";
            if (typeof (content) === "string") {
                // Set the html
                elTabContentDiv.innerHTML = content;
            } else {
                // Append the element
                elTabContentDiv.appendChild(content);
            }
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(nav);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Get the tab content elements
    let elTabContent = el.querySelectorAll(".tab-pane");
    for (let i = 0; i < elTabContent.length; i++) {
        let item = props.items[i];

        // Call the event
        item.onRenderTab ? item.onRenderTab(item, elTabContent[i] as any) : null;
    }

    // Return the element
    let $nav = jQuery(el.children[0]);
    return {
        dispose: () => { $nav.tab("dispose"); },
        el: nav,
        hide: () => { Common.hide(nav); },
        show: (selector?: string) => {
            // See if a tab was specified
            if (selector) {
                // Show the specified tab
                $nav.querySelector(selector).tab("show");
            } else {
                // Show the navigation
                Common.show(nav);
            }
        }
    };
}