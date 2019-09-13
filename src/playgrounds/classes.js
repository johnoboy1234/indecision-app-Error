class Person{
    constructor(name = 'anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    greeting(){
        return `Hi, I am ${this.name} and i am ${this.age} years old.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old and `
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    greeting(){
        let greeting = super.greeting();
        if(this.homeLocation){
            return greeting += ` I came to visit from ${this.homeLocation}`;
        }else{
            return greeting;
        }
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.major){
            description += `is majors in ${this.major}`;
        }
        return description;
    }
}
const newMe = new Traveller('Bobby', 30, 'NLC');
console.log(newMe.greeting());
const me = new Student('John', 21, 'IPT');
const other = new Person('Stella');
console.log(me);
console.log(me.getDescription(), other.getDescription());