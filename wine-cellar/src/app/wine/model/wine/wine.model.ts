// {
//   _id: 11,
//   name: 'BODEGA LURTON',
//   year: 2011,
//   grapes: 'Pinot Gris',
//   country: 'Argentina',
//   region: 'Mendoza',
//   description:
//     'Solid notes of black currant blended with a light citrus make this wine an easy pour for varied palates.',
//   picture: 'bodega_lurton.jpg',
// }

export class Wine {
  _id: number;
  name: string;
  year: number;
  grapes: string;
  country: string;
  region: string;
  description: string;
  picture: string;

  //Example 1:
  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.year = obj && obj.year || null;
    this.grapes = obj && obj.grapes || null;
    this.country = obj && obj.country || null;
    this.region = obj && obj.region || null;
    this.description = obj && obj.description || null;
    this.picture = obj && obj.picture || null;
  }

  //Example 2:
  // constructor(public _id: number, public name: string, public year: number, public grapes: string, public country: string, public region: string, public description: string, public picture: string) {}
}
