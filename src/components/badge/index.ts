import { IBadge, IBadgeProps } from "./types";
import { Base } from "../base";
import { ClassNames } from "../classNames";
import { appendContent } from "../common";
import { HTMLLink, HTMLSpan } from "./templates";

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
export const BadgeClassNames = new ClassNames([
    "bg-danger",
    "bg-dark",
    "bg-info",
    "bg-light",
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-warning"
]);

/**
 * Badge
 */
class _Badge extends Base<IBadgeProps> implements IBadge {
    // Constructor
    constructor(props: IBadgeProps, template: string = props.href || props.onClick ? HTMLLink : HTMLSpan) {
        super(template, props);

        // Set the href property
        props.href ? this.el.setAttribute("href", props.href) : null;

        // Configure the badge
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent element
        this.configureParent();
    }

    // Configure the badge
    private configure() {
        // See if this is a pill
        if (this.props.isPill) {
            // Add the class name
            this.el.classList.add("rounded-pill");
        }

        // Set the default styling
        this.el.classList.add(BadgeClassNames.getByType(this.props.type) || BadgeClassNames.getByType(BadgeTypes.Primary));

        // Append the content
        appendContent(this.el, this.props.content);
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
export const Badge = (props: IBadgeProps, template?: string): IBadge => { return new _Badge(props, template); }