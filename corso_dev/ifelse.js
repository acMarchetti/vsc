let name;
let surname = 'Rossi';
if(name && surname){
    let fullname = name + " " + surname
    console.log(fullname)
} else console.log("fullname is invalid");

let pin = 7777;
if (999 < pin  && pin <= 10000){
    console.log("Pin is valid");
} else {
    console.log("Pin is not valid");
}

let primitive = null;
if (typeof primitive === "string"){
    console.log("this variable is a string");
} else if (typeof primitive === "number"){
    console.log("this variable is a number");
} else if (typeof primitive === "boolean"){
    console.log("this variable is a boolean");
} else {
    console.log ("this variable is wild man");
}
