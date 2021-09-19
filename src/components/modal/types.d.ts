/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Modal elements should be added to the body
 *         var elModal = document.querySelector("#modal-demo");
 *         if(elModal === null) {
 *              elModal = document.createElement("div");
 *              elModal.id = "modal-demo";
 *              document.body.appendChild(elModal);
 *         }
 * 
 *         // Create the modal
 *         var modal = $REST.Components.Modal({
 *             el: elModal,
 *             id: "modalDemo",
 *             title: "Modal Demo",
 *             type: $REST.Components.ModalTypes.Small,
 *             body: "This is the body of the modal."
 *         });
 * 
 *         // Create the button
 *         $REST.Components.Button({
 *             el: document.querySelector("#demo"),
 *             text: "Show Modal",
 *             toggleObj: modal,
 *             type: $REST.Components.ButtonTypes.OutlinePrimary
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
 * // Modal elements should be added to the body
 * var elModal = document.querySelector("#modal-demo");
 * if(elModal === null) {
 *      elModal = document.createElement("div");
 *      elModal.id = "modal-demo";
 *      document.body.appendChild(elModal);
 * }
 * 
 * // Create the modal
 * let modal = Components.Modal({
 *     el: el,
 *     id: "modalDemo",
 *     title: "Modal Demo",
 *     type: Components.ModalTypes.Small,
 *     body: "This is the body of the modal."
 * });
 * 
 * // Create the button
 * Components.Button({
 *     el: document.querySelector("#modalDemo"),
 *     text: "Show Modal",
 *     toggleObj: modal,
 *     type: Components.ButtonTypes.OutlinePrimary
 * });
 * ```
 */
export const Modal: (props: IModalProps, template?: string) => IModal;

/**
 * Modal Types
 */
export const ModalTypes: IModalTypes;

import { IBaseProps } from "../types";

/**
 * Modal
 */
export interface IModal {
    /** The element. */
    el: Element,

    /** Manually hides a modal. */
    hide: () => void;

    /** Returns true if the modal is visible. */
    isVisible: boolean;

    /** Updates the auto close flag. */
    setAutoClose: (value: boolean) => void;

    /** Updates the title. */
    setTitle: (title: string) => void;

    /** Updates the type. */
    setType: (modalType: number) => void;

    /** Manually opens a modal. */
    show: () => void;

    /** Manually toggles a modal. */
    toggle: () => void;
}

/**
 * Modal Options
 */
export interface IModalOptions {
    /** True to automatically close the modal when clicking outside of it. */
    autoClose?: boolean;

    /** True to enable the backdrop when the modal is visible. */
    backdrop?: boolean;

    /** Puts the focus on the modal when initialized. */
    focus?: boolean;

    /** Closes the modal when escape key is pressed. */
    keyboard?: boolean;

    /** True to toggle the modal on creation. */
    visible?: boolean;
}

/**
 * Modal Properties
 */
export interface IModalProps<T = Element> extends IBaseProps<IModal> {
    body?: string | T;
    disableFade?: boolean;
    footer?: string | T;
    hideCloseButton?: boolean;
    id?: string;
    isCentered?: boolean;
    onClose?: (el: HTMLDivElement) => void;
    onRenderBody?: (el: HTMLDivElement) => void;
    onRenderHeader?: (el: HTMLDivElement) => void;
    onRenderFooter?: (el: HTMLDivElement) => void;
    options?: IModalOptions;
    title?: string;
    type?: number;
}

/**
 * Checkbox Group Types
 */
export type IModalTypes = {
    Small: number;
    Medium: number;
    Large: number;
    XLarge: number;
    Full: number;
    FullSmall: number;
    FullMedium: number;
    FullLarge: number;
    FullXLarge: number;
}