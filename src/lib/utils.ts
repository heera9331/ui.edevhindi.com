/**
 * @author Heera Singh Lodhi <heera9331@gmail.com>
 * @date
 * @description
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @param row
 * @returns string
 */
export const sanitizeTextField = (row: string): string => {
  // Remove any non-alphanumeric characters except spaces and convert multiple spaces to a single space
  return row
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

/**
 * @param title
 * @returns string
 */
export const titleToSlug = (title: string): string => {
  title = sanitizeTextField(title);
  title = title.toLowerCase();
  let slug = title.replaceAll(" ", "-");
  return slug;
};

/**
 * @param slug
 * @returns string
 */
export const slugToSlug = (slug: string): string => {
  return slug.replaceAll(" ", "-");
};
