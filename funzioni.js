/*function sum(a, b, callback) {
  callback(a + b);
}
let cb = function (result) {
  console.log("the result is: " + result);
};

sum(5, 7, cb);

let cb = function () {
  console.log("hi!");
};
setTimeout(cb, 3000);

Scrivere due funzioni, la prima funzione si chiamerà sayHelloName, questa prenderà come parametro una callback che sarà la nostra seconda funzione di nome printName. 
La nostra funzione printName dovrà semplicemente fare un console.log() del nostro nome (ricordiamoci che sarà la funzione di callback). La funzione sayHelloName, prende come 
parametro una callback, e dovrà prima fare un console.log() della stringa 'Hello' e dopo chiamare la funzione che prende come parametro.

Indicazioni utili:

Il risultato finale sarà "Hello" "Nome", stampato sul vostro terminale */
function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 2500);
}
function printName() {
  console.log("Cosma");
}
sayHelloName(printName);
