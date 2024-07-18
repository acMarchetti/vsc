let tariffa = "HB";

switch(tariffa){
    case "BB":
        console.log("la tariffa è 50€");
        break;
    case "HB":
        console.log("la tariffa è 80€");
        break;
    case "FB":
        console.log("la tariffa è 100€");
        break;
    default:
        console.log("questa tariffa non esiste");
}

let favouriteFood = "pizza"

switch(favouriteFood){
    case "pizza":{
        console.log("You like PIZZA!");
        break};
    case "coconut":
        console.log("You like COCONUT!");
        break;
    default:
        console.log("You like something else!");
}