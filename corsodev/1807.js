let firstName = "Mario";
let surname = "Rossi";
let matricola = "9582";
let year = "5";
let isFuoriCorso = false;
let student = firstName + " " + surname;

if (!isFuoriCorso && Number(year) <= 5) {
  console.log("lo studente " + matricola + " è fuori corso");
} else {
  console.log(student + " deve studiare di più");
}
