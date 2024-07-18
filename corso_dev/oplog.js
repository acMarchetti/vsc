console.log("testing" == "testing" || "Mario" == "Cool Guy");
console.log("testing" == "testing" && "Mario" == "Cool Guy");
console.log(NaN);

const isSunnyDay = true;
const isAutumn = false;
const itIsRaining = false;
const isSummer = true;

//true
console.log(isSunnyDay && isSummer);
console.log(itIsRaining || isSunnyDay);
console.log(!isAutumn);

//false
console.log(isAutumn && itIsRaining);
console.log(isAutumn || !isSummer);
console.log(!!itIsRaining);