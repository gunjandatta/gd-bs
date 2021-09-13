import { INavbar, INavbarProps } from "./types";
import { Base } from "../base";
import { ButtonClassNames } from "../button";
import { appendContent } from "../common";
import { NavbarItem } from "./item";
import { HTML } from "./templates";

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
    private _btnSearch: HTMLElement;
    private _items: Array<NavbarItem> = null;

    // Constructor
    constructor(props: INavbarProps, template: string = HTML, itemTemplate?: string) {
        super(template, props);

        // Configure the collapse
        this.configure(itemTemplate);

        // Configure search
        this.configureSearch();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure(itemTemplate: string) {
        // See if there is a brand
        let brand = this.el.querySelector(".navbar-brand") as HTMLAnchorElement;
        if (brand) {
            if (this.props.brand) {
                // Update the brand
                this.props.brandUrl ? brand.href = this.props.brandUrl : null;

                // Append the content
                appendContent(brand, this.props.brand);
            } else {
                // Remove the brand
                brand.parentNode.removeChild(brand);
            }
        }

        // Update the nav bar
        let navbar = this.el.querySelector(".navbar-collapse");
        if (navbar) {
            navbar.id = this.props.id || "navbar_content";
        }

        // Set the toggle
        let toggler = this.el.querySelector(".navbar-toggler");
        if (toggler) {
            toggler.setAttribute("aria-controls", navbar.id);
            toggler.setAttribute("data-bs-target", "#" + navbar.id);
        }

        // Set the scroll
        let nav = this.el.querySelector(".navbar-nav") as HTMLElement;
        if (nav && this.props.enableScrolling) {
            // Add the class
            nav.classList.add("navbar-nav-scroll");
        }

        // Add the classes based on the type
        this._btnSearch = this.el.querySelector("button[type='submit']") as HTMLButtonElement;

        // Set the type
        this.setType(this.props.type);

        // Render the items
        this.renderItems(itemTemplate);
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
                        props.onSearch(searchbox.value, ev);
                    }
                }
            });

            // See if a change event exists
            if (props.onChange) {
                // Add an input event
                searchbox.addEventListener("input", ev => {
                    // Call the event
                    props.onChange(searchbox.value, ev);
                });

                // Add a clear event
                searchbox.addEventListener("clear", ev => {
                    // Call the event
                    props.onChange(searchbox.value, ev);
                });

                // Edge has a bug where the clear event isn't triggered
                // See if this is the Edge browser
                if (window.navigator.userAgent.indexOf("Edge") > 0) {
                    // Detect the mouse click event
                    searchbox.addEventListener("mouseup", () => {
                        let currentValue = searchbox.value;

                        // Set a timeout to see if the value is cleared
                        setTimeout(() => {
                            // Compare the values
                            if (currentValue != searchbox.value) {
                                // Call the event
                                props.onChange(searchbox.value);
                            }
                        }, 1);
                    });
                }
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

        // See if the toggle exists
        let btnToggle = this.el.querySelector(".navbar-toggler") as HTMLButtonElement;
        if (btnToggle) {
            // Add a click event
            btnToggle.addEventListener("click", ev => {
                let elNav = this.el.querySelector(".navbar-collapse") as HTMLElement;

                // See if it's visible
                if (!btnToggle.classList.contains("collapsed") && elNav.classList.contains("show")) {
                    // Start the animation
                    elNav.style.height = elNav.getBoundingClientRect()["height"] + "px";
                    setTimeout(() => {
                        elNav.classList.add("collapsing");
                        elNav.classList.remove("collapse");
                        elNav.classList.remove("show");
                        elNav.style.height = "";
                        btnToggle.classList.add("collapsed");
                    }, 10);

                    // Wait for the animation to complete
                    setTimeout(() => {
                        elNav.classList.remove("collapsing");
                        elNav.classList.add("collapse");
                    }, 250);
                } else {
                    // Start the animation
                    elNav.classList.remove("collapse");
                    elNav.classList.add("collapsing");
                    elNav.style.height = this.el.scrollHeight + "px";
                    btnToggle.classList.remove("collapsed");

                    // Wait for the animation to complete
                    setTimeout(() => {
                        elNav.classList.remove("collapsing");
                        elNav.classList.add("collapse");
                        elNav.classList.add("show");
                        elNav.style.height = "";
                    }, 250);
                }
            });
        }
    }

    // Configures search
    private configureSearch() {
        // See if we are rendering a search box
        let search = this.el.querySelector("form") as HTMLElement;
        if (search) {
            if (this.props.enableSearch != false && this.props.searchBox) {
                let props = this.props.searchBox || {};

                // Update the searchbox
                let searchbox = search.querySelector("input");
                searchbox.placeholder = props.placeholder || searchbox.placeholder;
                searchbox.value = props.value || "";
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
            } else {
                // Remove the searchbox
                search.parentNode.removeChild(search);
            }
        }
    }

    // Render the items
    private renderItems(itemTemplate: string) {
        // Clear the list
        this._items = [];

        // Create the navbar list
        let list = this.el.querySelector("ul.navbar-nav") as HTMLElement;
        if (list) {
            // Parse the items
            let items = this.props.items || [];
            for (let i = 0; i < items.length; i++) {
                // Create the item
                let item = new NavbarItem(items[i], this.props, itemTemplate);
                this._items.push(item);
                list.appendChild(item.el);

                // Call the render events
                this.props.onItemRendered ? this.props.onItemRendered(item.el, items[i]) : null;
            }
        }

        // Create the navbar right list
        list = this.el.querySelectorAll("ul.navbar-nav")[1] as HTMLElement;
        if (list) {
            // See if no items exist
            let items = this.props.itemsEnd || [];
            if (items.length == 0) {
                // Remove the element
                list.remove();
            } else {
                // Parse the items
                for (let i = 0; i < items.length; i++) {
                    // Create the item
                    let item = new NavbarItem(items[i], this.props, itemTemplate);
                    this._items.push(item);
                    list.appendChild(item.el);
                }
            }
        }
    }

    /**
     * Public Methods
     */

    // Updates the navbar template type
    setType(navbarType: number) {
        // Remove the classes
        this.el.classList.remove("navbar-dark");
        this.el.classList.remove("navbar-light");
        this.el.classList.remove("bg-dark");
        this.el.classList.remove("bg-light");
        this.el.classList.remove("bg-primary");
        this._btnSearch.classList.remove("btn-outline-info");
        this._btnSearch.classList.remove("btn-outline-light");
        this._btnSearch.classList.remove("btn-outline-primary");

        // See which classes to add
        switch (navbarType) {
            // Dark
            case NavbarTypes.Dark:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-dark");
                this._btnSearch.classList.add("btn-outline-info")
                break;

            // Primary
            case NavbarTypes.Primary:
                // Add the class
                this.el.classList.add("navbar-dark");
                this.el.classList.add("bg-primary");
                this._btnSearch.classList.add("btn-outline-light")
                break;

            // Default - Light
            default:
                // Add the class
                this.el.classList.add("navbar-light");
                this.el.classList.add("bg-light");
                this._btnSearch.classList.add("btn-outline-primary")
                break;
        }
    }
}
export const Navbar = (props: INavbarProps, template?: string, itemTemplate?: string): INavbar => { return new _Navbar(props, template, itemTemplate); }