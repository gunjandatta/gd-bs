import { INavbar, INavbarProps } from "../../../@types/components/navbar";
import { Base } from "../base";
import { ButtonClassNames } from "../button";
import { NavbarItem } from "./item";
import * as HTML from "./index.html";

/**
 * Navbar Types
 */
export enum NavbarTypes {
    Dark = 1,
    Light = 2,
    Primary = 3
}

/**
 * Navbar
 */
class _Navbar extends Base<INavbarProps> implements INavbar {
    private _items: Array<NavbarItem> = null;

    // Constructor
    constructor(props: INavbarProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure search
        this.configureSearch();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // See if there is a brand
        let brand = this.el.querySelector(".navbar-brand") as HTMLAnchorElement;
        if (this.props.brand) {
            // Update the brand
            this.props.brandUrl ? brand.href = this.props.brandUrl : null;
            brand.innerHTML = this.props.brand || "";
        } else {
            // Remove the brand
            this.el.removeChild(brand);
        }

        // Update the nav bar
        let navbar = this.el.querySelector(".navbar-collapse");
        navbar.id = this.props.id || "navbar_content";

        // Set the toggle
        let toggler = this.el.querySelector(".navbar-toggler");
        toggler.setAttribute("aria-controls", navbar.id);
        toggler.setAttribute("data-target", "#" + navbar.id);

        // Add the classes based on the type
        switch (this.props.type) {
            // Dark
            case NavbarTypes.Dark:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-dark");
                break;
            // Primary
            case NavbarTypes.Primary:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-primary");
                break;
            // Default - Light
            default:
                // Add the class
                this.el.classList.add("navbar-light");
                this.el.classList.add("bg-light");
                break;
        }

        // Render the items
        this.renderItems();
    }

    // Configure the events
    private configureEvents() {
        let props = this.props.searchBox || {};

        // See if search events exist
        let searchbox = this.el.querySelector("form input") as HTMLInputElement;
        if (searchbox) {
            // Set a keydown event to catch the "Enter" key being pressed
            searchbox.addEventListener("keydown", ev => {
                // See if the "Enter" key was pressed
                if (ev.keyCode == 13) {
                    // Disable the postback
                    ev.preventDefault();

                    // See if there is a search event
                    if (props.onSearch) {
                        // Call the event
                        props.onSearch(searchbox.value);
                    }
                }
            });

            // See if a change event exists
            if (props.onChange) {
                // Add an input event
                searchbox.addEventListener("input", ev => {
                    // Call the event
                    props.onChange(searchbox.value);
                });

                // Add a clear event
                searchbox.addEventListener("clear", ev => {
                    // Call the event
                    props.onChange(searchbox.value);
                });
            }
        }

        // See if a search event exists
        let button = this.el.querySelector("form button") as HTMLButtonElement;
        if (button && props.onSearch) {
            // Add a click event
            button.addEventListener("click", ev => {
                // Prevent the page from moving to the top
                ev.preventDefault();

                // Call the event
                props.onSearch(searchbox.value);
            });
        }
    }

    // Configures search
    private configureSearch() {
        // See if we are rendering a search box
        let search = this.el.querySelector("form");
        if (this.props.enableSearch || this.props.searchBox) {
            let props = this.props.searchBox || {};

            // Update the searchbox
            let searchbox = search.querySelector("input");
            searchbox.placeholder = props.placeholder || searchbox.placeholder;
            props.btnText ? searchbox.setAttribute("aria-label", props.btnText) : null;

            // See if we are rendering a button
            let button = search.querySelector("button");
            if (props.hideButton == true) {
                // Remove the button
                search.removeChild(button);
            } else {
                // Set the button type class name
                let className = ButtonClassNames.getByType(props.btnType);
                className ? button.classList.add(className) : null;
            }
        }
    }

    // Render the items
    private renderItems() {
        // Clear the list
        this._items = [];

        // Create the navbar list
        let list = this.el.querySelector("ul.navbar-nav");

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Create the item
            let item = new NavbarItem(items[i], this.props);
            this._items.push(item);
            list.appendChild(item.el);
        }
    }
}
export const Navbar = (props: INavbarProps): INavbar => { return new _Navbar(props); }