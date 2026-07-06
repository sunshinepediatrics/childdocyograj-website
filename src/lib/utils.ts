import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://yourchilddoc.com";

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}
