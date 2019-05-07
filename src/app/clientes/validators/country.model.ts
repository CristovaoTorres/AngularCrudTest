
export class Country {
  iso: string;
  name: string;
  code: string;

  constructor(iso: string, name: string) {
    this.iso = iso;
    this.name = name;

        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo: https://goo.gl/3yAFiV
  }
}