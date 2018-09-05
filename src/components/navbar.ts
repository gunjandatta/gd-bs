import * as jQuery from "jquery";
import { Button } from "./button";
import { Dropdown } from "./dropdown";
import { InputGroup, InputGroupTypes } from "./inputGroup";
import { INavbar, INavbarProps, INavbarItem } from "./types/navbar";

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
export const Navbar = (props: INavbarProps): INavbar => {
    // Set the class name
    let classNames = ["navbar navbar-expand-lg"]
    props.className ? classNames.push(props.className) : null;

    // Check the type
    switch (props.type) {
        // Dark
        case NavbarTypes.Dark:
            // Add the class
            classNames.push("navbar-dark bg-dark");
            break;
        // Primary
        case NavbarTypes.Primary:
            // Add the class
            classNames.push("navbar-primary bg-primary");
            break;
        // Default - Light
        default:
            // Add the class
            classNames.push("navbar-light bg-light");
            break;
    }

    // Set the starting tag
    let html = ['<nav class="' + classNames.join(' ') + '">'];

    // See if there is a brand
    if (props.brand) {
        // Add the brand
        html.push('<a class="navbar-brand"' + (props.brandUrl ? ' href="' + props.brandUrl + '"' : '') + '>' + props.brand + '</a>');
    }

    // Set the nav id
    let navId = props.id || "navbar_content";

    // Render the toggler
    html.push([
        '<button class="navbar-toggler" type="button" data-target="#' + navId + '" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">',
        '<span class="navbar-toggler-icon"></span>',
        '</button>'
    ].join('\n'));

    // Render the nav bar nav and add the ending tag
    html.push([
        '<div class="collapse navbar-collapse d-flex justify-content-between" id="' + navId + '">',
        '<ul class="navbar-nav"></ul>',
        '</div>',
        '</nav>'
    ].join('\n'));

    // Create the element
    let el = document.createElement("div");
    el.innerHTML = html.join('\n');

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

    // Parse the items and generate the nav items
    let navItems = el.querySelector("ul.navbar-nav");
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        let navItem = null;
        let item = items[i];

        // See if this is a dropdown
        if (item.items) {
            // Render a dropdown
            navItem = Dropdown({
                items: item.items,
                label: item.text,
                navFl: true,
                onChange: (item, ev) => {
                    // Remove the active class
                    (ev.currentTarget as HTMLElement).classList.remove("active");
                }
            }).el.children[0];
        }
        // Else, ensure there is text
        else if (item.text) {
            // Set the class names
            let classNames = ["nav-link"];
            item.isActive ? classNames.push("active") : null;
            item.isDisabled ? classNames.push("disabled") : null;

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
        navItems.appendChild(navItem);
    }

    // See if we are rendering a search box
    let navbar = el.querySelector("#" + navId);
    if ((props.enableSearch || props.searchBox) && navbar) {
        let text = (props.searchBox ? props.searchBox.btnText : null) || "Search";

        // Render the form
        let form = document.createElement("form");
        form.classList.add("form-inline");

        // Render the searchbox
        let searchbox = InputGroup({
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
            let btnSearch = Button({
                text,
                type: props.searchBox ? props.searchBox.btnType : null,
                onClick: () => {
                    // See if a search event exists
                    if (props.searchBox && props.searchBox.onSearch) {
                        // Call the event
                        props.searchBox.onSearch(searchbox.value);
                    }
                }
            });
            form.appendChild(btnSearch.el);
        }

        // Append the search box
        navbar.appendChild(form);
    }

    // Return the navbar
    return { el };
}