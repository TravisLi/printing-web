export class CommonFunction {

    public static compareFunction(o1: any, o2: any): boolean {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
      }

}