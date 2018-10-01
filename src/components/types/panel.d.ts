import { IModal, IModalProps } from "./modal";

/**
 * Panel
 */
export const Panel: (props: IPanelProps) => IPanel;

/**
 * Panel Types
 */
export const PanelTypes: IPanelTypes;

/**
 * Panel
 */
export interface IPanel {
    /** The element. */
    el: Element;

    /** The modal. */
    modal: IModal;

    /** Hides the panel. */
    hide: () => void;

    /** Shows the panel. */
    show: () => void;
}

/**
 * Panel Properties
 */
export interface IPanelProps {
    className?: string;
    el?: Element | HTMLElement;
    modalProps?: IModalProps;
    type?: number;
}

/**
 * Panel Types
 */
export type IPanelTypes = {
    Small: number;
    Medium: number;
    Large: number;
    XLarge: number;
    Full: number;
}