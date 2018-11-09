import * as jQuery from "jquery";
import { ICarousel, ICarouselProps } from "./types/carousel";

/**
 * Carousel
 * @param props - The carousel properties.
 */
export const Carousel = (props: ICarouselProps): ICarousel => {
    let items = props.items || [];

    // Create the carousel
    let carousel = document.createElement("div");
    carousel.id = 'carousel_' + (props.id || '');
    carousel.setAttribute("data-ride", "carousel");

    // Set the class names
    carousel.className = props.className || "";
    carousel.classList.add("carousel");
    carousel.classList.add("slide");
    props.enableCrossfade ? carousel.classList.add("carousel-fade") : null;

    // See if we are rendering indicators
    if (props.enableIndicators) {
        let list = document.createElement("ol");
        list.className = "carousel-indicators";
        carousel.appendChild(list);

        // Parse the items
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Set the attributes
            let itemAttributes = [
                'data-target="#' + carousel.id + '"',
                'data-slide-to="' + i + '"',
                item.isActive ? 'class="active"' : null
            ].join(' ');

            // Add the item
            list.innerHTML += '<li ' + itemAttributes + '></li>';
        }
    }

    // Add the inner starting element
    let inner = document.createElement("div");
    inner.className = "carousel-inner";
    carousel.appendChild(inner);

    // Parse the items
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Create the item element
        let elItem = document.createElement("div");
        inner.appendChild(elItem);

        // Set the class names
        elItem.className = item.className || "";
        elItem.classList.add("carousel-item");
        item.isActive ? elItem.classList.add("active") : null;

        // See if we are rendering an image
        if (item.imageUrl) {
            // Add the image
            elItem.innerHTML += [
                item.imageUrl ? '<img class="d-block w-100" src="' + item.imageUrl + '" alt="' + (item.imageAlt || '') + '">' : '',
                item.captions ? '<div class="carousel-caption">' : '',
                item.captions ? item.captions : '',
                item.captions ? '</div>' : ''
            ].join('\n');
        } else {
            // Add the content
            elItem.innerHTML += item.content || "";
        }
    }

    // See if we are rendering controls
    if (props.enableControls) {
        // Add the controls
        carousel.innerHTML += [
            '<a class="carousel-control-prev" href="#' + carousel.id + '" role="button" data-slide="prev">',
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>',
            '<span class="sr-only">Previous</span>',
            '</a>',
            '<a class="carousel-control-next" href="#' + carousel.id + '" role="button" data-slide="next">',
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>',
            '<span class="sr-only">Next</span>',
            '</a>'
        ].join('\n');
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(carousel);

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

    // Create the carousel
    let $carousel = jQuery(carousel);
    $carousel.carousel(props.options);

    // Return the carousel
    return {
        cycle: () => { $carousel.carousel("cycle"); },
        dispose: () => { $carousel.carousel("dispose"); },
        el: carousel,
        next: () => { $carousel.carousel("next"); },
        number: (value: number) => { $carousel.carousel(value); },
        pause: () => { $carousel.carousel("pause"); },
        previous: () => { $carousel.carousel("dispose"); }
    };
}