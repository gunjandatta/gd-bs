import { generateIcon } from "../generate";
export function hexagonFill(height?:number, width?:number, className?:string) {
  return generateIcon(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-hexagon-fill' viewBox='0 0 16 16'>   <path fill-rule='evenodd' d='M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z'/> </svg>`, height, width, className);
}