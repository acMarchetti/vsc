function Smartphone(brand, name, price) {
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
iphone.myPriceIs();
