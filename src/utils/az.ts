// @ts-ignore
import azure from "@/lib/azure-storage/index.js";

// official reference
// http://azure.github.io/azure-storage-node/

const entityGenWorker = azure.TableUtilities.entityGenerator;

const entityGenSmartWorker = (thing: any) => {
  if (typeof thing === "number") {
    if (parseInt(thing.toString(), 10) !== thing) {
      return entityGenWorker.Double(thing);
    } else if (Math.abs(thing) < 2147483647) {
      return entityGenWorker.Int32(thing);
    } else if (Math.abs(thing) < 9223372036854775807) {
      return entityGenWorker.Int64(thing);
    } else {
      throw new Error("Too large number");
    }
  } else if (typeof thing === "string") {
    return entityGenWorker.String(thing);
  } else if (typeof thing === "boolean") {
    return entityGenWorker.Boolean(thing);
  } else if (thing instanceof Date) {
    return entityGenWorker.DateTime(thing);
  } else {
    throw new Error("Unable to convert this");
  }
};

export class AZ {
  private profile: null | object = null;

  constructor(connectString: string) {
    this.profile = azure.createTableService(connectString);
  }

  public async createTableIfNotExist(tableName: string): Promise<{
    TableName: string,
    created: boolean,
    isSuccessful: boolean,
    statusCode: number
  }> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.profile.createTableIfNotExists(tableName, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }

  public async deleteTableIfExists(tableName: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.profile.deleteTableIfExists(tableName, (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }
}
