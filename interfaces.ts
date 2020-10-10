interface Person {
  firstName: string;
}

type StrictPerson = {
  firstName: string;
  lastName: string;
}

function printFirstName(person: Person) {
  console.log(person.firstName);
}

const person: StrictPerson = { firstName: 'Jane', lastName: 'Doe' };
printFirstName(person); // Works, because it has at least the requirements listed by the function
printFirstName({ firstName: 'Bob', lastName: 'builder' }); // Doesn't work. Object literals undergo MORE typechecking. Any extra properties are considered invalid
const newPerson = { firstName: 'Bob', lastName: 'builder' };
printFirstName(newPerson); // however, this works


/* Readonly */
interface Point {
  readonly x: number;
  readonly y: number;
}
const point: Point = { x: 1, y: 2 };
point.x = 3; // Doesnt work

// Readonly arrays throw errors if you try to mutate the array
let x: ReadonlyArray<number> = [1, 2, 3, 4];
x.push(5); // Doesnt work
x = [...x, 5];
x = x.concat(6);


/* Function types */
// Different ways of declaring the function

interface SearchFunction {
  (source: string, substring: string): boolean;
}

let search: SearchFunction = function (source, substring) {
  let result = source.search(substring);
  return result > -1;
};
let mySearch: SearchFunction;
mySearch = (src, sub) => {
  let result = src.search(sub);
  return result > -1;
};
mySearch = (src, sub) => search(src, sub);


// Define the type inline
const searchForString: (src: string, sub: string) => boolean = (src: string, sub: string) => {
  return search(src, sub);
};

console.log(searchForString('Water bottle', 'bottle'));

/* Indexable Types */
interface InvalidUser {
  [userIndex: string]: string;
  id: number; // not valid, because the value of the property does not match the index return value
  firstName: string; // valid
}

/* Class types */
// The properties in an interface that is implemented by a class are the public variables of the class
interface Employee {
  id: number;
  department: string;
}

class SoftwareEngineer implements Employee {
  public id: number;
  public department: string;
  private supervisorId: number;
  constructor(id, department, supervisorId) {
    this.id = id;
    this.department = department;
    this.supervisorId = supervisorId;
  }
}

const engineer = new SoftwareEngineer(1, 'Machine learning', 49);
console.log('Supervisor id', engineer.supervisorId); // Invalid since supervisorId is private
console.log('Employee id', engineer.id);