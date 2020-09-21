import * as tooltip from "bootstrap/js/dist/tooltip";
import "popper.js";
import { IButton } from "../../../@types/components/button";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";
import { Base } from "../base";
import { Button } from "../button";

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
class _Tooltip extends Base<ITooltipProps> {
    private _btn: IButton = null;
    private _tooltips: HTMLDivElement = null;

    // Constructor
    constructor(props: ITooltipProps) {
        super("", props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the tooltip
    private configure() {
        // Default the toggle property for the button
        let btnProps = this.props.btnProps || {};
        btnProps.toggle = "tooltip";

        // Create the button
        this._btn = Button(btnProps);

        // Update the element
        this.el = this._btn.el;

        // Configure the options
        this.configureOptions();
    }

    // Configure the options
    private configureOptions() {
        // Ensure the main tooltips element exists
        // This will ensure the tooltips are wrapped with a parent element with the "bs" class applied to it.
        this._tooltips = document.querySelector("#bs-tooltips");
        if (this._tooltips == null) {
            // Create the main element
            this._tooltips = document.createElement("div");
            this._tooltips.classList.add("bs");
            this._tooltips.id = "bs-tooltips";

            // Add it to the page
            document.body.appendChild(this._tooltips)
        }

        // Set the options to target the main tooltips element
        let options = this.props.options || {};
        options.container = options.container || this._tooltips;

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
        this._bootstrapObj = new tooltip(this.el, options);
    }

    /**
     * Bootstrap
     */

    // Disposes the tooltip
    dispose() { this._bootstrapObj.dispose(); }

    // Enables the tooltip
    enable() { this._bootstrapObj.enable(); }

    // Hides the tooltip
    hide() { this._bootstrapObj.hide(); }

    // Shows the tooltip
    show() { this._bootstrapObj.show(); }

    // Toggles the tooltip
    toggle() { this._bootstrapObj.toggle(); }

    // Enables the toggle
    toggleEnabled() { this._bootstrapObj.toggleEnabled(); }

    // Updates the tooltip
    update() { this._bootstrapObj.update(); }

    /**
     * Public Interface
     */

    // Reference to the button
    get button(): IButton { return this._btn; }
}
export const Tooltip = (props: ITooltipProps): ITooltip => { return new _Tooltip(props); }