import * as jQuery from "jquery";
import { ICarousel, ICarouselProps } from "./types/carousel";

/**
 * Carousel
 * @param props - The carousel properties.
 */
export const Carousel = (props: ICarouselProps): ICarousel => {
    let html = [];
    let id = 'carousel_' + (props.id || '');
    let items = props.items || [];

    // Set the class names
    let classNames = ["carousel slide"];
    props.className ? classNames.push(props.className) : null;
    props.enableCrossfade ? classNames.push("carousel-fade") : null;

    // Set the attributes
    let attributes = [
        'id="' + id + '"',
        'class="' + classNames.join(' ') + '"',
        'data-ride="carousel"'
    ]

    // Set the starting tag
    html.push('<div ' + attributes.join(' ') + '>');

    // See if we are rendering indicators
    if (props.enableIndicators) {
        // Add the starting tag
        html.push('<ol class="carousel-indicators">');

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the attributes
            let itemAttributes = [
                'data-target="' + id + '"',
                'data-slide-to="' + i + '"',
                item.isActive ? 'class="active"' : null
            ].join(' ');

            // Add the item
            html.push('<li ' + itemAttributes + '></li>');
        }

        // Add the ending tag
        html.push('</ol>');
    }

    // Add the inner starting element
    html.push('<div class="carousel-inner">');

    // Parse the items
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Set the item class names
        let itemClassNames = ["carousel-item"];
        item.className ? itemClassNames.push(item.className) : null;
        item.isActive ? itemClassNames.push("active") : null;

        // Add the item starting tag
        html.push('<div class="' + itemClassNames.join(' ') + '">');

        // See if we are rendering an image
        if (item.imageUrl) {
            // Add the image
            html.push([
                item.imageUrl ? '<img class="d-block w-100" src="' + item.imageUrl + '" alt="' + (item.imageAlt || '') + '">' : '',
                item.captions ? '<div class="carousel-caption">' : '',
                item.captions ? item.captions : '',
                item.captions ? '</div>' : ''
            ].join('\n'));
        } else {
            // Add the content
            html.push(item.content || "");
        }

        // Add the item closing tag
        html.push('</div>');
    }

    // Add the inner closing element
    html.push('</div>');

    // See if we are rendering controls
    if (props.enableControls) {
        // Add the controls
        html.push([
            '<a class="carousel-control-prev" href="#' + id + '" role="button" data-slide="prev">',
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
            '<span class="sr-only">Previous</span>',
            '</a>',
            '<a class="carousel-control-next" href="#' + id + '" role="button" data-slide="next">',
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>',
            '<span class="sr-only">Next</span>',
            '</a>'
        ].join('\n'));
    }

    // Set the ending tag
    html.push('</div>');

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

    // Create the carousel
    let carousel = jQuery(el.children[0]);
    carousel.carousel(props.options);

    // Return the carousel
    return {
        cycle: () => { carousel.carousel("cycle"); },
        dispose: () => { carousel.carousel("dispose"); },
        el,
        next: () => { carousel.carousel("next"); },
        number: (value: number) => { carousel.carousel(value); },
        pause: () => { carousel.carousel("pause"); },
        previous: () => { carousel.carousel("dispose"); }
    };
}