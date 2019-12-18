import * as Common from "../common";
import { IMediaList, IMediaListProps } from "../../@types/components/mediaList";
import { Media } from "./media";

/**
 * Media List
 */
export const MediaList = (props: IMediaListProps): IMediaList => {
    // Create the media list
    let mediaList = document.createElement("ul");

    // Set the class name
    mediaList.className = props.className || "";
    mediaList.classList.add("list-unstyled");

    // Parse the items
    let items = props.items || [];
    for (let i = 0; i < items.length; i++) {
        // Render the media object
        let mediaObj = Media(items[i]);

        // Create the list item
        let item = document.createElement("li");
        item.className = mediaObj.el.className;
        mediaList.appendChild(item);

        // Move the media elements
        while (mediaObj.el.firstChild) {
            // Add the media element
            item.appendChild(mediaObj.el.firstChild);
        }
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(mediaList);

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
        el: mediaList,
        hide: () => { Common.hide(mediaList); },
        show: () => { Common.show(mediaList); }
    };
}