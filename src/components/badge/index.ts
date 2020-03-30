import { IBadge, IBadgeProps } from "../../../@types/components/badge";
import { Base } from "../base";
import * as HTMLLink from "./link.html";
import * as HTMLSpan from "./span.html";

/**
 * Badge Types
 */
export enum BadgeTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Badge Class Names
 */
const BadgeClassNames = [
    "badge-danger",
    "badge-dark",
    "badge-info",
    "badge-light",
    "badge-primary",
    "badge-secondary",
    "badge-success",
    "badge-warning"
];

/**
 * Badge
 */
class _Badge extends Base<IBadgeProps> implements IBadge {
    // Constructor
    constructor(props: IBadgeProps) {
        super(props.href || props.onClick ? HTMLLink : HTMLSpan, props);

        // Set the href property
        props.href ? this.el.setAttribute("href", props.href) : null;

        // Add the class names
        this.addClassNames();

        // Configure the badge
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent element
        this.configureParent();
    }

    // Adds the class names
    private addClassNames() {
        // See if this is a pill
        if (this.props.isPill) {
            // Add the class name
            this.el.classList.add("badge-pill");
        }

        // Set the default styling
        this.el.classList.add(BadgeClassNames[(this.props.type || BadgeTypes.Primary) - 1]);
    }

    // Configure the badge
    private configure() {
        // Set the content
        let content = this.props.content || "";
        if (typeof (content) === "string") {
            // Set the html
            this.el.innerHTML = content;
        } else {
            // Append the element
            this.el.appendChild(content);
        }
    }

    // Configures the events
    private configureEvents() {
        // Set the click event
        this.props.onClick ? this.el.addEventListener("click", ev => {
            // Call the event
            this.props.onClick(this.props, ev);
        }) : null;
    }
}
export const Badge = (props: IBadgeProps): IBadge => { return new _Badge(props); }