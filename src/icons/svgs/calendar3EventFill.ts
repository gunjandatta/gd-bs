import { generateIcon } from "../generate";
export function calendar3EventFill(height?:number, width?:number, className?:string) {
  return generateIcon(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-calendar3-event-fill' viewBox='0 0 16 16'>   <path d='M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3h16zm-3-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z'/> </svg>`, height, width, className);
}