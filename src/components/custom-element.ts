declare const GD;
export class CustomElement {

    constructor(el: HTMLElement) {
        let componentName = el.nodeName.substring(3);

        // Get the component props
        let props = { ...this.getProps(el, componentName), el };

        switch (componentName) {
            case "ACCORDION":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.Accordion(props);
                break;
            case "ALERT":
                GD.Components.Alert(props);
                break;
            case "BADGE":
                GD.Components.Badge(props);
                break;
            case "BREADCRUMB":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.Breadcrumb(props);
                break;
            case "BUTTON":
                GD.Components.Button(props);
                break;
            case "BUTTON-GROUP":
                props.buttons = this.getChildItems(el, "bs-button", "BUTTON");
                GD.Components.ButtonGroup(props);
                break;
            case "CARD":
                props.body = this.getChildItems(el, "card-body", componentName);
                props.header = this.getChildItems(el, "card-footer", componentName);
                props.footer = this.getChildItems(el, "card-header", componentName);
                GD.Components.Card(props);
                break;
            case "CARD-GROUP":
                props.cards = this.getChildItems(el, "bs-card", "CARD");
                GD.Components.CardGroup(props);
                break;
            case "CAROUSEL":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.Carousel(props);
                break;
            case "CHECKBOX-GROUP":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.CheckboxGroup(props);
                break;
            case "COLLAPSE":
                GD.Components.Collapse(props);
                break;
            case "DROPDOWN":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.Dropdown(props);
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
                            //controls.push((new RenderComponents(elChild, true, true)).Props[0]);
                            break;

                        // Append the row
                        case "ROW":
                            let columns = [];
                            /*
                            let rowControls = (new RenderComponents(elChild, true)).Props;
                            if (rowControls?.length > 0) {
                                // Append the control
                                for (let i = 0; i < rowControls.length; i++) {
                                    columns.push({ control: rowControls[i] });
                                }
                            }
                            */

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
                GD.Components.Form(props);
                break;
            case "FORM-CONTROL":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.FormControl(props);
                break;
            case "ICON-LINK":
                GD.Components.IconLink(props);
                break;
            case "INPUT-GROUP":
                // Get the prepended label
                let prependedLabel = el.querySelector("prepended-label");
                if (prependedLabel) {
                    // Set the property
                    props.prependedLabel = prependedLabel.innerHTML.trim();
                }

                // Set the properties
                props.appendedButtons = this.getChildItems(el, "appended-button", "APPENDED-BUTTON");
                props.prependedButtons = this.getChildItems(el, "prepended-button", "PREPENDED-BUTTON");
                GD.Components.InputGroup(props);
                break;
            case "LIST-BOX":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.ListBox(props);
                break;
            case "LIST-GROUP":
                props.items = this.getChildItems(el, "item", componentName);
                GD.Components.ListGroup(props);
                break;
            case "MODAL":
                // Set the custom elements
                props.body = this.getElement(el, "bs-modal-body");
                props.footer = this.getElement(el, "bs-modal-footer");
                props.header = this.getElement(el, "bs-modal-header");
                props.title = this.getElement(el, "bs-modal-title");

                // Render the modal
                GD.Components.Modal(props);
                break;
            case "NAV":
                props.items = this.getChildItems(el, "nav-item", componentName);
                GD.Components.Nav(props);
                break;
            case "NAVBAR":
                // Parse the child elements
                for (let i = 0; i < el.children.length; i++) {
                    let elChild = el.children[i] as HTMLElement;

                    switch (elChild.nodeName) {
                        // Append the item
                        case "NAVBAR-ITEM":
                            let item = this.getProps(elChild, elChild.nodeName);
                            item.items = this.getChildItems(elChild, "navbar-item", componentName);
                            props.items = props.items || [];
                            props.items.push(item);
                            break;

                        // Append the item
                        case "NAVBAR-ITEM-END":
                            let itemEnd = this.getProps(elChild, elChild.nodeName);
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
                GD.Components.Navbar(props);
                break;
            case "OFFCANVAS":
                props.body = this.createElement(el, false);
                GD.Components.Offcanvas(props);
                break;
            case "PAGING":
                GD.Components.Pagination(props);
                break;
            case "POPOVER":
                props.btnProps = this.getChildItems(el, "btn-props", componentName);
                props.options = props.options || {};
                props.options["content"] = this.createElement(el, false);
                GD.Components.Popover(props);
                break;
            case "PROGRESS":
                GD.Components.Progress(props);
                break;
            case "PROGRESS-GROUP":
                props.progressbars = this.getChildItems(el, "bs-progress", componentName);
                GD.Components.ProgressGroup(props);
                break;
            case "SPINNER":
                GD.Components.Spinner(props);
                break;
            case "TABLE":
                // Set the rows
                try {
                    if (props.rows == null) {
                        let elRows = el.querySelector("bs-rows");
                        if (elRows) {
                            // Set the rows
                            props.rows = JSON.parse(elRows.innerHTML);
                            el.removeChild(elRows);
                        }
                    }
                } catch { }

                // Set the properties
                props.columns = this.getChildItems(el, "bs-col", componentName);
                GD.Components.Table(props);
                break;
            case "TOAST":
                props.body = this.createElement(el, false);
                GD.Components.Toast(props);
                break;
            case "TOOLBAR":
                props.items = this.getChildItems(el, "toolbar-item", componentName);
                GD.Components.Toolbar(props);
                break;
            case "TOOLTIP":
                props.btnProps = this.getChildItems(el, "btn-props", componentName);
                props.content = props.content || this.createElement(el, false);
                GD.Components.Tooltip(props);
                break;
            // Do nothing
            default:
                return;
        }
    }

    // Creates an element and appends the children to it
    createElement(elSource: HTMLElement, removeFl: boolean = true): HTMLElement {
        let elTarget = document.createElement("div");

        // See if the target exists
        while (elSource.firstChild) {
            elTarget.appendChild(elSource.firstChild);
        }

        // Render any custom elements
        //new RenderComponents(elTarget);

        // Remove the element
        removeFl ? elSource.remove() : null;

        // Return the target element
        return elTarget.childNodes.length > 0 ? elTarget : null;
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
                        case "APPENDED-BUTTON":
                        case "BTN-PROPS":
                        case "CARD-ACTION":
                        case "PREPENDED-BUTTON":
                            item.text = (item.text || elItem.innerHTML)?.trim();
                            break;
                        case "BS-CARD":
                            item.body = this.getChildItems(elItem, "card-body", componentName);
                            item.header = this.getChildItems(elItem, "card-footer", componentName);
                            item.footer = this.getChildItems(elItem, "card-header", componentName);
                            break;
                        case "BS-COL":
                            item.title = (item.title || elItem.innerHTML)?.trim();
                            break;
                        case "CARD-BODY":
                            item.actions = this.getChildItems(elItem, "card-action", elItem.nodeName);
                            break;
                        case "NAVBAR-ITEM":
                            item.items = this.getChildItems(elItem, "navbar-item", componentName);
                            item.text = (item.text || elItem.innerHTML)?.trim();
                            break;
                        case "NAVBAR-ITEM-END":
                            item.items = this.getChildItems(elItem, "navbar-item-end", componentName);
                            item.text = (item.text || elItem.innerHTML)?.trim();
                            break;
                        case "TOOLBAR-ITEM":
                            item.buttons = this.getChildItems(elItem, "bs-button", "BUTTON");
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
                        // tab content
                        case "NAV":
                            item.tabContent = item.tabContent || this.createElement(elItem);
                            break;
                        // text
                        case "CARD-BODY":
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

        // See if items exist
        if (items.length > 0) {
            switch (propName) {
                case "btn-props":
                    return items[0];
                default:
                    return items;
            }
        }

        // Return nothing
        return undefined;
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

                // Remove the element
                el.remove();
            }
        });

