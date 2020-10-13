interface Point {
  x: number;
  y: number;
}

function printPoint(point: Point) {
  console.log('X:', point.x);
  console.log('Y:', point.y);
}

const p1 = { x: 5, y: 6 };
printPoint(p1);

const threeDimensionalPoint = { x: 5, y: 6, z: 8 };
printPoint(threeDimensionalPoint);

type GroceryBag = {
  food: string;
  weight: number;
}

function printGroceryBag(groceryBag: GroceryBag) {
  console.log('Got food: ', groceryBag.food);
  console.log('Weight: ', groceryBag.weight);
}

const firstGroceryBag = { food: 'Cookies', weight: 1 };
printGroceryBag(firstGroceryBag);

const secondGroceryBag = { food: 'Bananas' };
printGroceryBag(secondGroceryBag); // Property 'weight' is missing in type

