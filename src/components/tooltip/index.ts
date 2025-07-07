import { IFloatingUI } from "../floating-ui/types";
import { ITooltip, ITooltipProps } from "./types";
import { Base } from "../base";
import { IButton } from "../button/types";
import { Button, ButtonTypes } from "../button";
import { IDropdown } from "../dropdown/types";
import { Dropdown, DropdownTypes } from "../dropdown";
import { FloatingUI, FloatingUIPlacements } from "../floating-ui";

/**
 * Tooltip Types
 */
export enum TooltipTypes {
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
 * Tooltip Placements
 */
export { FloatingUIPlacements as TooltipPlacements }

/**
 * Tooltip
 */
class _Tooltip extends Base<ITooltipProps> {
    private _btn: IButton = null;
    private _ddl: IDropdown = null;
    private _elContent: HTMLElement = null;
    private _floatingUI: IFloatingUI = null;

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
            // See if the dropdown property exists
            if (this.props.ddlProps) {
                // Set the default properties
                let ddlProps = this.props.ddlProps;
                ddlProps.type = ddlProps.type || DropdownTypes.OutlinePrimary;

                // Create the dropdown
                this._ddl = Dropdown(ddlProps);

                // Update the element
                this.el = this._ddl.el.querySelector("button");
            } else {
                // Default the toggle property for the button
                let btnProps = this.props.btnProps || {};
                btnProps.type = btnProps.type || ButtonTypes.OutlinePrimary

                // See if the content is text
                if (typeof (this.props.content) === "string") {
                    // Set the label
                    btnProps.description = this.props.content;
                }

                // Create the button
                this._btn = Button(btnProps);

                // Update the element
                this.el = this._btn.el;
            }
        }

        // Configure the options
        this.configureOptions();
    }

    // Configure the options
    private configureOptions() {
        // Set the theme
        let theme = null;
        switch (this.props.type) {
            // Danger
            case TooltipTypes.Danger:
                theme = "danger";
                break;
            // Dark
            case TooltipTypes.Dark:
                theme = "dark";
                break;
            // Info
            case TooltipTypes.Info:
                theme = "info";
                break;
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
            // Success
            case TooltipTypes.Success:
                theme = "success";
                break;
            // Translucent
            case TooltipTypes.Translucent:
                theme = "translucent";
                break;
            // Warning
            case TooltipTypes.Warning:
                theme = "warning";
                break;
            // Default - Secondary
            default:
                // Set the default theme
                theme = "secondary";

                // See if a button/dropdown exists
                let objType = this.props.btnProps && this.props.btnProps.type > 0 ? this.props.btnProps.type : null;
                objType = this.props.ddlProps && this.props.ddlProps.type > 0 ? this.props.ddlProps.type : objType;
                if (objType > 0) {
                    // Match the theme to the button/dropdown type
                    switch (objType) {
                        // Danger
                        case ButtonTypes.Danger:
                        case ButtonTypes.OutlineDanger:
                            theme = "danger";
                            break;
                        // Dark
                        case ButtonTypes.Dark:
                        case ButtonTypes.OutlineDark:
                            theme = "dark";
                            break;
                        // Info
                        case ButtonTypes.Info:
                        case ButtonTypes.OutlineInfo:
                            theme = "info";
                            break;
                        // Light
                        case ButtonTypes.Light:
                        case ButtonTypes.OutlineLight:
                            theme = "light";
                            break;
                        // Link
                        case ButtonTypes.Link:
                        case ButtonTypes.OutlineLink:
                            theme = "light-border";
                            break;
                        // Primary
                        case ButtonTypes.Primary:
                        case ButtonTypes.OutlinePrimary:
                            theme = "primary";
                            break;
                        // Secondary
                        case ButtonTypes.Secondary:
                        case ButtonTypes.OutlineSecondary:
                            theme = "secondary";
                            break;
                        // Success
                        case ButtonTypes.Success:
                        case ButtonTypes.OutlineSuccess:
                            theme = "success";
                            break;
                        // Warning
                        case ButtonTypes.Warning:
                        case ButtonTypes.OutlineWarning:
                            theme = "warning";
                            break;
                    }
                }
                break;
        }

        // Set the tooltip content element
        if (typeof (this.props.content) === "string") {
            this._elContent = document.createElement("div") as HTMLElement;
            this._elContent.innerHTML = this.props.content;
        } else if(this.props.content) {
            this._elContent = this.props.content as any;
        } else {
            this._elContent = document.createElement("div");
        }

        // Set the padding
        this._elContent.classList.add("p-2");

        // Set the on create event
        /*
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
            */

        // Create the floating ui
        this._floatingUI = FloatingUI({
            className: "floating-tooltip",
            elContent: this._elContent,
            elTarget: this.el,
            options: {
                ...{ arrow: true, flip: true, shift: { padding: 5 }, trigger: "mouse" },
                ...this.props.options
            },
            show: this.props.show,
            placement: this.props.placement || FloatingUIPlacements.Top,
            theme: this.props.type
        });
    }

    /**
     * Public Interface
     */

    // Reference to the button
    get button(): IButton { return this._btn; }

    // Reference to the dropdown
    get ddl(): IDropdown { return this._ddl; }

    // Disbles the tooltip
    disable() {
        // Disable the button or dropdown
        this._btn ? this._btn.disable() : null;
        this._ddl ? this._ddl.disable() : null;
    }

    // Enables the tooltip
    enable() {
        // Enable the button or dropdown
        this._btn ? this._btn.enable() : null;
        this._ddl ? this._ddl.enable() : null;
    }

    // Hides the tooltip
    hide() {
        // See if it's visible
        if (this.isVisible) { this._floatingUI.hide(); }
    }

    // Determines if the tooltip is visible
    get isVisible(): boolean { return this._floatingUI.isVisible; }

    // The floating ui instance
    get floatingUI() { return this._floatingUI; }

    // Sets the tippy content
    setContent(content: string | Element) {
        // Set the tippy content
        this._floatingUI.setContent(content);

        // See if the content is a string
        if (typeof (content) === "string") {
            // Update the content
            this._btn ? this._btn.el.setAttribute("aria-description", content) : null;
            this._ddl ? this._ddl.el.setAttribute("aria-description", content) : null;
        }
    }

    // Shows the tooltip
    show() {
        // See if it's hidden
        if (!this.isVisible) { this._floatingUI.show(); }
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