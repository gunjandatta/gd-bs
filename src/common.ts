export const hide = (el: HTMLElement) => {
    // Ensure the alert is hidden
    if (el.classList.contains("d-none")) { return; }

    // Hide the alert
    el.classList.add("d-none");
}

export const show = (el: HTMLElement) => {
    // Ensure the alert is visible
    if (el.classList.contains("d-none")) {
        // Show the alert
        el.classList.remove("d-none");
    }
}