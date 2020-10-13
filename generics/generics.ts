/* Generics */
// Generics allow you to create reusable components that will work with any type
// Specifying is better than any because you will be able to know for certain the return type
// Use a type type, a parameter that works with Types rather than variables

function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>('hi'));
console.log(identity(1)); // Compiler infers T


// You must treat the generic variable as if it could be ANY AND ALL types
function doInvalidStuff<T>(arg: T): T {
  const length = arg.length;
  const result = arg * 3;
  const mapped = arg.map(it => it * 9);
  const keys = Object.value(arg);
}

/* Generic types */

interface Backpack<T> {
  items: Array<T>,
  addItem: (item: T) => void;
  getItem: () => T;
}

interface Something {
  addItem: <T>(item: T) => Array<T>;
  getNumberOfItems: () => number;
}

const backpack: Backpack<string> = {
  items: ['Gloves', 'hat', 'scarf'],
  addItem: function (item) { this.items.push(item) },
  getItem: function() {
    const item = this.items.pop();
    console.log('Retrieved', item);
    return item
  }
};

backpack.addItem('Stove');
backpack.getItem();

// Generic interface
interface GenericLengthFunction<T> { // Makes the type parameter visible to all members of the interface
  (items: Array<T>): number; // Generic function signature
}

// Generic function interface
interface GenericIdentityFunction {
  <U>(arg: U): U; // Type parameter is only visible to the function
}

const getLength: GenericLengthFunction<string> = (items) => {
  return items.length;
};
console.log(getLength(['foo', 'bar', 'baz']));

/* Generic Classes */

class GroceryBag<T> {
  private items: T[] = [];
  constructor(initialItem?: T) {
    if (initialItem) {
      this.items = [initialItem];
    }
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(): T {
    return this.items.shift();
  }
}

interface ProduceItem {
  type: 'fruit' | 'vegetable';
  name: string;
  amount: number;
}

interface MeatItem {
  type: string;
  weight: number;
}

const apples: ProduceItem = {
  type: "fruit",
  name: 'apples',
  amount: 5,
};

const fruitBag = new GroceryBag<ProduceItem>();
fruitBag.addItem(apples);

const meatBag = new GroceryBag({ type: 'chicken', weight: 5 }); // Inferred typing
meatBag.addItem(apples); // invalid
const beef: MeatItem = { type: 'beef', weight: 2 };
meatBag.addItem(beef);


/* Generic constraints */
// Instead of having a generic that accepts any and all types, we can put a constraint on what properties the generic must have

interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(it: T) {
  return it.length;
}

console.log(printLength('A random string value'));
console.log(printLength([1, 2, 3, 10]));
console.log({ value: 3, length: 9 });

/* Constraining type parameters */
// You can constrain one type parameter based on another type parameter

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { firstName: 'Neil', lastName: 'Devas' };
getValue(user, 'fullName'); // Invalid
getValue(user, 'firstName');