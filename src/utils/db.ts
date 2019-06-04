import {AZ} from "@/utils/az";

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
