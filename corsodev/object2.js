/*function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
  this.priceUp = function () {
    this.price += (this.price * 1) / 10;
  };
  this.myPriceIs = function () {
    console.log("This Smartphone costs " + this.price);
  };
}
let iphone = new Smartphone("apple", "Iphone15", 1000);

let galaxy = new Smartphone("Samsung", "Galaxy", 575);

iphone.myPriceIs();
iphone.priceUp();
iphone.myPriceIs();
iphone.priceUp();
iphone.myPriceIs();*/
/*let person = {
  name: "Jimmy",
  age: 22,
};
console.log(person.address?.city ?? "address not found");
const student = {
  id: 1,
  school: "Liceo",
  year: 3,
  personalData: {
    name: "Mario",
    surname: "Rossi",
    age: 17,
  },
};
console.log(student.personalData);
const object = {
  a: 1,
  b: 2,
  c: 3,
};
for (const property in object) {
  console.log(property + ":" + object[property]);
}
const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
console.log(power(5, 2));*/
function factorial(number1) {
  let result = 1;
  for (let i = 1; i <= number1; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));
