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

class Course {
  #title = "";
  #persons = [];

  constructor(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  get persons() {
    return this.#persons;
  }

  get students() {
    return this.#persons.filter((person) => person instanceof Student);
  }

  get professor() {
    return this.#persons.find((person) => person instanceof Professor);
  }

  set professor(prof) {
    if (!prof instanceof Professor) {
      throw "Seuls les professeurs sont autorisés à enseigner dans cette classe";
    }

    const profIndex = this.#persons.findIndex(
      (person) => person instanceof Professor
    );

    if (profIndex !== -1) {
      this.#persons[prodIndex] = prof;
    } else {
      this.#persons.push(prof);
    }
  }

  addStudent(student) {
    if (!student instanceof Student) {
      throw "Seuls les étudiants sont autorisés à étudier dans cette classe";
    }

    if (this.#persons.includes(student)) {
      throw "Cet étudiant est déjà inscrit à ce cours";
    }

    this.#persons.push(student);
  }

  removeStudent(student) {
    const studentIndex = this.#persons.indexOf(student);

    if (studentIndex === -1) {
      throw "Cet étudiant n'est pas inscrit à ce cours";
    }

    this.#persons.splice(studentIndex, 1);
  }

  getStudentByName(name) {
    return this.#persons.find((s) => s.name === name);
  }

  removeStudentByName(name) {
    const student = this.getStudentByName(name);

    this.removeStudent(student);
  }

  clearStudents() {
    while (this.#persons.length > 0) {
      this.#persons.pop();
    }
  }

  fromJSON(data) {
    this.#title = data.title;

    this.#persons = data.persons.map((jsonPerson) => {
      if (jsonPerson.type === "Professor") {
        const professor = new Professor("");

        professor.fromJSON(jsonPerson);
        return professor;
      }

      const student = new Student("");

      student.fromJSON(jsonPerson);
      return student;
    });
  }

  toJSON() {
    return {
      title: this.#title,
      persons: this.#persons.map((person) => person.toJSON()),
    };
  }
}
