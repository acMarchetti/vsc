/*let spesa = [
  { prodotto: "pane", quantità: "2 filoni" },
  { prodotto: "latte", quantità: "1 litro" },
  { prodotto: "marmellata", quantità: "1 vasetto" },
  { prodotto: "biscotti", quantità: "3 scatole" },
];

console.log(spesa[3 - 1]);

console.log(spesa.length);

for (let i = 0; i < spesa.length; i++) {
  console.log(spesa[i].prodotto);
}
for (let i = 0; i < spesa.length; i++) {
  console.log("compra " + spesa[i].quantità + " di " + spesa[i].prodotto);
}

Stampare in console il primo valore
Stampare la lunghezza dell'array
Stampare in console l'ultimo valore
Spiegare il risultato se proviamo a stampare l'elemento dell'array con indice venti
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[numbers.length - 1]);
console.log(numbers[20]);
Abbiamo bisogno di scrivere un array che chiameremo students. Questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age
Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente.

Indicazioni utili:

Dentro il nostro array, avremo tre oggetti, ogni oggetto conterrà le info di uno studente
Dobbiamo stampare solamente il primo elemento dell'array
const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
const spesa = ["pane", "pizza", "mozzarella"];
spesa.pop();
spesa.push("pomodori");
spesa.shift();
spesa.unshift("alici");
console.log(spesa);
console.log(spesa.join(", "));
spesa.forEach(function (item, index) {
  console.log(item);
});
spesa.forEach((item, index) => {
  console.log(item);
});
const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
names.pop();
console.log(names);
names.push("Pippo");
console.log(names);
names.unshift("Giovanni");
console.log(names);
const names = ["Luca", "Marco", "Vittorio", "Giovanni"];
console.log(names.join("-"));*/
const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];
students.pop();
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);
