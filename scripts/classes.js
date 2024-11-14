class Person {
  name = "";

  constructor(name) {
    this.name = name;
  }

  direBonjour() {
    return `Bonjour, je m'appelle ${this.name}`;
  }
}

class Professor extends Person {
  teaches = "";

  constructor(name, subject) {
    super(name);
    this.teaches = subject;
  }

  direBonjour() {
    return super.direBonjour() + " et j'enseigne " + this.teaches;
  }
}

class Student extends Person {
  year = "";

  constructor(name, year) {
    super(name);
    this.year = year;
  }

  direBonjour() {
    return super.direBonjour() + " et je suis en année " + this.year;
  }
}
