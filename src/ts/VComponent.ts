export class VComponent {
  mdc: any = null;
  dom: any = null;
  ripple: any = null;
  dataid = "data-wbid";

  mergeAttributes(defaultData: any, data: any, optMergeString?: string) {
    if (typeof data === "string") {
      const obj = {
        ...defaultData
      };
      obj[optMergeString ? optMergeString : "name"] = data;
      return obj;
    }
    return {
      ...defaultData,
      ...data
    };
  }
}
