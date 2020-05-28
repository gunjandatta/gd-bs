"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hide = function (el) {
    // Ensure the alert is hidden
    if (el.classList.contains("d-none")) {
        return;
    }
    // Hide the alert
    el.classList.add("d-none");
};
exports.configureParent = function (component, parent) {
    // Create the element
    var el = document.createElement("div");
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
    }
    else {
        // Set the bootstrap class
        el.classList.add("bs");
    }
    // Return the parent element
    return el;
};
exports.show = function (el) {
    // Ensure the alert is visible
    if (el.classList.contains("d-none")) {
        // Show the alert
        el.classList.remove("d-none");
    }
};
