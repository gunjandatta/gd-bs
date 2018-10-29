import * as jQuery from "jquery";
import { IListGroup, IListGroupProps } from "./types/listGroup";
import { Badge } from "./badge";

/**
 * List Group Item Types
 */
export enum ListGroupItemTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * List Group
 * @param props The list group properties.
 */
export const ListGroup = (props: IListGroupProps): IListGroup => {
    // Create the list group
    let elListGroup = document.createElement("div");
    elListGroup.className = props.className || "";
    elListGroup.classList.add("list-group");
    props.isFlush ? elListGroup.classList.add("list-group-flush") : null;
    props.isTabs ? elListGroup.setAttribute("role", "tablist") : null;

    // See if the column width is defined
    let elRow: HTMLElement = null;
    if (props.colWidth) {
        // Validate the value
        if (props.colWidth > 0 && props.colWidth < 12) {
            // Create the row
            elRow = document.createElement("div");
            elRow.className = "row";
            elRow.innerHTML = '<div class="col-' + props.colWidth + '"></div>';

            // Append the list group
            elRow.children[0].appendChild(elListGroup);
        } else {
            // Log
            console.warn("The column width value must be between 1-11");
        }
    }

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Create the item
        let elItem = document.createElement("a");
        elListGroup.appendChild(elItem);

        // Set the class name
        elItem.className = item.className || "";
        elItem.classList.add("list-group-item");
        item.badge ? elItem.classList.add("d-flex") : null;
        item.badge ? elItem.classList.add("justify-content-between") : null;
        item.isActive ? elItem.classList.add("active") : null;
        item.isDisabled ? elItem.classList.add("disabled") : null;

        // See if this is a tab
        if (item.tabName) {
            // Set the properties
            elItem.href = "#" + item.tabName.replace(/[^a-zA-Z0-9]/, "");
            elItem.setAttribute("data-toggle", "list");
            elItem.setAttribute("aria-controls", item.tabName);
        } else {
            // Set the properties
            elItem.href = item.href || "#";
        }

        // Add the class, based on the item type
        switch (item.type) {
            case ListGroupItemTypes.Danger:
                elItem.classList.add("list-group-item-primary");
                break;
            case ListGroupItemTypes.Dark:
                elItem.classList.add("list-group-item-dark");
                break;
            case ListGroupItemTypes.Info:
                elItem.classList.add("list-group-item-info");
                break;
            case ListGroupItemTypes.Light:
                elItem.classList.add("list-group-item-light");
                break;
            case ListGroupItemTypes.Primary:
                elItem.classList.add("list-group-item-primary");
                break;
            case ListGroupItemTypes.Secondary:
                elItem.classList.add("list-group-item-secondary");
                break;
            case ListGroupItemTypes.Success:
                elItem.classList.add("list-group-item-success");
                break;
            case ListGroupItemTypes.Warning:
                elItem.classList.add("list-group-item-warning");
                break;
        }

        // Set the content
        elItem.innerHTML = (props.isTabs ? item.tabName : item.content) || "";

        // See if there is a badge
        if (item.badge) {
            // Append a badge
            elItem.appendChild(Badge(item.badge).el);
        }

        // See if we are rendering tabs
        if (props.isTabs) {
            // Add the click event
            elItem.addEventListener("click", ev => {
                let elTab = ev.currentTarget as HTMLElement;

                // Get the active items
                let activeItems = el.querySelectorAll(".active");
                for (let i = 0; i < activeItems.length; i++) {
                    // Remove the class
                    activeItems[i].classList.remove("active");
                }

                // Set this tab to be active
                elTab.classList.add("active");

                // Get the tab content and make it active
                let elTabContent = el.querySelector(elTab.getAttribute("href"));
                elTabContent ? elTabContent.classList.add("active") : null;
            });
        }
    }

    // See if we are rendering tabs
    if (props.isTabs) {
        // Add the tab pane starting tag
        let elTabContent = document.createElement("div");
        elTabContent.className = "tab-content";

        // See if we are rendering columns
        if (elRow) {
            // Create the columns
            let elColumns = document.createElement("div");
            elColumns.className = "col-" + (12 - props.colWidth);
            elRow.appendChild(elColumns);

            // Append the tab content
            elColumns.appendChild(elTabContent);
        } else {
            // Append the tab content
            elListGroup.appendChild(elTabContent);
        }

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Create the item
            let elItem = document.createElement("div");
            elItem.className = "tab-pane";
            item.isActive ? elItem.classList.add("active") : null;
            props.enableFade ? elItem.classList.add("fade") : null;
            elItem.id = item.tabName.replace(/[^a-zA-Z0-9]/, "");
            elItem.setAttribute("role", "tabpanel");
            elItem.innerHTML = item.content || "";

            // Append the item to the tab content
            elTabContent.appendChild(elItem);
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(elRow || elListGroup);

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

    // Create the list group
    let listGroup = jQuery(el.children[0]);

    // Return the list group
    return {
        el,
        show: (tabId: string) => {
            // Show the tab
            listGroup.querySelector("#" + tabId).tab("show");
        }
    };
}