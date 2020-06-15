import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/util";
import { getLib } from "../jQuery";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";
import { Base } from "../base";
import { ButtonClassNames, ButtonTypes } from "../button";
import { HTML } from "./templates";

/**
 * Tooltip Types
 */
export enum TooltipTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Tooltip
 */
class _Tooltip extends Base<ITooltipProps> {//implements ITooltip {
    private _jQuery = null;

    // Constructor
    constructor(props: ITooltipProps) {
        super(HTML, props);

        // Set jQuery
        this._jQuery = getLib("tooltip");

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the tooltip
    private configure() {
        // Set the button text
        this.el.innerHTML = this.props.text == null ? "" : this.props.text;

        // See if a type was defined
        let className = ButtonClassNames.getByType(this.props.btnType) || ButtonClassNames.getByType(ButtonTypes.Primary);
        if (className) {
            // Add the class name
            this.el.classList.add(className);
        }

        // Configure the options
        this.configureOptions();
    }

    // Configure the options
    private configureOptions() {
        // Update the options
        let options = this.props.options || {};

        // See if a container was defined
        if (typeof (options.container) !== "string") {
            // Set the default container
            options.container = "#bs-tooltips";

            // Ensure the main tooltip element exists
            // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
            let elParent = document.querySelector(options.container);
            if (elParent == null) {
                // Create the main element
                elParent = document.createElement("div");
                elParent.classList.add("bs");
                elParent.id = "bs-tooltips";

                // Add it to the page
                document.body.appendChild(elParent)
            }
        }

        // Set the type
        switch (this.props.type) {
            // Auto
            case TooltipTypes.Auto:
                options.placement = "auto";
                break;
            // Bottom
            case TooltipTypes.Bottom:
                options.placement = "bottom";
                break;
            // Left
            case TooltipTypes.Left:
                options.placement = "left";
                break;
            // Right
            case TooltipTypes.Right:
                options.placement = "right";
                break;
            // Default - Top
            default:
                options.placement = "top";
                break;
        }

        // Set the attributes
        this.el.setAttribute("data-placement", options.placement);

        // See if the title is a string
        if (typeof (options.title) === "string") {
            // Set the attribute
            this.el.setAttribute("title", options.title);
        }

        // Create the tooltip
        this._bootstrapObj = this._jQuery ? this._jQuery(this.el).tooltip(options) : null;
    }

    /**
     * Bootstrap
     */

    // Disposes the tooltip
    dispose() { this._bootstrapObj ? this._bootstrapObj.tooltip("dispose") : null; }

    // Enables the tooltip
    enable() { this._bootstrapObj ? this._bootstrapObj.tooltip("enable") : null; }

    // Hides the tooltip
    hide() { this._bootstrapObj ? this._bootstrapObj.tooltip("hide") : null; }

    // Shows the tooltip
    show() { this._bootstrapObj ? this._bootstrapObj.tooltip("show") : null; }

    // Toggles the tooltip
    toggle() { this._bootstrapObj ? this._bootstrapObj.tooltip("toggle") : null; }

    // Enables the toggle
    toggleEnabled() { this._bootstrapObj ? this._bootstrapObj.tooltip("toggleEnabled") : null; }

    // Updates the tooltip
    update() { this._bootstrapObj ? this._bootstrapObj.tooltip("update") : null; }

    /**
     * Public Interface
     */
}
export const Tooltip = (props: ITooltipProps): ITooltip => { return new _Tooltip(props); }