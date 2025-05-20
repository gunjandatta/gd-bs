class BSElement extends HTMLElement {
    constructor() { super(); }
    connectedCallback() {
        // Wait for the children elements to render
        const observer = new MutationObserver(() => {
            setTimeout(() => { new GD.Components.CustomElement(this); });
            observer.disconnect();
        });
        observer.observe(this, { childList: true, subtree: true });
    }
}
customElements.define("bs-accordion", class Accordion extends BSElement { });
customElements.define("bs-alert", class Alert extends BSElement { });
customElements.define("bs-badge", class Badge extends BSElement { });
customElements.define("bs-breadcrumb", class Breadcrumb extends BSElement { });
customElements.define("bs-button", class Button extends BSElement { });
customElements.define("bs-button-group", class ButtonGroup extends BSElement { });
customElements.define("bs-collapse", class Collapse extends BSElement { });
customElements.define("bs-card", class Card extends BSElement { });
customElements.define("bs-card-group", class CardGroup extends BSElement { });
customElements.define("bs-carousel", class Carousel extends BSElement { });
customElements.define("bs-checkbox-group", class CheckboxGroup extends BSElement { });
customElements.define("bs-dropdown", class Dropdown extends BSElement { });
customElements.define("bs-form", class Form extends BSElement { });
customElements.define("bs-form-control", class FormControl extends BSElement { });
customElements.define("bs-icon-link", class IconLink extends BSElement { });
customElements.define("bs-input-group", class InputGroup extends BSElement { });
customElements.define("bs-list-box", class ListBox extends BSElement { });
customElements.define("bs-list-group", class ListGroup extends BSElement { });
customElements.define("bs-modal", class Modal extends BSElement { });
customElements.define("bs-nav", class Nav extends BSElement { });
customElements.define("bs-navbar", class Navbar extends BSElement { });
customElements.define("bs-offcanvas", class Offcanvas extends BSElement { });
customElements.define("bs-paging", class Paging extends BSElement { constructor() { super(); debugger; } });
customElements.define("bs-popover", class Popover extends BSElement { });
customElements.define("bs-progress", class Progress extends BSElement { });
customElements.define("bs-progress-group", class ProgressGroup extends BSElement { });
customElements.define("bs-spinner", class Spinner extends BSElement { });
customElements.define("bs-table", class Table extends BSElement { });
customElements.define("bs-toast", class Toast extends BSElement { });
customElements.define("bs-toolbar", class Toolbar extends BSElement { });
customElements.define("bs-tooltip", class Tooltip extends BSElement { });