        // Return the target element
        return elTarget;
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
                        // See if it's JSON
                        let jsonObj = JSON.parse(value);
                        value = jsonObj;
                    } catch {
                        try {
                            // See if it's a reference
                            let elTarget = document.querySelector(value);
                            if (elTarget) {
                                value = elTarget;
                            }
                        } catch { }
                    }
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
        let clearElementFl = false;
        switch (componentName) {
            // content
            case "ALERT":
            case "BADGE":
            case "COLLAPSE":
            case "ICON-LINK":
                props.content = this.createElement(el, false);
                break;
            // data
            case "DATA":
                // Try to parse the value
                try {
                    let data = JSON.parse(el.innerHTML.trim());
                    props.data = data;
                    clearElementFl = true;
                } catch { }
                break;
            // label
            case "PROGRESS":
                clearElementFl = props.label ? false : true;
                props.label = (props.label || el.innerHTML)?.trim();
                break;
            // text
            case "BUTTON":
            case "NAVBAR-ITEM":
            case "NAVBAR-ITEM-END":
                clearElementFl = props.text ? false : true;
                props.text = (props.text || el.innerHTML)?.trim();
                break;
            // value
            case "INPUT-GROUP":
            case "NAVBAR-SEARCH-BOX":
                // Ensure the value exists
                if (typeof (props.value) != "undefined") {
                    props.value = typeof (props.value) === "string" ? props.value : props.value;
                } else {
                    clearElementFl = true;
                    props.value = el.innerHTML.trim();
                }
                break;
        }

        // Clear the element
        if (clearElementFl) {
            while (el.firstChild) { el.removeChild(el.firstChild); }
        }

        // Return the properties
        return props;
    }
}

