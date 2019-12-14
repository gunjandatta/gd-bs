// Helper function to generate the icon element
export default (svg, height, width) => {
    // Get the icon element
    let elDiv = document.createElement("div");
    elDiv.innerHTML = svg;
    let icon = elDiv.firstChild as HTMLElement;
    if (icon) {
        // Set the height/width
        icon.style.height = height ? height : 32;
        icon.style.width = width ? width : 32;
    }

    // Return the icon
    return icon;
}