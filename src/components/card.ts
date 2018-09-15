import * as jQuery from "jquery";
import { ButtonTypes } from "./button";
import { ICard, ICardProps } from "./types/card";
import { Nav } from "./nav";

/**
 * Card
 */
export const Card = (props: ICardProps): ICard => {
    // Create the card
    let card = document.createElement("div");

    // Set the class names
    card.className = props.className || "";
    card.classList.add("card");

    // See if the top image exists
    if (props.imgTop) {
        // Add the top image
        card.innerHTML += [
            '<img',
            'class="card-img-top"',
            'src="' + (props.imgTop.src || "") + '"',
            'alt="' + (props.imgTop.alt || "") + '">'
        ].join(' ');
    }

    // See if the header exists
    if (props.header) {
        // See if the content exists
        if (props.header.content) {
            // Render the content
            card.innerHTML += '<div class="card-header">' + props.header.content + '</div>';
        }
        // Else, see if the navigation exists
        else if (props.header.nav) {
            let navProps = props.header.nav;

            // Set the class
            navProps.className = [
                navProps.className || "",
                "card-header-tabs"
            ].join(' ');

            // Render the navigation
            card.appendChild(Nav(navProps).el);
        }
    }

    // Parse the body items
    let items = props.body || [];
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the class names
        let classNames = [
            "card-body",
            item.className || ""
        ].join(' ');

        // Parse the actions
        let actions = item.actions || [];
        let buttons = [];
        for (let j = 0; j < actions.length; j++) {
            let action = actions[j];

            // Set the class name
            let className = "btn";
            switch (action.buttonType) {
                // Danger
                case ButtonTypes.Danger:
                    className += " btn-danger";
                    break;
                // Dark
                case ButtonTypes.Dark:
                    className += " btn-dark";
                    break;
                // Info
                case ButtonTypes.Info:
                    className += " btn-info";
                    break;
                // Light
                case ButtonTypes.Light:
                    className += " btn-light";
                    break;
                // Link
                case ButtonTypes.Link:
                    className += " btn-link";
                    break;
                // Primary
                case ButtonTypes.Primary:
                    className += " btn-primary";
                    break;
                // Secondary
                case ButtonTypes.Secondary:
                    className += " btn-secondary";
                    break;
                // Success
                case ButtonTypes.Success:
                    className += " btn-success";
                    break;
                // Warning
                case ButtonTypes.Warning:
                    className += " btn-warning";
                    break;
                // Default
                default:
                    className = "card-link";
                    break;
            }

            // Add the button
            buttons.push(
                '<a href="' + (action.href || "#") + '" class="' + className + '">' + action.text + '</a>'
            );
        }

        // Add the body
        card.innerHTML += [
            '<div class="' + classNames + '" data-idx="' + i + '">',
            item.title ? '<h5 class="card-title">' + item.title + '</h5>' : '',
            item.subTitle ? '<h6 class="card-subtitle">' + item.subTitle + '</h6>' : '',
            item.text ? '<p class="card-text">' + item.text + '</p>' : '',
            item.content || '',
            buttons.join(''),
            '</div>'
        ].join('\n');
    }

    // See if the footer exists
    if (props.footer) {
        // Add the footer
        card.innerHTML += '<div class="card-footer">' + props.footer + '</div>';
    }

    // See if the bottom image exists
    if (props.imgBottom) {
        // Add the bottom image
        card.innerHTML += [
            '<img',
            'class="card-img-bottom"',
            'src="' + (props.imgBottom.src || "") + '"',
            'alt="' + (props.imgBottom.alt || "") + '">'
        ].join(' ');
    }

    // Get the card items
    let cardItems = card.querySelectorAll(".card-body");
    for (let i = 0; i < cardItems.length && i < items.length; i++) {
        let cardItem = cardItems[i];
        let item = items[i];

        // See if there is a click event
        if (props.onClick || item.onClick) {
            // Set the click event
            cardItem.addEventListener("click", ev => {
                let elCard = ev.currentTarget as HTMLElement;

                // Get the item
                let item = items[elCard.getAttribute("data-idx")];

                // Execute the events
                item ? item.onClick(item, ev) : null;
                props.onClick ? props.onClick(item, ev) : null;
            });
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(card);

    // See if we are rendering it to an element
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

    // Return the alert
    return {
        dispose: () => { jQuery(card).card("dispose"); },
        el: card
    };
}