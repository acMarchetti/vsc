/*let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = Object.assign({}, user);

newUser.name = "Paolo";

console.log(newUser);
console.log(user);
let person = {
  age: 42,
  name: "jimmy",
  sayHello: function (a) {
    console.log(a + " pika pika");
  },
};
let personCopy = {};
for (let key in person) {
  personCopy[key] = person[key];
}
personCopy.name = "Mario";
console.log(personCopy, person, person === personCopy);

console.log(person.age);
console.log(person["nam" + "e"]);
person.sayHello("mario");
let age = person.age + 15;
console.log(age);
person.favouriteColour = "Blue";
console.log(person.favouriteColour);

const car = {
  name: "fiat panda",
  color: "red",
};
console.log(car.name);
console.log(car.color);

for (let key in car) {
  console.log(key);
}
for (let key in car) {
  console.log(car[key]);
}

if ("age" in car) {
  console.log(car.age);
} else {
  console.log("age of car unknown");
}
let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};
for (let key in user) {
  newUser[key] = user[key];
}

newUser.name = "Paolo";

console.log(newUser);
console.log(user);*/
const smartphone = {
  brand: "Apple",
  name: "Iphone 13",
  price: 1300,
};
Object.freeze(smartphone);
smartphone.price = 100;

console.log(smartphone);
