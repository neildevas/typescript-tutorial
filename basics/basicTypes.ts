/* Two ways to declare an array */
const numberList: number[] = [1, 2, 3, 4, 5];
const stringList: Array<string> = ['Bob', 'Jane', 'Mary'];

// Examples
const numberOrStringArray: (number | string)[] = [1, 'Bob'];
const multiTypeArray: Array<number | string | boolean> = [true, '1', 'Jane'];

/* Enums */
enum Color {
  Red,
  Blue,
  Green,
}
const firstColor = Color.Red;
console.log(firstColor); // 0

// Can set explicit values
enum StringColor {
  Red = 'red',
  Blue = 'blue',
  Green = 'green'
}
const secondColor = StringColor.Red;
console.log(secondColor); // red


/* Unknowns and Any */
// Use unknown when you're not sure of the type of the variable
// Both unknown and any allows you to narrow down the type by doing explicit type checking in your code

let notSure: unknown = 4;
if (typeof notSure === "boolean") {
  const aBoolean: boolean = notSure;
  const aNumber: number = notSure; // Throws error. Because of the explicit typecheck in the code, we've narrowed it down
}
if (typeof notSure === 'boolean' || typeof notSure === 'number') {
  const anotherBoolean: boolean = notSure; // Doesnt work, because notSure may be a boolean
  const anotherNumber: number = notSure; // Doesnt work, because notSure may be a number
  const aNumberOrBoolean: boolean | number = notSure; // Works
}

let someRandomObject: unknown = { someProperty: 4 };
console.log(someRandomObject.someProperty); // Throws error. Cannot access arbitrary properties.

/* Any */
// Sort of similar to unknown, but this time there is NO TYPECHECKING INVOLVED
let looselyTyped: any = 4;
if (typeof looselyTyped === 'boolean') {
  const foo: number = looselyTyped; // doesnt work
}
let anObject: any = {};
const d = anObject.a.b.c.d; // Works. Allowed to access arbitrary properties

/* Type assertions */
let foo: unknown = 'some random string';
console.log((foo as string).length);
console.log((<string>foo).length);

let unknownArray: unknown = [1, 2, 3, 4, 5];
console.log((unknownArray as number[]).filter(it => it % 2 === 0));
console.log((<Array<number>>unknownArray).filter(it => it % 2 === 0));