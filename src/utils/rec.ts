import {cloneDeep, findLastIndex, map} from "lodash";
import {getUnixTimestamp, timestampToTime} from "@/utils/lang";
import {Database, Entry} from "@/interfaces/db";
import {noEmptyString, noUndefined, onlyNumeric} from "@/utils/assert";
import {readAll} from "@/utils/cat";
import {state} from "@/utils/state";
import {push} from "@/utils/db";
import Fuse from "fuse.js";

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
  const c = [];
  const o = state.cache[type].entry as Entry[];
  const s = Math.max(o.length - 30, 0);
  for (let i = o.length - 1; i >= s; i--) {
    c[i] = cloneDeep(o[i]);
    // @ts-ignore
    c[i].timestamp = timestampToTime(c[i].timestamp);
  }
  return c;
};

export const search = (type: keyof Database, content: string) => {
  const o = state.cache[type].entry;
  const c: Entry[] = [];
  const re = new Fuse(o, {keys: ["label", "note", "value"]}).search(content);
  map(re, (v: Entry) => {
    c[findLastIndex(o, (k) => k === v)] = v;
  });
  return c;
};

export const remove = async (type: keyof typeof state.cache, id: number) => {
  state.cache[type].entry.splice(id, 1);
  await push();
};
