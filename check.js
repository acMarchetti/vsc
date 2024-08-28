let toDoList = [
  { task: "Buy groceries", priority: "High" },
  { task: "Clean the house", priority: "Medium" },
  { task: "Pay bills", priority: "High" },
  { task: "Walk the dog", priority: "Low" },
  { task: "Call mom", priority: "Medium" },
];
/*
console.log(toDoList[2]);
toDoList.forEach(function (item) {
  console.log(item);
});
toDoList.push({ task: "whatever", priority: "Low" });
console.log(toDoList[toDoList.length - 1]);*/

function highPriority() {
  let i = 0;
  toDoList.forEach(function (item) {
    if (item.priority == "High") {
      i++;
    }
  });
  console.log(i);
}
highPriority();
