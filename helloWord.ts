interface Person {
    firstName: string;
    lastName: string;
    age: number,
}

class Student implements Person{
    fullName: string;
    school: string = 'McGill University'; // Default value while explicitely declaring type
    constructor(public firstName: string, public middleInitial: string, public lastName: string, public age: number) {
        this.fullName = `${firstName} ${middleInitial}. ${lastName}`;
    }
}

class StudentWithDefaultMajor extends Student {
    fullName: string;
    major = 'Computer Science'; // Default value while not explicitely declaring type
    constructor(firstName: string, lastName: string, middleInitial: string, age: number) {
        super(firstName, middleInitial, lastName, age);
    }
}

class StudentWithCustomMajor extends Student {
    fullName: string;
    major = 'None specified';
    constructor(public firstName: string, public lastName: string, public middleInitial: string, public age: number, major: string) {
        super(firstName, middleInitial, lastName, age);
        this.major = major;
    }
}

let user = new Student('Jane', 'M.', 'User', 22);
let compSciStudent = new StudentWithDefaultMajor('Neil', 'Devas', 'J.', 22);
let artsStudent = new StudentWithCustomMajor('John', 'Doe', null, 22, 'Arts' );
function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}. You are ${person.age} years old`;
}

function normalStudentGreeter(student: Student) {
    return `${greeter(student)}. You go to ${student.school}`;
}

function studentGreeterWithMajor(student: StudentWithDefaultMajor) {
    return `${normalStudentGreeter(student)}. You are a ${student.major} major`;
}


console.log(greeter(user));
console.log(normalStudentGreeter(user));
console.log(studentGreeterWithMajor(compSciStudent));
console.log(studentGreeterWithMajor(artsStudent));