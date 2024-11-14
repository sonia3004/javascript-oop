class Person {
  #name = "";
  #type = "Person";

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }

  direBonjour() {
    return `Bonjour, je m'appelle ${this.#name}`;
  }

  toJSON() {
    return {
      name: this.#name,
      type: this.#type,
    };
  }

  fromJSON(data) {
    this.#name = data.name;
  }
}

class Professor extends Person {
  #teaches = "";

  constructor(name, subject) {
    super(name, "Professor");
    this.#teaches = subject;
  }

  direBonjour() {
    return super.direBonjour() + " et j'enseigne " + this.#teaches;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      teaches: this.#teaches,
    };
  }

  fromJSON(data) {
    super.fromJSON(data);
    this.#teaches = data.teaches;
  }
}

class Student extends Person {
  #year = "";

  constructor(name, year) {
    super(name, "Student");
    this.#year = year;
  }

  direBonjour() {
    return super.direBonjour() + " et je suis en année " + this.#year;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      year: this.#year,
    };
  }

  fromJSON(data) {
    super.fromJSON(data);
    this.#year = data.year;
  }
}
