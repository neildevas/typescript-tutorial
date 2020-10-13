/* OOP with typescript */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + " meters");
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, greeting) {
        var _this = _super.call(this, name) || this;
        _this.greeting = greeting;
        return _this;
    }
    Dog.prototype.move = function (distance) {
        console.log(this.name + " is on the move! She is moving " + distance + " meters");
    };
    Dog.prototype.speak = function () {
        console.log(this.greeting);
    };
    Dog.prototype.getName = function () {
        console.log('Fetching name...');
        return _super.prototype.getName.call(this);
    };
    return Dog;
}(Animal));
var maggie = new Dog('Maggie', 'Woof');
maggie.move(5);
maggie.speak();
console.log(maggie.getName());
/* Typescript private system */
// Usually types are considered compatible if they share the same shape
// But if two classes both have different implementations of a private or protected member, the types are not compatible
// Private members cannot be accessed outside the class, not even in subclasses
// Example of compatible types
// These two are compatible since there are no separate private members
var AnimalBasic = /** @class */ (function () {
    function AnimalBasic(name) {
        this.name = name;
    }
    return AnimalBasic;
}());
var EmployeeBasic = /** @class */ (function () {
    function EmployeeBasic(name) {
        this.name = name;
    }
    return EmployeeBasic;
}());
var employee = new EmployeeBasic('Neil');
var dog = new Animal('Dog');
employee = dog;
// Example of incompatible types
// Types are incompatible because they both have separate declarations of private members
var PrivateAnimalBasic = /** @class */ (function () {
    function PrivateAnimalBasic(name) {
        this.name = name;
    }
    return PrivateAnimalBasic;
}());
var PrivateEmployeeBasic = /** @class */ (function () {
    function PrivateEmployeeBasic(name) {
        this.name = name;
    }
    return PrivateEmployeeBasic;
}());
var newEmployee = new PrivateEmployeeBasic('Joe');
var newAnimal = new PrivateAnimalBasic('Cat');
newEmployee = newAnimal; // Incompatible since both have separate declarations of 'name' property
/* Protected */
// protected members can be access from subclasses but not from outside
// Constructors can also be protected, meaning that subclasses can call them, but new objects cannot be created from the base class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.printGreeting = function () {
        console.log("Hello, I'm " + this.name);
    };
    return Employee;
}(Person));
var Car = /** @class */ (function () {
    function Car(type) {
        this.type = type;
    }
    Car.prototype.printType = function () {
        console.log("Car type:", this.type);
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super.call(this, 'Toyota') || this;
    }
    return Toyota;
}(Car));
var janeDoe = new Employee('Jane Doe');
janeDoe.printGreeting();
var toyota = new Toyota();
var car = new Car(); // invalid
toyota.printType();
/* Parameter properties */
// Can declare instance variables through the constructor only
// Must be prefixed with an accessibility modifier in order to be a parameter property
// Otherwise it just looks like a variable
// The constructor can be empty, or it can even have more functionality and it will still work the same
var Octopus = /** @class */ (function () {
    function Octopus(name, numberOfLegs) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
        this.color = 'red';
    }
    Octopus.prototype.printName = function () {
        console.log('Octopus with the name: ', this.name);
    };
    return Octopus;
}());
var octopus = new Octopus('Bob', 8);
octopus.printName();
console.log(octopus.numberOfLegs);
/* Getters & setters */
var Book = /** @class */ (function () {
    function Book(_title) {
        this._title = _title;
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            console.log('GETTING TITLE');
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw new Error('Invalid title');
            }
            console.log('Setting new title');
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
var book = new Book('Harry Potter');
console.log(book.title);
book.title = 'Jane Eyre'; // throws custom error
/* Static properties */
// Available before an instance is generated
var Macbook = /** @class */ (function () {
    function Macbook(model) {
        this.model = model;
    }
    ;
    Macbook.printCreator = function () {
        console.log('Steve Jobs');
    };
    Macbook.prototype.printSpecs = function () {
        console.log(Macbook.companyName, this.model);
    };
    Macbook.companyName = 'Apple';
    return Macbook;
}());
Macbook.printCreator();
var macbookAir = new Macbook('MacBook Air');
macbookAir.printSpecs();
/* Abstract classes */
// Sort of similar to interfaces, but abstract classes can provide some implementation details
// Cannot instantiate abstract classes
var Department = /** @class */ (function () {
    function Department(deptName) {
        this.deptName = deptName;
    }
    Department.prototype.endDay = function () {
        console.log('Everyone go home');
    };
    return Department;
}());
var TechnologyDepartment = /** @class */ (function (_super) {
    __extends(TechnologyDepartment, _super);
    function TechnologyDepartment() {
        return _super.call(this, 'Technology') || this;
    }
    TechnologyDepartment.prototype.printMeetingType = function () {
        console.log('Technology meeting! We meet every day at 1pm');
    };
    TechnologyDepartment.prototype.startCoding = function () {
        console.log('Getting to work on our web app right away!');
    };
    return TechnologyDepartment;
}(Department));
var techDept = new TechnologyDepartment();
techDept.printMeetingType();
techDept.startCoding();
