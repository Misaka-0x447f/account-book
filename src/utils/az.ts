// @ts-ignore
import azure from "@/lib/azure-storage/index.js";

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
