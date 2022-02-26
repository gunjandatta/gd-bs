import { ITooltip, ITooltipProps } from "../tooltip/types";
import { ITooltipGroup, ITooltipGroupProps } from "./types";
import { Base } from "../base";
import { Tooltip, } from "../tooltip";
import { HTML } from "./templates";

/**
 * Tooltip Group
 * @property props - The tooltip group properties.
 */
class _TooltipGroup extends Base<ITooltipGroupProps> implements ITooltipGroup {
    private _tooltips: Array<ITooltip> = null;

    // Constructor
    constructor(props: ITooltipGroupProps, template: string = HTML, btnTemplate?: string) {
        super(template, props);

        // Configure the tooltip group
        this.configure(btnTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the tooltip group
    private configure(btnTemplate: string) {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;

        // Set the class names
        this.el.classList.add(this.props.isVertical ? "btn-group-vertical" : "btn-group");
        this.props.isLarge ? this.el.classList.add("btn-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-group-sm") : null;

        // Render the tooltips
        this.renderTooltips(btnTemplate);
    }

    // Render the tooltips
    private renderTooltips(btnTemplate: string) {
        // Clear the tooltips
        this._tooltips = [];

        // Parse the tooltips
        let tooltips = this.props.tooltips || [];
        for (let i = 0; i < tooltips.length; i++) {
            // Render the tooltip
            this.renderTooltip(tooltips[i], btnTemplate);
        }
    }

    // Renders a tooltip
    private renderTooltip(props: ITooltipProps, btnTemplate?: string) {
        // Set the properties
        props.options = props.options || this.props.tooltipOptions;
        props.placement = props.placement || this.props.tooltipPlacement;
        props.type = props.type || this.props.tooltipType;

        // See if the button props exists
        if (props.btnProps) {
            // Set the button type
            props.btnProps.type = props.btnProps.type || this.props.buttonType;
        }

        // Create the tooltip
        let tooltip = Tooltip(props, btnTemplate);
        this._tooltips.push(tooltip);

        // Append the tooltip to the group
        this.el.appendChild(tooltip.el);
    }

    /**
     * Public Interface
     */

    // Adds a button to the group
    add(props: ITooltipProps, tooltipTemplate?: string) {
        // Render the tooltip
        this.renderTooltip(props);
    }

    // Reference to the tooltips
    get tooltips(): Array<ITooltip> { return this._tooltips; }
}
export const TooltipGroup = (props: ITooltipGroupProps, template?: string, tooltipTemplate?: string): ITooltipGroup => { return new _TooltipGroup(props, template, tooltipTemplate); }