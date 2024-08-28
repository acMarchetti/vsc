/*const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);

const originalArray = [1, 2, 3, 4, 5];
const cloneArray = [...originalArray];
console.log(cloneArray);

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

let youngest = students[0];
let longestSurname = students[0];

function checkAge(student) {
  if (youngest.age > student.age) youngest = student;
}
function checkSurname(student) {
  if (longestSurname.surname.length < student.surname.length)
    longestSurname = student;
}

function surfArray() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
    switch (students[i].hobby) {
      case "gamer":
        console.log("Life Is a Game, Play to Win!");
        break;
      case "sportsman":
        console.log("Never give up!");
        break;
      case "photographer":
        console.log("A picture is worth a thousand words!");
        break;
      default:
        console.error("Unknown hobby");
    }
    checkAge(students[i]);
    checkSurname(students[i]);
  }
  console.log("Il più giovane è", youngest.name);
  console.log("Il cognome più lungo è", longestSurname.surname);
}

surfArray();
const cars = [
  {
    brand: "Ferrari",
    model: "F40",
    year: 1987,
  },
  {
    brand: "Lamborghini",
    model: "Aventador",
    year: 2011,
  },
  {
    brand: "Bugatti",
    model: "Chiron",
    year: 2016,
  },
];
function brandModel() {
  const newCars = [];
  for (let i = 0; i < cars.length; i++) {
    let car = `"${cars[i].brand} ${cars[i].model}"`;
    if (cars[i].year > 1999) newCars.push(car);
  }
  return newCars;
}
console.log(brandModel());*/
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];
studenti.forEach((studente) => {
  console.log(studente.nome);
});
const studenteModello = studenti.find((studente) => studente.voto > 90);
console.log(studenteModello.nome);
let mediaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
mediaVoti = mediaVoti / studenti.length;
console.log(mediaVoti);
const studentiMaiuscolo = studenti.map((studente) =>
  studente.nome.toUpperCase()
);
console.log(studentiMaiuscolo);
const studentiModello = studenti.filter((studente) => studente.voto > 85);
console.log(studentiModello);
