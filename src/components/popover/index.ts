import { Instance } from "@popperjs/core/lib/types";
import { createPopper } from "../../../libs/popper.min.js";
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
    private _elContent: HTMLDivElement = null;
    private _popovers: HTMLDivElement = null;
    private _popper: Instance = null;

    // Constructor
    constructor(props: IPopoverProps, template: string = "") {
        super(template, props);

        // Configure the collapse
        this.configure();

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
        options.container = options.container || this._popovers;

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
                // Default
                default:
                    options.placement = "bottom";
                    break;
            }
        }

        // See if we are targeting an element
        let elPopover: HTMLElement = null;
        if (this.props.target) {
            // Set the popover to the target element
            elPopover = this.props.target as HTMLElement;

            // Ensure the attributes are set in the target element
            elPopover.setAttribute("tabindex", "0");
            elPopover.setAttribute("toggle", "data-bs-popover");
            elPopover.setAttribute("trigger", "focus");

            // Update this element
            this.el = elPopover as any;
        } else {
            // Create the button
            let btnProps = this.props.btnProps || {};
            btnProps.isLink = this.props.isDismissible ? true : false;
            btnProps.tabIndex = btnProps.tabIndex || 0;
            btnProps.toggle = "data-bs-popover";
            this.props.isDismissible ? btnProps.trigger = "focus" : null;
            let button = Button(btnProps);

            // Update this element
            this.el = button.el as any;

            // Set the popover title and content
            typeof (options.title) === "string" ? this.el.setAttribute("title", options.title) : null;
            typeof (options.content) === "string" ? this.el.setAttribute("data-bs-content", options.content) : null;
        }

        // Create the popover content element
        this._elContent = document.createElement("div");
        this._elContent.innerHTML = '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
        this._elContent.style.display = "none";
        let elTarget = this._elContent.firstChild as HTMLElement;
        this._popovers.appendChild(this._elContent);

        // See if we are rendering raw html
        let elBody = this._elContent.querySelector(".popover-body");
        if (typeof (options.content) === "string") {
            // Set the content
            elBody.innerHTML = options.content;
        } else {
            // Append the content
            elBody.appendChild(options.content as Element);
        }

        // Add an event listener
        let eventType = options.trigger || "click";
        if (eventType == "hover") {
            this.el.addEventListener("mouseover", () => {
                // Toggle the element
                this.show();
            });
            this.el.addEventListener("mouseout", () => {
                // Toggle the element
                this.hide();
            });
        } else {
            this.el.addEventListener(eventType, () => {
                // Toggle the element
                this.toggle();
            });
        }

        // Create the popper
        this._popper = createPopper(this.el, elTarget, { placement: options.placement as any });
    }

    /**
     * Public Interface
     */

    // Disables the popover
    disable() {
        // Disable the target element
        (this.el as HTMLButtonElement).disabled = true;
    }

    // Enables the popover
    enable() {
        // Enable the target element
        (this.el as HTMLButtonElement).disabled = false;
    }

    // Hides the popover
    hide() {
        // See if it's visible
        if (this.isVisible) { this.toggle(); }
    }

    // Determines if the popover is visible
    get isVisible(): boolean { return this._elContent.style.display != "none"; }

    // The popper instance
    popper() { return this._popper; }

    // Shows the popover
    show() {
        // See if it's hidden
        if (!this.isVisible) { this.toggle(); }
    }

    // Toggles the popover
    toggle() {
        // Update the popper
        this._popper.update();

        // Toggle the element
        if (this.isVisible) {
            // Hide the element
            this._elContent.style.display = "none";
        } else {
            // Show the element
            this._elContent.style.display = "";
        }
    }
}
export const Popover = (props: IPopoverProps, template?: string): IPopover => { return new _Popover(props, template); }