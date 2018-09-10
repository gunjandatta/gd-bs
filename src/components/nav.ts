import * as jQuery from "jquery";
import { INav, INavProps } from "./types/nav";

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
    props.className ? navLinks.classList.add(props.className) : null;
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

        // Set the index
        elNavItem.setAttribute("data-idx", i.toString());

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
                let elItem = ev.currentTarget as HTMLDivElement;

                // Call the click event
                item.onClick(props.items[elItem.getAttribute("data-idx")], ev);
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
            elTabContent.innerHTML += [
                '<div class="' + tabClassNames.join(' ') + '">',
                item.tabContent || "",
                '</div>'
            ].join('\n');
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(nav);

    // See if are rendering it to an element
    if (props.el) {
        // Ensure the parent element exists
        if (props.el.parentElement && props.el.parentElement.classList) {
            // Set the bootstrap class
            props.el.parentElement.classList.contains("bs") ? null : props.el.parentElement.classList.add("bs");
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
        show: (selector: string) => { $nav.querySelector(selector).tab("show"); }
    };
}