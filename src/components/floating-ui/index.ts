import {
    arrow, autoPlacement, computePosition, flip, hide, inline, offset, shift, size, ComputePositionConfig
} from "@floating-ui/dom";
import { setClassNames } from "../common";
import { IFloatingUIProps, IFloatingUI } from "./types";
export * as FloatingUILib from "@floating-ui/dom";


/**
 * Floating UI Placements
 */
export enum FloatingUIPlacements {
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
 * Floating UI Types
 */
export enum FloatingUITypes {
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
 * Floating UI Element
 */
class _FloatingUI {
    private _elArrow: HTMLElement = null;
    private _elTarget: HTMLElement = null;
    private _elContent: HTMLElement = null;
    private _options: ComputePositionConfig = null;
    private _props: IFloatingUIProps = null;

    // Static events
    private static Events = [];
    private static EventsCreated = false;
    private static ScrollEvents = [];

    // Constructor
    constructor(props: IFloatingUIProps) {
        this._elTarget = props.elTarget;
        this._props = props;

        // Create the content element
        this._elContent = document.createElement("div");
        this._elContent.classList.add("bs");
        this._elContent.classList.add("floating-ui");
        this._elContent.appendChild(props.elContent);
        this._elContent.setAttribute("data-theme", this.getTheme(this._props.theme));
        setClassNames(this._elContent, this._props.className);

        // Add the events
        this.addEvents(props.options?.trigger);

        // Create the floating ui element
        this.create();

        // Set the visibility
        this._props.show ? this.show() : this.hide();
    }

    private addEvents(trigger: string = "") {
        // Events
        if (trigger.indexOf("mouse") >= 0) {
            this._elTarget.addEventListener("mouseenter", () => { this.show(); });
            this._elTarget.addEventListener("mouseleave", () => { this.hide(); });
        }
        if (trigger.indexOf("focus") >= 0) {
            this._elTarget.addEventListener("focus", () => { this.show(); });
            this._elTarget.addEventListener("blur", () => { this.hide(); });
        }
        if (trigger.indexOf("click") >= 0) {
            this._elTarget.addEventListener("click", (ev) => {
                // Call the event
                this.isVisible ? this.hide() : this.show();
            });
        }

        // Add the events
        _FloatingUI.Events.push((ev: Event) => {
            // See if it's outside the target element
            if (!this._elTarget.contains(ev.target as any)) {
                // Hide the element
                this.hide();
            }
        });
        _FloatingUI.ScrollEvents.push((ev: Event) => {
            // Refresh the content
            this.refresh();
        });

        // Ensure the click event exists
        if (!_FloatingUI.EventsCreated) {
            // Create the event
            document.addEventListener("click", (ev) => {
                // Wait for the other events to run
                setTimeout(() => {
                    // Parse the events
                    _FloatingUI.Events.forEach(fnEvent => {
                        // Call the event
                        fnEvent(ev);
                    });
                }, 10);
            });

            // Create the scroll event
            window.addEventListener("scroll", (ev) => {
                // Wait for the other events to run
                setTimeout(() => {
                    // Parse the events
                    _FloatingUI.ScrollEvents.forEach(fnEvent => {
                        // Call the event
                        fnEvent(ev);
                    });
                }, 10);
            });

            // Set the flag
            _FloatingUI.EventsCreated = true;
        }
    }

    // Creates the floating ui
    private create() {
        let placement = this.getPlacement(this._props.placement);
        let middleware = this.getMiddleware(placement);

        // See if we are adding an arrow
        if (this._props.options?.arrow) {
            // Create the element
            this._elArrow = document.createElement("div");
            this._elArrow.classList.add("arrow");
            this._elContent.appendChild(this._elArrow);

            // Add the plugin
            middleware.push(arrow({ element: this._elArrow }));
            middleware = [offset(6)].concat(middleware);
        }

        // Set the options
        this._options = {
            middleware,
            placement: placement.placement as any
        };
    }

    // Returns the plugins
    private getMiddleware(placement: { autoPlacement: boolean; placement: string; }) {
        let middleware = [];

        // See if we are adding the offset option
        if (this._props.options?.offset) {
            middleware.push(typeof (this._props.options.offset) === "boolean" ? offset() : offset(this._props.options.offset));
        }

        // See if we are adding the auto placement option
        if (this._props.options?.autoPlacement || placement.autoPlacement) {
            middleware.push(typeof (this._props.options.autoPlacement) === "boolean" ? autoPlacement() : autoPlacement(this._props.options.autoPlacement));
        }
        // Else, see if we are adding the flip option
        else if (this._props.options?.flip) {
            middleware.push(flip());
        }

        // See if we are adding the hide option
        if (this._props.options?.hide) {
            middleware.push(typeof (this._props.options.hide) === "boolean" ? hide() : hide(this._props.options.hide));
        }

        // See if we are adding the inline option
        if (this._props.options?.inline) {
            middleware.push(typeof (this._props.options.inline) === "boolean" ? inline() : inline(this._props.options.inline));
        }

        // See if we are adding the shift option
        if (this._props.options?.shift) {
            middleware.push(typeof (this._props.options.shift) === "boolean" ? shift() : shift(this._props.options?.shift));
        }

        // See if we are adding the size option
        if (this._props.options?.size) {
            middleware.push(typeof (this._props.options.size) === "boolean" ? size() : size(this._props.options?.size));
        }

        // Return the middle ware
        return middleware;
    }

