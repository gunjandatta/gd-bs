import { IMedia, IMediaProps } from "../../../@types/components/media";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import * as HTML from "./index.html";
declare var GD;

/**
 * Media Images Types
 */
export enum MediaImageTypes {
    Bottom = 1,
    Center = 2,
    Top = 3
}

/**
 * Media Images Class Names
 */
const MediaImagesClassNames = new ClassNames([
    "align-self-end",
    "align-self-center",
    "align-self-start"
]);

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
class _Media extends Base<IMediaProps> {//implements IMedia {
    // Constructor
    constructor(props: IMediaProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the card group
    private configure() {
        // See if we are rendering the body first
        if (this.props.order == MediaOrderTypes.Right) {
            // Render the components
            this.renderBody();
            this.renderIcon();
            this.renderImage();
        } else {
            // Render the components
            this.renderIcon();
            this.renderImage();
            this.renderBody();
        }
    }

    // Method to render the body
    private renderBody() {
        // Create the element
        let body = document.createElement("div");
        body.classList.add("media-body");
        this.el.appendChild(body);

        // Set the body content
        let content = this.props.body || "";
        if (typeof (content) === "string") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Parse the items
        let items = this.props.items || [];
        for (let i = 0; i < items.length; i++) {
            // Append the media object
            body.appendChild(Media(items[i]).el);
        }

        // Call the render event
        this.props.onRenderBody ? this.props.onRenderBody(body) : null;
    }

    // Method to render the icon
    private renderIcon() {
        // See if the icon properties exist
        if (this.props.icon) {
            // Create the icon
            let icon: HTMLElement = GD.Icons ? GD.Icons(this.props.icon.icon, this.props.icon.height, this.props.icon.width) : null;
            if (icon) {
                // Parse the class names
                let classNames = (this.props.icon.className || "").trim().split(' ');
                for (let i = 0; i < classNames.length; i++) {
                    let className = classNames[i];

                    // Add the class name
                    className ? icon.classList.add(className) : null;
                }

                // Get the icon type
                let className = MediaImagesClassNames.getByType(this.props.icon.type);
                if (className) {
                    icon.classList.add(className);
                }

                // See if this is a link
                if (this.props.icon.url) {
                    // Create a link
                    let link = document.createElement("a");
                    link.href = this.props.image.url;
                    link.appendChild(icon);
                    this.el.appendChild(link);

                    // See if a click event exists
                    if (this.props.icon.onClick) {
                        // Add the click event
                        link.addEventListener("click", this.props.icon.onClick);
                    }
                } else {
                    // Add the icon
                    this.el.appendChild(icon);

                    // See if a click event exists
                    if (this.props.icon.onClick) {
                        // Add the click event
                        icon.addEventListener("click", this.props.icon.onClick);
                    }
                }
            }
        }
    }

    // Method to render the image
    private renderImage() {
        // Create the image
        let image = this.props.image ? document.createElement("img") : null;
        if (image) {
            // Set the properties
            image.alt = this.props.image.alt;
            image.className = this.props.image.className || "";
            image.src = this.props.image.src || "";

            // Get the image type
            let className = MediaImagesClassNames.getByType(this.props.icon.type);
            if (className) {
                image.classList.add(className);
            }

            // See if this is a link
            if (this.props.image.url) {
                // Create a link
                let link = document.createElement("a");
                link.href = this.props.image.url;
                link.appendChild(image);
                this.el.insertBefore(link, this.el.firstChild);

                // See if a click event exists
                if (this.props.icon.onClick) {
                    // Add the click event
                    link.addEventListener("click", this.props.icon.onClick);
                }
            } else {
                // Add the image
                this.el.appendChild(image);

                // See if a click event exists
                if (this.props.icon.onClick) {
                    // Add the click event
                    image.addEventListener("click", this.props.icon.onClick);
                }
            }
        }
    }
}
export const Media = (props: IMediaProps): IMedia => { return new _Media(props); }