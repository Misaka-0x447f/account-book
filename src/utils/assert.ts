import {isUndefined} from "lodash";
import {AssertionError} from "assert";
import {isNumeric} from "@/utils/lang";

export const noUndefined = <T>(v: T) => {
  if (isUndefined(v)) {
    throw new AssertionError({message: "Unexpected undefined"});
  }
  return v as NonNullable<T>;
};

export const noEmptyString = (...o: Array<string | null | undefined>) => {
  for (const v of o) {
    if (["", null, undefined].includes(v)) {
      throw new AssertionError({message: "Unexpected empty string"});
    }
  }
};

export const onlyNumeric = (o: any) => {
  if (!isNumeric(o)) {
    throw new AssertionError({message: "Unexpected string, expect number"});
  }
};
