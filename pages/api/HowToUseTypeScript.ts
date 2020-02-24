import _ from "lodash";
import { watchFile } from "fs";

export default async (req, res) => {
  console.log(_.camelCase("Hello TYPESCRIPT!"));
  res.status(200).end("hi");
};

//FUN TYPESCRIPT STUFF

// here's a number
let number = 23;
// typscript telling me I can't do this.
// number = "test"

// typescript not so helpful if i do this
let number2: any = 24; // no type-checking
// i'm allowed to do this because of the :any keyword
number2 = "hi";

// explicity set type before decloration
let number3: number;
number3 = 25;

// create your own 'type'
type Style1 = string; // create custom type, kind of redundant in this case
type Style = "bold" | "italic"; // this is a UNION TYPE, value can only be one of these two
let font: Style = "bold"; // font variable to Style type can ONLY be 'bold' or 'italic'
// font = 'not-bold' // WONT WORK

// strong type objects with INTERFACES
interface PersonType {
  first: string;
  last: string;
  slow: boolean;
  [key: string]: any; // This allows for ANY other properties to be added!!!!!!!!!!!!
}
const person1: PersonType = {
  first: "jesse",
  last: "skelton",
  slow: true
};
const person2: PersonType = {
  first: "chen",
  last: "Liang",
  slow: false, // if you don't include this, it'll break cuz it's required.
  happy: true // this is allowed because of the [key] in the Interface
};

// strong type functions
function pow(x: number, y: number): string {
  // returns a string
  return Math.pow(x, y).toString();
}
pow(1, 2);

// strong type functions
function pow2(x: number, y: number): void {
  // void for no return
  console.log(Math.pow(x, y).toString());
}
pow2(1, 2);

//strong type arrays
const arr: number[] = [];
arr.push(1);
// arr.push('2'); wont work
// arr.push(true); wont work

// array of PERSON object's only
const personArray: PersonType[] = []; // useful for database retrievals, get many people from the DB and they should all look like the PERSON interface defined above.
personArray.push(person1);

// TUPLES, same as other languages
type MyList = [number?, string?, boolean?]; // ? => OPTIONAL
const myTuple: MyList = [];
myTuple.push(true);
myTuple.push("true");
myTuple.push(1);
// myTuple.push(person1); // wont work because this is not an accepted TYPE.

// Generics > stet the type LATER, replaces the "<T>"
class Observable<T> {
  constructor(public value: T) {}
}
let x: Observable<number>;
let y: Observable<PersonType>;
let z = new Observable(23); // Will IMPLICITLY be number TYPE, cool!
