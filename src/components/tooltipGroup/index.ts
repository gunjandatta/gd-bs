import { ITooltip } from "../tooltip/types";
import { ITooltipGroup, ITooltipGroupProps } from "./types";
import { Base } from "../base";
import { Tooltip } from "../tooltip";
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
    private renderTooltips(tooltipTemplate: string) {
        // Clear the tooltips
        this._tooltips = [];

        // Parse the tooltips
        let tooltips = this.props.tooltips || [];
        for (let i = 0; i < tooltips.length; i++) {
            let tooltipProps = tooltips[i];

            // Set the properties
            tooltipProps.placement = tooltipProps.placement || this.props.tooltipPlacement;
            tooltipProps.type = tooltipProps.type || this.props.tooltipType;

            // See if the button props exists
            if (tooltipProps.btnProps) {
                // Set the button type
                tooltipProps.btnProps.type = tooltipProps.btnProps.type || this.props.buttonType;
            }

            // Create the tooltip
            let tooltip = Tooltip(tooltipProps, tooltipTemplate);
            this._tooltips.push(tooltip);

            // Append the tooltip to the group
            this.el.appendChild(tooltip.el);
        }
    }

    /**
     * Public Interface
     */

    // Reference to the tooltips
    get tooltips(): Array<ITooltip> { return this._tooltips; }
}
export const TooltipGroup = (props: ITooltipGroupProps, template?: string, tooltipTemplate?: string): ITooltipGroup => { return new _TooltipGroup(props, template, tooltipTemplate); }