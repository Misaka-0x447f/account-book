import {AZ} from "@/utils/az";
import {isNull} from "lodash";
import {container, Database} from "@/interfaces/db";
import {state} from "@/utils/state";

export let az: null | AZ = null;

export const config = (connectString: string) => {
  az = new AZ(connectString);
};

export const validate = async (connectString: string) => {
  const connect = new AZ(connectString);
  const res = await connect.createContainerIfNotExists("rwtestfordriver");
  if (res.created) {
    await connect.deleteContainerIfExists("rwtestfordriver");
  }
};

export const initialize = async () => {
  if (isNull(az)) {
    throw new Error("az is not defined");
  }
  await az.createContainerIfNotExists(container);
  if (!(await az.doesBlobExist(container, "db")).exists) {
    state.cache = {asset: {entry: [], category: {}}, consumable: {entry: [], category: {}}} as Database;
    await push();
  }
};

export const pull = async () => {
  if (isNull(az)) {
    throw new Error("az is not defined");
  }
  state.cache = JSON.parse(await az.getBlobToText(container, "db"));
};

export const push = async () => {
  if (isNull(az)) {
    throw new Error("az is not defined");
  }
  // @ts-ignore
  const obj = JSON.stringify(state.cache);
  await az.createBlockBlobFromText(container, "db", obj);
};
