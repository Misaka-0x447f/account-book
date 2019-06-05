import {state} from "@/utils/state";
import {Database, Entry} from "@/interfaces/db";
import {push} from "@/utils/db";
import {map} from "lodash";

export const write = async (type: keyof Database, key: string, label: string) => {
  if (label === undefined) {
    console.log(type);
    map(state.cache[type].entry, (v: Entry) => {
      if (v.category === key) {
        v.category = undefined;
      }
    });
  }
  state.cache[type].category[key] = label;
  await push();
};

export const read = (type: keyof Database, key: string) => {
  return state.cache[type].category[key];
};

export const readAll = (type: keyof Database) => {
  return state.cache[type].category;
};
