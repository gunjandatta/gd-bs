/**
 * <div id="demo"></div>
 * <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
 * <script type="text/javascript">
 *     // Wait for the window to be loaded
 *     window.addEventListener("load", function() {
 *         // Render the card group
 *         $REST.Components.CardGroup({
 *             el: document.querySelector("#demo"),
 *             cards: [
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 1",
 *                             subTitle: "SubTitle 1",
 *                             text: "This is the first card."
 *                         }
 *                     ]
 *                 },
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 2",
 *                             subTitle: "SubTitle 2",
 *                             text: "This is the second card."
 *                         }
 *                     ]
 *                 },
 *                 {
 *                     body: [
 *                         {
 *                             title: "Card 3",
 *                             subTitle: "SubTitle 3",
 *                             text: "This is the third card."
 *                         }
 *                     ]
 *                 }
 *             ]
 *         });
 *     });
 * </script>
 */

/**
 * ### Card Group
 * 
 * ```ts
 * import { Components } from "gd-sprest-bs";
 * 
 * // Create the cardGroup
 * let el = document.querySelector("#cardGroup");
 * let cardGroup = Components.CardGroup({
 *     el: el,
 *     cards: [
 *         {
 *             body: [
 *                 {
 *                     title: "Card 1",
 *                     subTitle: "SubTitle 1",
 *                     text: "This is the first card."
 *                 }
 *             ]
 *         },
 *         {
 *             body: [
 *                 {
 *                     title: "Card 2",
 *                     subTitle: "SubTitle 2",
 *                     text: "This is the second card."
 *                 }
 *             ]
 *         },
 *         {
 *             body: [
 *                 {
 *                     title: "Card 3",
 *                     subTitle: "SubTitle 3",
 *                     text: "This is the third card."
 *                 }
 *             ]
 *         }
 *     ]
 * });
 * ```
 */
export const CardGroup: (props: ICardGroupProps, template?: string, cardTemplate?: string) => ICardGroup;

import { IBaseProps } from "../types";
import { ICardProps } from "../card/types";

/**
 * Card Group
 */
export interface ICardGroup {
    /** The element. */
    el: HTMLElement;

    /** Hides the card group. */
    hide: () => void;

    /** Shows the card group. */
    show: () => void;
}

/**
 * Card Group Properties
 */
export interface ICardGroupProps extends IBaseProps<ICardGroup> {
    cards?: Array<ICardProps>;
    colSize?: number | string;
    onCardRender?: (el?: HTMLElement, props?: ICardProps) => void;
    onColRender?: (el?: HTMLElement, props?: ICardProps) => void;
    onRender?: (el?: HTMLElement, props?: ICardGroupProps) => void;
}