import * as Common from "../common";
import { IMedia, IMediaProps } from "../../@types/components/media";

/**
 * Media Images Types
 */
export enum MediaImageTypes {
    Bottom = 1,
    Center = 2,
    Top = 3
}

/**
 * Media Order Types
 */
export enum MediaOrderTypes {
    Left = 1,
    Right = 2
}

/**
 * Media
 */
export const Media = (props: IMediaProps): IMedia => {
    // Create the media
    let media = document.createElement("div");

    // Set the class name
    media.className = props.className || "";
    media.classList.add("media");

    // Render the body
    let body = document.createElement("div");
    body.classList.add("media-body");
    body.innerHTML = props.body || "";

    // Method to render the image
    let renderImage = () => {
        // Create the image
        let image = props.image ? document.createElement("img") : null;
        if (image) {
            // Set the properties
            image.alt = props.image.alt;
            image.className = props.image.className || "";
            image.src = props.image.src || "";

            // Read the type
            switch (props.image.type) {
                // Bottom
                case MediaImageTypes.Bottom:
                    image.classList.add("align-self-start");
                    break;
                // Center
                case MediaImageTypes.Center:
                    image.classList.add("align-self-center");
                    break;
                // Top
                case MediaImageTypes.Top:
                    image.classList.add("align-self-end");
                    break;
            }

            // See if this is a link
            if (props.image.url) {
                // Create a link
                let link = document.createElement("a");
                link.href = props.image.url;
                media.appendChild(link);

                // Add the image
                link.appendChild(image);
            } else {
                // Add the image
                media.appendChild(image);
            }
        }
    }

    // See if items exist
    if (props.items && props.items.length > 0) {
        // Parse the items
        for (let i = 0; i < props.items.length; i++) {
            let item = props.items[i];

            // Add the item to the body
            body.appendChild(Media(item).el);
        }
    }

    // See if we are rendering the body first
    if (props.order == MediaOrderTypes.Right) {
        // Render the body
        media.appendChild(body);

        // Render the image
        renderImage();
    } else {
        // Render the image
        renderImage();

        // Render the body
        media.appendChild(body);
    }

    // Call the render event
    props.onRenderBody ? props.onRenderBody(body) : null;

    // Create the element
    let el = document.createElement("div");
    el.appendChild(media);

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

    // Return the media
    return {
        el: media,
        hide: () => { Common.hide(media); },
        show: () => { Common.show(media); }
    };
}