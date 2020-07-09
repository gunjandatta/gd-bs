import * as collapse from "bootstrap/js/dist/collapse";
import { ICollapse, ICollapseProps } from "../../../@types/components/collapse";
import { Base } from "../base";
import { HTML } from "./templates";

/**
 * Collapse
 */
class _Collapse extends Base<ICollapseProps> implements ICollapse {

    // Constructor
    constructor(props: ICollapseProps) {
        super(HTML, props);

        // Configure the collapse
        this.configure();

        // Configure the parent
        this.configureParent();

        // Create the collapse
        this._bootstrapObj = new collapse(this.el, this.props.options);
    }

    // Configure the card group
    private configure() {
        // Set the attributes
        this.props.id ? this.el.id = this.props.id : null;
        this.props.isMulti ? this.el.classList.add("multi-collapse") : null;

        // Set the content
        let content = this.props.content || "";
        let body = this.el.querySelector(".card") as HTMLDivElement;
        if (typeof (content) === "string" || typeof (content) === "number") {
            // Set the html
            body.innerHTML = content;
        } else {
            // Append the element
            body.appendChild(content);
        }

        // Execute the render event
        this.props.onRender ? this.props.onRender(this.props, body) : null;
    }

    /**
     * Bootstrap
     */

    // Disposes the collapse
    dispose() { this._bootstrapObj.dispose(); }

    // Toggles the collapse
    toggle() { this._bootstrapObj.toggle(); }

    /**
     * Public Interface
     */
}
export const Collapse = (props: ICollapseProps): ICollapse => { return new _Collapse(props); }