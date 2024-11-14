class Person {
  name = "";

  constructor(name) {
    this.name = name;
  }

  direBonjour() {
    return `Bonjour, je m'appelle ${this.name}`;
  }
}
