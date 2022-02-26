import { IButton } from "../button/types";
import { IButtonGroup, IButtonGroupProps } from "./types";
import { Base } from "../base";
import { Button } from "../button";
import { HTML } from "./templates";
import { IButtonProps } from "../components";

/**
 * Button Group
 * @property props - The button group properties.
 */
class _ButtonGroup extends Base<IButtonGroupProps> implements IButtonGroup {
    private _buttons: Array<IButton> = null;

    // Constructor
    constructor(props: IButtonGroupProps, template: string = HTML, btnTemplate?: string) {
        super(template, props);

        // Configure the button group
        this.configure(btnTemplate);

        // Configure the parent
        this.configureParent();
    }

    // Configure the button group
    private configure(btnTemplate: string) {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.label ? this.el.setAttribute("aria-label", this.props.label) : null;

        // Set the class names
        this.el.classList.add(this.props.isVertical ? "btn-group-vertical" : "btn-group");
        this.props.isLarge ? this.el.classList.add("btn-group-lg") : null;
        this.props.isSmall ? this.el.classList.add("btn-group-sm") : null;

        // Render the buttons
        this.renderButtons(btnTemplate);
    }

    // Render the buttons
    private renderButtons(btnTemplate: string) {
        // Clear the buttons
        this._buttons = [];

        // Parse the buttons
        let buttons = this.props.buttons || [];
        for (let i = 0; i < buttons.length; i++) {
            // Render the button
            this.renderButton(buttons[i], btnTemplate);
        }
    }

    // Renders a button
    private renderButton(props: IButtonProps, template) {
        // Set the property
        props.type = props.type || this.props.buttonType;

        // Create the button
        let button = Button(props, template);
        this._buttons.push(button);

        // Append the button to the group
        this.el.appendChild(button.el);
    }

    /**
     * Public Interface
     */

    // Reference to the buttons
    get buttons(): Array<IButton> { return this._buttons; }

    // Adds a button to the group
    add(props: IButtonProps, btnTemplate?: string) {
        // Render the button
        this.renderButton(props, btnTemplate);
    }
}
export const ButtonGroup = (props: IButtonGroupProps, template?: string, btnTemplate?: string): IButtonGroup => { return new _ButtonGroup(props, template, btnTemplate); }