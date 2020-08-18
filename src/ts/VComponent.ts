export class VComponent {
  mdc: any = null;
  dom: any = null;
  ripple: any = null;
  dataid = "data-wbid";

  mergeAttributes(defaultData: any, data: any) {
    if (typeof data === "string") {
      return {
        ...defaultData,
        name: data
      };
    }
    return {
      ...defaultData,
      ...data
    };
  }
}
