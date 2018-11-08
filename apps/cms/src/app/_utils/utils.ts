export class Utils {
  public static jsonTryParse(value: string) {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      if (value === 'undefined') {
        return undefined;
      }

      return value;
    }
  }

  public static jsonStringify(value: any, isFormatted: boolean = false) {
    if (isFormatted) {
      return JSON.stringify(value, null, 2);
    }
    return JSON.stringify(value);
  }
}