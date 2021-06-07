import { Instance } from "tippy.js";
import { tippy } from "../../libs";
import { ITippyProps } from "../../../@types/libs";
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
        // Set the type
        let placement = null;
        switch (this.props.type) {
            // Auto
            case TooltipTypes.Auto:
                placement = "auto";
                break;
            // Bottom
            case TooltipTypes.Bottom:
                placement = "bottom";
                break;
            // Left
            case TooltipTypes.Left:
                placement = "left";
                break;
            // Right
            case TooltipTypes.Right:
                placement = "right";
                break;
            // Right
            case TooltipTypes.Top:
                placement = "top";
                break;
            // Default - Auto
            default:
                placement = "auto";
                break;
        }

        // Set the options
        let options: ITippyProps = {
            ...{
                allowHTML: true,
                arrow: true,
                interactive: true,
                placement
            },
            ...this.props.options
        };

        // Create the popover content element
        this._elContent = document.createElement("div") as HTMLElement;
        this._elContent.classList.add("bs");
        appendContent(this._elContent, options.content as any);
        options.content = this._elContent;

        // Create the tippy
        this._tippy = tippy(this.el, options as any) as any;
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
        if (this.isVisible) { this._tippy.hide(); }
    }

    // Determines if the popover is visible
    get isVisible(): boolean { return this._elContent.classList.contains("show"); }

    // The tippy instance
    tippy() { return this._tippy; }

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
            this._elContent.classList.remove("show");
        } else {
            // Show the element
            this.show();
            this._elContent.classList.add("show");
        }
    }
}
export const Tooltip = (props: ITooltipProps, template?: string): ITooltip => { return new _Tooltip(props, template); }