var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function printFirstName(person) {
    console.log(person.firstName);
}
var person = { firstName: 'Jane', lastName: 'Doe' };
printFirstName(person); // Works, because it has at least the requirements listed by the function
printFirstName({ firstName: 'Bob', lastName: 'builder' }); // Doesn't work. Object literals undergo MORE typechecking. Any extra properties are considered invalid
var newPerson = { firstName: 'Bob', lastName: 'builder' };
printFirstName(newPerson); // however, this works
var point = { x: 1, y: 2 };
point.x = 3; // Doesnt work
// Readonly arrays throw errors if you try to mutate the array
var x = [1, 2, 3, 4];
x.push(5); // Doesnt work
x = __spreadArrays(x, [5]);
x = x.concat(6);
var search = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
mySearch = function (src, sub) { return search(src, sub); };
// Define the type inline
var searchForString = function (src, sub) {
    return search(src, sub);
};
console.log(searchForString('Water bottle', 'bottle'));
var SoftwareEngineer = /** @class */ (function () {
    function SoftwareEngineer(id, department, supervisorId) {
        this.id = id;
        this.department = department;
        this.supervisorId = supervisorId;
    }
    return SoftwareEngineer;
}());
var engineer = new SoftwareEngineer(1, 'Machine learning', 49);
console.log('Supervisor id', engineer.supervisorId); // Invalid since it is private
console.log('Employee id', engineer.id);
