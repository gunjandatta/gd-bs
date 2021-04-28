import { Instance } from "@popperjs/core/lib/types";
import { createPopper } from "../../../libs/popper.min.js";
import { IPopover, IPopoverProps } from "../../../@types/components/popover";
import { Button } from "../button";
import { Base } from "../base";
import { appendContent } from "../common";

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
        this._elContent.innerHTML = options.template || '<div class="popover fade" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>';
        this._elContent = this._elContent.firstChild as HTMLDivElement;
        this._elContent.style.display = "none";

        // See if the container exists
        if (options.container) {
            // Append it to the custom container
            options.container.appendChild(this._elContent);
        } else {
            // Append it to the default
            this._popovers.appendChild(this._elContent);
        }

        // Set the class name
        switch (options.placement) {
            case "auto":
            case "bottom":
            case "top":
                this._elContent.classList.add("bs-popover-" + options.placement);
                break;
            case "left":
                this._elContent.classList.add("bs-popover-start");
                break;
            case "right":
                this._elContent.classList.add("bs-popover-end");
                break;
        }

        // Append the content
        appendContent(this._elContent.querySelector(".popover-body"), options.content);

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

        // Set the modifiers
        let modifiers: any[] = [
            {
                name: "arrow",
                options: {
                    element: ".popover-arrow"
                }
            },
            {
                name: "offset",
                options: {
                    offset: options.offset || [0, 8]
                }
            }
        ];
        if (options.fallbackPlacement) { modifiers.push({ name: "flip", options: { altBoundary: true, fallbackPlacements: options.fallbackPlacement } }); };
        if (options.boundary) { modifiers.push({ name: "preventOverflow", options: { boundary: options.boundary } }); }
        if (options.onChange) { modifiers.push({ name: "onChange", enabled: true, phase: "afterWrite", fn: options.onChange }); }

        // Create the popper
        this._popper = createPopper(this.el, this._elContent, { placement: options.placement, modifiers });
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
    get isVisible(): boolean { return this._elContent.classList.contains("show"); }

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
            this._elContent.classList.remove("show");
            this._elContent.style.display = "none";
        } else {
            // Show the element
            this._elContent.style.display = "";
            this._elContent.classList.add("show");
        }
    }
}
export const Popover = (props: IPopoverProps, template?: string): IPopover => { return new _Popover(props, template); }