// Helper function to generate the icon element
export default (svg: string, height: number = 32, width: number = 32) => {
    // Get the icon element
    let elDiv = document.createElement("div");
    elDiv.innerHTML = svg;
    let icon = elDiv.firstChild as HTMLElement;
    if (icon) {
        // Set the height/width
        icon.setAttribute("height", (height ? height : 32).toString());
        icon.setAttribute("width", (width ? width : 32).toString());
    }

    // Return the icon
    return icon;
}