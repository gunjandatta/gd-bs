import { IPagination, IPaginationProps } from "./types";
import { Base } from "../base";
import { HTML, HTMLItem } from "./templates";

/**
 * Pagination Alignment
 */
export enum PaginationAlignment {
    Center = 1,
    Left = 2,
    Right = 3
}

/**
 * Pagination
 */
class _Pagination extends Base<IPaginationProps> implements IPagination {
    private _elList: HTMLUListElement = null;
    private _items: Array<HTMLLIElement> = null;

    // Constructor
    constructor(props: IPaginationProps, template: string = HTML, itemTemplate: string = HTMLItem) {
        super(template, props);

        // Configure the collapse
        this.configure(itemTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(itemTemplate: string) {
        // Update the nav properties
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;

        // Update the list
        this._elList = this.el.querySelector("ul");
        if (this._elList) {
            this.props.isLarge ? this._elList.classList.add("pagination-lg") : null;
            this.props.isSmall ? this._elList.classList.add("pagination-sm") : null;

            // Read the alignment
            switch (this.props.alignment) {
                // Danger
                case PaginationAlignment.Center:
                    this._elList.classList.add("justify-content-center");
                    break;
                // Dark
                case PaginationAlignment.Right:
                    this._elList.classList.add("justify-content-end");
                    break;
            }

            // Render the page numbers
            this.renderPageNumbers(1, itemTemplate);
        }
    }

    // Configures the next/previous buttons, based on the active index
    private configureNextPrevButtons(activePage: number) {
        // Update the previous button
        let prevItem = this._items[0];
        if (activePage == 1) {
            // Ensure the previous item is disabled
            prevItem.classList.add("disabled");
        } else {
            // Ensure the previous item is enabled
            prevItem.classList.remove("disabled");
        }

        // Update the next button
        let nextItem = this._items[this._items.length - 1];
        if (activePage == this._items.length - 2) {
            // Ensure the previous item is disabled
            nextItem.classList.add("disabled");
        } else {
            // Ensure the previous item is enabled
            nextItem.classList.remove("disabled");
        }
    }

    // Configure the events
    private configureEvents(item: HTMLLIElement) {
        // See if this is the next or previous item and skip it
        let link = item.querySelector("a").getAttribute("aria-label");
        if (link == "Previous" || link == "Next") {
            let isPrevious = link == "Previous";

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Do nothing if it's disabled
                if (item.classList.contains("disabled")) { return; }

                // Parse the items, excluding the next/previous items
                for (let i = 1; i < this._items.length - 1; i++) {
                    let item = this._items[i];

                    // See if this item is active
                    if (item.classList.contains("active")) {
                        // See if the previous button was clicked
                        if (isPrevious) {
                            // Click the previous item if it's available
                            i - 1 > 0 ? this._items[i - 1].click() : null;
                        } else {
                            // Click the next item if it's available
                            i < this._items.length - 2 ? this._items[i + 1].click() : null;
                        }

                        // Break from the loop
                        break;
                    }
                }
            });
        } else {
            let pageNumber = parseInt(link);

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Parse the active items
                let activeItems = this.el.querySelectorAll(".page-item.active");
                for (let i = 0; i < activeItems.length; i++) {
                    let item = activeItems[i];

                    // Clear the active class
                    item.classList.remove("active");

                    // Remove the active span
                    let span = item.querySelector("span") as HTMLSpanElement;
                    span ? span.parentNode.removeChild(span) : null;
                }

                // Make this item active
                item.classList.add("active");

                // Add the span
                let span = document.createElement("span");
                span.classList.add("visually-hidden");
                span.innerHTML = "(current)";
                item.appendChild(span);

                // Configure the next/previous buttons
                this.configureNextPrevButtons(pageNumber);

                // Class the click event
                this.props.onClick ? this.props.onClick(pageNumber, ev) : null;
            });
        }
    }

    // Creates an page number item
    private createItem(text: string, itemTemplate: string): HTMLLIElement {
        // Create the item
        let el = document.createElement("div");
        el.innerHTML = itemTemplate;
        let item = el.firstChild as HTMLLIElement;
        this._items.push(item);

        // Update the link
        let link = item.querySelector("a");
        if (link) {
            link.innerHTML = text;
            link.setAttribute("aria-label", link.innerHTML);
        }

        // Configure the events
        this.configureEvents(item);

        // Return the item
        return item;
    }

    // Renders the page numbers
    private renderPageNumbers(activeItem: number, itemTemplate: string) {
        // Clear the items
        this._items = [];

        // Determine if there are > 10 pages
        let pages = this.props.numberOfPages || 1;
        let showFirstLast = pages > 10;

        // Create the previous link
        let item = this.createItem("Previous", itemTemplate);
        item.classList.add("disabled");
        item.classList.add("previous");
        this._elList.appendChild(item);

        // See if we are showing the first/last links
        if (showFirstLast) {
            item = this.createItem("1", itemTemplate);
            activeItem == 1 ? item.classList.add("active") : null;
            item.classList.add("next");
            this._elList.appendChild(item);
        }

        // Loop for the number of pages to create
        // Parse the number of pages
        for (let i = 2; i <= pages; i++) {
            // Create a link
            item = this.createItem(i.toString(), itemTemplate);
            i == activeItem ? item.classList.add("active") : null;
            this._elList.appendChild(item);
        }

        // Create the next link
        item = this.createItem("Next", itemTemplate);
        pages > 1 ? null : item.classList.add("disabled");
        item.classList.add("next");
        this._elList.appendChild(item);
    }
}
export const Pagination = (props: IPaginationProps, template?: string, itemTemplate?: string): IPagination => { return new _Pagination(props, template, itemTemplate); }