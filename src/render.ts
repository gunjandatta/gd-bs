import * as Components from "./components";

/**
 * Render
 * Looks through the html code to find components and render them.
 */
class RenderComponents {
    private _el: HTMLElement = null;

    // The properties for the component
    private _props: any[] = [];
    get Props(): any[] { return this._props; }

    // Constructor
    constructor(el: HTMLElement, propsOnly: boolean = false) {
        this._el = el;

        // Render the components
        this.render(propsOnly);
    }

    // Gets the custom elements
    private getElements(): HTMLElement[] {
        let bsElements = [];

        // Get all the elements and find the custom components
        this._el.childNodes.forEach(el => {
            if (el.nodeName.indexOf("BS-") == 0) {
                // Add the element
                bsElements.push(el);
            }
        });

        return bsElements;
    }

    // Converts the custom childelements
    private getChildItems(el: HTMLElement, propName: string, componentName: string, removeFl: boolean = false) {
        // Get the item elements
        let elItems = el.querySelectorAll(propName);
        if (elItems.length > 0) {
            let items = [];

            // Parse the elements
            for (let i = 0; i < elItems.length; i++) {
                let elItem = elItems[i] as HTMLElement;

                // Ensure this is an item
                if (elItem.nodeName == propName.toUpperCase()) {
                    let item = this.getProps(elItem, componentName);

                    // See if there is content
                    if (elItem.innerHTML) {
                        // Set custom child elements
                        switch (elItem.nodeName) {
                            case "CARD-BODY":
                                item.actions = this.getChildItems(elItem, "card-action", elItem.nodeName, true);
                                break;
                        }

                        // Set the custom property
                        switch (componentName) {
                            case "ACCORDION":
                            case "CARD":
                            case "CAROUSEL":
                                item.content = item.content || elItem.innerHTML;
                                break;
                            case "CHECKBOX-GROUP":
                                item.label = item.label || elItem.innerHTML;
                                break;
                            case "BREADCRUMB":
                            case "CARD-BODY":
                            case "DROPDOWN":
                                item.text = item.text || elItem.innerHTML;
                                break;
                        }
                    }

                    // Add the item
                    items.push(item);

                    // See if we are removing the property
                    if (removeFl) { el.removeChild(elItem); }
                }
            }

            // Return the items
            return items;
        }

        // Return nothing
        return null;
    }

    // Gets the properties of an element and returns an object
    private getProps(el: HTMLElement, componentName: string): any {
        let props: any = {};

        // Parse the attributes
        for (let i = 0; i < el.attributes.length; i++) {
            let attribute = el.attributes[i];

            // Set the value
            let value: any = attribute.value;

            // Convert the value
            if (typeof (value) === "string") {
                // See if it's a boolean value
                if (value?.toLowerCase() == "true") { value = true; }
                else if (value?.toLowerCase() == "false") { value = false; }

                // Else, see if it's linked to a global library
                else if (value.indexOf('.') > 0) {
                    // Split the value
                    let objInfo = value.split('.');

                    // See if this is linked to a global library
                    let objProp = null;
                    for (let i = 0; i < objInfo.length; i++) {
                        if (i == 0) {
                            objProp = window[objInfo[0]];
                            if (objProp) { continue } else { break };
                        }

                        // Update the object
                        objProp = objProp[objInfo[i]];
                        if (objProp == null) { break; }
                    }

                    // See if the object exists
                    if (objProp) {
                        // Update the value
                        value = objProp;
                    }
                } else {
                    try {
                        // See if it's a reference
                        let elTarget = document.querySelector(value);
                        if (elTarget) {
                            value = elTarget;
                        } else {
                            // See if it's JSON
                            let jsonObj = JSON.parse(value);
                            value = jsonObj;
                        }
                    } catch { }
                }
            }

            // Add the property
            props[this.getPropName(attribute.name)] = value;
        }

        // Set common properties
        switch (componentName) {
            case "ALERT":
            case "BADGE":
            case "COLLAPSE":
                props.content = el.innerHTML;
                break;
            case "BUTTON":
                props.text = props.text || el.innerHTML;
                break;
        }

        // Return the properties
        return props;
    }

    // Gets the property name
    private getPropName(propName: string) {
        let idx = propName.indexOf('-');
        while (idx > 0) {
            // Update the key and index
            propName = propName.substring(0, idx) + propName[idx + 1].toUpperCase() + propName.substring(idx + 2);
            idx = propName.indexOf('-');
        }

        // Return the property name
        return propName;
    }

    // Renders the custom components
    private render(propsOnly: boolean) {
        // Parse the elements
        this.getElements().forEach((el: HTMLElement) => {
            let componentName = el.nodeName.substring(3);

            // Get the component props
            let props = { ...this.getProps(el, componentName), el };

            // Generate the component
            let elComponent: HTMLElement = null;
            switch (componentName) {
                case "ACCORDION":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : elComponent = Components.Accordion(props).el;
                    break;
                case "ALERT":
                    propsOnly ? null : elComponent = Components.Alert(props).el;
                    break;
                case "BADGE":
                    propsOnly ? null : elComponent = Components.Badge(props).el;
                    break;
                case "BREADCRUMB":
                    propsOnly ? null : elComponent = Components.Breadcrumb(props).el;
                    break;
                case "BUTTON":
                    propsOnly ? null : elComponent = Components.Button(props).el;
                    break;
                case "CARD":
                    props.body = this.getChildItems(el, "card-body", componentName);
                    props.header = this.getChildItems(el, "card-footer", componentName);
                    props.footer = this.getChildItems(el, "card-header", componentName);
                    propsOnly ? null : elComponent = Components.Card(props).el;
                    break;
                case "CARD-GROUP":
                    props.cards = (new RenderComponents(el, true)).Props;
                    propsOnly ? null : elComponent = Components.CardGroup(props).el;
                    break;
                case "CAROUSEL":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : elComponent = Components.Carousel(props).el;
                    break;
                case "CHECKBOX-GROUP":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : elComponent = Components.CheckboxGroup(props).el;
                    break;
                case "COLLAPSE":
                    propsOnly ? null : elComponent = Components.Collapse(props).el;
                    break;
                case "DROPDOWN":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : elComponent = Components.Dropdown(props).el;
                    break;
                case "FORM":
                    propsOnly ? null : elComponent = Components.Form(props).el;
                    break;
                case "FORMCONTROL":
                    propsOnly ? null : elComponent = Components.FormControl(props).el;
                    break;
                // Do nothing
                default:
                    return;
            }

            // Clear the element
            while (el.firstChild) { el.removeChild(el.firstChild); }

            // Do nothing if we are only generating properties
            this._props.push(props);
            if (propsOnly) { return; }

            // Set the class name
            el.classList.add("bs");

            // Remove the id attribute
            if (el.hasAttribute("id")) { el.removeAttribute("id"); }

            // Append the component
            el.appendChild(elComponent);
        });
    }
}
export const render = (el) => { new RenderComponents(el); }