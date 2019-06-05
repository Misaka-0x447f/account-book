import {AZ} from "@/utils/az";
import {isNull, isUndefined} from "lodash";
import {blobs, container} from "@/interfaces/db";
import {stringify} from "javascript-stringify";
import * as assert from "assert";
import {cache} from "@/utils/state";

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
  for (const v of blobs) {
    if (!(await az.doesBlobExist(container, v)).exists) {
      assert.notEqual(stringify(cache), undefined);
      await az.createBlockBlobFromText(container, v, stringify(cache) as string);
    }
  }
};

export const pull = async () => {
  if (isNull(az)) {
    throw new Error("az is not defined");
  }
  for (const i in cache) {
    if (cache.hasOwnProperty(i)) {
      // @ts-ignore
      cache[i] = JSON.parse(await az.getBlobToText(container, what));
    }
  }
};

export const push = async () => {
  if (isNull(az)) {
    throw new Error("az is not defined");
  }
  for (const i in cache) {
    if (cache.hasOwnProperty(i)) {
      // @ts-ignore
      const obj = stringify(cache[i]);
      if (isUndefined(obj)) {
        throw new Error("failed to stringify");
      }
      await az.createBlockBlobFromText(container, i, obj);
    }
  }
};
