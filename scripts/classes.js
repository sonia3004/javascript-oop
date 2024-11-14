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
