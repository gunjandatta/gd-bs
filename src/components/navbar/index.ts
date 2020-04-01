import { INavbar, INavbarProps, INavbarItem } from "../../../@types/components/navbar";
import * as Common from "../common";
import { Button } from "../button";
import { Dropdown } from "../dropdown";
import { InputGroup, InputGroupTypes } from "../inputGroup";
import { Base } from "../base";
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
    // Constructor
    constructor(props: INavbarProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
    }
}
export const Navbar = (props: INavbarProps): INavbar => {
    // Create the nav bar
    let navbar = document.createElement("nav");

    // Set the class name
    navbar.className = props.className || "";
    navbar.classList.add("navbar");

    // See if the class names contain the "expand"
    if (navbar.className.indexOf("navbar-expand") < 0) {
        // Add the default class
        navbar.classList.add("navbar-expand-lg");
    }

    // Check the type
    switch (props.type) {
        // Dark
        case NavbarTypes.Dark:
            // Add the class
            navbar.classList.add("navbar-dark");
            navbar.classList.add("bg-dark");
            break;
        // Primary
        case NavbarTypes.Primary:
            // Add the class
            navbar.classList.add("navbar-primary");
            navbar.classList.add("bg-primary");
            break;
        // Default - Light
        default:
            // Add the class
            navbar.classList.add("navbar-light");
            navbar.classList.add("bg-light");
            break;
    }

    // See if there is a brand
    if (props.brand) {
        // Add the brand
        let brand = document.createElement("a");
        brand.className = "navbar-brand";
        brand.href = props.brandUrl || "#";
        brand.innerHTML = props.brand;
        navbar.appendChild(brand);
    }

    // Set the nav id
    let navId = props.id || "navbar_content";

    // Add the toggler
    let toggler = document.createElement("button");
    toggler.className = "navbar-toggler";
    toggler.type = "button";
    toggler.setAttribute("aria-controls", navId);
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle navigation");
    toggler.setAttribute("data-target", "#" + navId);
    toggler.setAttribute("data-toggle", "collapse");
    toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
    navbar.appendChild(toggler);

    // Create the navbar nav
    let nav = document.createElement("div");
    nav.className = "collapse navbar-collapse";
    nav.id = navId;
    navbar.appendChild(nav);

    // Create the navbar list
    let navbarList = document.createElement("ul");
    navbarList.className = "navbar-nav mr-auto";
    nav.appendChild(navbarList);

    // Parse the items and generate the nav items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let navItem = null;
        let item = items[i];

        // See if this is a dropdown
        if (item.items) {
            // Render a dropdown
            navItem = Dropdown({
                isReadonly: item.isDisabled,
                items: item.items,
                label: item.text,
                navFl: true,
                onChange: (item, ev) => {
                    // Remove the active class
                    (ev.currentTarget as HTMLElement).classList.remove("active");
                }
            }).el;
        }
        // Else, ensure there is text
        else if (item.text) {
            // Set the class names
            let classNames = ["nav-link"];
            item.isActive ? navbar.classList.add("active") : null;
            item.isDisabled ? navbar.classList.add("disabled") : null;

            // Create the nav item
            navItem = document.createElement("li");
            navItem.classList.add("nav-item");

            // Render the item
            navItem.innerHTML = [
                '<a class="' + classNames.join(' ') + '" href="' + (item.href ? item.href : '#') + '">',
                item.text,
                item.isActive ? '<span class="sr-only">(current)</span>' : '',
                '</a>'
            ].join('\n');
        }

        // Set the data attribute
        navItem.setAttribute("data-idx", i.toString());

        // See if there is a click event
        if (props.onClick || item.onClick) {
            // Add a click event
            navItem.addEventListener("click", ev => {
                let navLink = ev.currentTarget as HTMLElement;
                let itemId = (navLink).getAttribute('data-idx');
                let item: INavbarItem = props.items[itemId];

                // Ensure the item exists
                if (item) {
                    // See if it's disabled or has no link, and is not a dropdown
                    if ((item.isDisabled || item.href == null || item.href == "#") && !navLink.classList.contains("dropdown")) {
                        // Prevent the page from moving to the top
                        ev.preventDefault();
                    }

                    // Do nothing if it's disabled
                    if (item.isDisabled) { return; }

                    // Call the events
                    item.onClick ? item.onClick(item, ev) : null;
                    props.onClick ? props.onClick(item, ev) : null;
                }
            });
        }

        // Add the nav item
        navbarList.appendChild(navItem);
    }

    // See if we are rendering a search box
    if (props.enableSearch || props.searchBox) {
        let text = (props.searchBox ? props.searchBox.btnText : null) || "Search";

        // Render the form
        let form = document.createElement("form");
        form.className = "form-inline my-2 my-lg-0";

        // Render the searchbox
        let searchbox = InputGroup({
            className: "mr-sm-2",
            formFl: true,
            placeholder: text,
            type: InputGroupTypes.Search,
            onChange: (value) => {
                // Call the event
                props.searchBox && props.searchBox.onChange ? props.searchBox.onChange(value) : null;
            },
            onClear: () => {
                // Call the event
                props.searchBox && props.searchBox.onChange ? props.searchBox.onChange("") : null;
            }
        }).el as HTMLInputElement;
        form.appendChild(searchbox);

        // Set the key down event, to catch the "Enter" key being pressed
        searchbox.addEventListener("keydown", ev => {
            // See if the "Enter" key was pressed
            if (ev.keyCode == 13) {
                // Disable the postback
                ev.preventDefault();

                // See if there is a search event
                if (props.searchBox && props.searchBox.onSearch) {
                    // Call the event
                    props.searchBox.onSearch(searchbox.value);
                }
            }
        });

        // See if we are rendering a button
        let hideButton = props.searchBox && props.searchBox.hideButton ? true : false;
        if (!hideButton) {
            // Create the search button
            form.appendChild(Button({
                className: "my-2 my-sm-0",
                text,
                type: props.searchBox ? props.searchBox.btnType : null,
                onClick: () => {
                    // See if a search event exists
                    if (props.searchBox && props.searchBox.onSearch) {
                        // Call the event
                        props.searchBox.onSearch(searchbox.value);
                    }
                }
            }).el);
        }

        // Append the search box
        nav.appendChild(form);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(navbar);

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

    // Return the navbar
    return {
        el: navbar,
        hide: () => { Common.hide(navbar); },
        show: () => { Common.show(navbar); }
    };
}