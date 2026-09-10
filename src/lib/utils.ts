import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (price === 0) return "Бесплатно";
  return `${price.toLocaleString("ru-RU")} ₽`;
}

export function pluralVisit(n: number): string {
  const abs = Math.abs(n || 0);
  const a = abs % 10;
  const b = abs % 100;
  if (a === 1 && b !== 11) return "визит";
  if ([2, 3, 4].includes(a) && ![12, 13, 14].includes(b)) return "визита";
  return "визитов";
}
