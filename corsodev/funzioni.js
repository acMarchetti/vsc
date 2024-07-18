/*function somma (a, b) {
    return a+b
};

let result = somma(7,5)

console.log(result)*/

/*function sayHello(name) {
    console.log("Hello, " + name +"!");
};

sayHello("Mario");*/

/*function tryHard(a) {
    if (a>7) {
        return (a*7/10);
    } else {
        return (a+2);
    };
};
let result =tryHard(6);

console.log(result);*/

/*function printName(){
    console.log("Cosma");
};

printName()*/

/*Scrivi una funzione di nome sayHelloName che prende come parametro una stringa. Questa funzione deve restituire la concatenazione di due stringhe, per capirci, il risultato finale
dovrà essere: 'Hello John'. In questo caso, John è la stringa che passiamo come parametro alla funzione (cioè il nostro nome).

Indicazioni utili:

La funzione dovrà prendere come parametro una stringa
Il parametro in ingresso sarà il nostro nome
La funzione restituisce 'Hello' seguito dal nostro nome
Abbiamo la possibilità in JavaScript di concatenare le stringhe (es. str1 + str2)
Il risultato finale dovrà essere il tuo 'Hello nome' stampato sul terminale*/

function sayHelloName(name) {
  return "Hello " + name;
}
let result = sayHelloName("Gino");
console.log(result);
