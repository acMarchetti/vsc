const list = ["pane", "pane", "latte", "marmellata"];
/*console.log(list[list.length - 1]);
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
console.log(list.join("-"));
let newLength = list.push("pomodori", "alici");
console.log(newLength === list.length);
list.pop();
console.log(list);*/
for (let i = 0; i < list.length; i++) {
  if (list[i] == "pane") {
    console.log("compra il latte, è in offerta");
  }
}
console.log(list.find((element) => element === "pane"));
