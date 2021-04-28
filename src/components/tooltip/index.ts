import { Instance } from "@popperjs/core/lib/types";
import { createPopper } from "../../../libs/popper.min.js";
import { IButton } from "../../../@types/components/button";
import { ITooltip, ITooltipProps } from "../../../@types/components/tooltip";
import { Base } from "../base";
import { Button } from "../button";
import { appendContent } from "../common";

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
    private _elContent: HTMLElement = null;
    private _popper: Instance = null;
    private _tooltips: HTMLDivElement = null;

    // Constructor
    constructor(props: ITooltipProps, template: string = "") {
        super(template, props);

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

        // Create the popover content element
        this._elContent = document.createElement("div") as HTMLElement;
        this._elContent.innerHTML = options.template || '<div class="tooltip fade" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
        this._elContent = this._elContent.firstChild as HTMLElement;
        this._elContent.style.display = "none";

        // Set the content
        appendContent(this._elContent.querySelector(".tooltip-inner"), options.title);

        // See if the container exists
        if (options.container) {
            // Append it to the custom container
            options.container.appendChild(this._elContent);
        } else {
            // Append it to the default
            this._tooltips.appendChild(this._elContent);
        }

        // Set the type
        let placement = null;
        switch (this.props.type) {
            // Auto
            case TooltipTypes.Auto:
                placement = "auto";
                this._elContent.classList.add("bs-tooltip-auto");
                break;
            // Bottom
            case TooltipTypes.Bottom:
                placement = "bottom";
                this._elContent.classList.add("bs-tooltip-bottom");
                break;
            // Left
            case TooltipTypes.Left:
                placement = "left";
                this._elContent.classList.add("bs-tooltip-start");
                break;
            // Right
            case TooltipTypes.Right:
                placement = "right";
                this._elContent.classList.add("bs-tooltip-end");
                break;
            // Right
            case TooltipTypes.Top:
                placement = "top";
                this._elContent.classList.add("bs-tooltip-top");
                break;
            // Default - Auto
            default:
                placement = "auto";
                this._elContent.classList.add("bs-tooltip-auto");
                break;
        }

        // Default the placement
        options.placement = options.placement || placement;

        // Set the attributes
        this.el.setAttribute("data-bs-placement", options.placement);

        // See if the title is a string
        if (typeof (options.title) === "string") {
            // Set the attribute
            this.el.setAttribute("title", options.title);
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

    // Reference to the button
    get button(): IButton { return this._btn; }

    // Disbles the tooltip
    disable() {
        // Disable the button
        this._btn.disable();
    }

    // Enables the tooltip
    enable() {
        // Enable the button
        this._btn.enable();
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

    // Toggles the tooltip
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
export const Tooltip = (props: ITooltipProps, template?: string): ITooltip => { return new _Tooltip(props, template); }