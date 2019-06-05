import {state} from "@/utils/state";
import {Database} from "@/interfaces/db";
import {push} from "@/utils/db";

export const write = async (type: keyof Database, key: string, label: string) => {
  state.cache[type].category[key] = {label};
  await push();
};

export const read = (type: keyof Database, key: string) => {
  return state.cache[type].category[key];
};

export const readAll = (type: keyof Database) => {
  return state.cache[type].category;
};
