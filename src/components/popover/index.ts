import { IFloatingUI } from "../floating-ui/types";
import { Button } from "../button";
import { Base } from "../base";
import { appendContent, setClassNames } from "../common";
import { FloatingUI, FloatingUIPlacements } from "../floating-ui";
import { IPopover, IPopoverProps } from "./types";

/**
 * Popover Types
 */
export enum PopoverTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    LightBorder = 5,
    Material = 6,
    Primary = 7,
    Secondary = 8,
    Success = 9,
    Translucent = 10,
    Warning = 11
}

/**
 * Popover Placements
 */
export { FloatingUIPlacements as PopoverPlacements }

/**
 * Popover
 */
class _Popover extends Base<IPopoverProps> implements IPopover {
    private _elContent: HTMLDivElement = null;
    private _floatingUI: IFloatingUI = null;

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

        // Create the content element
        this._elContent = document.createElement("div");
        this._elContent.classList.add("popover");
        setClassNames(this._elContent, this.props.className);
        this._elContent.innerHTML = '<div class="popover-header"></div><div class="popover-body"></div>';
        appendContent(this._elContent.querySelector(".popover-header"), this.props.title);
        setClassNames(this._elContent.querySelector(".popover-header"), this.props.classNameHeader);
        appendContent(this._elContent.querySelector(".popover-body"), this.props.options?.content);
        setClassNames(this._elContent.querySelector(".popover-body"), this.props.classNameBody);

        // Create the floating ui
        this._floatingUI = FloatingUI({
            elContent: this._elContent,
            elTarget: this.el,
            options: {
                ...{ arrow: true, flip: true, shift: { padding: 5 } },
                ...this.props.options
            },
            placement: this.props.placement,
            show: this.props.show,
            theme: this.props.type
        });
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
    hide() { this._floatingUI.hide(); }

    // Determines if the popover is visible
    get isVisible(): boolean { return this._floatingUI.isVisible; }

    // The floating ui instand
    get floatingUI() { return this._floatingUI; }

    // Sets the popover body element
    setBody(content: string | Element) {
        let elBody: HTMLElement = this._elContent.querySelector(".popover-body");
        if (elBody) {
            // Clear the content
            while (elBody.firstChild) { elBody.removeChild(elBody.firstChild); }

            // Update the content
            appendContent(elBody, content);
        }
    }

    // Sets the tippy content
    setContent(content: string | Element) {
        // See if this is a string
        if (typeof (content) === "string") {
            // Set the content
            this._elContent.innerHTML = content;
        } else {
            // Clear the content
            while (this._elContent.firstChild) { this._elContent.removeChild(this._elContent.firstChild); }

            // Append the content
            appendContent(this._elContent, content);
        }
    }

    // Sets the popover header element
    setHeader(content: string | Element) {
        let elHeader: HTMLElement = this._elContent.querySelector(".popover-header");
        if (elHeader) {
            // Clear the content
            while (elHeader.firstChild) { elHeader.removeChild(elHeader.firstChild); }

            // Update the content
            appendContent(elHeader, content);
        }
    }

    // Shows the popover
    show() { this._floatingUI.show(); }

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
