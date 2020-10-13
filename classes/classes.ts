/* OOP with typescript */

class Animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  public move(distance: number) {
    console.log(`${this.name} moved ${distance} meters`);
  }
  getName() {
    return this.name
  }
}

class Dog extends Animal {
  private readonly greeting: string;
  constructor(name, greeting) {
    super(name); // In TypeScript, must call the super constructor
    this.greeting = greeting;
  }
  move(distance: number) { // overrides the move method from the base class
    console.log(`${this.name} is on the move! She is moving ${distance} meters`);
  }
  speak() {
    console.log(this.greeting);
  }
  getName(): string {
    console.log('Fetching name...');
    return super.getName();
  }
}

const maggie = new Dog('Maggie', 'Woof');
maggie.move(5);
maggie.speak();
console.log(maggie.getName());


/* Typescript private system */
// Usually types are considered compatible if they share the same shape
// But if two classes both have different implementations of a private or protected member, the types are not compatible
// Private members cannot be accessed outside the class, not even in subclasses

// Example of compatible types
// These two are compatible since there are no separate private members

class AnimalBasic {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class EmployeeBasic {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let employee = new EmployeeBasic('Neil');
let dog = new Animal('Dog');
employee = dog;

// Example of incompatible types
// Types are incompatible because they both have separate declarations of private members

class PrivateAnimalBasic {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class PrivateEmployeeBasic {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let newEmployee = new PrivateEmployeeBasic('Joe');
let newAnimal = new PrivateAnimalBasic('Cat');
newEmployee = newAnimal; // Incompatible since both have separate declarations of 'name' property

/* Protected */
// protected members can be access from subclasses but not from outside
// Constructors can also be protected, meaning that subclasses can call them, but new objects cannot be created from the base class

class Person {
  protected name: string;
  constructor(name) {
    this.name = name;
  }
}

class Employee extends Person {
  printGreeting() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Car {
  private readonly type: string;
  protected constructor(type) {
    this.type = type;
  }
  printType() {
    console.log(`Car type:`, this.type);
  }
}

class Toyota extends Car {
  constructor() {
    super('Toyota');
  }
}

const janeDoe = new Employee('Jane Doe');
janeDoe.printGreeting();

const toyota = new Toyota();
const car = new Car(); // invalid
toyota.printType();

/* Parameter properties */
// Can declare instance variables through the constructor only
// Must be prefixed with an accessibility modifier in order to be a parameter property
// Otherwise it just looks like a variable
// The constructor can be empty, or it can even have more functionality and it will still work the same

class Octopus {
  private color: string;
  constructor(private readonly name: string, readonly numberOfLegs: number) {
    this.color = 'red';
  }
  printName() {
    console.log('Octopus with the name: ', this.name);
  }
}

const octopus = new Octopus('Bob', 8);
octopus.printName();
console.log(octopus.numberOfLegs);

/* Getters & setters */

class Book {
  constructor(private _title: string) {}
  get title(): string {
    console.log('GETTING TITLE');
    return this._title;
  }
  set title(newTitle: string) {
    if (!newTitle) {
      throw new Error('Invalid title')
    }
    console.log('Setting new title');
    this._title = newTitle;
  }
}

const book = new Book('Harry Potter');
console.log(book.title);
book.title = 'Jane Eyre'; // throws custom error

/* Static properties */
// Available before an instance is generated

class Macbook {
  static companyName = 'Apple';
  constructor(private readonly model: string){};

  static printCreator() {
    console.log('Steve Jobs')
  }

  printSpecs() {
    console.log(Macbook.companyName, this.model);
  }
}

Macbook.printCreator();
const macbookAir = new Macbook('MacBook Air');
macbookAir.printSpecs();

/* Abstract classes */
// Sort of similar to interfaces, but abstract classes can provide some implementation details
// Cannot instantiate abstract classes

abstract class Department {
  abstract printMeetingType(): void;
  protected constructor(private readonly deptName: string) {}
  public endDay() {
    console.log('Everyone go home');
  }
}

class TechnologyDepartment extends Department {
  constructor() {
    super('Technology');
  }

  printMeetingType(): void {
    console.log('Technology meeting! We meet every day at 1pm');
  }

  startCoding() {
    console.log('Getting to work on our web app right away!');
  }
}

const techDept = new TechnologyDepartment();
techDept.printMeetingType();
techDept.startCoding();

/* Using classes as interfaces */
// Classes create two things: constructor functions and types
// We can use a class like how we'd use an interface

class Point {
  constructor(readonly x: number, readonly y: number) {
  }
}

class Point3d extends Point {
  constructor(x, y, readonly z) {
    super(x, y);
  }
}

const point: Point = { x: 1, y: 2};
const anotherPoint = new Point(1, 2);
const point3d: Point3d = { x: 1, y: 2, z: 3 };
const another3DPoint = new Point3d(1, 2, 3);