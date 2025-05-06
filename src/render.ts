import * as Components from "./components";

/**
 * Render
 * Looks through the html code to find components and render them.
 */
class RenderComponents {
    private _component = null;
    private _el: HTMLElement = null;

    // The properties for the component
    private _props: any[] = [];
    get Props(): any[] { return this._props; }

    // Constructor
    constructor(el: HTMLElement, propsOnly: boolean = false, targetSelf: boolean = false) {
        this._el = el;

        // Render the components
        this.render(propsOnly, targetSelf);
    }

    // Creates an element and appends the children to it
    createElement(elSource: HTMLElement, removeFl: boolean = true): HTMLElement {
        let elTarget = document.createElement("div");

        // See if the target exists
        while (elSource.firstChild) {
            elTarget.appendChild(elSource.firstChild);
        }

        // Render any custom elements
        new RenderComponents(elTarget);

        // Remove the element
        removeFl ? elSource.remove() : null;

        // Return the target element
        return elTarget.childNodes.length > 0 ? elTarget : null;
    }

    // Gets the custom elements
    private getElements(targetSelf: boolean): HTMLElement[] {
        let bsElements = [];

        if (targetSelf) { return [this._el]; }

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
    private getChildItems(el: HTMLElement, propName: string, componentName: string) {
        let items = [];

        // Get the item elements
        el.querySelectorAll(propName).forEach((elItem: HTMLElement) => {
            // Ensure this is an item
            if (elItem.nodeName == propName.toUpperCase()) {
                let item = this.getProps(elItem, componentName);

                // See if there is content
                if (elItem.innerHTML) {
                    // Set custom child elements
                    switch (elItem.nodeName) {
                        case "CARD-BODY":
                            item.actions = this.getChildItems(elItem, "card-action", elItem.nodeName);
                            break;
                        case "NAVBAR-ITEM":
                            item.items = this.getChildItems(elItem, "navbar-item", componentName);
                            break;
                        case "NAVBAR-ITEM-END":
                            item.items = this.getChildItems(elItem, "navbar-item-end", componentName);
                            break;
                    }

                    // See if there is a sub-component
                    switch (componentName) {
                        case "LIST-GROUP":
                            // Set the badge
                            let badge = this.getChildItems(elItem, "bs-badge", componentName);
                            if (badge?.length > 0) { item.badge = badge[0]; }
                            break;
                    }

                    // Set the custom property
                    switch (componentName) {
                        // content
                        case "ACCORDION":
                        case "CARD":
                        case "CAROUSEL":
                        case "LIST-GROUP":
                            item.content = item.content || this.createElement(elItem);
                            break;
                        // label
                        case "CHECKBOX-GROUP":
                            item.label = item.label || elItem.innerHTML;
                            break;
                        // text
                        case "CARD-BODY":
                            item.text = item.text || this.createElement(elItem);
                            break;
                        case "BREADCRUMB":
                        case "DROPDOWN":
                        case "FORM-CONTROL":
                        case "LIST-BOX":
                            item.text = item.text || elItem.innerHTML;
                            break;
                    }
                }

                // Add the item
                items.push(item);

                // Remove the item
                elItem.remove();
            }
        });

        // Return nothing
        return items.length > 0 ? items : undefined;
    }

    // Converts the target component name to an element
    getElement(elSource: HTMLElement, componentName: string): HTMLElement {
        let elTarget: HTMLElement = null;

        // See if the target exists
        elSource.childNodes.forEach(el => {
            if (el.nodeName == componentName.toUpperCase()) {
                // Create the element
                elTarget = document.createElement("div");

                // Set the element
                while (el.firstChild) { elTarget.appendChild(el.firstChild); }

                // Render any custom elements
                new RenderComponents(elTarget);

                // Remove the element
                el.remove();
            }
        });

        // Return the target element
        return elTarget;
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

        // See if there is a sub-component
        switch (componentName) {
            case "BUTTON":
                // Set the spinner
                let spinner = this.getChildItems(el, "bs-spinner", componentName);
                if (spinner?.length > 0) { props.spinner = spinner[0]; }
                break;
        }

        // Set common properties
        switch (componentName) {
            // content
            case "ALERT":
            case "BADGE":
            case "COLLAPSE":
            case "ICON-LINK":
                props.content = this.createElement(el);
                break;
            // data
            case "DATA":
                // Try to parse the value
                try {
                    let data = JSON.parse(el.innerHTML.trim());
                    props.data = data;
                } catch { }
                break;
            // text
            case "BUTTON":
            case "BUTTON-GROUP":
            case "NAVBAR":
                props.text = (props.text || el.innerHTML)?.trim();
                break;
            // value
            case "INPUT-GROUP":
            case "NAVBAR-SEARCH-BOX":
                props.value = (props.value || el.innerHTML)?.trim();
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
    private render(propsOnly: boolean, targetSelf: boolean) {
        // Parse the elements
        this.getElements(targetSelf).forEach((el: HTMLElement) => {
            let componentName = el.nodeName.substring(3);

            // Get the component props
            let props = { ...this.getProps(el, componentName), el };

            // Generate the component
            switch (componentName) {
                case "ACCORDION":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.Accordion(props);
                    break;
                case "ALERT":
                    propsOnly ? null : this._component = Components.Alert(props);
                    break;
                case "BADGE":
                    propsOnly ? null : this._component = Components.Badge(props);
                    break;
                case "BREADCRUMB":
                    propsOnly ? null : this._component = Components.Breadcrumb(props);
                    break;
                case "BUTTON":
                    propsOnly ? null : this._component = Components.Button(props);
                    break;
                case "BUTTON-GROUP":
                    props.buttons = this.getChildItems(el, "bs-button", componentName);
                    propsOnly ? null : this._component = Components.ButtonGroup(props);
                    break;
                case "CARD":
                    props.body = this.getChildItems(el, "card-body", componentName);
                    props.header = this.getChildItems(el, "card-footer", componentName);
                    props.footer = this.getChildItems(el, "card-header", componentName);
                    propsOnly ? null : this._component = Components.Card(props);
                    break;
                case "CARD-GROUP":
                    props.cards = (new RenderComponents(el, true)).Props;
                    propsOnly ? null : this._component = Components.CardGroup(props);
                    break;
                case "CAROUSEL":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.Carousel(props);
                    break;
                case "CHECKBOX-GROUP":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.CheckboxGroup(props);
                    break;
                case "COLLAPSE":
                    propsOnly ? null : this._component = Components.Collapse(props);
                    break;
                case "DROPDOWN":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.Dropdown(props);
                    break;
                case "FORM":
                    let controls = [];
                    let rows = [];

                    // Parse the child elements
                    for (let i = 0; i < el.children.length; i++) {
                        let elChild = el.children[i] as HTMLElement;

                        switch (elChild.nodeName) {
                            // Append the control
                            case "BS-FORM-CONTROL":
                                controls.push((new RenderComponents(elChild, true, true)).Props[0]);
                                break;

                            // Append the row
                            case "ROW":
                                let columns = [];
                                let rowControls = (new RenderComponents(elChild, true)).Props;
                                if (rowControls?.length > 0) {
                                    // Append the control
                                    for (let i = 0; i < rowControls.length; i++) {
                                        columns.push({ control: rowControls[i] });
                                    }
                                }

                                // Append the row
                                rows.push({ columns });
                                break;

                            // Default
                            default:
                                // Add it to the appropriate property
                                // Move the custom html
                                if (rows.length > 0) {
                                    rows.push({
                                        columns: [{
                                            control: {
                                                onControlRendered: (ctrl) => { ctrl.el.appendChild(elChild); }
                                            }
                                        }]
                                    });
                                } else {
                                    controls.push({
                                        onControlRendered: (ctrl) => { ctrl.el.appendChild(elChild); }
                                    });
                                }
                                break;
                        }
                    }

                    // Set the rows
                    props.rows = rows.length > 0 ? rows : undefined;

                    // Set the controls
                    //props.controls = this.getChildItems(el, "bs-form-control", componentName);
                    props.controls = controls.length > 0 ? controls : undefined;

                    // Render the form
                    propsOnly ? null : this._component = Components.Form(props);
                    break;
                case "FORM-CONTROL":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.FormControl(props);
                    break;
                case "ICON-LINK":
                    propsOnly ? null : this._component = Components.IconLink(props);
                    break;
                case "INPUT-GROUP":
                    propsOnly ? null : this._component = Components.InputGroup(props);
                    break;
                case "LIST-BOX":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.ListBox(props);
                    break;
                case "LIST-GROUP":
                    props.items = this.getChildItems(el, "item", componentName);
                    propsOnly ? null : this._component = Components.ListGroup(props);
                    break;
                case "MODAL":
                    // Set the custom elements
                    props.body = this.getElement(el, "bs-modal-body");
                    props.footer = this.getElement(el, "bs-modal-footer");
                    props.header = this.getElement(el, "bs-modal-header");
                    props.title = this.getElement(el, "bs-modal-title");

                    // Render the modal
                    propsOnly ? null : this._component = Components.Modal(props);
                    break;
                case "NAV":
                    props.items = this.getChildItems(el, "nav-item", componentName);
                    propsOnly ? null : this._component = Components.Nav(props);
                    break;
                case "NAVBAR":
                    // Parse the child elements
                    for (let i = 0; i < el.children.length; i++) {
                        let elChild = el.children[i] as HTMLElement;

                        switch (elChild.nodeName) {
                            // Append the item
                            case "NAVBAR-ITEM":
                                let item = this.getProps(elChild, componentName);
                                item.items = this.getChildItems(elChild, "navbar-item", componentName);
                                props.items = props.items || [];
                                props.items.push(item);
                                break;

                            // Append the item
                            case "NAVBAR-ITEM-END":
                                let itemEnd = this.getProps(elChild, componentName);
                                itemEnd.itemsEnd = this.getChildItems(elChild, "navbar-item-end", componentName);
                                props.itemsEnd = props.itemsEnd || [];
                                props.itemsEnd.push(itemEnd);
                                break;

                            // Set the searchbox
                            case "NAVBAR-SEARCH-BOX":
                                props.searchBox = this.getProps(elChild, elChild.nodeName);
                                break;
                        }
                    }

                    // Render the navbar
                    propsOnly ? null : this._component = Components.Navbar(props);
                    break;
                case "OFFCANVAS":
                    props.body = this.createElement(el, false);
                    propsOnly ? null : this._component = Components.Offcanvas(props);
                    break;
                case "SPINNER":
                    propsOnly ? null : this._component = Components.Spinner(props);
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
            if (el.hasAttribute("id") && (componentName != "MODAL" && componentName != "OFFCANVAS")) { el.removeAttribute("id"); }

            // See if the parent exists
            if (el.parentElement) {
                // Replace the element
                el.parentElement.insertBefore(this._component.el, el);
                el.parentElement.classList.add("bs");
                el.remove();
            } else {
                // Append the component
                el.appendChild(this._component.el);
            }
        });
    }
}
export const render = (el) => { new RenderComponents(el); }