import { IMediaList, IMediaListProps } from "../../../@types/components/mediaList";
import { Media } from "../media";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Media List
 */
class _MediaList extends Base<IMediaListProps> implements IMediaList {
    // Constructor
    constructor(props: IMediaListProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Render the items
        this.renderItems();
    }

    // Renders the items
    private renderItems() {
        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Render the media object
            let mediaObj = Media(items[i]);

            // Create the list item
            let item = document.createElement("li");
            item.className = mediaObj.el.className;
            this.el.appendChild(item);

            // Move the media elements to the item
            while (mediaObj.el.firstChild) {
                // Move the element
                item.appendChild(mediaObj.el.firstChild);
            }
        }
    }
}
export const MediaList = (props: IMediaListProps): IMediaList => { return new _MediaList(props); }