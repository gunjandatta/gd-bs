import { IIconLink, IIconLinkProps } from "./types";
import { Base } from "../base";
import { appendContent } from "../common";
import { HTML } from "./templates";

/**
 * Icon Link Types
 */
export enum IconLinkTypes {
    AfterText = 1,
    BeforeText = 2
}
/**
 * Icon Link
 * @property props - The list box properties.
 */
class _IconLink extends Base<IIconLinkProps> implements IIconLink {
    private _elIcon: HTMLOrSVGElement = null;

    // Constructor
    constructor(props: IIconLinkProps, template: string = HTML) {
        super(template, props);

        // Configure the list box
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent
        this.configureParent();
    }

    // Configures the list box
    private configure() {
        // Render the content
        appendContent(this.el, this.props.content);

        // Set the icon if it exists
        if (this.props.iconType) {
            if (typeof (this.props.iconType) === "function") {
                // Set the icon
                this._elIcon = (this.props.iconType as Function)(this.props.iconSize, this.props.iconSize, this.props.iconClassName);
            }
            // Else, it's an element
            else if (typeof (this.props.iconType) === "object") {
                // Set the icon
                this._elIcon = this.props.iconType;
            } else { return; }

            // See if we are rendering the content first
            if (this.props.type == IconLinkTypes.AfterText) {
                // Append the icon
                this.el.appendChild(this._elIcon);
            } else {
                // Prepend the icon
                this.el.prepend(this._elIcon);
            }
        }
    }

    // Configures the events
    private configureEvents() {
    }

    /**
     * Public Interface
     */

}
export const IconLink = (props: IIconLinkProps, template?: string): IIconLink => { return new _IconLink(props, template); }