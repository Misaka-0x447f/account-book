import {map} from "lodash";
import {getUnixTimestamp} from "@/utils/lang";
import {Database, Entry} from "@/interfaces/db";
import {noEmptyString, noUndefined, onlyNumeric} from "@/utils/assert";
import {readAll} from "@/utils/cat";
import {state} from "@/utils/state";
import {push} from "@/utils/db";

export const write = async (type: keyof Database, label: string, value: string, category: string, note?: string) => {
  noUndefined(readAll(type)[category]);
  noEmptyString(label, value);
  onlyNumeric(value);
  state.cache[type].entry.push({
    label,
    value: parseFloat(value),
    timestamp: getUnixTimestamp(),
    note,
    category
  });
  await push();
};

export const readLast30 = (type: keyof Database) => {
  const o = state.cache[type].entry;
  const s = Math.max(o.length - 30, 0);
  return {
    obj: o.slice(s, o.length),
    startAt: s
  };
};

export const readByLabel = (type: keyof Database, label: string) => {
  const c: Entry[] = [];
  map(state.cache[type].entry, (v: Entry, i: number) => {
    if (v.label === label) {
      c[i] = v;
    }
  });
  return c;
};

export const remove = async (type: keyof typeof state.cache, id: number) => {
  state.cache[type].entry.splice(id, 1);
  await push();
};
