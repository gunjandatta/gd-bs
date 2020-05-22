import "bootstrap/js/dist/popover";
import "popper.js";
import { jQuery } from "../../core";
import { Button } from "../button";
import { IPopover, IPopoverProps } from "../../../@types/components/popover";
import { Base } from "../base";

/**
 * Popover Types
 */
export enum PopoverTypes {
    Auto = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    Top = 5
}

/**
 * Popover
 */
class _Popover extends Base<IPopoverProps> implements IPopover {
    private _popovers: HTMLDivElement = null;

    // Constructor
    constructor(props: IPopoverProps) {
        super("", props);

        // Configure the collapse
        this.configure();

        // Configure the events
        this.configureEvents();

        // Configure the parent, if the target wasn't specified
        this.props.target ? null : this.configureParent();
    }

    // Configure the card group
    private configure() {
        // Ensure the main popover element exists
        // This will ensure the popovers are wrapped with a parent element with the "bs" class applied to it.
        this._popovers = document.querySelector("#bs-popovers");
        if (this._popovers == null) {
            // Create the main element
            this._popovers = document.createElement("div");
            this._popovers.classList.add("bs");
            this._popovers.id = "bs-popovers";

            // Add it to the page
            document.body.appendChild(this._popovers)
        }

        // Set the options to target the main popover element
        let options = this.props.options || {};
        options.container = "#bs-popovers";

        // See if the placement needs to be set
        if (options.placement == null) {
            // Set the type
            switch (this.props.type) {
                // Auto
                case PopoverTypes.Auto:
                    options.placement = "auto";
                    break;
                // Bottom
                case PopoverTypes.Bottom:
                    options.placement = "bottom";
                    break;
                // Left
                case PopoverTypes.Left:
                    options.placement = "left";
                    break;
                // Right
                case PopoverTypes.Right:
                    options.placement = "right";
                    break;
                // Top
                case PopoverTypes.Top:
                    options.placement = "top";
                    break;
            }
        }

        // See if we are targeting an element
        let popover: HTMLElement = null;
        if (this.props.target) {
            // Set the popover to the target element
            popover = this.props.target as HTMLElement;

            // Ensure the attributes are set in the target element
            popover.setAttribute("tabindex", "0");
            popover.setAttribute("toggle", "popover");
            popover.setAttribute("trigger", "focus");

            // Update this element
            this.el = popover as any;
        } else {
            // Create the button
            let btnProps = this.props.btnProps || {};
            btnProps.isLink = this.props.isDismissible ? true : false;
            btnProps.toggle = "popover";
            this.props.isDismissible ? btnProps.trigger = "focus" : null;
            let button = Button(btnProps);

            // Update this element
            this.el = button.el as any;

            // Set the popover title and content
            typeof (options.title) === "string" ? this.el.setAttribute("title", options.title) : null;
            typeof (options.content) === "string" ? this.el.setAttribute("data-content", options.content) : null;
        }

        // Create the popover
        this._bootstrapObj = jQuery ? jQuery(this.el).popover(options) : null;
    }

    // Configures the events
    private configureEvents() {
        // Set a click event
        this.el.addEventListener("click", ev => {
            // Prevent the page from moving to the top
            ev.preventDefault();
        });
    }

    /**
     * Bootstrap
     */

    // Disposes the popover
    dispose() { this._bootstrapObj ? this._bootstrapObj.popover("dispose") : null; }

    // Disables the popover
    disable() { this._bootstrapObj ? this._bootstrapObj.popover("disable") : null; }

    // Enables the popover
    enable() { this._bootstrapObj ? this._bootstrapObj.popover("enable") : null; }

    // Hides the popover
    hide() { this._bootstrapObj ? this._bootstrapObj.popover("hide") : null; }

    // Shows the popover
    show() { this._bootstrapObj ? this._bootstrapObj.popover("show") : null; }

    // Toggles the popover
    toggle() { this._bootstrapObj ? this._bootstrapObj.popover("toggle") : null; }

    // Enables toggling 
    toggleEnabled() { this._bootstrapObj ? this._bootstrapObj.popover("toggleEnabled") : null; }

    // Updates the popover
    update() { this._bootstrapObj ? this._bootstrapObj.popover("update") : null; }

    /**
     * Public Interface
     */
}
export const Popover = (props: IPopoverProps): IPopover => { return new _Popover(props); }