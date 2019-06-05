// @ts-ignore
import azure from "@/lib/azure-storage/index.js";

export class AZ {

  private readonly profile: typeof azure;

  constructor(connectString: string) {
    this.profile = azure.createBlobService(connectString);
  }

  public async createContainerIfNotExists(container: string): Promise<{
    created: boolean;
    etag: string; // example: "0x8D6E8B19****537E"
    hasImmutabilityPolicy: boolean;
    hasLegalHold: boolean;
    lastModified: string; // example: "Tue, 04 Jun 2019 05:58:07 GMT"
    lease: { status: string, state: string }; // example: { status: "unlocked", state: "available" }
    name: string;  // container name​
    publicAccessLevel: null | "blob" | "container";
    requestId: string // example: "abdc****-801e-003c-4a9a-1****1000000"
  }> {
    return this.helperMethodFactory("createContainerIfNotExists", container);
  }

  public deleteContainerIfExists(container: string): Promise<boolean> {
    return this.helperMethodFactory("deleteContainerIfExists", container);
  }

  public createBlockBlobFromText(container: string, blob: string, text: string) {
    return this.helperMethodFactory("createBlockBlobFromText", container, blob, text);
  }

  public getBlobToText(container: string, blob: string) {
    return this.helperMethodFactory("getBlobToText", container, blob);
  }

  public deleteBlobIfExists(container: string, blob: string) {
    return this.helperMethodFactory("deleteBlobIfExists", container, blob);
  }

  public doesBlobExist(container: string, blob: string): Promise<{
    container: string,
    exists: boolean,
    name: string
  }> {
    return this.helperMethodFactory("doesBlobExist", container, blob);
  }

  private helperMethodFactory(methodName: string, ...argList: string[]): Promise<any> {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.profile[methodName](...argList, (err, res) => {
        if (!err) {
          // @ts-ignore
          console.log(methodName);
          console.log(res);
          resolve(res);
        } else {
          reject(err);
        }
      });
    });
  }

  // public undeleteBlob(container: string, blob: string) {
  //   return AZ.helperMethodFactory(this.profile.undeleteBlob, container, blob);
  // }
}
