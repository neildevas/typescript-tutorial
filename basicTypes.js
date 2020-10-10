/* Two ways to declare an array */
var numberList = [1, 2, 3, 4, 5];
var stringList = ['Bob', 'Jane', 'Mary'];
// Examples
var numberOrStringArray = [1, 'Bob'];
var multiTypeArray = [true, '1', 'Jane'];
/* Enums */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var firstColor = Color.Red;
console.log(firstColor);
// Can set explicit values
var StringColor;
(function (StringColor) {
    StringColor["Red"] = "red";
    StringColor["Blue"] = "blue";
    StringColor["Green"] = "green";
})(StringColor || (StringColor = {}));
var secondColor = StringColor.Red;
console.log(secondColor);
