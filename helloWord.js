var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.school = 'McGill University'; // Default value while explicitely declaring type
        this.fullName = firstName + " " + middleInitial + ". " + lastName;
    }
    return Student;
}());
var StudentWithDefaultMajor = /** @class */ (function (_super) {
    __extends(StudentWithDefaultMajor, _super);
    function StudentWithDefaultMajor(firstName, lastName, middleInitial, age) {
        var _this = _super.call(this, firstName, middleInitial, lastName, age) || this;
        _this.major = 'Computer Science'; // Default value while not explicitely declaring type
        return _this;
    }
    return StudentWithDefaultMajor;
}(Student));
var StudentWithCustomMajor = /** @class */ (function (_super) {
    __extends(StudentWithCustomMajor, _super);
    function StudentWithCustomMajor(firstName, lastName, middleInitial, age, major) {
        var _this = _super.call(this, firstName, middleInitial, lastName, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.middleInitial = middleInitial;
        _this.age = age;
        _this.major = 'None specified';
        _this.major = major;
        return _this;
    }
    return StudentWithCustomMajor;
}(Student));
var user = new Student('Jane', 'M.', 'User', 22);
var compSciStudent = new StudentWithDefaultMajor('Neil', 'Devas', 'J.', 22);
var artsStudent = new StudentWithCustomMajor('John', 'Doe', null, 22, 'Arts');
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + ". You are " + person.age + " years old";
}
function normalStudentGreeter(student) {
    return greeter(student) + ". You go to " + student.school;
}
function studentGreeterWithMajor(student) {
    return normalStudentGreeter(student) + ". You are a " + student.major + " major";
}
console.log(greeter(user));
console.log(normalStudentGreeter(user));
console.log(studentGreeterWithMajor(compSciStudent));
console.log(studentGreeterWithMajor(artsStudent));
