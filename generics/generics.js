/* Generics */
// Generics allow you to create reusable components that will work with any type
// Specifying is better than any because you will be able to know for certain the return type
// Use a type variable, a variable that works with Types rather than values
function identity(arg) {
    return arg;
}
console.log(identity('hi'));
console.log(identity(1)); // Compiler infers T
// You must treat the generic variable as if it could be ANY AND ALL types
function doInvalidStuff(arg) {
    var length = arg.length;
    var result = arg * 3;
    var mapped = arg.map(function (it) { return it * 9; });
    var keys = Object.value(arg);
}
var backpack = {
    items: ['Gloves', 'hat', 'scarf'],
    addItem: function (item) { this.items.push(item); },
    getItem: function () {
        var item = this.items.pop();
        console.log('Retrieved', item);
        return item;
    }
};
backpack.addItem('Stove');
backpack.getItem();
