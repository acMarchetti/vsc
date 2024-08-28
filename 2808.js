let students = [
  { name: "Alice", age: 20, grades: [85, 92, 88] },
  { name: "Bob", age: 22, grades: [70, 80, 75] },
  { name: "Charlie", age: 23, grades: [95, 90, 93] },
  { name: "David", age: 21, grades: [60, 65, 70] },
  { name: "Eve", age: 20, grades: [78, 82, 85] },
];
/*let newStudents = [];
students.forEach((studente) => {
  //  newStudents.push({ name: studente.name, age: studente.age });
  newStudents.push({ ...studente, grades: undefined });
});
console.log(newStudents);*/
let newStudents = students.map((studente) => ({
  ...studente,
  grades: undefined,
}));

console.log(newStudents);

const mediaEta =
  newStudents.reduce((acc, studente) => acc + studente.age, 0) /
  newStudents.length;

console.log(mediaEta);
const [primoStudente] = students;
const { name: nome } = primoStudente;
console.log(nome);
