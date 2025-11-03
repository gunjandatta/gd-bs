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
    private _activeIndex: number = null;
    private _elList: HTMLUListElement = null;
    private _items: Array<HTMLLIElement> = null;

    // Buttons
    private _buttons: { First: HTMLLIElement, Last: HTMLLIElement, Next: HTMLLIElement, Previous: HTMLLIElement } = null;

    // Constructor
    constructor(props: IPaginationProps, template: string = HTML, itemTemplate: string = HTMLItem) {
        super(template, props);

        // Create the default buttons
        this.createButtons(itemTemplate);

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

    // Configures the default buttons, based on the active index
    private configureDefaultButtons() {
        // Update the previous button
        if (this._activeIndex == 0) {
            // Ensure the first/previous item is disabled
            this._buttons.First.classList.add("disabled");
            this._buttons.Previous.classList.add("disabled");
        } else {
            // Ensure the first/previous item is enabled
            this._buttons.First.classList.remove("disabled");
            this._buttons.Previous.classList.remove("disabled");
        }

        // Update the next/last button
        if (this._activeIndex == this._items.length - 1) {
            // Ensure the next/last item is disabled
            this._buttons.Next.classList.add("disabled");
            this._buttons.Last.classList.add("disabled");
        } else {
            // Ensure the next/last item is enabled
            this._buttons.Next.classList.remove("disabled");
            this._buttons.Last.classList.remove("disabled");
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

                // See if the previous button was clicked
                if (isPrevious) {
                    // Click the previous item if it's available
                    this._items[this._activeIndex - 1]?.click();
                } else {
                    // Click the next item if it's available
                    this._items[this._activeIndex + 1]?.click();
                }
            });
        } else if (link == "First" || link == "Last") {
            let isLast = link == "Last";

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Do nothing if it's disabled
                if (item.classList.contains("disabled")) { return; }

                // See if this is the last item
                if (isLast) {
                    // Click on the last item
                    this._items[this._items.length - 1]?.click();
                } else {
                    // Click on the first item
                    this._items[0]?.click();
                }
            });
        } else {
            let pageNumber = parseInt(link);

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Parse the active items
                let activeItem = this._items[this._activeIndex];
                if (activeItem) {
                    // Clear the active class
                    activeItem.classList.remove("active");

                    // Remove the active span
                    let span = activeItem.querySelector("span") as HTMLSpanElement;
                    span ? span.parentNode.removeChild(span) : null;
                }

                // Make this item active
                item.classList.add("active");

                // Set the active index
                this._activeIndex = pageNumber - 1;

                // Add the span
                let span = document.createElement("span");
                span.classList.add("visually-hidden");
                span.innerHTML = "(current)";
                item.appendChild(span);

                // Configure the default buttons
                this.configureDefaultButtons();

                // Call the click event
                this.props.onClick ? this.props.onClick(pageNumber, ev) : null;
            });
        }
    }

    // Creates the default buttons
    private createButtons(itemTemplate: string) {
        this._buttons = {
            First: this.createItem("First", itemTemplate, true),
            Last: this.createItem("Last", itemTemplate, true),
            Next: this.createItem("Next", itemTemplate, true),
            Previous: this.createItem("Previous", itemTemplate, true)
        };

        // Set the default classes
        this._buttons.First.classList.add("disabled");
        this._buttons.First.classList.add("first");
        this._buttons.Last.classList.add("last");
        this._buttons.Next.classList.add("next");
        this._buttons.Previous.classList.add("disabled");
        this._buttons.Previous.classList.add("previous");
    }

    // Creates an page number item
    private createItem(text: string, itemTemplate: string, isDefault: boolean = false): HTMLLIElement {
        // Create the item
        let el = document.createElement("div");
        el.innerHTML = itemTemplate;
        let item = el.firstChild as HTMLLIElement;
        isDefault ? null : this._items.push(item);

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
        this._activeIndex = 0;
        this._items = [];

        // Determine if there are > 10 pages
        let pages = this.props.numberOfPages || 1;
        let showFirstLast = pages > 10;

        // See if we are showing the first/last links
        if (showFirstLast) {
            this._elList.appendChild(this._buttons.First);
        }

        // Append the previous link
        this._elList.appendChild(this._buttons.Previous);

        // Loop for the number of pages to create
        for (let i = 1; i <= pages; i++) {
            // Create a link
            let item = this.createItem(i.toString(), itemTemplate);
            i == activeItem ? item.classList.add("active") : null;
            this._elList.appendChild(item);
        }

        // Append the next link
        this._elList.appendChild(this._buttons.Next);
        pages > 1 ? null : this._buttons.Next.classList.add("disabled");

        // See if we are showing the first/last links
        if (showFirstLast) {
            this._elList.appendChild(this._buttons.Last);
        }
    }
}
export const Pagination = (props: IPaginationProps, template?: string, itemTemplate?: string): IPagination => { return new _Pagination(props, template, itemTemplate); }