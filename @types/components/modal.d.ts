/**
 * <style>
 *     #bsModalDemo, #wcModalDemo {
 *         margin-top: 100px;
 *         margin-left: 0px;
 *     }
 * </style>
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Create the modal
 *         var modal = $REST.Components.Modal({
 *             el: document.querySelector("#demo"),
 *             id: "bsModalDemo",
 *             title: "Modal Demo",
 *             body: "This is the body of the modal.",
 *             button: { text: "Open Modal" }
 *         });
 *     });
 * </script>
 */

/**
 * ### Modal
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the modal
 * let el = document.querySelector("#modalDemo");
 * let modal = Components.Modal({
 *     el: el,
 *     id: "bsModalDemo",
 *     title: "Modal Demo",
 *     body: "This is the body of the modal.",
 *     button: {
 *         text: "Open Modal",
 *         toggle: "modal",
 *         target: "#bsModalDemo"
 *     }
 * });
 * ```
 */
export const Modal: (props: IModalProps) => IModal;

import { IButtonProps } from "./button";

/**
 * Modal
 */
export interface IModal {
    /** Destroys an element’s modal. */
    dispose: () => void;

    /** The element. */
    el: Element,

    /** Manually readjust the modal’s position if the height of a modal changes while it is open (i.e. in case a scrollbar appears). */
    handleUpdate: () => void;

    /** Manually hides a modal. */
    hide: () => void;

    /** Updates the title. */
    setTitle: (title: string) => void;

    /** Manually opens a modal. */
    show: () => void;

    /** Manually toggles a modal. */
    toggle: () => void;
}

/**
 * Modal Options
 */
export interface IModalOptions {
    /** Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. */
    backdrop: boolean | string;

    /** Puts the focus on the modal when initialized. */
    focus: boolean;

    /** Closes the modal when escape key is pressed. */
    keyboard: boolean;

    /** Shows the modal when initialized. */
    show: boolean;
}

/**
 * Modal Properties
 */
export interface IModalProps {
    body?: string | Element;
    className?: string;
    el?: Element | HTMLElement;
    disableFade?: boolean;
    footer?: string | Element;
    hideCloseButton?: boolean;
    id?: string;
    isCentered?: boolean;
    isLarge?: boolean;
    isSmall?: boolean;
    isStatic?: boolean;
    onClose?: (el: HTMLDivElement) => void;
    onRenderBody?: (el: HTMLDivElement) => void;
    onRenderFooter?: (el: HTMLDivElement) => void;
    title?: string;
}