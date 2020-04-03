import { IButtonGroup, IButtonGroupProps } from "../../../@types/components/buttonGroup";
import { Base } from "../base";
import { Button } from "../button";
import * as HTML from "./index.html";

/**
 * Button Group
 * @property props - The button group properties.
 */
class _ButtonGroup extends Base<IButtonGroupProps> implements IButtonGroup {
    // Constructor
    constructor(props: IButtonGroupProps) {
        super(HTML, props);

        // Configure the button group
        this.configure();

        // Configure the parent
        this.configureParent();
    }

    // Configure the button group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;

        // Set the class names
        this.el.classList.add(this.props.isVertical ? "btn-group-vertical" : "btn-group");
        this.props.isLarge ? this.el.classList.add("btn-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-group-sm") : null;

        // Render the buttons
        this.renderButtons();
    }

    // Render the buttons
    private renderButtons() {
        // Parse the buttons
        let buttons = this.props.buttons || [];
        for (let i = 0; i < buttons.length; i++) {
            let buttonProps = buttons[i];

            // Set the property
            buttonProps.type = buttonProps.type || this.props.buttonType;

            // Add the button html
            this.el.appendChild(Button(buttonProps).el);
        }
    }
}
export const ButtonGroup = (props: IButtonGroupProps): IButtonGroup => { return new _ButtonGroup(props); }