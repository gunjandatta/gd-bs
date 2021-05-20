export const appendContent = (elParent: Element, content: string | Element | Function) => {
    // Return if the parent or content doesn't exist
    if (elParent == null || content == null) { return; }

    // See if this is a string
    if (typeof (content) === "string" || typeof (content) === "number") {
        // Set the html
        elParent.innerHTML = content;
    } else {
        // Append the content
        elParent.appendChild(typeof (content) === "function" ? content() : content);
    }
}

export const hide = (el: HTMLElement) => {
    // Ensure the alert is hidden
    if (el.classList.contains("d-none")) { return; }

    // Hide the alert
    el.classList.add("d-none");
}

export const configureParent = (component: Element, parent: Element): Element => {
    // Create the element
    let el: Element = document.createElement("div");
    el.appendChild(component);

    // See if the parent element exists
    if (parent) {
        // Ensure the class list exists and it's not the body element
        if (parent.classList && parent.tagName != "BODY") {
            // Set the bootstrap class
            parent.classList.contains("bs") ? null : parent.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            parent.appendChild(el.children[0]);
        }

        // Update the element
        el = parent;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the parent element
    return el;
}

export const setClassNames = (el: HTMLElement, className = "") => {
    // Set the class names
    let classNames = className.split(' ');
    for (let i = 0; i < classNames.length; i++) {
        // Ensure the class name exists
        let className = classNames[i];
        if (className) {
            // Add the class
            el.classList.add(className);
        }
    }
}

export const show = (el: HTMLElement) => {
    // Ensure the alert is visible
    if (el.classList.contains("d-none")) {
        // Show the alert
        el.classList.remove("d-none");
    }
}