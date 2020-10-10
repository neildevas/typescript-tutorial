type StringArray = Array<string>

const stringArray: StringArray = ['hello', 'world'];

interface Backpack<SomeType> {
  add: (item: SomeType) => void;
  get: () => SomeType
}

const backpack: Backpack<string> = {
  add: (item: string) => { console.log('Added item: ', item) },
  get: () => 'You got an item!',
};

const numberBackpack: Backpack<number> = {
  add: (item: number) => { console.log('You added the number item: ', item) },
  get: () => 1,
};

backpack.add('Shoes');
console.log(backpack.get());

numberBackpack.add(1);
console.log(numberBackpack.get());