import {cache} from "@/utils/state";
import {map} from "lodash";
import {getUnixTimestamp} from "@/utils/lang";
import {Entry} from "@/interfaces/db";

export const write = (type: keyof typeof cache, label: string, value: number, category: string, note?: string) => {
  cache[type].entry.push({
    label,
    value,
    timestamp: getUnixTimestamp(),
    note,
    category
  });
};

export const readLast30 = (type: keyof typeof cache) => {
  const o = cache[type].entry;
  const s = Math.max(o.length - 30, 0);
  return {
    obj: o.slice(s, o.length),
    startAt: s
  };
};

export const readByLabel = (type: keyof typeof cache, label: string) => {
  const c: Entry[] = [];
  map(cache[type].entry, (v: Entry, i: number) => {
    if (v.label === label) {
      c[i] = v;
    }
  });
  return c;
};

export const remove = (type: keyof typeof cache, id: number) => {
  cache[type].entry.splice(id, 1);
};
