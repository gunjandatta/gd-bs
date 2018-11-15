import { IButtonProps } from "./button";
import { ICollapseOptions } from "./collapse";

/**
 * Accordion
 */
export const Accordion: (props: IAccordionProps) => IAccordion;

/**
 * Accordion
 */
export interface IAccordion {
    /** The element. */
    el: Element;
}

/**
 * Accordion Item
 */
export interface IAccordionItem {
    btnProps?: IButtonProps;
    data?: any;
    content?: string;
    onClick?: (el?: HTMLElement, item?: IAccordionItem) => void;
    onRender?: (el?: HTMLElement, item?: IAccordionItem) => void;
    showFl?: boolean;
}

/**
 * Accordion Options
 */
export interface IAccordionOptions extends ICollapseOptions { }

/**
 * Accordion Properties
 */
export interface IAccordionProps {
    className?: string;
    el?: Element | HTMLElement;
    id?: string;
    items?: Array<IAccordionItem>;
    options?: IAccordionOptions;
}