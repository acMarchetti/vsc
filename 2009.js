// https://api.sampleapis.com/recipes/recipes
let i = 0;
const bottone = document.getElementsByTagName("button")[0];
bottone.addEventListener("click", function () {
  getResult();
});
const h1 = document.querySelector("h1");
const img = document.querySelector("img");

async function getResult() {
  try {
    const response = await fetch("https://api.sampleapis.com/recipes/recipes");
    const data = await response.json();
    h1.innerText = data[i].title;
    img.setAttribute("src", data[i].photoUrl);
    sessionStorage.setItem("recipes", JSON.stringify(data[i]));
    i++;
  } catch (error) {
    console.log(error);
  }
}
const ricetta = JSON.parse(sessionStorage.getItem("recipes"));
if (ricetta) {
  h1.innerText = ricetta.title;
  img.setAttribute("src", ricetta.photoUrl);
}
