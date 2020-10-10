var stringArray = ['hello', 'world'];
var backpack = {
    add: function (item) { console.log('Added item: ', item); },
    get: function () { return 'You got an item!'; }
};
var numberBackpack = {
    add: function (item) { console.log('You added the number item: ', item); },
    get: function () { return 1; }
};
backpack.add('Shoes');
console.log(backpack.get());
numberBackpack.add(1);
console.log(numberBackpack.get());
