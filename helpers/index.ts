export * from "./address";
export * from "./contact";
export * from "./navigation";

export const removeArrayDuplicates = <T>(arr: T[]): T[] =>
  Array.from(new Set(arr));

export const alphanumericSorter = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
