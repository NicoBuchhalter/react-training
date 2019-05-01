class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi! I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} ${this.age === 1 ? 'year' : 'years'} old.`
  }
}

class Student extends Person{
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major in ${this.major}`
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let gretting = super.getGreeting();
    if(this.hasHomeLocation()){
      gretting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return gretting;

  }
}

const me = new Traveler('Nicolás Buchhalter', 26);

const other = new Traveler('Victoria', 25, 'Almagro');

console.log(me.getGreeting());

console.log(other.getGreeting());