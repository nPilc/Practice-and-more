// {
//   _id: 1,
//   name: 'Veljko-Debeljko',
//   category: 1,
//   breed: 'Evropska kratkodlaka macka',
//   age: '8',
//   imageUrl: 'assets/img/veljko-debeljko.jpg',
//   dateOfCreation: '2017-07-03T06:33:30.722Z',
//   hobbies: [
//     'Grickanje kutija',
//     'Gledanje kroz prozor',
//     'Suncanje stomaka',
//     'Sedenje iza kreveta',
//     'Gledanje snimaka sa pticama na youtube-u',
//     'Boks, slobodni sparing sa Lazom-mazom',
//   ],
//   gender: 'f',
// }

export class Pet {
  _id: number;
  name: string;
  category: number;
  breed: string;
  age: number;
  imageUrl: string;
  dateOfCreation: string;
  hobbies: string[];
  gender: string;

  constructor (obj?: any) {
    this._id = obj && obj._id || null;
    this.name = obj && obj.name || null;
    this.category = obj && obj.category || null;
    this.breed = obj && obj.breed || null;
    this.age = obj && obj.age || null;
    this.imageUrl = obj && obj.imageUrl || null;
    this.dateOfCreation = obj && obj.dateOfCreation || null;
    this.hobbies = obj && obj.hobbies || [];
    this.gender = obj && obj.gender || null;
  }
}
