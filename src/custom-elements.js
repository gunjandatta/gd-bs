class BSElement extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        if (this.nodeName == "BS-PAGING") {
            setTimeout(() => { new GD.Components.CustomElement(this); });
        } else {
            // Wait for the children elements to render
            const observer = new MutationObserver(() => {
                setTimeout(() => { new GD.Components.CustomElement(this); });
                observer.disconnect();
            });
            observer.observe(this, { childList: true, subtree: true });
        }
    }
}

// Method to check if the element doesn't exist and create the custom element
function defineElement(bsName, bsElement) {
    // Ensure it hasn't been created
    if (customElements.get(bsName)) { return; }

    // Define the custom element
    customElements.define(bsName, bsElement);
}

defineElement("bs-accordion", class Accordion extends BSElement { });
defineElement("bs-alert", class Alert extends BSElement { });
defineElement("bs-badge", class Badge extends BSElement { });
defineElement("bs-breadcrumb", class Breadcrumb extends BSElement { });
defineElement("bs-button", class Button extends BSElement { });
defineElement("bs-button-group", class ButtonGroup extends BSElement { });
defineElement("bs-collapse", class Collapse extends BSElement { });
defineElement("bs-card", class Card extends BSElement { });
defineElement("bs-card-group", class CardGroup extends BSElement { });
defineElement("bs-carousel", class Carousel extends BSElement { });
defineElement("bs-checkbox-group", class CheckboxGroup extends BSElement { });
defineElement("bs-dropdown", class Dropdown extends BSElement { });
defineElement("bs-form", class Form extends BSElement { });
defineElement("bs-form-control", class FormControl extends BSElement { });
defineElement("bs-icon-link", class IconLink extends BSElement { });
defineElement("bs-input-group", class InputGroup extends BSElement { });
defineElement("bs-list-box", class ListBox extends BSElement { });
defineElement("bs-list-group", class ListGroup extends BSElement { });
defineElement("bs-modal", class Modal extends BSElement { });
defineElement("bs-nav", class Nav extends BSElement { });
defineElement("bs-navbar", class Navbar extends BSElement { });
defineElement("bs-offcanvas", class Offcanvas extends BSElement { });
defineElement("bs-paging", class Paging extends BSElement { });
defineElement("bs-popover", class Popover extends BSElement { });
defineElement("bs-progress", class Progress extends BSElement { });
defineElement("bs-progress-group", class ProgressGroup extends BSElement { });
defineElement("bs-spinner", class Spinner extends BSElement { });
defineElement("bs-table", class Table extends BSElement { });
defineElement("bs-toast", class Toast extends BSElement { });
defineElement("bs-toolbar", class Toolbar extends BSElement { });
defineElement("bs-tooltip", class Tooltip extends BSElement { });