    // Returns the placement information
    private getPlacement(placementValue: number): { autoPlacement: boolean; placement: string; } {
        let autoPlacement = false;
        let placement = "top-end";

        switch (placementValue) {
            // Auto
            case FloatingUIPlacements.Auto:
                autoPlacement = true;
                break;
            case FloatingUIPlacements.AutoEnd:
                placement = 'end';
                autoPlacement = true;
                break;
            case FloatingUIPlacements.AutoStart:
                placement = 'start';
                autoPlacement = true;
                break;
            // Bottom
            case FloatingUIPlacements.Bottom:
                placement = "bottom";
                break;
            case FloatingUIPlacements.BottomEnd:
                placement = "bottom-end";
                break;
            case FloatingUIPlacements.BottomStart:
                placement = "bottom-start";
                break;
            // Left
            case FloatingUIPlacements.Left:
                placement = "left";
                break;
            case FloatingUIPlacements.LeftEnd:
                placement = "left-end";
                break;
            case FloatingUIPlacements.LeftStart:
                placement = "left-start";
                break;
            // Right
            case FloatingUIPlacements.Right:
                placement = "right";
                break;
            case FloatingUIPlacements.RightEnd:
                placement = "right-end";
                break;
            case FloatingUIPlacements.RightStart:
                placement = "right-start";
                break;
            // Top
            case FloatingUIPlacements.Top:
                placement = "top";
                break;
            case FloatingUIPlacements.TopEnd:
                placement = "top-end";
                break;
            case FloatingUIPlacements.TopStart:
                placement = "top-start";
                break;
        }

        // Return the placement
        return { autoPlacement, placement };
    }

    // Returns the theme
    private getTheme(themeValue: number) {
        let theme = null;

        // Set the theme
        switch (themeValue) {
            // Dark
            case FloatingUITypes.Dark:
                theme = "dark";
                break;
            // Danger
            case FloatingUITypes.Danger:
                theme = "danger";
                break;
            // Info
            case FloatingUITypes.Info:
                theme = "info";
                break;
            // Light
            case FloatingUITypes.Light:
                theme = "light";
                break;
            case FloatingUITypes.LightBorder:
                theme = "light-border";
                break;
            // Material
            case FloatingUITypes.Material:
                theme = "material";
                break;
            // Primary
            case FloatingUITypes.Primary:
                theme = "primary";
                break;
            // Secondary
            case FloatingUITypes.Secondary:
                theme = "secondary";
                break;
            // Success
            case FloatingUITypes.Success:
                theme = "success";
                break;
            // Translucent
            case FloatingUITypes.Translucent:
                theme = "translucent";
                break;
            // Warning
            case FloatingUITypes.Warning:
                theme = "warning";
                break;
            // Default - Light Border
            default:
                theme = "light-border";
                break;
        }

        // Return the theme
        return theme;
    }

    // Refresh the element position
    private refresh() {
        // Create the floating ui
        computePosition(this._elTarget, this._elContent, this._options).then(({ x, y, middlewareData }) => {
            // Update the location
            Object.assign(this._elContent.style, {
                left: `${x}px`,
                top: `${y}px`
            });

            // See if the arrow exists
            if (this._elArrow) {
                let arrowX = middlewareData.arrow.x;
                let arrowY = middlewareData.arrow.y;
                let side = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right'
                }[(middlewareData.offset?.placement || this._options.placement).split('-')[0]]

                // Update the location
                Object.assign(this._elArrow.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '',
                    bottom: '',
                    [side]: '-4px'
                });
            }
        });
    }

    /**
     * Public Methods
     */

    setContent(el) { this._elContent = el; this.refresh(); }

    // Hides the content
    hide() {
        // Remove it from the document
        this._elContent.classList.add("d-none");
        if (document.body.contains(this._elContent)) { document.body.removeChild(this._elContent); }
    }

    // Determines if the content is visible
    get isVisible(): boolean { return !this._elContent.classList.contains("d-none"); }

    // Shows the content
    show() {
        // Append it to the document
        this._elContent.classList.remove("d-none");
        if (!document.body.contains(this._elContent)) { document.body.appendChild(this._elContent); this.refresh(); }
    }

    // Toggles the floating ui
    toggle() { this.isVisible ? this.hide() : this.show(); }
}
export const FloatingUI = (props: IFloatingUIProps): IFloatingUI => { return new _FloatingUI(props); }