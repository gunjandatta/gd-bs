import { Instance, Props } from "tippy.js";
import { tippy } from "../../libs";
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
    private _tippy: Instance = null;

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
        // Set the type
        let placement = "";
        switch (this.props.type) {
            // Auto
            case PopoverTypes.Auto:
                placement = "auto";
                break;
            // Bottom
            case PopoverTypes.Bottom:
                placement = "bottom";
                break;
            // Left
            case PopoverTypes.Left:
                placement = "left";
                break;
            // Right
            case PopoverTypes.Right:
                placement = "right";
                break;
            // Top
            case PopoverTypes.Top:
                placement = "top";
                break;
            // Default
            default:
                placement = "bottom";
                break;
        }

        // Set the options
        let options: Props = {
            ...{
                allowHTML: true,
                arrow: true,
                placement
            } as Props,
            ...this.props.options
        };

        // See if we are targeting an element
        let elPopover: HTMLElement = null;
        if (this.props.target) {
            // Set the popover to the target element
            elPopover = this.props.target as HTMLElement;

            // Ensure the attributes are set in the target element
            elPopover.setAttribute("tabindex", "0");

            // Update this element
            this.el = elPopover as any;
        } else {
            // Create the button
            let btnProps = this.props.btnProps || {};
            btnProps.isLink = this.props.isDismissible ? true : false;
            btnProps.tabIndex = btnProps.tabIndex || 0;
            this.el = Button(btnProps).el;
        }

        // Create the popover content element
        this._elContent = document.createElement("div") as HTMLDivElement;
        this._elContent.classList.add("bs");
        this._elContent.innerHTML = '<h3 class="header"></h3><div class="body"></div>';
        appendContent(this._elContent.querySelector(".header"), this.props.title);
        appendContent(this._elContent.querySelector(".body"), options.content as any);
        options.content = this._elContent;

        // Create the tippy
        this._tippy = tippy(this.el, options) as any;
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

    // Toggles the popover
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
export const Popover = (props: IPopoverProps, template?: string): IPopover => { return new _Popover(props, template); }