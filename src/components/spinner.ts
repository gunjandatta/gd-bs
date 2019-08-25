import { ISpinner, ISpinnerProps } from "../../@types/spinner";

/**
 * Spinner Types
 */
export enum SpinnerTypes {
    Danger = 1,
    Dark = 2,
    Info = 3,
    Light = 4,
    Primary = 5,
    Secondary = 6,
    Success = 7,
    Warning = 8
}

/**
 * Spinner
 * @param props The spinner properties.
 */
export const Spinner = (props: ISpinnerProps): ISpinner => {
    // Create the spinner
    let spinner: HTMLDivElement = null;

    // Create the spinner
    spinner = document.createElement("div");

    // Set the attributes
    spinner.setAttribute("role", "status");

    // Set the class names
    spinner.className = props.className || "";
    props.isGrowing ? spinner.classList.add("spinner-grow") : spinner.classList.add("spinner-border");
    props.isSmall ? (props.isGrowing ? spinner.classList.add("spinner-grow-sm") : spinner.classList.add("spinner-border-sm")) : null;

    // Read the type
    switch (props.type) {
        // Danger
        case SpinnerTypes.Danger:
            spinner.classList.add("text-danger");
            break;
        // Dark
        case SpinnerTypes.Dark:
            spinner.classList.add("text-dark");
            break;
        // Info
        case SpinnerTypes.Info:
            spinner.classList.add("text-info");
            break;
        // Light
        case SpinnerTypes.Light:
            spinner.classList.add("text-light");
            break;
        // Secondary
        case SpinnerTypes.Secondary:
            spinner.classList.add("text-secondary");
            break;
        // Success
        case SpinnerTypes.Success:
            spinner.classList.add("text-success");
            break;
        // Warning
        case SpinnerTypes.Warning:
            spinner.classList.add("text-warning");
            break;
        // Default - Primary
        default:
            spinner.classList.add("text-primary");
            break;
    }

    // Set the loading text
    if (props.text) {
        // Create the span
        let loadingText = document.createElement("span");
        loadingText.classList.add("sr-only");
        loadingText.innerHTML = props.text;

        // Append the element
        spinner.appendChild(loadingText);
    }

    // Create the element
    let el = document.createElement("div");
    el.appendChild(spinner);

    // See if we are rendering it to an element
    if (props.el) {
        // Ensure the class list exists and it's not the body element
        if (props.el.classList && props.el.tagName != "BODY") {
            // Set the bootstrap class
            props.el.classList.contains("bs") ? null : props.el.classList.add("bs");
        }

        // Append the elements
        while (el.children.length > 0) {
            props.el.appendChild(el.children[0]);
        }

        // Update the element
        el = props.el as any;
    } else {
        // Set the bootstrap class
        el.classList.add("bs");
    }

    // Return the spinner
    return {
        el: spinner
    };
}