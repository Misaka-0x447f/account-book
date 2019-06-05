import {cache} from "@/utils/state";

export const write = (type: keyof typeof cache, key: string, label: string) => {
  cache[type].category[key] = {label};
};

export const read = (type: keyof typeof cache, key: string) => {
  return cache[type].category[key];
};
