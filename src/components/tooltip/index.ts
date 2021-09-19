import { Instance } from "tippy.js";
import { tippy } from "../../libs";
import { ITippyProps } from "../../types";
import { ITooltip, ITooltipProps } from "./types";
import { IButton } from "../button/types";
import { Base } from "../base";
import { Button, ButtonTypes } from "../button";
import { appendContent } from "../common";

/**
 * Tooltip Types
 */
export enum TooltipTypes {
    Light = 1,
    LightBorder = 2,
    Material = 3,
    Primary = 4,
    Secondary = 5,
    Translucent = 6
}

/**
 * Tooltip Placements
 */
export enum TooltipPlacements {
    Auto = 1,
    AutoStart = 2,
    AutoEnd = 3,
    Bottom = 4,
    BottomStart = 5,
    BottomEnd = 6,
    Left = 7,
    LeftStart = 8,
    LeftEnd = 9,
    Right = 10,
    RightStart = 11,
    RightEnd = 12,
    Top = 13,
    TopStart = 14,
    TopEnd = 15
}

/**
 * Tooltip
 */
class _Tooltip extends Base<ITooltipProps> {
    private _btn: IButton = null;
    private _elContent: HTMLElement = null;
    private _tippy: Instance = null;

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
        // See if the target element was not defined
        if (this.props.target == null) {
            // Default the toggle property for the button
            let btnProps = this.props.btnProps || {};
            btnProps.type = btnProps.type || ButtonTypes.OutlineSecondary

            // Create the button
            this._btn = Button(btnProps);

            // Update the element
            this.el = this._btn.el;
        }

        // Configure the options
        this.configureOptions();
    }

    // Configure the options
    private configureOptions() {
        // Set the placement
        let placement = null;
        switch (this.props.placement) {
            // Auto
            case TooltipPlacements.Auto:
                placement = "auto";
                break;
            case TooltipPlacements.AutoEnd:
                placement = "auto-end";
                break;
            case TooltipPlacements.AutoStart:
                placement = "auto-start";
                break;
            // Bottom
            case TooltipPlacements.Bottom:
                placement = "bottom";
                break;
            case TooltipPlacements.BottomEnd:
                placement = "bottom-end";
                break;
            case TooltipPlacements.BottomStart:
                placement = "bottom-start";
                break;
            // Left
            case TooltipPlacements.Left:
                placement = "left";
                break;
            case TooltipPlacements.LeftEnd:
                placement = "left-end";
                break;
            case TooltipPlacements.LeftStart:
                placement = "left-start";
                break;
            // Right
            case TooltipPlacements.Right:
                placement = "right";
                break;
            case TooltipPlacements.RightEnd:
                placement = "right-end";
                break;
            case TooltipPlacements.RightStart:
                placement = "right-start";
                break;
            // Top
            case TooltipPlacements.Top:
                placement = "top";
                break;
            case TooltipPlacements.TopEnd:
                placement = "top-end";
                break;
            case TooltipPlacements.TopStart:
                placement = "top-start";
                break;
            // Default - Auto
            default:
                placement = "top";
                break;
        }

        // Set the theme
        let theme = null;
        switch (this.props.type) {
            // Light
            case TooltipTypes.Light:
                theme = "light";
                break;
            case TooltipTypes.LightBorder:
                theme = "light-border";
                break;
            // Material
            case TooltipTypes.Material:
                theme = "material";
                break;
            // Primary
            case TooltipTypes.Primary:
                theme = "primary";
                break;
            // Secondary
            case TooltipTypes.Secondary:
                theme = "secondary";
                break;
            // Translucent
            case TooltipTypes.Translucent:
                theme = "translucent";
                break;
            // Default - Secondary
            default:
                theme = "secondary";
                break;
        }

        // Set the options
        let options: ITippyProps = {
            ...{
                allowHTML: false,
                animation: "scale",
                arrow: true,
                content: this.props.content,
                delay: 100,
                inertia: true,
                interactive: false,
                placement,
                theme
            },
            ...this.props.options
        };

        // Create the popover content element
        this._elContent = document.createElement("div") as HTMLElement;
        this._elContent.classList.add("tooltip-content");
        appendContent(this._elContent, options.content as any);
        options.content = this._elContent;

        // Set the on create event
        options["onCreate"] = (tippyObj) => {
            // Get the content element
            let elContent = tippyObj.popper.querySelector(".tippy-content") as HTMLElement;
            if (elContent) {
                // Set the class
                elContent.classList.add("bs");

                // Get the custom class name(s)
                let custom = (this.props.className || "").trim().split(" ");
                for (let i = 0; i < custom.length; i++) {
                    let className = custom[i];

                    // Add the custom class name
                    className ? elContent.classList.add(custom[i]) : null;
                }
            }

            // Call the custom event if it's defined
            this.props.options && this.props.options.onCreate ? this.props.options.onCreate(tippyObj) : null;
        }

        // Create the tippy
        this._tippy = tippy(this.props.target || this.el, options as any) as any;
    }

    /**
     * Public Interface
     */

    // Reference to the button
    get button(): IButton { return this._btn; }

    // Disbles the tooltip
    disable() {
        // Disable the button
        this._btn ? this._btn.disable() : null;
    }

    // Enables the tooltip
    enable() {
        // Enable the button
        this._btn ? this._btn.enable() : null;
    }

    // Hides the popover
    hide() {
        // See if it's visible
        if (this.isVisible) { this._tippy.hide(); }
    }

    // Determines if the popover is visible
    get isVisible(): boolean { return this._tippy.state.isVisible; }

    // The tippy instance
    get tippy() { return this._tippy; }

    // Shows the popover
    show() {
        // See if it's hidden
        if (!this.isVisible) { this._tippy.show(); }
    }

    // Toggles the tooltip
    toggle() {
        // Toggle the element
        if (this.isVisible) {
            // Hide the element
            this.hide();
        } else {
            // Show the element
            this.show();
        }
    }
}
export const Tooltip = (props: ITooltipProps, template?: string): ITooltip => { return new _Tooltip(props, template); }