import { IPagination, IPaginationProps } from "./types";
import { Base } from "../base";
import { skipBackward } from "../../icons/svgs/skipBackward";
import { skipForward } from "../../icons/svgs/skipForward";
import { skipEnd } from "../../icons/svgs/skipEnd";
import { skipStart } from "../../icons/svgs/skipStart";
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
    private _activePage: number = null;
    private _elList: HTMLUListElement = null;
    private _items: Array<HTMLLIElement> = null;
    private _showDefault: boolean = true;

    // Buttons
    private _buttons: {
        First: HTMLLIElement, Last: HTMLLIElement, Next: HTMLLIElement, Previous: HTMLLIElement,
        SkipBack10: HTMLLIElement, SkipBack5: HTMLLIElement, SkipForward5: HTMLLIElement, SkipForward10: HTMLLIElement
    } = null;

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
            this.renderPageNumbers(itemTemplate);
        }
    }

    // Configures the default buttons, based on the active index
    private configureDefaultButtons() {
        // Update the previous button
        if (this._activePage == 1) {
            // Ensure the first/previous item is disabled
            this._buttons.First.classList.add("disabled");
            this._buttons.Previous.classList.add("disabled");
        } else {
            // Ensure the first/previous item is enabled
            this._buttons.First.classList.remove("disabled");
            this._buttons.Previous.classList.remove("disabled");
        }

        // Update the next/last button
        if (this._activePage == this._items.length) {
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
    private configureEvents(item: HTMLLIElement, itemTemplate: string) {
        // See if this is a spacer
        let link = item.querySelector("a").getAttribute("aria-label");
        if (link == "...") {
            // Do nothing
            return;
        }

        // See if this is the next or previous item and skip it
        if (link == "Previous" || link == "Next") {
            let isPrevious = link == "Previous";

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Do nothing if it's disabled
                if (item.classList.contains("disabled")) { return; }

                // See if we are rendering the default
                if (this._showDefault) {
                    // Click the previous/next item
                    this._items[isPrevious ? this._activePage - 2 : this._activePage]?.click();
                } else {
                    // Update the active page
                    isPrevious ? this._activePage-- : this._activePage++;

                    // Render the active buttons
                    this.renderActivePageNumbers(itemTemplate);

                    // Call the click event
                    this.props.onClick ? this.props.onClick(this._activePage) : null;
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

                // See if we are rendering the default
                if (this._showDefault) {
                    // See if this is the last item
                    if (isLast) {
                        // Click on the last item
                        this._items[this._items.length - 1]?.click();
                    } else {
                        // Click on the first item
                        this._items[0]?.click();
                    }
                } else {
                    // Update the active page
                    this._activePage = isLast ? this.props.numberOfPages : 1;

                    // Render the active buttons
                    this.renderActivePageNumbers(itemTemplate);

                    // Call the click event
                    this.props.onClick ? this.props.onClick(this._activePage) : null;
                }
            });
        } else if (link == "&lt;&lt;" || link == "&lt;" || link == "&gt;" || link == "&gt;&gt;") {
            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Update the active page
                switch (link) {
                    case "&lt;&lt;":
                        this._activePage -= 10;
                        break;
                    case "&lt;":
                        this._activePage -= 5;
                        break;
                    case "&gt;":
                        this._activePage += 5;
                        break;
                    case "&gt;&gt;":
                        this._activePage += 10;
                        break;
                }

                // Validate the page number
                if (this._activePage <= 0) {
                    this._activePage = 1;
                } else if (this._activePage > this.props.numberOfPages) {
                    this._activePage = this.props.numberOfPages;
                }

                // Render the active buttons
                this.renderActivePageNumbers(itemTemplate);

                // Call the click event
                this.props.onClick ? this.props.onClick(this._activePage) : null;
            });
        } else {
            let pageNumber = parseInt(link);

            // Add a click event
            item.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // See if we are showing the default
                if (this._showDefault) {
                    // Clear the active item
                    let activeItem = this._items[this._activePage - 1];
                    if (activeItem) {
                        // Clear the active class
                        activeItem.classList.remove("active");

                        // Remove the active span
                        let span = activeItem.querySelector("span") as HTMLSpanElement;
                        span ? span.parentNode.removeChild(span) : null;
                    }

                    // Set the active index
                    this._activePage = pageNumber;

                    // Show the active item
                    this._items[this._activePage - 1].classList.add("active");

                    // Add the span
                    let span = document.createElement("span");
                    span.classList.add("visually-hidden");
                    span.innerHTML = "(current)";
                    this._items[this._activePage - 1].appendChild(span);

                    // Configure the default buttons
                    this.configureDefaultButtons();
                } else {
                    // Set the active index
                    this._activePage = pageNumber;

                    // Render the active buttons
                    this.renderActivePageNumbers(itemTemplate);
                }

                // Call the click event
                this.props.onClick ? this.props.onClick(pageNumber) : null;
            });
        }
    }

    // Creates the default buttons
    private createButtons(itemTemplate: string) {
        this._buttons = {
            First: this.createItem("First", itemTemplate, true),
            Last: this.createItem("Last", itemTemplate, true),
            Next: this.createItem("Next", itemTemplate, true),
            Previous: this.createItem("Previous", itemTemplate, true),
            SkipBack10: this.createItem("<<", itemTemplate, true),
            SkipBack5: this.createItem("<", itemTemplate, true),
            SkipForward5: this.createItem(">", itemTemplate, true),
            SkipForward10: this.createItem(">>", itemTemplate, true)
        };

        // Set the default classes
        this._buttons.First.classList.add("first");
        this._buttons.Last.classList.add("last");
        this._buttons.Next.classList.add("next");
        this._buttons.Previous.classList.add("previous");

        // Disable the first and previous buttons by default
        this._buttons.First.classList.add("disabled");
        this._buttons.Previous.classList.add("disabled");

        // Set the icons
        this._buttons.SkipBack10.querySelector("a").innerHTML = skipBackward(15, 15).outerHTML;
        this._buttons.SkipBack5.querySelector("a").innerHTML = skipStart(15, 15).outerHTML;
        this._buttons.SkipForward5.querySelector("a").innerHTML = skipEnd(15, 15).outerHTML;
        this._buttons.SkipForward10.querySelector("a").innerHTML = skipForward(15, 15).outerHTML;
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
        this.configureEvents(item, itemTemplate);

        // Return the item
        return item;
    }

    // Renders the page numbers
    private renderPageNumbers(itemTemplate: string) {
        // Clear the items
        this._activePage = 1;
        this._items = [];

        // Determine if there are > 10 pages
        let pages = this.props.numberOfPages || 1;
        let maxPages = typeof (this.props.maxPages) === "number" ? this.props.maxPages : 10;
        this._showDefault = pages < maxPages;

        // See if we are rendering the default
        if (this._showDefault) {
            // Append the first/previous link
            this._elList.appendChild(this._buttons.First);
            this._elList.appendChild(this._buttons.Previous);

            // Loop for the number of pages to create
            for (let i = 1; i <= pages; i++) {
                // Create a link
                let item = this.createItem(i.toString(), itemTemplate);
                i == this._activePage ? item.classList.add("active") : null;
                this._elList.appendChild(item);
            }

            // Append the next/last link
            this._elList.appendChild(this._buttons.Next);
            this._elList.appendChild(this._buttons.Last);
            if (pages == 1) {
                this._buttons.Next.classList.add("disabled");
                this._buttons.Last.classList.add("disabled");
            }
        } else {
            // Render the active page numbers
            this.renderActivePageNumbers(itemTemplate);
        }
    }

    // Renders the active page numbers
    private renderActivePageNumbers(itemTemplate: string) {
        // Clear the items and list element
        this._items = [];
        while (this._elList.firstChild) { this._elList.removeChild(this._elList.firstChild); }

        // Append the first/previous link
        this._elList.appendChild(this._buttons.First);
        this._elList.appendChild(this._buttons.Previous);
        if (this._activePage == 1) {
            this._buttons.First.classList.add("disabled");
            this._buttons.Previous.classList.add("disabled");
        } else {
            this._buttons.First.classList.remove("disabled");
            this._buttons.Previous.classList.remove("disabled");
        }

        // See if we are at the beginning
        if (this._activePage < 5) {
            // Render the first five
            for (let i = 1; i <= 5; i++) {
                // Create a link
                let item = this.createItem(i.toString(), itemTemplate);
                i == this._activePage ? item.classList.add("active") : null;
                this._elList.appendChild(item);
            }

            // Render a spacer
            let item = this.createItem("...", itemTemplate, true);
            this._elList.appendChild(item);

            // Render the last 3
            let diff = Math.round((this.props.numberOfPages - 5) / 3);
            for (let i = 2; i >= 0; i--) {
                // Create a link
                let idx = this.props.numberOfPages - i * diff;
                let item = this.createItem((idx).toString(), itemTemplate);
                this._elList.appendChild(item);
            }
        }
        // Else, see if we are at the end
        else if (this._activePage > this.props.numberOfPages - 5) {

            // Render the first 3
            let diff = Math.round((this.props.numberOfPages - 5) / 3);
            for (let i = 0; i <= 2; i++) {
                // Create a link
                let idx = i == 0 ? 1 : i * diff;
                let item = this.createItem((idx).toString(), itemTemplate);
                this._elList.appendChild(item);
            }

            // Render a spacer
            let item = this.createItem("...", itemTemplate, true);
            this._elList.appendChild(item);

            // Render the last five
            for (let i = this.props.numberOfPages - 5; i <= this.props.numberOfPages; i++) {
                // Create a link
                let item = this.createItem(i.toString(), itemTemplate);
                i == this._activePage ? item.classList.add("active") : null;
                this._elList.appendChild(item);
            }
        }
        // Else, render the skip buttons
        else {
            // Render the skip buttons
            this._elList.appendChild(this._buttons.SkipBack10);
            this._elList.appendChild(this._buttons.SkipBack5);

            // Render +/- 2 from the active index
            for (let i = this._activePage - 2; i <= this._activePage + 2; i++) {
                // Create a link
                let item = this.createItem(i.toString(), itemTemplate);
                i == this._activePage ? item.classList.add("active") : null;
                this._elList.appendChild(item);
            }

            // Render the skip buttons
            this._elList.appendChild(this._buttons.SkipForward5);
            this._elList.appendChild(this._buttons.SkipForward10);
        }

        // Append the next/last link
        this._elList.appendChild(this._buttons.Next);
        this._elList.appendChild(this._buttons.Last);
        if (this._activePage == this.props.numberOfPages) {
            this._buttons.Next.classList.add("disabled");
            this._buttons.Last.classList.add("disabled");
        } else {
            this._buttons.Next.classList.remove("disabled");
            this._buttons.Last.classList.remove("disabled");
        }
    }
}
export const Pagination = (props: IPaginationProps, template?: string, itemTemplate?: string): IPagination => { return new _Pagination(props, template, itemTemplate); }