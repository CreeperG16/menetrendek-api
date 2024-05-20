import type { NetworkTypes } from "./types/network-types";

export function padNum(num: number, length: number) {
  return num.toString().padStart(length, "0");
}

export function formatDate(date: Date) {
  return `${date.getFullYear()}-${padNum(date.getMonth() + 1, 2)}-${padNum(date.getDate(), 2)}`;
}

export const NETWORKS = [1, 2, 3, 10, 11, 12, 13, 14, 24, 25, 26] as NetworkTypes[];

export function groupArrayByField<T>(objects: T[], field: keyof T): T[][] {
  const groups = new Array<T[]>();
  
  for (const obj of objects) {
    const val = obj[field];
    const group = groups.find(g => g[0][field] === val);
    if (group) group.push(obj);
    else groups.push([obj]);
  }

  return groups;
}

export function deepEqual(obj1: {[key: string]: any}, obj2: {[key: string]: any}): boolean {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!deepEqual(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}
